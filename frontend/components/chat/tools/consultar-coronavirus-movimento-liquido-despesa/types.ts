/**
 * Types for consultar_coronavirus_movimento_liquido_despesa tool
 * Based on Portal da Transparência API: /api-de-dados/coronavirus/movimento-liquido-despesa
 */

import type { DespesaLiquidaAnualPorFuncaoESubfuncaoDTO } from "../base/api-types";

export interface ConsultarCoronavirusMovimentoLiquidoDespesaInput {
  /** Mês e Ano de lançamento (AAAAMM) */
  mes_ano_lancamento: number;
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
export type ConsultarCoronavirusMovimentoLiquidoDespesaOutput = DespesaLiquidaAnualPorFuncaoESubfuncaoDTO[];
