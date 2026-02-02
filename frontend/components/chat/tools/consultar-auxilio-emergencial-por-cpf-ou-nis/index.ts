import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarAuxilioEmergencialPorCpfOuNisInput, ConsultarAuxilioEmergencialPorCpfOuNisOutput } from "./types";
import { renderConsultarAuxilioEmergencialPorCpfOuNisInput, renderConsultarAuxilioEmergencialPorCpfOuNisOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarAuxilioEmergencialPorCpfOuNisMetadata: ToolMetadata = { label: "Auxílio Emergencial por CPF/NIS", category: "beneficios" };
export const consultarAuxilioEmergencialPorCpfOuNisRenderer: ToolRenderer<ConsultarAuxilioEmergencialPorCpfOuNisInput, ConsultarAuxilioEmergencialPorCpfOuNisOutput> = {
  renderInput: renderConsultarAuxilioEmergencialPorCpfOuNisInput,
  renderOutput: renderConsultarAuxilioEmergencialPorCpfOuNisOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Registros",
};
