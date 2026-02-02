import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarSeguroDefesoPorCodigoInput, ConsultarSeguroDefesoPorCodigoOutput } from "./types";
import { renderConsultarSeguroDefesoPorCodigoInput, renderConsultarSeguroDefesoPorCodigoOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarSeguroDefesoPorCodigoMetadata: ToolMetadata = { label: "Seguro Defeso por CPF/NIS", category: "beneficios" };
export const consultarSeguroDefesoPorCodigoRenderer: ToolRenderer<ConsultarSeguroDefesoPorCodigoInput, ConsultarSeguroDefesoPorCodigoOutput> = {
  renderInput: renderConsultarSeguroDefesoPorCodigoInput,
  renderOutput: renderConsultarSeguroDefesoPorCodigoOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
