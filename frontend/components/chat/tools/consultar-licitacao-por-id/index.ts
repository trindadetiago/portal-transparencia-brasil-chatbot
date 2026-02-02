import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarLicitacaoPorIdInput, ConsultarLicitacaoPorIdOutput } from "./types";
import { renderConsultarLicitacaoPorIdInput, renderConsultarLicitacaoPorIdOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarLicitacaoPorIdMetadata: ToolMetadata = { label: "Licitação por ID", category: "licitacoes" };
export const consultarLicitacaoPorIdRenderer: ToolRenderer<ConsultarLicitacaoPorIdInput, ConsultarLicitacaoPorIdOutput> = {
  renderInput: renderConsultarLicitacaoPorIdInput,
  renderOutput: renderConsultarLicitacaoPorIdOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Identificação",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Dados da Licitação",
};
