/**
 * Types for consultar_emendas tool
 * Based on Portal da Transparência API: /api-de-dados/emendas
 */

import type { ConsultaEmendasDTO } from "../base/api-types";

export interface ConsultarEmendasInput {
  /** Página consultada (padrão: 1) */
  pagina?: number;
  /** Ano da emenda */
  ano?: number;
  /** Código da emenda */
  codigo_emenda?: string;
  /** Número da emenda */
  numero_emenda?: string;
  /** Nome do autor da emenda */
  nome_autor?: string;
  /** Tipo da emenda */
  tipo_emenda?: string;
}

export type { ConsultaEmendasDTO };
export type ConsultarEmendasOutput = ConsultaEmendasDTO[];
