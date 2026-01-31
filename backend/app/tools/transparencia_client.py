"""
Portal da Transparência API Client.

Base client for making authenticated requests to the Portal da Transparência API.
"""

from typing import Any

import httpx

from app.config import get_settings
from app.core.logging import get_logger

logger = get_logger(__name__)

BASE_URL = "https://api.portaldatransparencia.gov.br/api-de-dados"


def get_api_key() -> str:
    """Get the Portal da Transparência API key from settings."""
    settings = get_settings()
    key = getattr(settings, "transparencia_api_key", "") or ""
    if not key:
        import os
        key = os.environ.get("TRANSPARENCIA_API_KEY", "")
    return key


def make_request(
    endpoint: str,
    params: dict[str, Any] | None = None,
    timeout: float = 30.0,
) -> dict[str, Any] | list[Any] | str:
    """
    Make an authenticated request to the Portal da Transparência API.

    Args:
        endpoint: API endpoint path (without base URL)
        params: Query parameters
        timeout: Request timeout in seconds

    Returns:
        JSON response data or error message
    """
    api_key = get_api_key()
    if not api_key:
        return "Error: TRANSPARENCIA_API_KEY not configured. Register at https://portaldatransparencia.gov.br/api-de-dados/cadastrar-email"

    url = f"{BASE_URL}/{endpoint.lstrip('/')}"
    headers = {
        "chave-api-dados": api_key,
        "Accept": "application/json",
    }

    # Remove None values from params
    if params:
        params = {k: v for k, v in params.items() if v is not None}

    try:
        logger.info(f"Portal Transparência API request: {endpoint}")
        with httpx.Client(timeout=timeout) as client:
            response = client.get(url, headers=headers, params=params)
            response.raise_for_status()
            return response.json()
    except httpx.HTTPStatusError as e:
        error_msg = f"API error {e.response.status_code}: {e.response.text[:200]}"
        logger.error(error_msg)
        return error_msg
    except Exception as e:
        error_msg = f"Request error: {str(e)}"
        logger.error(error_msg)
        return error_msg
