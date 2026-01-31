"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy, FileCode } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight, a11yDark as oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cva } from "class-variance-authority";
import { useTheme } from "next-themes";

const customSyntaxTheme = {
  ...oneLight,
  'pre[class*="language-"]': {
    ...oneLight['pre[class*="language-"]'],
    background: "transparent",
    borderRadius: "0",
    fontFamily: "var(--font-geist-mono), monospace",
    textShadow: "none",
    padding: 0,
    margin: 0,
  },
  'code[class*="language-"]': {
    ...oneLight['code[class*="language-"]'],
    background: "none",
    fontFamily: "var(--font-geist-mono), monospace",
    textShadow: "none",
    fontSize: "13px",
    padding: 0,
  },
};

const customDarkSyntaxTheme = {
  ...oneDark,
  'pre[class*="language-"]': {
    ...oneDark['pre[class*="language-"]'],
    background: "transparent",
    borderRadius: "0",
    fontFamily: "var(--font-geist-mono), monospace",
    textShadow: "none",
    padding: 0,
    margin: 0,
  },
  'code[class*="language-"]': {
    ...oneDark['code[class*="language-"]'],
    background: "none",
    fontFamily: "var(--font-geist-mono), monospace",
    textShadow: "none",
    fontSize: "13px",
    padding: 0,
  },
};

const codeBlockVariants = cva("rounded-lg overflow-hidden", {
  variants: {
    variant: {
      flat: "bg-muted",
      default: "border border-border bg-card shadow-sm",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type CodeBlockProps = {
  code: string;
  language?: string;
  className?: string;
  title?: string;
  variant?: "default" | "flat";
} & Omit<React.HTMLProps<HTMLDivElement>, "children">;

export function CodeBlock({
  code,
  language = "tsx",
  className,
  title,
  variant = "default",
  ...props
}: CodeBlockProps) {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(String(code));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn(codeBlockVariants({ variant }), className)} {...props}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border">
        <div className="flex items-center gap-2">
          <FileCode className="w-4 h-4 text-muted-foreground" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {title || language}
          </span>
        </div>
        <Button
          onClick={handleCopy}
          variant="ghost"
          size="xs"
          className="h-7 px-2 text-muted-foreground hover:text-foreground"
          aria-label={copied ? "Copiado" : "Copiar código"}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-500" />
              <span className="text-xs">Copiado</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="text-xs">Copiar</span>
            </>
          )}
        </Button>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={theme === "dark" ? customDarkSyntaxTheme : customSyntaxTheme}
          PreTag="div"
          className="text-[13px] font-mono"
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
