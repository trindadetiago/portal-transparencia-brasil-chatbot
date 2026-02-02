import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarContratosPorProcessoInput, ConsultarContratosPorProcessoOutput } from "./types";
import { renderConsultarContratosPorProcessoInput, renderConsultarContratosPorProcessoOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarContratosPorProcessoMetadata: ToolMetadata = { label: "Contratos por Processo", category: "contratos" };
export const consultarContratosPorProcessoRenderer: ToolRenderer<ConsultarContratosPorProcessoInput, ConsultarContratosPorProcessoOutput> = {
  renderInput: renderConsultarContratosPorProcessoInput,
  renderOutput: renderConsultarContratosPorProcessoOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
