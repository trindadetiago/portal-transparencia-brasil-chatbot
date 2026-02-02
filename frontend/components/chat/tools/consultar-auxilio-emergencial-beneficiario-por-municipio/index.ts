import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarAuxilioEmergencialBeneficiarioPorMunicipioInput, ConsultarAuxilioEmergencialBeneficiarioPorMunicipioOutput } from "./types";
import { renderConsultarAuxilioEmergencialBeneficiarioPorMunicipioInput, renderConsultarAuxilioEmergencialBeneficiarioPorMunicipioOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarAuxilioEmergencialBeneficiarioPorMunicipioMetadata: ToolMetadata = { label: "Auxílio Emergencial Beneficiários", category: "beneficios" };
export const consultarAuxilioEmergencialBeneficiarioPorMunicipioRenderer: ToolRenderer<ConsultarAuxilioEmergencialBeneficiarioPorMunicipioInput, ConsultarAuxilioEmergencialBeneficiarioPorMunicipioOutput> = {
  renderInput: renderConsultarAuxilioEmergencialBeneficiarioPorMunicipioInput,
  renderOutput: renderConsultarAuxilioEmergencialBeneficiarioPorMunicipioOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Beneficiários",
};
