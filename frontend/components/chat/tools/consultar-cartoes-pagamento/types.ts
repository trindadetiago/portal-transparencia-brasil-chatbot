/**
 * Types for consultar_cartoes_pagamento tool
 * Based on Portal da Transparência API: /api-de-dados/cartoes
 */

import type { CartoesDTO } from "../base/api-types";

export interface ConsultarCartoesPagamentoInput {
  /** Página consultada (padrão: 1) */
  pagina?: number;
  /** Mês/Ano inicial do extrato (YYYYMM) */
  mes_extrato_inicio?: string;
  /** Mês/Ano final do extrato (YYYYMM) */
  mes_extrato_fim?: string;
  /** Código SIAFI do órgão */
  codigo_orgao?: string;
  /** CPF do portador do cartão */
  cpf_portador?: string;
  /** CPF ou CNPJ do favorecido */
  cpf_cnpj_favorecido?: string;
}

export type { CartoesDTO };
export type ConsultarCartoesPagamentoOutput = CartoesDTO[];
