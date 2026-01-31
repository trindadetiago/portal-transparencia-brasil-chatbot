"""
Pydantic models for request/response validation.

Provides type-safe models for all API endpoints.
"""

from typing import Annotated, Any, Literal

from pydantic import BaseModel, Field


# Request Models
class Message(BaseModel):
    """A single chat message."""

    role: Literal["user", "assistant", "system"]
    content: str


class ChatRequest(BaseModel):
    """Request body for chat endpoints."""

    messages: list[Message] = Field(..., min_length=1)
    thread_id: str = Field(default="default", min_length=1, max_length=100)


# Response Models
class ChatResponse(BaseModel):
    """Response for non-streaming chat endpoint."""

    message: str
    role: Literal["assistant"] = "assistant"


class HealthResponse(BaseModel):
    """Response for health check endpoint."""

    status: Literal["healthy", "degraded", "unhealthy"]
    anthropic_key_set: bool
    tavily_key_set: bool


# Stream Event Models (Discriminated Union)
class ContentEvent(BaseModel):
    """Text content from the agent."""

    type: Literal["content"] = "content"
    content: str


class ReasoningEvent(BaseModel):
    """Reasoning/thinking from the agent."""

    type: Literal["reasoning"] = "reasoning"
    content: str


class ToolCallEvent(BaseModel):
    """Tool invocation by the agent."""

    type: Literal["tool"] = "tool"
    name: str
    args: dict[str, Any]
    id: str


class ToolResultEvent(BaseModel):
    """Result from a tool execution."""

    type: Literal["tool_result"] = "tool_result"
    name: str
    content: str
    id: str | None = None  # Tool call ID for matching


class ErrorEvent(BaseModel):
    """Error event."""

    type: Literal["error"] = "error"
    content: str


class DoneEvent(BaseModel):
    """Stream completion signal."""

    type: Literal["done"] = "done"


# Discriminated union for all stream events
StreamEvent = Annotated[
    ContentEvent
    | ReasoningEvent
    | ToolCallEvent
    | ToolResultEvent
    | ErrorEvent
    | DoneEvent,
    Field(discriminator="type"),
]
