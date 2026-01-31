"""
FastAPI application entry point.

Configures and runs the Deep Agents Chat API.
"""

from dotenv import load_dotenv

# Load environment variables before anything else
load_dotenv()

from fastapi import FastAPI
from fastapi.responses import JSONResponse

from app import __version__
from app.api.router import api_router
from app.config import get_settings
from app.core.logging import setup_logging
from app.core.middleware import setup_cors, setup_exception_handlers

# Load settings and configure logging
settings = get_settings()
setup_logging(level=settings.log_level)


def create_app() -> FastAPI:
    """
    Create and configure the FastAPI application.

    Returns:
        The configured FastAPI application instance.
    """
    app = FastAPI(
        title="Deep Agents Chat API",
        description="Production-grade chat API powered by LangChain Deep Agents",
        version=__version__,
        docs_url="/docs",
        redoc_url="/redoc",
    )

    # Setup middleware
    setup_cors(app, settings)
    setup_exception_handlers(app)

    # Include API routes
    app.include_router(api_router, prefix="/api")

    # Root endpoint (backwards compatible)
    @app.get("/", tags=["root"])
    async def root() -> JSONResponse:
        """Root endpoint with API information."""
        return JSONResponse(
            content={
                "message": "Deep Agents Chat API is running",
                "version": __version__,
                "docs": "/docs",
            }
        )

    # Health endpoint at root level (backwards compatible)
    @app.get("/health", tags=["health"])
    async def health() -> JSONResponse:
        """Health check endpoint at root level."""
        return JSONResponse(
            content={
                "status": "healthy",
                "anthropic_key_set": settings.has_anthropic_key,
                "tavily_key_set": settings.has_tavily_key,
            }
        )

    return app


# Create the application instance
app = create_app()


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "app.main:app",
        host=settings.host,
        port=settings.port,
        reload=settings.debug,
    )
