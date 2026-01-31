"use client";

import ChatContainer from "@/components/chat/chat-container";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Brazilian Color Stripe */}
      <div className="gov-header-stripe h-1 w-full flex-shrink-0" />

      {/* Minimal Header */}
      <header className="border-b border-border/50 bg-background">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <h1 className="text-lg font-semibold text-foreground">
            Portal da Transparência
          </h1>
          <p className="text-sm text-muted-foreground">
            Assistente de consulta a dados públicos
          </p>
        </div>
      </header>

      {/* Chat */}
      <ChatContainer />
    </div>
  );
}
