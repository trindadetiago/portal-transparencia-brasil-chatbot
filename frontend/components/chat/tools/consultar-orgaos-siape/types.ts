/**
 * Types for consultar_orgaos_siape tool
 * Based on Portal da Transparência API: /api-de-dados/orgaos-siape
 */

import type { CodigoDescricaoDTO } from "../base/api-types";

export interface ConsultarOrgaosSiapeInput {
  /** Página consultada (padrão: 1) */
  pagina?: number;
  /** Código do órgão */
  codigo?: string;
  /** Descrição/nome do órgão */
  descricao?: string;
}

export type { CodigoDescricaoDTO };
export type ConsultarOrgaosSiapeOutput = CodigoDescricaoDTO[];
