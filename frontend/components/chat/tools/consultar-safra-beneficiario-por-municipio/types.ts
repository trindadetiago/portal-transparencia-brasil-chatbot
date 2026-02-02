/**
 * Types for consultar_safra_beneficiario_por_municipio tool
 * Based on Portal da Transparência API: /api-de-dados/safra-beneficiario-por-municipio
 */

import type { SafraDTO } from "../base/api-types";

export interface ConsultarSafraBeneficiarioPorMunicipioInput {
  /** Ano e mês de referência (AAAAMM) */
  mes_ano: number;
  /** Código IBGE */
  codigo_ibge: string;
  /** Página consultada */
  pagina: number;
}

export type { SafraDTO };
export type ConsultarSafraBeneficiarioPorMunicipioOutput = SafraDTO[];
