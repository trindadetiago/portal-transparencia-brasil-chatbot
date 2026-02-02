import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarBpcBeneficiarioPorMunicipioInput, ConsultarBpcBeneficiarioPorMunicipioOutput } from "./types";
import { renderConsultarBpcBeneficiarioPorMunicipioInput, renderConsultarBpcBeneficiarioPorMunicipioOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarBpcBeneficiarioPorMunicipioMetadata: ToolMetadata = { label: "BPC Beneficiários", category: "beneficios" };
export const consultarBpcBeneficiarioPorMunicipioRenderer: ToolRenderer<ConsultarBpcBeneficiarioPorMunicipioInput, ConsultarBpcBeneficiarioPorMunicipioOutput> = {
  renderInput: renderConsultarBpcBeneficiarioPorMunicipioInput,
  renderOutput: renderConsultarBpcBeneficiarioPorMunicipioOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
