import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DynamicToolUIPart, ToolUIPart } from "ai";
import { cn } from "@/lib/utils";
import {
  Wrench,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Database,
  Search,
  FileText,
  Globe,
  Calculator,
} from "lucide-react";

// Map tool names to icons
function getToolIcon(toolName: string) {
  const name = toolName.toLowerCase();
  if (name.includes("search") || name.includes("busca")) return Search;
  if (name.includes("database") || name.includes("dados")) return Database;
  if (name.includes("file") || name.includes("arquivo")) return FileText;
  if (name.includes("web") || name.includes("internet")) return Globe;
  if (name.includes("calc") || name.includes("math")) return Calculator;
  return Wrench;
}

// Map tool names to Portuguese labels
function getToolLabel(toolName: string): string {
  const name = toolName.toLowerCase();
  if (name.includes("search")) return "Pesquisa";
  if (name.includes("database")) return "Banco de Dados";
  if (name.includes("web")) return "Consulta Web";
  if (name.includes("file")) return "Leitura de Arquivo";
  return toolName;
}

// Get state information in Portuguese
function getStateInfo(state: string) {
  switch (state) {
    case "input-streaming":
      return {
        icon: Wrench,
        label: "Preparando",
        color: "text-muted-foreground",
        bgColor: "bg-muted",
      };
    case "input-available":
      return {
        icon: Loader2,
        label: "Executando",
        color: "text-primary",
        bgColor: "bg-primary/10",
      };
    case "output-available":
      return {
        icon: CheckCircle2,
        label: "Concluído",
        color: "text-green-600 dark:text-green-400",
        bgColor: "bg-green-500/10",
      };
    case "output-error":
      return {
        icon: AlertCircle,
        label: "Erro",
        color: "text-red-600 dark:text-red-400",
        bgColor: "bg-red-500/10",
      };
    default:
      return {
        icon: Wrench,
        label: "Processando",
        color: "text-muted-foreground",
        bgColor: "bg-muted",
      };
  }
}

// Safely render unknown values
function renderValue(value: unknown): React.ReactNode {
  if (typeof value === "string") {
    return value;
  }
  return JSON.stringify(value, null, 2);
}

export default function ChatTool({
  toolMessagePart,
  className,
}: {
  toolMessagePart: ToolUIPart | DynamicToolUIPart;
  className?: string;
}) {
  const toolName =
    toolMessagePart.type === "dynamic-tool"
      ? toolMessagePart.toolName
      : toolMessagePart.type.replace("tool-", "");

  const stateInfo = getStateInfo(toolMessagePart.state);
  const StateIcon = stateInfo.icon;
  const ToolIcon = getToolIcon(toolName);

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem
        value="tool"
        className={cn(
          "rounded-md border border-border/40 bg-muted/20 overflow-hidden",
          className
        )}
      >
        <AccordionTrigger className="px-2.5 py-1.5 hover:no-underline hover:bg-muted/30 transition-colors [&[data-state=open]]:border-b">
          <div className="flex items-center gap-2 w-full">
            {/* Tool Icon */}
            <div className={cn(
              "flex items-center justify-center w-5 h-5 rounded",
              stateInfo.bgColor
            )}>
              <ToolIcon className={cn("w-3 h-3", stateInfo.color)} />
            </div>

            {/* Tool Info */}
            <div className="flex-1 text-left min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-medium text-muted-foreground">
                  {getToolLabel(toolName)}
                </span>
                <span className={cn(
                  "inline-flex items-center gap-0.5 text-[10px] px-1 py-0.5 rounded",
                  stateInfo.bgColor,
                  stateInfo.color
                )}>
                  <StateIcon
                    className={cn(
                      "w-2.5 h-2.5",
                      toolMessagePart.state === "input-available" && "animate-spin"
                    )}
                  />
                  {stateInfo.label}
                </span>
              </div>
            </div>
          </div>
        </AccordionTrigger>

        <AccordionContent className="p-0">
          <div className="flex flex-col gap-2 p-2 bg-muted/20 text-xs">
            {/* Error Section */}
            {toolMessagePart.state === "output-error" && toolMessagePart.errorText && (
              <div className="rounded border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/50 p-2">
                <p className="text-[10px] font-semibold text-red-700 dark:text-red-300 mb-1">
                  Erro
                </p>
                <pre className="text-[10px] text-red-600 dark:text-red-400 whitespace-pre-wrap overflow-x-auto">
                  {toolMessagePart.errorText}
                </pre>
              </div>
            )}

            {/* Input Section */}
            {"input" in toolMessagePart &&
            toolMessagePart.input !== undefined &&
            toolMessagePart.input !== null ? (
              <div className="rounded border border-border/50 bg-background/50 p-2">
                <p className="text-[10px] font-semibold text-muted-foreground mb-1">
                  Parâmetros
                </p>
                <pre className="text-[10px] font-mono bg-muted/30 rounded px-1.5 py-1 overflow-x-auto whitespace-pre-wrap">
                  {renderValue(toolMessagePart.input)}
                </pre>
              </div>
            ) : (
              <div className="text-[10px] text-muted-foreground/60 italic px-1">
                Sem parâmetros
              </div>
            )}

            {/* Output Section */}
            {toolMessagePart.state === "output-available" &&
              "output" in toolMessagePart &&
              toolMessagePart.output !== undefined &&
              toolMessagePart.output !== null && (
                <div className="rounded border border-green-200/50 dark:border-green-900/50 bg-green-50/50 dark:bg-green-950/20 p-2">
                  <p className="text-[10px] font-semibold text-green-700 dark:text-green-300 mb-1">
                    Resultado
                  </p>
                  <pre className="text-[10px] font-mono bg-background/30 rounded px-1.5 py-1 overflow-x-auto whitespace-pre-wrap max-h-48 overflow-y-auto">
                    {renderValue(toolMessagePart.output)}
                  </pre>
                </div>
              )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
