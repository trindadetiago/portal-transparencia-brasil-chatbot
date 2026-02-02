import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarBolsaFamiliaSacadoPorNisInput, ConsultarBolsaFamiliaSacadoPorNisOutput } from "./types";
import { renderConsultarBolsaFamiliaSacadoPorNisInput, renderConsultarBolsaFamiliaSacadoPorNisOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarBolsaFamiliaSacadoPorNisMetadata: ToolMetadata = { label: "Bolsa Família Sacado por NIS", category: "beneficios" };
export const consultarBolsaFamiliaSacadoPorNisRenderer: ToolRenderer<ConsultarBolsaFamiliaSacadoPorNisInput, ConsultarBolsaFamiliaSacadoPorNisOutput> = {
  renderInput: renderConsultarBolsaFamiliaSacadoPorNisInput,
  renderOutput: renderConsultarBolsaFamiliaSacadoPorNisOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
