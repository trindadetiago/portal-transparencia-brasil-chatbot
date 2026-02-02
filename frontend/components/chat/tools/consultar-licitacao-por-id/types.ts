/**
 * Types for consultar_licitacao_por_id tool
 * Based on Portal da Transparência API: /api-de-dados/licitacoes/{id}
 */

import type { LicitacaoDTO } from "../base/api-types";

export interface ConsultarLicitacaoPorIdInput {
  /** ID da licitação - obrigatório */
  id: number;
}

export type { LicitacaoDTO };
export type ConsultarLicitacaoPorIdOutput = LicitacaoDTO;
