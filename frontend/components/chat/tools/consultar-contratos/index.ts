import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarContratosInput, ConsultarContratosOutput } from "./types";
import { renderConsultarContratosInput, renderConsultarContratosOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarContratosMetadata: ToolMetadata = { label: "Contratos", category: "contratos" };
export const consultarContratosRenderer: ToolRenderer<ConsultarContratosInput, ConsultarContratosOutput> = {
  renderInput: renderConsultarContratosInput,
  renderOutput: renderConsultarContratosOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Filtros",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Contratos",
};
