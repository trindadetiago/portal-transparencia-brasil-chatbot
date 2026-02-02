import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarLicitacoesUgsInput, ConsultarLicitacoesUgsOutput } from "./types";
import { renderConsultarLicitacoesUgsInput, renderConsultarLicitacoesUgsOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarLicitacoesUgsMetadata: ToolMetadata = { label: "Unidades Gestoras", category: "licitacoes" };
export const consultarLicitacoesUgsRenderer: ToolRenderer<ConsultarLicitacoesUgsInput, ConsultarLicitacoesUgsOutput> = {
  renderInput: renderConsultarLicitacoesUgsInput,
  renderOutput: renderConsultarLicitacoesUgsOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
