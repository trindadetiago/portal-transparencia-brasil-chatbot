import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarCnepInput, ConsultarCnepOutput } from "./types";
import { renderConsultarCnepInput, renderConsultarCnepOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarCnepMetadata: ToolMetadata = { label: "CNEP - Empresas Punidas", category: "sancoes" };
export const consultarCnepRenderer: ToolRenderer<ConsultarCnepInput, ConsultarCnepOutput> = {
  renderInput: renderConsultarCnepInput,
  renderOutput: renderConsultarCnepOutput,
  getInputLabel: (v) => v === "raw" ? "Parâmetros" : "Filtros",
  getOutputLabel: (v) => v === "raw" ? "Resultado" : "Empresas Punidas (CNEP)",
};
