import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarBolsaFamiliaDisponivelBeneficiarioPorMunicipioInput, ConsultarBolsaFamiliaDisponivelBeneficiarioPorMunicipioOutput } from "./types";
import { renderConsultarBolsaFamiliaDisponivelBeneficiarioPorMunicipioInput, renderConsultarBolsaFamiliaDisponivelBeneficiarioPorMunicipioOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarBolsaFamiliaDisponivelBeneficiarioPorMunicipioMetadata: ToolMetadata = { label: "Bolsa Família Disponível Beneficiários", category: "beneficios" };
export const consultarBolsaFamiliaDisponivelBeneficiarioPorMunicipioRenderer: ToolRenderer<ConsultarBolsaFamiliaDisponivelBeneficiarioPorMunicipioInput, ConsultarBolsaFamiliaDisponivelBeneficiarioPorMunicipioOutput> = {
  renderInput: renderConsultarBolsaFamiliaDisponivelBeneficiarioPorMunicipioInput,
  renderOutput: renderConsultarBolsaFamiliaDisponivelBeneficiarioPorMunicipioOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
