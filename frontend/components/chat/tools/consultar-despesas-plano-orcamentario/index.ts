import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarDespesasPlanoOrcamentarioInput, ConsultarDespesasPlanoOrcamentarioOutput } from "./types";
import { renderConsultarDespesasPlanoOrcamentarioInput, renderConsultarDespesasPlanoOrcamentarioOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarDespesasPlanoOrcamentarioMetadata: ToolMetadata = { label: "Despesas por Plano Orçamentário", category: "despesas" };
export const consultarDespesasPlanoOrcamentarioRenderer: ToolRenderer<ConsultarDespesasPlanoOrcamentarioInput, ConsultarDespesasPlanoOrcamentarioOutput> = {
  renderInput: renderConsultarDespesasPlanoOrcamentarioInput,
  renderOutput: renderConsultarDespesasPlanoOrcamentarioOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
