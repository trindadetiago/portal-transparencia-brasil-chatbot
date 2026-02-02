/**
 * Types for consultar_bolsa_familia_disponivel_por_cpf_ou_nis tool
 * Based on Portal da Transparência API: /api-de-dados/bolsa-familia-disponivel-por-cpf-ou-nis
 */

import type { BolsaFamiliaDTO } from "../base/api-types";

export interface ConsultarBolsaFamiliaDisponivelPorCpfOuNisInput {
  /** CPF/NIS (sem máscara, somente números) */
  codigo: string;
  /** Ano e mês de referência (AAAAMM) */
  ano_mes_referencia?: number;
  /** Ano e mês de competência (AAAAMM) */
  ano_mes_competencia?: number;
  /** Página consultada */
  pagina: number;
}

export type { BolsaFamiliaDTO };
export type ConsultarBolsaFamiliaDisponivelPorCpfOuNisOutput = BolsaFamiliaDTO[];
