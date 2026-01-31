"""
Internet search tool using Tavily API.

Provides web search capabilities for the agent.
"""

from typing import Any

from tavily import TavilyClient

from app.config import get_settings
from app.core.logging import get_logger

logger = get_logger(__name__)


def internet_search(query: str, max_results: int = 5) -> dict[str, Any] | str:
    """
    Search the internet using Tavily API.

    Args:
        query: The search query string.
        max_results: Maximum number of results to return (default: 5).

    Returns:
        A dictionary containing search results with titles and content,
        or an error message string if the search fails.
    """
    settings = get_settings()

    if not settings.has_tavily_key:
        logger.warning("Tavily API key not configured")
        return "Search unavailable: Tavily API key not configured"

    try:
        logger.info("Executing internet search: %s", query[:50])
        client = TavilyClient(api_key=settings.tavily_api_key)
        response = client.search(query, max_results=max_results)
        logger.info("Search completed successfully with %d results", len(response.get("results", [])))
        return response
    except Exception as e:
        error_msg = f"Search error: {str(e)}"
        logger.error(error_msg, exc_info=True)
        return error_msg


# Export for use with agent tools list
__all__ = ["internet_search"]
