import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarServidoresPorOrgaoInput, ConsultarServidoresPorOrgaoOutput } from "./types";
import { renderConsultarServidoresPorOrgaoInput, renderConsultarServidoresPorOrgaoOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarServidoresPorOrgaoMetadata: ToolMetadata = { label: "Servidores por Órgão", category: "servidores" };
export const consultarServidoresPorOrgaoRenderer: ToolRenderer<ConsultarServidoresPorOrgaoInput, ConsultarServidoresPorOrgaoOutput> = {
  renderInput: renderConsultarServidoresPorOrgaoInput,
  renderOutput: renderConsultarServidoresPorOrgaoOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
