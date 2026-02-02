import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarNovoBolsaFamiliaSacadoBeneficiarioPorMunicipioInput, ConsultarNovoBolsaFamiliaSacadoBeneficiarioPorMunicipioOutput } from "./types";
import { renderConsultarNovoBolsaFamiliaSacadoBeneficiarioPorMunicipioInput, renderConsultarNovoBolsaFamiliaSacadoBeneficiarioPorMunicipioOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarNovoBolsaFamiliaSacadoBeneficiarioPorMunicipioMetadata: ToolMetadata = { label: "Novo Bolsa Família Sacado Beneficiários", category: "beneficios" };
export const consultarNovoBolsaFamiliaSacadoBeneficiarioPorMunicipioRenderer: ToolRenderer<ConsultarNovoBolsaFamiliaSacadoBeneficiarioPorMunicipioInput, ConsultarNovoBolsaFamiliaSacadoBeneficiarioPorMunicipioOutput> = {
  renderInput: renderConsultarNovoBolsaFamiliaSacadoBeneficiarioPorMunicipioInput,
  renderOutput: renderConsultarNovoBolsaFamiliaSacadoBeneficiarioPorMunicipioOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
