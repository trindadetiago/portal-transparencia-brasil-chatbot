import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarAcordosLenienciaInput, ConsultarAcordosLenienciaOutput } from "./types";
import { renderConsultarAcordosLenienciaInput, renderConsultarAcordosLenienciaOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarAcordosLenienciaMetadata: ToolMetadata = { label: "Acordos de Leniência", category: "sancoes" };
export const consultarAcordosLenienciaRenderer: ToolRenderer<ConsultarAcordosLenienciaInput, ConsultarAcordosLenienciaOutput> = {
  renderInput: renderConsultarAcordosLenienciaInput,
  renderOutput: renderConsultarAcordosLenienciaOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Filtros",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Acordos",
};
