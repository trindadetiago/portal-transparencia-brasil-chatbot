import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarSeguroDefesoBeneficiarioPorMunicipioInput, ConsultarSeguroDefesoBeneficiarioPorMunicipioOutput } from "./types";
import { renderConsultarSeguroDefesoBeneficiarioPorMunicipioInput, renderConsultarSeguroDefesoBeneficiarioPorMunicipioOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarSeguroDefesoBeneficiarioPorMunicipioMetadata: ToolMetadata = { label: "Seguro Defeso Beneficiários", category: "beneficios" };
export const consultarSeguroDefesoBeneficiarioPorMunicipioRenderer: ToolRenderer<ConsultarSeguroDefesoBeneficiarioPorMunicipioInput, ConsultarSeguroDefesoBeneficiarioPorMunicipioOutput> = {
  renderInput: renderConsultarSeguroDefesoBeneficiarioPorMunicipioInput,
  renderOutput: renderConsultarSeguroDefesoBeneficiarioPorMunicipioOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
