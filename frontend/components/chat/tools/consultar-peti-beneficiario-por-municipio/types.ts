/**
 * Types for consultar_peti_beneficiario_por_municipio tool
 * Based on Portal da Transparência API: /api-de-dados/peti-beneficiario-por-municipio
 */

import type { PetiDTO } from "../base/api-types";

export interface ConsultarPetiBeneficiarioPorMunicipioInput {
  /** Ano e mês de referência (AAAAMM) */
  mes_ano: number;
  /** Código IBGE */
  codigo_ibge: string;
  /** Página consultada */
  pagina: number;
}

export type { PetiDTO };
export type ConsultarPetiBeneficiarioPorMunicipioOutput = PetiDTO[];
