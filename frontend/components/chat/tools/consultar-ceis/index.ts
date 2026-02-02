import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarCeisInput, ConsultarCeisOutput } from "./types";
import { renderConsultarCeisInput, renderConsultarCeisOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarCeisMetadata: ToolMetadata = { label: "CEIS - Empresas Inidôneas", category: "sancoes" };
export const consultarCeisRenderer: ToolRenderer<ConsultarCeisInput, ConsultarCeisOutput> = {
  renderInput: renderConsultarCeisInput,
  renderOutput: renderConsultarCeisOutput,
  getInputLabel: (v) => v === "raw" ? "Parâmetros" : "Filtros",
  getOutputLabel: (v) => v === "raw" ? "Resultado" : "Empresas Sancionadas (CEIS)",
};
