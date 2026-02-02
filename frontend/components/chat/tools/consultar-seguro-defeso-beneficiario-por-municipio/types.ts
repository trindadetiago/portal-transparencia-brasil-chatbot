/**
 * Types for consultar_seguro_defeso_beneficiario_por_municipio tool
 * Based on Portal da Transparência API: /api-de-dados/seguro-defeso-beneficiario-por-municipio
 */

import type { SeguroDefesoDTO } from "../base/api-types";

export interface ConsultarSeguroDefesoBeneficiarioPorMunicipioInput {
  /** Ano e mês de referência (AAAAMM) */
  mes_ano: number;
  /** Código IBGE */
  codigo_ibge: string;
  /** Página consultada */
  pagina: number;
}

export type { SeguroDefesoDTO };
export type ConsultarSeguroDefesoBeneficiarioPorMunicipioOutput = SeguroDefesoDTO[];
