"""
Application configuration using pydantic-settings.

Environment variables are loaded from .env file or system environment.
"""

from functools import lru_cache
from typing import Literal

from pydantic import Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Application settings with validation."""

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    # API Keys
    anthropic_api_key: str = Field(
        default="",
        description="Anthropic API key for Claude models",
    )
    tavily_api_key: str = Field(
        default="",
        description="Tavily API key for internet search",
    )
    transparencia_api_key: str = Field(
        default="",
        description="Portal da Transparência API key",
    )

    # Server Configuration
    host: str = Field(default="0.0.0.0", description="Server host")
    port: int = Field(default=8000, ge=1, le=65535, description="Server port")
    debug: bool = Field(default=False, description="Enable debug mode")

    # CORS Configuration
    cors_origins: list[str] = Field(
        default=["http://localhost:3000"],
        description="Allowed CORS origins",
    )

    # Agent Configuration
    agent_model: str = Field(
        default="claude-haiku-4-5",
        description="Model to use for the agent",
    )
    default_thread_id: str = Field(
        default="default",
        description="Default thread ID for conversations",
    )

    # Logging Configuration
    log_level: Literal["DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"] = Field(
        default="INFO",
        description="Logging level",
    )

    @field_validator("cors_origins", mode="before")
    @classmethod
    def parse_cors_origins(cls, v: str | list[str]) -> list[str]:
        """Parse CORS origins from comma-separated string or list."""
        if isinstance(v, str):
            return [origin.strip() for origin in v.split(",") if origin.strip()]
        return v

    @property
    def has_anthropic_key(self) -> bool:
        """Check if Anthropic API key is configured."""
        return bool(self.anthropic_api_key)

    @property
    def has_tavily_key(self) -> bool:
        """Check if Tavily API key is configured."""
        return bool(self.tavily_api_key)

    @property
    def has_transparencia_key(self) -> bool:
        """Check if Portal da Transparência API key is configured."""
        return bool(self.transparencia_api_key)


@lru_cache
def get_settings() -> Settings:
    """
    Get cached application settings.

    Uses lru_cache to ensure settings are only loaded once.
    """
    return Settings()
