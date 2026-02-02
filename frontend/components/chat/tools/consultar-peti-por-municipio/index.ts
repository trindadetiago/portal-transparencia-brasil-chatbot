import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarPetiPorMunicipioInput, ConsultarPetiPorMunicipioOutput } from "./types";
import { renderConsultarPetiPorMunicipioInput, renderConsultarPetiPorMunicipioOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarPetiPorMunicipioMetadata: ToolMetadata = { label: "PETI por Município", category: "beneficios" };
export const consultarPetiPorMunicipioRenderer: ToolRenderer<ConsultarPetiPorMunicipioInput, ConsultarPetiPorMunicipioOutput> = {
  renderInput: renderConsultarPetiPorMunicipioInput,
  renderOutput: renderConsultarPetiPorMunicipioOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
