/**
 * Types for consultar_bolsa_familia_antiga_por_municipio tool
 * Based on Portal da Transparência API: /api-de-dados/bolsa-familia-por-municipio
 */

import type { BeneficioPorMunicipioDTO } from "../base/api-types";

export interface ConsultarBolsaFamiliaAntigaPorMunicipioInput {
  /** Ano e mês de referência (AAAAMM) */
  mes_ano: number;
  /** Código IBGE */
  codigo_ibge: string;
  /** Página consultada */
  pagina: number;
}

export type { BeneficioPorMunicipioDTO };
export type ConsultarBolsaFamiliaAntigaPorMunicipioOutput = BeneficioPorMunicipioDTO[];
