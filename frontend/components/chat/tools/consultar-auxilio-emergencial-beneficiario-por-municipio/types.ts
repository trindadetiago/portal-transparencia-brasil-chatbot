/**
 * Types for consultar_auxilio_emergencial_beneficiario_por_municipio tool
 * Based on Portal da Transparência API: /api-de-dados/auxilio-emergencial-beneficiario-por-municipio
 */

import type { AuxilioEmergencialDTO } from "../base/api-types";

export interface ConsultarAuxilioEmergencialBeneficiarioPorMunicipioInput {
  /** Ano e mês de referência (AAAAMM) */
  mes_ano: number;
  /** Código IBGE */
  codigo_ibge: string;
  /** Página consultada */
  pagina: number;
}

export type { AuxilioEmergencialDTO };
export type ConsultarAuxilioEmergencialBeneficiarioPorMunicipioOutput = AuxilioEmergencialDTO[];
