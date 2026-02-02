import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarSeguroDefesoPorMunicipioInput, ConsultarSeguroDefesoPorMunicipioOutput } from "./types";
import { renderConsultarSeguroDefesoPorMunicipioInput, renderConsultarSeguroDefesoPorMunicipioOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarSeguroDefesoPorMunicipioMetadata: ToolMetadata = { label: "Seguro Defeso por Município", category: "beneficios" };
export const consultarSeguroDefesoPorMunicipioRenderer: ToolRenderer<ConsultarSeguroDefesoPorMunicipioInput, ConsultarSeguroDefesoPorMunicipioOutput> = {
  renderInput: renderConsultarSeguroDefesoPorMunicipioInput,
  renderOutput: renderConsultarSeguroDefesoPorMunicipioOutput,
  getInputLabel: (v) => v === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (v) => v === "raw" ? "Resultado" : "Resumo Seguro Defeso",
};
