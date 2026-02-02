import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarAuxilioEmergencialPorMunicipioInput, ConsultarAuxilioEmergencialPorMunicipioOutput } from "./types";
import { renderConsultarAuxilioEmergencialPorMunicipioInput, renderConsultarAuxilioEmergencialPorMunicipioOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarAuxilioEmergencialPorMunicipioMetadata: ToolMetadata = { label: "Auxílio Emergencial por Município", category: "beneficios" };
export const consultarAuxilioEmergencialPorMunicipioRenderer: ToolRenderer<ConsultarAuxilioEmergencialPorMunicipioInput, ConsultarAuxilioEmergencialPorMunicipioOutput> = {
  renderInput: renderConsultarAuxilioEmergencialPorMunicipioInput,
  renderOutput: renderConsultarAuxilioEmergencialPorMunicipioOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Benefícios",
};
