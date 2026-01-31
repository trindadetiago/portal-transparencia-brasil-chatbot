"use client";

import { Button } from "@/components/ui/button";
import { SendHorizonal, Square } from "lucide-react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  input?: string;
  className?: string;
  title?: string;
  placeholder?: string;
  loading?: boolean;
  stop?: () => void;
}

export default function ChatInput({
  title,
  placeholder = "Faça uma pergunta sobre dados públicos...",
  loading,
  handleSubmit,
  handleInputChange,
  input = "",
  className,
  stop,
}: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      e.currentTarget.form?.requestSubmit();
    }
  };

  const handleButtonClick = () => {
    if (loading && stop) {
      stop();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("w-full relative flex flex-col gap-4", className)}
    >
      {title && (
        <h2 className="text-4xl font-bold tracking-tight text-center">{title}</h2>
      )}

      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500" />

        <div className="relative gov-card rounded-2xl overflow-hidden">
          <Textarea
            name="prompt"
            value={input}
            onChange={handleInputChange}
            disabled={loading}
            autoComplete="off"
            placeholder={placeholder}
            className={cn(
              "w-full min-h-[60px] max-h-[200px] resize-none",
              "border-0 bg-transparent",
              "px-4 py-4 pr-14",
              "text-base placeholder:text-muted-foreground/50",
              "focus:outline-none focus:ring-0",
              "disabled:opacity-70 disabled:cursor-not-allowed"
            )}
            onKeyDown={handleKeyDown}
          />

          <Button
            type={loading ? "button" : "submit"}
            onClick={handleButtonClick}
            disabled={!stop && loading}
            size="icon"
            className={cn(
              "absolute bottom-3 right-3",
              "w-10 h-10 rounded-xl",
              "transition-all duration-200",
              loading
                ? "bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                : "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25",
              !input.trim() && !loading && "opacity-50 cursor-not-allowed"
            )}
          >
            {loading ? (
              <Square className="w-4 h-4" fill="currentColor" />
            ) : (
              <SendHorizonal className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
