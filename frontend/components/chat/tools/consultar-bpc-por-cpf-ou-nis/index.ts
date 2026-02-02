import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarBpcPorCpfOuNisInput, ConsultarBpcPorCpfOuNisOutput } from "./types";
import { renderConsultarBpcPorCpfOuNisInput, renderConsultarBpcPorCpfOuNisOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarBpcPorCpfOuNisMetadata: ToolMetadata = { label: "BPC por CPF/NIS", category: "beneficios" };
export const consultarBpcPorCpfOuNisRenderer: ToolRenderer<ConsultarBpcPorCpfOuNisInput, ConsultarBpcPorCpfOuNisOutput> = {
  renderInput: renderConsultarBpcPorCpfOuNisInput,
  renderOutput: renderConsultarBpcPorCpfOuNisOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
