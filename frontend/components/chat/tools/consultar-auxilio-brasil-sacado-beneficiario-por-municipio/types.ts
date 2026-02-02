/**
 * Types for consultar_auxilio_brasil_sacado_beneficiario_por_municipio tool
 * Based on Portal da Transparência API: /api-de-dados/auxilio-brasil-sacado-beneficiario-por-municipio
 */

import type { AuxilioBrasilPagoDTO } from "../base/api-types";

export interface ConsultarAuxilioBrasilSacadoBeneficiarioPorMunicipioInput {
  /** Ano e mês de referência (AAAAMM) */
  mes_ano: number;
  /** Código IBGE */
  codigo_ibge: string;
  /** Página consultada */
  pagina: number;
}

export type { AuxilioBrasilPagoDTO };
export type ConsultarAuxilioBrasilSacadoBeneficiarioPorMunicipioOutput = AuxilioBrasilPagoDTO[];
