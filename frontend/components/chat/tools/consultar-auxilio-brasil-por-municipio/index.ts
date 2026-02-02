import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarAuxilioBrasilPorMunicipioInput, ConsultarAuxilioBrasilPorMunicipioOutput } from "./types";
import { renderConsultarAuxilioBrasilPorMunicipioInput, renderConsultarAuxilioBrasilPorMunicipioOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarAuxilioBrasilPorMunicipioMetadata: ToolMetadata = { label: "Auxílio Brasil por Município", category: "beneficios" };
export const consultarAuxilioBrasilPorMunicipioRenderer: ToolRenderer<ConsultarAuxilioBrasilPorMunicipioInput, ConsultarAuxilioBrasilPorMunicipioOutput> = {
  renderInput: renderConsultarAuxilioBrasilPorMunicipioInput,
  renderOutput: renderConsultarAuxilioBrasilPorMunicipioOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Benefícios",
};
