import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarContratosTermoAditivoInput, ConsultarContratosTermoAditivoOutput } from "./types";
import { renderConsultarContratosTermoAditivoInput, renderConsultarContratosTermoAditivoOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarContratosTermoAditivoMetadata: ToolMetadata = { label: "Termos Aditivos", category: "contratos" };
export const consultarContratosTermoAditivoRenderer: ToolRenderer<ConsultarContratosTermoAditivoInput, ConsultarContratosTermoAditivoOutput> = {
  renderInput: renderConsultarContratosTermoAditivoInput,
  renderOutput: renderConsultarContratosTermoAditivoOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
