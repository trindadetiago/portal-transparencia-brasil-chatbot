import type { ToolMetadata, ToolRenderer } from "../base/types";
import type { ConsultarLicitacoesParticipantesInput, ConsultarLicitacoesParticipantesOutput } from "./types";
import { renderConsultarLicitacoesParticipantesInput, renderConsultarLicitacoesParticipantesOutput } from "./renderer";

export * from "./types";
export * from "./renderer";

export const consultarLicitacoesParticipantesMetadata: ToolMetadata = { label: "Participantes da Licitação", category: "licitacoes" };
export const consultarLicitacoesParticipantesRenderer: ToolRenderer<ConsultarLicitacoesParticipantesInput, ConsultarLicitacoesParticipantesOutput> = {
  renderInput: renderConsultarLicitacoesParticipantesInput,
  renderOutput: renderConsultarLicitacoesParticipantesOutput,
  getInputLabel: (viewMode) => viewMode === "raw" ? "Parâmetros" : "Consulta",
  getOutputLabel: (viewMode) => viewMode === "raw" ? "Resultado" : "Resultados",
};
