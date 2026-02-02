import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarLicitacoesInput, ConsultarLicitacoesOutput } from "./types";
import { renderConsultarLicitacoesInput, renderConsultarLicitacoesOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarLicitacoesMetadata: ToolMetadata = { label: "Licitações", category: "licitacoes" };
export const consultarLicitacoesRenderer: ToolRenderer<ConsultarLicitacoesInput, ConsultarLicitacoesOutput> = {
  renderInput: renderConsultarLicitacoesInput,
  renderOutput: renderConsultarLicitacoesOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Filtros",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Licitações",
};
