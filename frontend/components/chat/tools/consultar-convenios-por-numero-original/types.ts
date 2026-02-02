/**
 * Types for consultar_convenios_por_numero_original tool
 * Based on Portal da Transparência API: /api-de-dados/convenios/numero-original
 */

import type { ConvenioDTO } from "../base/api-types";

export interface ConsultarConveniosPorNumeroOriginalInput {
  /** Número original do convênio */
  numero_original: string;
  /** Página consultada */
  pagina: number;
}

export type { ConvenioDTO };
export type ConsultarConveniosPorNumeroOriginalOutput = ConvenioDTO[];
