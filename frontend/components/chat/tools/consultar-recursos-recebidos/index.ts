import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarRecursosRecebidosInput, ConsultarRecursosRecebidosOutput } from "./types";
import { renderConsultarRecursosRecebidosInput, renderConsultarRecursosRecebidosOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarRecursosRecebidosMetadata: ToolMetadata = {
  label: "Recursos Recebidos",
  category: "despesas",
};

export const consultarRecursosRecebidosRenderer: ToolRenderer<ConsultarRecursosRecebidosInput, ConsultarRecursosRecebidosOutput> = {
  renderInput: renderConsultarRecursosRecebidosInput,
  renderOutput: renderConsultarRecursosRecebidosOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Filtros",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Recursos Recebidos",
};
