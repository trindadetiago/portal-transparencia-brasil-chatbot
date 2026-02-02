import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarLicitacoesModalidadesInput, ConsultarLicitacoesModalidadesOutput } from "./types";
import { renderConsultarLicitacoesModalidadesInput, renderConsultarLicitacoesModalidadesOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarLicitacoesModalidadesMetadata: ToolMetadata = { label: "Modalidades de Licitação", category: "licitacoes" };
export const consultarLicitacoesModalidadesRenderer: ToolRenderer<ConsultarLicitacoesModalidadesInput, ConsultarLicitacoesModalidadesOutput> = {
  renderInput: renderConsultarLicitacoesModalidadesInput,
  renderOutput: renderConsultarLicitacoesModalidadesOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
