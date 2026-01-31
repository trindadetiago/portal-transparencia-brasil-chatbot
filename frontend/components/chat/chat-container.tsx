"use client";

import { useRef, useEffect } from "react";
import { useChat } from "@/hooks/use-chat";
import ChatMessage from "@/components/chat-message";
import ChatInput from "@/components/chat-input";
import type { ChatMessage as ChatMessageType, MessagePart } from "@/types";
import type { UIMessage, UIMessagePart, UIDataTypes, UITools } from "ai";
import {
  Search,
  FileText,
  TrendingUp,
  Users,
  Sparkles,
} from "lucide-react";

interface ChatContainerProps {
  threadId?: string;
}

const exampleQueries = [
  {
    icon: Search,
    title: "Buscar Licitações",
    description: "Encontre processos licitatórios por órgão ou período",
    query: "Quais foram as maiores licitações do último mês?",
  },
  {
    icon: FileText,
    title: "Contratos Públicos",
    description: "Consulte contratos firmados com a administração",
    query: "Mostre os contratos mais recentes e seus valores",
  },
  {
    icon: TrendingUp,
    title: "Análise de Gastos",
    description: "Visualize despesas e receitas do governo",
    query: "Qual foi a evolução dos gastos públicos este ano?",
  },
  {
    icon: Users,
    title: "Dados de Servidores",
    description: "Informações sobre servidores públicos",
    query: "Quantos servidores públicos federais existem atualmente?",
  },
];

export default function ChatContainer({ threadId }: ChatContainerProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const {
    messages,
    input,
    loading,
    handleSubmit,
    handleInputChange,
    handleStop,
    setInput,
  } = useChat({ threadId });

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const convertPart = (part: MessagePart): UIMessagePart<UIDataTypes, UITools> => {
    if (part.type === "tool-invocation") {
      return {
        type: `tool-${part.toolName}`,
        toolCallId: part.toolInvocationId,
        state: part.state as "input-streaming" | "input-available" | "output-available" | "output-error",
        input: part.input,
        ...(part.output !== undefined && { output: part.output }),
      } as UIMessagePart<UIDataTypes, UITools>;
    }
    return part as UIMessagePart<UIDataTypes, UITools>;
  };

  const convertToUIMessage = (message: ChatMessageType): UIMessage => ({
    id: message.id,
    role: message.role,
    parts: message.parts.map(convertPart),
  });

  const handleExampleClick = (query: string) => {
    setInput(query);
  };

  return (
    <>
      <main className="flex-1 overflow-y-auto bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[60vh] py-8">
              {/* Welcome Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-3">
                  Olá! Como posso ajudar?
                </h2>
                <p className="text-muted-foreground max-w-lg mx-auto text-base">
                  Sou um assistente especializado em dados públicos. Posso
                  pesquisar licitações, contratos, despesas e muito mais.
                </p>
              </div>

              {/* Example Queries Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
                {exampleQueries.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => handleExampleClick(item.query)}
                    className="group gov-card p-4 rounded-xl text-left hover:border-primary/30 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-sm mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-muted-foreground/60 mt-8 text-center max-w-md">
                As informações são obtidas de fontes públicas oficiais.
                Verifique sempre os dados em portais governamentais.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-5 pb-4">
              {messages
                .filter((message) => message.parts.length > 0)
                .map((message) => (
                  <ChatMessage
                    key={message.id}
                    message={convertToUIMessage(message)}
                    userMessageVariant="raised"
                    assistantMessageVariant="raised"
                  />
                ))}

              {/* Loading State */}
              {loading && messages[messages.length - 1]?.parts.length === 0 && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                    <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                    <div className="h-2 w-2 rounded-full bg-primary animate-bounce" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Processando sua consulta...
                  </span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </main>

      {/* Input Footer */}
      <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <ChatInput
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            input={input}
            loading={loading}
            stop={handleStop}
            placeholder="Faça uma pergunta sobre dados públicos..."
          />
          <p className="text-xs text-center text-muted-foreground/50 mt-3">
            Pressione Enter para enviar ou Shift+Enter para nova linha
          </p>
        </div>
      </footer>
    </>
  );
}
