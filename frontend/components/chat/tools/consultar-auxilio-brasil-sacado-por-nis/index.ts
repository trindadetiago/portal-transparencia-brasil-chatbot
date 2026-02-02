import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarAuxilioBrasilSacadoPorNisInput, ConsultarAuxilioBrasilSacadoPorNisOutput } from "./types";
import { renderConsultarAuxilioBrasilSacadoPorNisInput, renderConsultarAuxilioBrasilSacadoPorNisOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarAuxilioBrasilSacadoPorNisMetadata: ToolMetadata = { label: "Auxílio Brasil por NIS", category: "beneficios" };
export const consultarAuxilioBrasilSacadoPorNisRenderer: ToolRenderer<ConsultarAuxilioBrasilSacadoPorNisInput, ConsultarAuxilioBrasilSacadoPorNisOutput> = {
  renderInput: renderConsultarAuxilioBrasilSacadoPorNisInput,
  renderOutput: renderConsultarAuxilioBrasilSacadoPorNisOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Pagamentos",
};
