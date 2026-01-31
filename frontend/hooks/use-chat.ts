/**
 * Chat hook for managing chat state and streaming.
 *
 * Extracts all chat logic from the page component into a reusable hook.
 */

import { useState, useRef, useCallback, useEffect } from "react";
import { apiClient } from "@/lib/api/client";
import { ApiError } from "@/lib/api/types";
import { config } from "@/lib/config";
import { useSSE } from "./use-sse";
import {
  ChatMessage,
  MessagePart,
  StreamEvent,
  ToolInvocationPart,
} from "@/types";

export interface UseChatOptions {
  threadId?: string;
  onError?: (error: Error) => void;
}

export interface UseChatReturn {
  messages: ChatMessage[];
  input: string;
  setInput: (value: string) => void;
  loading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleStop: () => void;
}

export function useChat(options: UseChatOptions = {}): UseChatReturn {
  const { threadId = config.defaultThreadId, onError } = options;

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const abortControllerRef = useRef<AbortController | null>(null);
  const { processStream } = useSSE();

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleStop = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
      setLoading(false);
    }
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInput(e.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const trimmedInput = input.trim();
      if (!trimmedInput || loading) return;

      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        role: "user",
        parts: [{ type: "text", text: trimmedInput }],
      };

      const assistantMessageId = (Date.now() + 1).toString();

      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setLoading(true);

      // Track parts in order they arrive
      const orderedParts: MessagePart[] = [];
      // Track tool calls by ID for updating with results
      const toolCallsById = new Map<string, number>(); // ID -> index in orderedParts

      // Add empty assistant message
      setMessages((prev) => [
        ...prev,
        { id: assistantMessageId, role: "assistant", parts: [] },
      ]);

      // Create abort controller
      abortControllerRef.current = new AbortController();

      const updateMessage = () => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessageId
              ? { ...msg, parts: [...orderedParts] }
              : msg
          )
        );
      };

      const processEvent = (event: StreamEvent): boolean => {
        switch (event.type) {
          case "reasoning":
            // Add reasoning as a new part in order
            orderedParts.push({ type: "reasoning", text: event.content });
            return true;

          case "tool":
            // Add tool call as a new part and track its index
            const toolPart: ToolInvocationPart = {
              type: "tool-invocation",
              toolInvocationId: event.id,
              toolName: event.name,
              state: "input-available",
              input: event.args,
            };
            toolCallsById.set(event.id, orderedParts.length);
            orderedParts.push(toolPart);
            return true;

          case "tool_result": {
            // Find and update the matching tool call
            let toolIndex = -1;

            // First try by ID
            if (event.id && toolCallsById.has(event.id)) {
              toolIndex = toolCallsById.get(event.id)!;
            } else {
              // Fallback: find by name (first one without output)
              for (const [, index] of toolCallsById) {
                const part = orderedParts[index] as ToolInvocationPart;
                if (part.toolName === event.name && part.state !== "output-available") {
                  toolIndex = index;
                  break;
                }
              }
            }

            if (toolIndex >= 0) {
              const existingPart = orderedParts[toolIndex] as ToolInvocationPart;
              orderedParts[toolIndex] = {
                ...existingPart,
                output: event.content,
                state: "output-available",
              };
            }
            return true;
          }

          case "content":
            // Check if this content is the same as the last content (duplicate) or new
            const lastPart = orderedParts[orderedParts.length - 1];
            if (lastPart?.type === "text") {
              // If the last part is text, update it (streaming updates)
              orderedParts[orderedParts.length - 1] = { type: "text", text: event.content };
            } else {
              // Otherwise add as new part (content after tool calls, etc.)
              orderedParts.push({ type: "text", text: event.content });
            }
            return true;

          case "error":
            // Mark any tools still spinning as errored
            for (const [, index] of toolCallsById) {
              const part = orderedParts[index] as ToolInvocationPart;
              if (part.state === "input-available") {
                orderedParts[index] = {
                  ...part,
                  state: "output-error",
                };
              }
            }
            // Add error as text
            orderedParts.push({ type: "text", text: `Error: ${event.content}` });
            return false;

          case "done":
            // Mark any tools still spinning as completed
            for (const [, index] of toolCallsById) {
              const part = orderedParts[index] as ToolInvocationPart;
              if (part.state === "input-available") {
                orderedParts[index] = {
                  ...part,
                  output: "(no output received)",
                  state: "output-available",
                };
              }
            }
            return false;

          default:
            return true;
        }
      };

      try {
        const requestBody = {
          messages: [...messages, userMessage].map((m) => ({
            role: m.role as "user" | "assistant" | "system",
            content:
              m.parts.find((p): p is { type: "text"; text: string } => p.type === "text")
                ?.text || "",
          })),
          thread_id: threadId,
        };

        const response = await apiClient.streamChat(
          requestBody,
          abortControllerRef.current.signal
        );

        const reader = response.body?.getReader();
        if (!reader) {
          throw new Error("No reader available");
        }

        for await (const event of processStream(reader)) {
          const shouldContinue = processEvent(event);
          updateMessage();

          if (!shouldContinue) break;
        }
      } catch (error) {
        if ((error as Error).name === "AbortError") {
          return;
        }

        console.error("Chat error:", error);

        const errorMessage =
          error instanceof ApiError
            ? error.message
            : "Sorry, I encountered an error. Please make sure:\n\n1. The backend is running on http://localhost:8000\n2. Your API keys are set in the backend/.env file\n3. Run `cd backend && python -m app.main` to start the server";

        // Remove empty assistant message and add error
        setMessages((prev) => {
          const filtered = prev.filter((msg) => msg.id !== assistantMessageId);
          return [
            ...filtered,
            {
              id: (Date.now() + 2).toString(),
              role: "assistant" as const,
              parts: [{ type: "text" as const, text: errorMessage }],
            },
          ];
        });

        onError?.(error instanceof Error ? error : new Error(String(error)));
      } finally {
        setLoading(false);
        abortControllerRef.current = null;
      }
    },
    [input, loading, messages, threadId, processStream, onError]
  );

  return {
    messages,
    input,
    setInput,
    loading,
    handleSubmit,
    handleInputChange,
    handleStop,
  };
}
