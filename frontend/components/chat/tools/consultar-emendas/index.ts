import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarEmendasInput, ConsultarEmendasOutput } from "./types";
import { renderConsultarEmendasInput, renderConsultarEmendasOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarEmendasMetadata: ToolMetadata = { label: "Emendas Parlamentares", category: "emendas" };
export const consultarEmendasRenderer: ToolRenderer<ConsultarEmendasInput, ConsultarEmendasOutput> = {
  renderInput: renderConsultarEmendasInput,
  renderOutput: renderConsultarEmendasOutput,
  getInputLabel: (v) => v === "raw" ? "Parâmetros" : "Filtros",
  getOutputLabel: (v) => v === "raw" ? "Resultado" : "Emendas",
};
