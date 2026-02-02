/**
 * Types for consultar_peti_por_municipio tool
 * Based on Portal da Transparência API: /api-de-dados/peti-por-municipio
 */

import type { BeneficioPorMunicipioDTO } from "../base/api-types";

export interface ConsultarPetiPorMunicipioInput {
  /** Ano e mês de referência (AAAAMM) */
  mes_ano: number;
  /** Código IBGE */
  codigo_ibge: string;
  /** Página consultada */
  pagina: number;
}

export type { BeneficioPorMunicipioDTO };
export type ConsultarPetiPorMunicipioOutput = BeneficioPorMunicipioDTO[];
