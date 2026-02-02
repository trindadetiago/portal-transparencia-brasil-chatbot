import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarServidoresFuncoesECargosInput, ConsultarServidoresFuncoesECargosOutput } from "./types";
import { renderConsultarServidoresFuncoesECargosInput, renderConsultarServidoresFuncoesECargosOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarServidoresFuncoesECargosMetadata: ToolMetadata = { label: "Funções e Cargos", category: "servidores" };
export const consultarServidoresFuncoesECargosRenderer: ToolRenderer<ConsultarServidoresFuncoesECargosInput, ConsultarServidoresFuncoesECargosOutput> = {
  renderInput: renderConsultarServidoresFuncoesECargosInput,
  renderOutput: renderConsultarServidoresFuncoesECargosOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
