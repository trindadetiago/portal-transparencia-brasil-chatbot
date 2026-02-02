import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarAuxilioBrasilSacadoBeneficiarioPorMunicipioInput, ConsultarAuxilioBrasilSacadoBeneficiarioPorMunicipioOutput } from "./types";
import { renderConsultarAuxilioBrasilSacadoBeneficiarioPorMunicipioInput, renderConsultarAuxilioBrasilSacadoBeneficiarioPorMunicipioOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarAuxilioBrasilSacadoBeneficiarioPorMunicipioMetadata: ToolMetadata = { label: "Auxílio Brasil Sacado Beneficiários", category: "beneficios" };
export const consultarAuxilioBrasilSacadoBeneficiarioPorMunicipioRenderer: ToolRenderer<ConsultarAuxilioBrasilSacadoBeneficiarioPorMunicipioInput, ConsultarAuxilioBrasilSacadoBeneficiarioPorMunicipioOutput> = {
  renderInput: renderConsultarAuxilioBrasilSacadoBeneficiarioPorMunicipioInput,
  renderOutput: renderConsultarAuxilioBrasilSacadoBeneficiarioPorMunicipioOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Pagamentos",
};
