import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarBolsaFamiliaPorNisInput, ConsultarBolsaFamiliaPorNisOutput } from "./types";
import { renderConsultarBolsaFamiliaPorNisInput, renderConsultarBolsaFamiliaPorNisOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarBolsaFamiliaPorNisMetadata: ToolMetadata = { label: "Bolsa Família por NIS", category: "beneficios" };
export const consultarBolsaFamiliaPorNisRenderer: ToolRenderer<ConsultarBolsaFamiliaPorNisInput, ConsultarBolsaFamiliaPorNisOutput> = {
  renderInput: renderConsultarBolsaFamiliaPorNisInput,
  renderOutput: renderConsultarBolsaFamiliaPorNisOutput,
  getInputLabel: (v) => v === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (v) => v === "raw" ? "Resultado" : "Histórico de Pagamentos",
};
