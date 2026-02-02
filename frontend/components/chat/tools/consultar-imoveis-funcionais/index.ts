import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarImoveisFuncionaisInput, ConsultarImoveisFuncionaisOutput } from "./types";
import { renderConsultarImoveisFuncionaisInput, renderConsultarImoveisFuncionaisOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarImoveisFuncionaisMetadata: ToolMetadata = { label: "Imóveis Funcionais", category: "imoveis" };
export const consultarImoveisFuncionaisRenderer: ToolRenderer<ConsultarImoveisFuncionaisInput, ConsultarImoveisFuncionaisOutput> = {
  renderInput: renderConsultarImoveisFuncionaisInput,
  renderOutput: renderConsultarImoveisFuncionaisOutput,
  getInputLabel: (v) => v === "raw" ? "Parâmetros" : "Filtros",
  getOutputLabel: (v) => v === "raw" ? "Resultado" : "Imóveis",
};
