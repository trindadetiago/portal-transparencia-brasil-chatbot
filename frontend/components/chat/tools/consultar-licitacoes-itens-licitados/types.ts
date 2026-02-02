/**
 * Types for consultar_licitacoes_itens_licitados tool
 * Based on Portal da Transparência API: /api-de-dados/licitacoes/itens-licitados
 */

import type { ItemLicitacaoDTO } from "../base/api-types";

export interface ConsultarLicitacoesItensLicitadosInput {
  /** ID do registro */
  id: number;
  /** Página consultada */
  pagina: number;
}

export type { ItemLicitacaoDTO };
export type ConsultarLicitacoesItensLicitadosOutput = ItemLicitacaoDTO[];
