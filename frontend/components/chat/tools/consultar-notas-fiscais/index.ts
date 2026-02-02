import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarNotasFiscaisInput, ConsultarNotasFiscaisOutput } from "./types";
import { renderConsultarNotasFiscaisInput, renderConsultarNotasFiscaisOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarNotasFiscaisMetadata: ToolMetadata = { label: "Notas Fiscais", category: "notas" };
export const consultarNotasFiscaisRenderer: ToolRenderer<ConsultarNotasFiscaisInput, ConsultarNotasFiscaisOutput> = {
  renderInput: renderConsultarNotasFiscaisInput,
  renderOutput: renderConsultarNotasFiscaisOutput,
  getInputLabel: (v) => v === "raw" ? "Parâmetros" : "Filtros",
  getOutputLabel: (v) => v === "raw" ? "Resultado" : "Notas Fiscais",
};
