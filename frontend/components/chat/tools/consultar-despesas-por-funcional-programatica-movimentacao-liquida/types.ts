/**
 * Types for consultar_despesas_por_funcional_programatica_movimentacao_liquida tool
 * Based on Portal da Transparência API: /api-de-dados/despesas/por-funcional-programatica/movimentacao-liquida
 */

import type { DespesaLiquidaAnualPorFuncaoESubfuncaoDTO } from "../base/api-types";

export interface ConsultarDespesasPorFuncionalProgramaticaMovimentacaoLiquidaInput {
  /** Ano da despesa (AAAA) */
  ano: number;
  /** Função (código SIAFI) */
  funcao?: string;
  /** Subfunção (código SIAFI) */
  subfuncao?: string;
  /** Programa (código SIAFI) */
  programa?: string;
  /** Ação (código SIAFI) */
  acao?: string;
  /** Grupo Despesa (código SIAFI) */
  grupo_despesa?: string;
  /** Elemento Despesa (código SIAFI) */
  elemento_despesa?: string;
  /** Modalidade de Aplicação (código SIAFI) */
  modalidade_aplicacao?: string;
  /** Id Plano orçamentário */
  id_plano_orcamentario?: number;
  /** Página consultada */
  pagina: number;
}

export type { DespesaLiquidaAnualPorFuncaoESubfuncaoDTO };
export type ConsultarDespesasPorFuncionalProgramaticaMovimentacaoLiquidaOutput = DespesaLiquidaAnualPorFuncaoESubfuncaoDTO[];
