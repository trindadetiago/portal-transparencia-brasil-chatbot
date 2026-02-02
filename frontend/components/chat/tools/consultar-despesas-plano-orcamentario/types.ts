/**
 * Types for consultar_despesas_plano_orcamentario tool
 * Based on Portal da Transparência API: /api-de-dados/despesas/plano-orcamentario
 */

import type { DespesasPorPlanoOrcamentarioDTO } from "../base/api-types";

export interface ConsultarDespesasPlanoOrcamentarioInput {
  /** Código Plano Orçamentária */
  cod_plano_orcamentario?: string;
  /** Descrição Plano Orçamentário */
  desc_plano_orcamentario?: string;
  /** Identificado de acompanhamento */
  cod_po_identf_acompanhamento?: string;
  /** Ano */
  ano: number;
  /** Página consultada */
  pagina: number;
}

export type { DespesasPorPlanoOrcamentarioDTO };
export type ConsultarDespesasPlanoOrcamentarioOutput = DespesasPorPlanoOrcamentarioDTO[];
