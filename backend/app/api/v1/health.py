"""
Health check endpoints.

Provides system health and status information.
"""

from fastapi import APIRouter, Depends

from app.config import Settings, get_settings
from app.models.schemas import HealthResponse

router = APIRouter(tags=["health"])


@router.get(
    "/health",
    response_model=HealthResponse,
    summary="Health check",
    description="Check the health status of the API and its dependencies.",
)
async def health_check(
    settings: Settings = Depends(get_settings),
) -> HealthResponse:
    """
    Check the health status of the API.

    Returns information about the API status and whether
    required API keys are configured.
    """
    return HealthResponse(
        status="healthy",
        anthropic_key_set=settings.has_anthropic_key,
        tavily_key_set=settings.has_tavily_key,
    )
