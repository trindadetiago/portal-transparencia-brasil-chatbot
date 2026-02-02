import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarDespesasEmpenhosImpactadosInput, ConsultarDespesasEmpenhosImpactadosOutput } from "./types";
import { renderConsultarDespesasEmpenhosImpactadosInput, renderConsultarDespesasEmpenhosImpactadosOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarDespesasEmpenhosImpactadosMetadata: ToolMetadata = { label: "Empenhos Impactados", category: "despesas" };
export const consultarDespesasEmpenhosImpactadosRenderer: ToolRenderer<ConsultarDespesasEmpenhosImpactadosInput, ConsultarDespesasEmpenhosImpactadosOutput> = {
  renderInput: renderConsultarDespesasEmpenhosImpactadosInput,
  renderOutput: renderConsultarDespesasEmpenhosImpactadosOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
