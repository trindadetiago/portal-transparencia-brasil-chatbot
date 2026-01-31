"""
Custom exception hierarchy for the application.

Provides structured error handling with proper HTTP status code mapping.
"""

from typing import Any


class BaseAppError(Exception):
    """Base exception for all application errors."""

    def __init__(
        self,
        message: str,
        status_code: int = 500,
        details: dict[str, Any] | None = None,
    ) -> None:
        super().__init__(message)
        self.message = message
        self.status_code = status_code
        self.details = details or {}

    def to_dict(self) -> dict[str, Any]:
        """Convert exception to dictionary for JSON response."""
        return {
            "error": self.__class__.__name__,
            "message": self.message,
            "details": self.details,
        }


class ConfigurationError(BaseAppError):
    """Raised when there's a configuration issue."""

    def __init__(
        self,
        message: str = "Configuration error",
        details: dict[str, Any] | None = None,
    ) -> None:
        super().__init__(message, status_code=500, details=details)


class AgentError(BaseAppError):
    """Raised when there's an error with the agent."""

    def __init__(
        self,
        message: str = "Agent error",
        status_code: int = 500,
        details: dict[str, Any] | None = None,
    ) -> None:
        super().__init__(message, status_code=status_code, details=details)


class AgentNotInitializedError(AgentError):
    """Raised when the agent hasn't been initialized."""

    def __init__(self, details: dict[str, Any] | None = None) -> None:
        super().__init__(
            message="Agent has not been initialized",
            status_code=503,
            details=details,
        )


class AgentStreamError(AgentError):
    """Raised when there's an error during streaming."""

    def __init__(
        self,
        message: str = "Error during agent streaming",
        details: dict[str, Any] | None = None,
    ) -> None:
        super().__init__(message, status_code=500, details=details)


class ToolError(BaseAppError):
    """Raised when a tool execution fails."""

    def __init__(
        self,
        tool_name: str,
        message: str = "Tool execution failed",
        details: dict[str, Any] | None = None,
    ) -> None:
        details = details or {}
        details["tool_name"] = tool_name
        super().__init__(message, status_code=500, details=details)


class ValidationError(BaseAppError):
    """Raised when request validation fails."""

    def __init__(
        self,
        message: str = "Validation error",
        details: dict[str, Any] | None = None,
    ) -> None:
        super().__init__(message, status_code=400, details=details)


class EmptyMessageError(ValidationError):
    """Raised when an empty message is received."""

    def __init__(self) -> None:
        super().__init__(
            message="No message provided",
            details={"field": "messages"},
        )


class MissingAPIKeyError(ConfigurationError):
    """Raised when a required API key is missing."""

    def __init__(self, key_name: str) -> None:
        super().__init__(
            message=f"{key_name} not set in environment variables",
            details={"missing_key": key_name},
        )
