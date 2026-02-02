import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarCepimInput, ConsultarCepimOutput } from "./types";
import { renderConsultarCepimInput, renderConsultarCepimOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarCepimMetadata: ToolMetadata = { label: "CEPIM - Entidades Impedidas", category: "sancoes" };
export const consultarCepimRenderer: ToolRenderer<ConsultarCepimInput, ConsultarCepimOutput> = {
  renderInput: renderConsultarCepimInput,
  renderOutput: renderConsultarCepimOutput,
  getInputLabel: (v) => v === "raw" ? "Parâmetros" : "Filtros",
  getOutputLabel: (v) => v === "raw" ? "Resultado" : "Entidades Impedidas (CEPIM)",
};
