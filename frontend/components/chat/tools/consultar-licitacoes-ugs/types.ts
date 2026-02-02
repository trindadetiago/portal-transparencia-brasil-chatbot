/**
 * Types for consultar_licitacoes_ugs tool
 * Based on Portal da Transparência API: /api-de-dados/licitacoes/ugs
 */

import type { UnidadeGestoraDTO } from "../base/api-types";

export interface ConsultarLicitacoesUgsInput {
  /** Página consultada */
  pagina: number;
}

export type { UnidadeGestoraDTO };
export type ConsultarLicitacoesUgsOutput = UnidadeGestoraDTO[];
