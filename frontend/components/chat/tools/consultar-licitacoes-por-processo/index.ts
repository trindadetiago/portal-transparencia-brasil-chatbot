import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarLicitacoesPorProcessoInput, ConsultarLicitacoesPorProcessoOutput } from "./types";
import { renderConsultarLicitacoesPorProcessoInput, renderConsultarLicitacoesPorProcessoOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarLicitacoesPorProcessoMetadata: ToolMetadata = { label: "Licitações por Processo", category: "licitacoes" };
export const consultarLicitacoesPorProcessoRenderer: ToolRenderer<ConsultarLicitacoesPorProcessoInput, ConsultarLicitacoesPorProcessoOutput> = {
  renderInput: renderConsultarLicitacoesPorProcessoInput,
  renderOutput: renderConsultarLicitacoesPorProcessoOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
