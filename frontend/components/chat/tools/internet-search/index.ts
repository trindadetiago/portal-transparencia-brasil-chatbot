/**
 * internet_search tool exports
 */

import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { InternetSearchInput, InternetSearchOutput } from "./types";
import {
  renderInternetSearchInput,
  renderInternetSearchOutput,
  getInternetSearchLabel,
} from "./renderer";

export * from "./types";
export * from "./renderer";

export const internetSearchMetadata: ToolMetadata = {
  label: "Busca na Internet",
  category: "search",
};

export const internetSearchRenderer: ToolRenderer<InternetSearchInput, InternetSearchOutput> = {
  renderInput: renderInternetSearchInput,
  renderOutput: renderInternetSearchOutput,
  getLabel: getInternetSearchLabel,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados da Busca",
};
