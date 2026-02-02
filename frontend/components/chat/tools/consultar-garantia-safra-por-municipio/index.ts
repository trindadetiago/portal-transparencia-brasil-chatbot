import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarGarantiaSafraPorMunicipioInput, ConsultarGarantiaSafraPorMunicipioOutput } from "./types";
import { renderConsultarGarantiaSafraPorMunicipioInput, renderConsultarGarantiaSafraPorMunicipioOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarGarantiaSafraPorMunicipioMetadata: ToolMetadata = { label: "Garantia-Safra por Município", category: "beneficios" };
export const consultarGarantiaSafraPorMunicipioRenderer: ToolRenderer<ConsultarGarantiaSafraPorMunicipioInput, ConsultarGarantiaSafraPorMunicipioOutput> = {
  renderInput: renderConsultarGarantiaSafraPorMunicipioInput,
  renderOutput: renderConsultarGarantiaSafraPorMunicipioOutput,
  getInputLabel: (v) => v === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (v) => v === "raw" ? "Resultado" : "Resumo Garantia-Safra",
};
