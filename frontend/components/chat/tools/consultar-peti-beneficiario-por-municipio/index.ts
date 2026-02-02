import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarPetiBeneficiarioPorMunicipioInput, ConsultarPetiBeneficiarioPorMunicipioOutput } from "./types";
import { renderConsultarPetiBeneficiarioPorMunicipioInput, renderConsultarPetiBeneficiarioPorMunicipioOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarPetiBeneficiarioPorMunicipioMetadata: ToolMetadata = { label: "PETI Beneficiários", category: "beneficios" };
export const consultarPetiBeneficiarioPorMunicipioRenderer: ToolRenderer<ConsultarPetiBeneficiarioPorMunicipioInput, ConsultarPetiBeneficiarioPorMunicipioOutput> = {
  renderInput: renderConsultarPetiBeneficiarioPorMunicipioInput,
  renderOutput: renderConsultarPetiBeneficiarioPorMunicipioOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
