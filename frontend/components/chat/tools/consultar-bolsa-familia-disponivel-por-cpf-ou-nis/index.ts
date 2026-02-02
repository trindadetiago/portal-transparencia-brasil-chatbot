import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarBolsaFamiliaDisponivelPorCpfOuNisInput, ConsultarBolsaFamiliaDisponivelPorCpfOuNisOutput } from "./types";
import { renderConsultarBolsaFamiliaDisponivelPorCpfOuNisInput, renderConsultarBolsaFamiliaDisponivelPorCpfOuNisOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarBolsaFamiliaDisponivelPorCpfOuNisMetadata: ToolMetadata = { label: "Bolsa Família Disponível por CPF/NIS", category: "beneficios" };
export const consultarBolsaFamiliaDisponivelPorCpfOuNisRenderer: ToolRenderer<ConsultarBolsaFamiliaDisponivelPorCpfOuNisInput, ConsultarBolsaFamiliaDisponivelPorCpfOuNisOutput> = {
  renderInput: renderConsultarBolsaFamiliaDisponivelPorCpfOuNisInput,
  renderOutput: renderConsultarBolsaFamiliaDisponivelPorCpfOuNisOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
