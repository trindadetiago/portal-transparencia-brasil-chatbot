/**
 * Types for consultar_convenios_por_numero_processo tool
 * Based on Portal da Transparência API: /api-de-dados/convenios/numero-processo
 */

import type { ConvenioDTO } from "../base/api-types";

export interface ConsultarConveniosPorNumeroProcessoInput {
  /** Número do processo */
  numero_processo: string;
  /** Página consultada */
  pagina: number;
}

export type { ConvenioDTO };
export type ConsultarConveniosPorNumeroProcessoOutput = ConvenioDTO[];
