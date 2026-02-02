/**
 * Types for consultar_recursos_recebidos tool
 * Based on Portal da Transparência API: /api-de-dados/despesas/recursos-recebidos
 */

import type { PessoaRecursosRecebidosUGMesDesnormalizadaDTO } from "../base/api-types";

export interface ConsultarRecursosRecebidosInput {
  /** Mês/Ano inicial no formato YYYYMM - obrigatório */
  mes_ano_inicio: string;
  /** Mês/Ano final no formato YYYYMM - obrigatório */
  mes_ano_fim: string;
  /** Página consultada (padrão: 1) */
  pagina?: number;
  /** Nome do favorecido */
  nome_favorecido?: string;
  /** CPF ou CNPJ do favorecido */
  codigo_favorecido?: string;
  /** Sigla da UF */
  uf?: string;
  /** Código IBGE do município */
  codigo_ibge?: string;
}

export type { PessoaRecursosRecebidosUGMesDesnormalizadaDTO };
export type ConsultarRecursosRecebidosOutput = PessoaRecursosRecebidosUGMesDesnormalizadaDTO[];
