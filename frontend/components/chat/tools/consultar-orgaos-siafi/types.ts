/**
 * Types for consultar_orgaos_siafi tool
 * Based on Portal da Transparência API: /api-de-dados/orgaos-siafi
 */

import type { CodigoDescricaoDTO } from "../base/api-types";

export interface ConsultarOrgaosSiafiInput {
  /** Página consultada (padrão: 1) */
  pagina?: number;
  /** Código do órgão */
  codigo?: string;
  /** Descrição/nome do órgão */
  descricao?: string;
}

export type { CodigoDescricaoDTO };
export type ConsultarOrgaosSiafiOutput = CodigoDescricaoDTO[];
