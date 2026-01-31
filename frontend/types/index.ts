/**
 * Centralized type definitions for the Portal Transparencia frontend.
 */

// Tool invocation states
export type ToolState =
  | "input-streaming"
  | "input-available"
  | "output-available"
  | "output-error";

// Stream event types (discriminated union)
export interface ContentEvent {
  type: "content";
  content: string;
}

export interface ReasoningEvent {
  type: "reasoning";
  content: string;
}

export interface ToolCallEvent {
  type: "tool";
  name: string;
  args: Record<string, unknown>;
  id: string;
}

export interface ToolResultEvent {
  type: "tool_result";
  name: string;
  content: string;
  id?: string | null;  // Tool call ID for matching
}

export interface ErrorEvent {
  type: "error";
  content: string;
}

export interface DoneEvent {
  type: "done";
}

export type StreamEvent =
  | ContentEvent
  | ReasoningEvent
  | ToolCallEvent
  | ToolResultEvent
  | ErrorEvent
  | DoneEvent;

// Tool call state tracking
export interface ToolCallState {
  id: string;
  name: string;
  input: Record<string, unknown>;
  output?: string;
  state: ToolState;
}

// Message part types
export interface TextPart {
  type: "text";
  text: string;
}

export interface ReasoningPart {
  type: "reasoning";
  text: string;
}

export interface ToolInvocationPart {
  type: "tool-invocation";
  toolInvocationId: string;
  toolName: string;
  state: ToolState;
  input: Record<string, unknown>;
  output?: string;
}

export type MessagePart = TextPart | ReasoningPart | ToolInvocationPart;

// Chat message types
export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  parts: MessagePart[];
}

// API request/response types
export interface ChatRequestMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface ChatRequest {
  messages: ChatRequestMessage[];
  thread_id?: string;
}

export interface ChatResponse {
  message: string;
  role: "assistant";
}

export interface HealthResponse {
  status: "healthy" | "degraded" | "unhealthy";
  anthropic_key_set: boolean;
  tavily_key_set: boolean;
}
