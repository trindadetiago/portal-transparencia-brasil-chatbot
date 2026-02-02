/**
 * Types for consultar_seguro_defeso_por_municipio tool
 * Based on Portal da Transparência API: /api-de-dados/seguro-defeso-por-municipio
 */

import type { BeneficioPorMunicipioDTO } from "../base/api-types";

export interface ConsultarSeguroDefesoPorMunicipioInput {
  /** Mês/Ano no formato YYYYMM (ex: 202401) - obrigatório */
  mes_ano: string;
  /** Código IBGE do município - obrigatório */
  codigo_ibge: string;
  /** Página consultada (padrão: 1) */
  pagina?: number;
}

export type { BeneficioPorMunicipioDTO };
export type ConsultarSeguroDefesoPorMunicipioOutput = BeneficioPorMunicipioDTO[];
