import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarContratosPorNumeroInput, ConsultarContratosPorNumeroOutput } from "./types";
import { renderConsultarContratosPorNumeroInput, renderConsultarContratosPorNumeroOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarContratosPorNumeroMetadata: ToolMetadata = { label: "Contratos por Número", category: "contratos" };
export const consultarContratosPorNumeroRenderer: ToolRenderer<ConsultarContratosPorNumeroInput, ConsultarContratosPorNumeroOutput> = {
  renderInput: renderConsultarContratosPorNumeroInput,
  renderOutput: renderConsultarContratosPorNumeroOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
