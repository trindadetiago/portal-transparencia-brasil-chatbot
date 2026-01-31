"""
FastAPI dependency injection configuration.

Provides factory functions for service instantiation.
"""

from functools import lru_cache

from app.config import get_settings
from app.services.agent_service import AgentService
from app.services.stream_service import StreamService


def get_agent_service() -> AgentService:
    """
    Get the AgentService instance.

    Uses the singleton pattern to ensure only one agent exists.

    Returns:
        The AgentService singleton instance.
    """
    return AgentService()


@lru_cache
def get_stream_service() -> StreamService:
    """
    Get a cached StreamService instance.

    Returns:
        The StreamService instance.
    """
    return StreamService()


# Re-export get_settings for convenience
__all__ = ["get_settings", "get_agent_service", "get_stream_service"]
