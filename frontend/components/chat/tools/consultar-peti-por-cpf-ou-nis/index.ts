import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarPetiPorCpfOuNisInput, ConsultarPetiPorCpfOuNisOutput } from "./types";
import { renderConsultarPetiPorCpfOuNisInput, renderConsultarPetiPorCpfOuNisOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarPetiPorCpfOuNisMetadata: ToolMetadata = { label: "PETI por CPF/NIS", category: "beneficios" };
export const consultarPetiPorCpfOuNisRenderer: ToolRenderer<ConsultarPetiPorCpfOuNisInput, ConsultarPetiPorCpfOuNisOutput> = {
  renderInput: renderConsultarPetiPorCpfOuNisInput,
  renderOutput: renderConsultarPetiPorCpfOuNisOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
