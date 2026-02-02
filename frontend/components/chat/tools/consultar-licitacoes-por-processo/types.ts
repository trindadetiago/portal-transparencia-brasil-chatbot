/**
 * Types for consultar_licitacoes_por_processo tool
 * Based on Portal da Transparência API: /api-de-dados/licitacoes/por-processo
 */

import type { LicitacaoDTO } from "../base/api-types";

export interface ConsultarLicitacoesPorProcessoInput {
  /** Número do Processo */
  processo: string;
}

export type { LicitacaoDTO };
export type ConsultarLicitacoesPorProcessoOutput = LicitacaoDTO[];
