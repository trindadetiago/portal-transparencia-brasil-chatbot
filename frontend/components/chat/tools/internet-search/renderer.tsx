/**
 * Renderer for internet_search tool
 */

import { ExternalLink } from "lucide-react";
import type { InternetSearchInput, InternetSearchOutput, SearchResult } from "./types";

export function renderInternetSearchInput(input: InternetSearchInput) {
  if (!input?.query) {
    return (
      <div className="text-[10px] text-muted-foreground/60 italic">
        Sem query
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <div className="flex items-baseline gap-2">
        <span className="text-[10px] font-semibold text-muted-foreground">
          Query:
        </span>
        <span className="text-[11px] text-foreground">
          {input.query}
        </span>
      </div>
      {input.max_results && (
        <div className="flex items-baseline gap-2">
          <span className="text-[10px] font-semibold text-muted-foreground">
            Máximo de resultados:
          </span>
          <span className="text-[11px] text-foreground">
            {input.max_results}
          </span>
        </div>
      )}
    </div>
  );
}

export function renderInternetSearchOutput(output: string | InternetSearchOutput) {
  let parsedOutput: InternetSearchOutput;
  
  try {
    parsedOutput = typeof output === "string" ? JSON.parse(output) : output;
  } catch {
    return (
      <div className="text-[10px] text-muted-foreground/60 italic">
        Erro ao processar resultados
      </div>
    );
  }

  const results = parsedOutput?.results || [];

  if (!Array.isArray(results) || results.length === 0) {
    return (
      <div className="text-[10px] text-muted-foreground/60 italic">
        Nenhum resultado encontrado
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {results.map((result: SearchResult, index: number) => (
        <div
          key={`${result.url}-${index}`}
          className="rounded p-2 bg-background/50 border border-border/30 hover:border-border/50 transition-colors"
        >
          <div className="flex items-start justify-between gap-2 mb-1">
            <h4 className="text-[11px] font-semibold text-foreground line-clamp-2">
              {result.title}
            </h4>
            {result.url && (
              <a
                href={result.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-primary hover:text-primary/80 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
          {result.content && (
            <p className="text-[10px] text-muted-foreground line-clamp-3 mb-1">
              {result.content}
            </p>
          )}
          {result.url && (
            <p className="text-[9px] text-muted-foreground/60 truncate">
              {result.url}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export function getInternetSearchLabel(input?: InternetSearchInput): string {
  const baseLabel = "Busca na Internet";
  
  if (input?.query) {
    const query = input.query;
    const truncatedQuery = query.length > 40 ? query.slice(0, 40) + "..." : query;
    return `${baseLabel}: "${truncatedQuery}"`;
  }
  
  return baseLabel;
}
