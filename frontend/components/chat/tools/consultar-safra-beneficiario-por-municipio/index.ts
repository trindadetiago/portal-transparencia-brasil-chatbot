import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarSafraBeneficiarioPorMunicipioInput, ConsultarSafraBeneficiarioPorMunicipioOutput } from "./types";
import { renderConsultarSafraBeneficiarioPorMunicipioInput, renderConsultarSafraBeneficiarioPorMunicipioOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarSafraBeneficiarioPorMunicipioMetadata: ToolMetadata = { label: "Safra Beneficiários", category: "beneficios" };
export const consultarSafraBeneficiarioPorMunicipioRenderer: ToolRenderer<ConsultarSafraBeneficiarioPorMunicipioInput, ConsultarSafraBeneficiarioPorMunicipioOutput> = {
  renderInput: renderConsultarSafraBeneficiarioPorMunicipioInput,
  renderOutput: renderConsultarSafraBeneficiarioPorMunicipioOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
