import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarDespesasPorOrgaoInput, ConsultarDespesasPorOrgaoOutput } from "./types";
import { renderConsultarDespesasPorOrgaoInput, renderConsultarDespesasPorOrgaoOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarDespesasPorOrgaoMetadata: ToolMetadata = {
  label: "Despesas por Órgão",
  category: "despesas",
};

export const consultarDespesasPorOrgaoRenderer: ToolRenderer<ConsultarDespesasPorOrgaoInput, ConsultarDespesasPorOrgaoOutput> = {
  renderInput: renderConsultarDespesasPorOrgaoInput,
  renderOutput: renderConsultarDespesasPorOrgaoOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Filtros",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Despesas por Órgão",
};
