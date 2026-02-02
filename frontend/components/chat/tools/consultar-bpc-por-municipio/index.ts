import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarBpcPorMunicipioInput, ConsultarBpcPorMunicipioOutput } from "./types";
import { renderConsultarBpcPorMunicipioInput, renderConsultarBpcPorMunicipioOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarBpcPorMunicipioMetadata: ToolMetadata = { label: "BPC por Município", category: "beneficios" };
export const consultarBpcPorMunicipioRenderer: ToolRenderer<ConsultarBpcPorMunicipioInput, ConsultarBpcPorMunicipioOutput> = {
  renderInput: renderConsultarBpcPorMunicipioInput,
  renderOutput: renderConsultarBpcPorMunicipioOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
