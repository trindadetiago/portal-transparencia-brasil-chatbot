import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarBolsaFamiliaPorMunicipioInput, ConsultarBolsaFamiliaPorMunicipioOutput } from "./types";
import { renderConsultarBolsaFamiliaPorMunicipioInput, renderConsultarBolsaFamiliaPorMunicipioOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarBolsaFamiliaPorMunicipioMetadata: ToolMetadata = { label: "Bolsa Família por Município", category: "beneficios" };
export const consultarBolsaFamiliaPorMunicipioRenderer: ToolRenderer<ConsultarBolsaFamiliaPorMunicipioInput, ConsultarBolsaFamiliaPorMunicipioOutput> = {
  renderInput: renderConsultarBolsaFamiliaPorMunicipioInput,
  renderOutput: renderConsultarBolsaFamiliaPorMunicipioOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resumo do Município",
};
