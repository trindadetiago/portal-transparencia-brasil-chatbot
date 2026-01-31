"""
Middleware configuration for the FastAPI application.

Includes CORS and error handling middleware.
"""


from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.config import Settings
from app.core.exceptions import BaseAppError
from app.core.logging import get_logger

logger = get_logger(__name__)


def setup_cors(app: FastAPI, settings: Settings) -> None:
    """
    Configure CORS middleware for the application.

    Args:
        app: The FastAPI application instance.
        settings: Application settings with CORS configuration.
    """
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )


async def error_handler(request: Request, exc: BaseAppError) -> JSONResponse:
    """
    Handle custom application errors.

    Args:
        request: The incoming request.
        exc: The raised exception.

    Returns:
        A JSON response with error details.
    """
    logger.error(
        "Application error: %s - %s",
        exc.__class__.__name__,
        exc.message,
        extra={"details": exc.details, "path": request.url.path},
    )
    return JSONResponse(
        status_code=exc.status_code,
        content=exc.to_dict(),
    )


async def generic_error_handler(request: Request, exc: Exception) -> JSONResponse:
    """
    Handle unexpected exceptions.

    Args:
        request: The incoming request.
        exc: The raised exception.

    Returns:
        A JSON response with error details.
    """
    logger.exception(
        "Unexpected error: %s",
        str(exc),
        extra={"path": request.url.path},
    )
    return JSONResponse(
        status_code=500,
        content={
            "error": "InternalServerError",
            "message": "An unexpected error occurred",
            "details": {},
        },
    )


def setup_exception_handlers(app: FastAPI) -> None:
    """
    Register exception handlers for the application.

    Args:
        app: The FastAPI application instance.
    """
    app.add_exception_handler(BaseAppError, error_handler)  # type: ignore[arg-type]
    app.add_exception_handler(Exception, generic_error_handler)  # type: ignore[arg-type]
