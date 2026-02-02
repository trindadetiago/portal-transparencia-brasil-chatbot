/**
 * Types for consultar_auxilio_brasil_por_municipio tool
 * Based on Portal da Transparência API: /api-de-dados/auxilio-brasil-por-municipio
 */

import type { BeneficioPorMunicipioDTO } from "../base/api-types";

export interface ConsultarAuxilioBrasilPorMunicipioInput {
  /** Mês/Ano no formato YYYYMM (ex: 202401) - obrigatório */
  mes_ano: number;
  /** Código IBGE do município - obrigatório */
  codigo_ibge: string;
  /** Página consultada (padrão: 1) - obrigatório */
  pagina: number;
}

export type { BeneficioPorMunicipioDTO };
export type ConsultarAuxilioBrasilPorMunicipioOutput = BeneficioPorMunicipioDTO[];
