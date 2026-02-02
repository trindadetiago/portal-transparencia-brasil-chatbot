/**
 * consultar_remuneracao_servidores tool exports
 */

import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarRemuneracaoServidoresInput, ConsultarRemuneracaoServidoresOutput } from "./types";
import {
  renderConsultarRemuneracaoServidoresInput,
  renderConsultarRemuneracaoServidoresOutput,
} from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarRemuneracaoServidoresMetadata: ToolMetadata = {
  label: "Remuneração de Servidores",
  category: "servidores",
};

export const consultarRemuneracaoServidoresRenderer: ToolRenderer<
  ConsultarRemuneracaoServidoresInput,
  ConsultarRemuneracaoServidoresOutput
> = {
  renderInput: renderConsultarRemuneracaoServidoresInput,
  renderOutput: renderConsultarRemuneracaoServidoresOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Remunerações",
};
