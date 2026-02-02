/**
 * Types for consultar_contratos_por_processo tool
 * Based on Portal da Transparência API: /api-de-dados/contratos/processo
 */

import type { ContratoDTO } from "../base/api-types";

export interface ConsultarContratosPorProcessoInput {
  /** Número do processo */
  processo: string;
  /** Página consultada */
  pagina: number;
}

export type { ContratoDTO };
export type ConsultarContratosPorProcessoOutput = ContratoDTO[];
