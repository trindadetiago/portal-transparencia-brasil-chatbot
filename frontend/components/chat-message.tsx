"use client";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Markdown from "@/components/ui/markdown";
import React from "react";
import { ToolUIPart, UIMessage, UIMessagePart, UIDataTypes, UITools } from "ai";
import ChatTool from "@/components/chat/chat-tool";
import { User, Bot } from "lucide-react";

const userMessageVariants = cva("flex flex-col gap-2", {
  variants: {
    variant: {
      raised:
        "bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground shadow-lg shadow-primary/10 max-w-[85%] sm:max-w-md ml-auto rounded-2xl rounded-br-md px-4 py-3",
      title:
        "font-semibold tracking-tight text-3xl mt-4 border-b border-primary/30 pb-1",
      default: "bg-primary/10 max-w-md ml-auto rounded-2xl px-4 py-3",
    },
  },
});

const assistantMessageVariants = cva("flex flex-col gap-2", {
  variants: {
    variant: {
      raised: "w-full",
      paragraph: "",
      default: "bg-muted rounded-2xl px-4 py-3 mr-8",
    },
  },
});

interface ToolInvocationPart {
  type: "tool-invocation";
  toolInvocationId: string;
  toolName: string;
  state: string;
  input: Record<string, unknown>;
  output?: string;
}

type ExtendedMessagePart = UIMessagePart<UIDataTypes, UITools> | ToolInvocationPart;

function isToolInvocationPart(part: ExtendedMessagePart): part is ToolInvocationPart {
  return part.type === "tool-invocation";
}

function isTextPart(part: ExtendedMessagePart): part is { type: "text"; text: string } {
  return part.type === "text";
}

function isReasoningPart(part: ExtendedMessagePart): part is { type: "reasoning"; text: string } {
  return part.type === "reasoning";
}

function isToolPart(part: ExtendedMessagePart): boolean {
  return part.type.includes("tool");
}

// Render a single message part
const renderPart = (
  part: ExtendedMessagePart,
  key: string | number
): React.ReactNode => {
  // Tool invocation
  if (isToolInvocationPart(part)) {
    const toolPart = {
      type: `tool-${part.toolName}` as const,
      toolCallId: part.toolInvocationId,
      state: part.state,
      input: part.input,
      output: part.output,
    };
    return (
      <div key={key} className="my-1">
        <ChatTool toolMessagePart={toolPart as ToolUIPart} />
      </div>
    );
  }

  // Tool part
  if (isToolPart(part)) {
    return (
      <div key={key} className="my-1">
        <ChatTool toolMessagePart={part as ToolUIPart} />
      </div>
    );
  }

  // Text part
  if (isTextPart(part)) {
    return (
      <div key={key} className="gov-card rounded-xl px-4 py-3 my-2 prose prose-sm max-w-none dark:prose-invert">
        <Markdown>{part.text}</Markdown>
      </div>
    );
  }

  // Reasoning part (same as text but with different styling)
  if (isReasoningPart(part)) {
    return (
      <div key={key} className="gov-card rounded-xl px-4 py-3 my-2 bg-muted/30">
        <div className="text-sm text-muted-foreground">
          <Markdown>{part.text}</Markdown>
        </div>
      </div>
    );
  }

  return null;
};

interface ChatMessageProps {
  message: UIMessage;
  className?: string;
  userMessageVariant?: VariantProps<typeof userMessageVariants>["variant"];
  assistantMessageVariant?: VariantProps<typeof assistantMessageVariants>["variant"];
}

export default function ChatMessage({
  message,
  className,
  userMessageVariant = "default",
  assistantMessageVariant = "default",
}: ChatMessageProps) {
  if (message.role === "user") {
    const textContent = (message.parts as ExtendedMessagePart[])
      .filter(isTextPart)
      .map((part) => part.text)
      .join("");

    return (
      <div className={cn("flex items-start gap-3 justify-end", className)}>
        <div
          className={cn(userMessageVariants({ variant: userMessageVariant }))}
        >
          <p className="text-sm leading-relaxed">{textContent}</p>
        </div>
        <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <User className="w-4 h-4 text-primary" />
        </div>
      </div>
    );
  }

  // Assistant message
  const parts = message.parts as ExtendedMessagePart[];

  return (
    <div className={cn("flex items-start gap-3", className)}>
      <div className="shrink-0 w-8 h-8 rounded-lg bg-accent flex items-center justify-center mt-1">
        <Bot className="w-4 h-4 text-primary" />
      </div>

      <div
        className={cn(
          "flex flex-col flex-1 min-w-0",
          assistantMessageVariants({ variant: assistantMessageVariant })
        )}
      >
        {/* Render all parts in order */}
        {parts.map((part, index) => renderPart(part, `part-${index}`))}
      </div>
    </div>
  );
}
