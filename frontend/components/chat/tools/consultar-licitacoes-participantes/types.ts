/**
 * Types for consultar_licitacoes_participantes tool
 * Based on Portal da Transparência API: /api-de-dados/licitacoes/participantes
 */

import type { ParticipanteLicitacaoDTO } from "../base/api-types";

export interface ConsultarLicitacoesParticipantesInput {
  /** <a href='/swagger-ui.html#!/Licita231245es32do32Poder32Execu */
  codigo_ug: string;
  /** Número da Licitação (NNNNNAAAA) */
  numero: string;
  /** <a href='/swagger-ui.html#!/Licita231245es32do32Poder32Execu */
  codigo_modalidade: string;
  /** Página consultada */
  pagina: number;
}

export type { ParticipanteLicitacaoDTO };
export type ConsultarLicitacoesParticipantesOutput = ParticipanteLicitacaoDTO[];
