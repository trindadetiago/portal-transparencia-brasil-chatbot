import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarBolsaFamiliaAntigaPorMunicipioInput, ConsultarBolsaFamiliaAntigaPorMunicipioOutput } from "./types";
import { renderConsultarBolsaFamiliaAntigaPorMunicipioInput, renderConsultarBolsaFamiliaAntigaPorMunicipioOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarBolsaFamiliaAntigaPorMunicipioMetadata: ToolMetadata = { label: "Bolsa Família Antigo por Município", category: "beneficios" };
export const consultarBolsaFamiliaAntigaPorMunicipioRenderer: ToolRenderer<ConsultarBolsaFamiliaAntigaPorMunicipioInput, ConsultarBolsaFamiliaAntigaPorMunicipioOutput> = {
  renderInput: renderConsultarBolsaFamiliaAntigaPorMunicipioInput,
  renderOutput: renderConsultarBolsaFamiliaAntigaPorMunicipioOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
