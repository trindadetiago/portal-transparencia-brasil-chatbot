import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarCnepPorIdInput, ConsultarCnepPorIdOutput } from "./types";
import { renderConsultarCnepPorIdInput, renderConsultarCnepPorIdOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarCnepPorIdMetadata: ToolMetadata = { label: "CNEP por ID", category: "sancoes" };
export const consultarCnepPorIdRenderer: ToolRenderer<ConsultarCnepPorIdInput, ConsultarCnepPorIdOutput> = {
  renderInput: renderConsultarCnepPorIdInput,
  renderOutput: renderConsultarCnepPorIdOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Detalhes do Registro",
};
