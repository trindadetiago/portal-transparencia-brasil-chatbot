/**
 * Types for consultar_convenios_por_numero tool
 * Based on Portal da Transparência API: /api-de-dados/convenios/numero
 */

import type { ConvenioDTO } from "../base/api-types";

export interface ConsultarConveniosPorNumeroInput {
  /** Número do convênio */
  numero: string;
  /** Página consultada */
  pagina: number;
}

export type { ConvenioDTO };
export type ConsultarConveniosPorNumeroOutput = ConvenioDTO[];
