import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarBolsaFamiliaSacadoBeneficiarioPorMunicipioInput, ConsultarBolsaFamiliaSacadoBeneficiarioPorMunicipioOutput } from "./types";
import { renderConsultarBolsaFamiliaSacadoBeneficiarioPorMunicipioInput, renderConsultarBolsaFamiliaSacadoBeneficiarioPorMunicipioOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarBolsaFamiliaSacadoBeneficiarioPorMunicipioMetadata: ToolMetadata = { label: "Bolsa Família Sacado Beneficiários", category: "beneficios" };
export const consultarBolsaFamiliaSacadoBeneficiarioPorMunicipioRenderer: ToolRenderer<ConsultarBolsaFamiliaSacadoBeneficiarioPorMunicipioInput, ConsultarBolsaFamiliaSacadoBeneficiarioPorMunicipioOutput> = {
  renderInput: renderConsultarBolsaFamiliaSacadoBeneficiarioPorMunicipioInput,
  renderOutput: renderConsultarBolsaFamiliaSacadoBeneficiarioPorMunicipioOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
