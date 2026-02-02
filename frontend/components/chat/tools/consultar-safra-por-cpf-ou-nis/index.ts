import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarSafraPorCpfOuNisInput, ConsultarSafraPorCpfOuNisOutput } from "./types";
import { renderConsultarSafraPorCpfOuNisInput, renderConsultarSafraPorCpfOuNisOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarSafraPorCpfOuNisMetadata: ToolMetadata = { label: "Safra por CPF/NIS", category: "beneficios" };
export const consultarSafraPorCpfOuNisRenderer: ToolRenderer<ConsultarSafraPorCpfOuNisInput, ConsultarSafraPorCpfOuNisOutput> = {
  renderInput: renderConsultarSafraPorCpfOuNisInput,
  renderOutput: renderConsultarSafraPorCpfOuNisOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
