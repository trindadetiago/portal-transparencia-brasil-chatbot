/**
 * Types for consultar_contratos_termo_aditivo tool
 * Based on Portal da Transparência API: /api-de-dados/contratos/termo-aditivo
 */

import type { TermoAditivoDTO } from "../base/api-types";

export interface ConsultarContratosTermoAditivoInput {
  /** ID do registro */
  id: number;
}

export type { TermoAditivoDTO };
export type ConsultarContratosTermoAditivoOutput = TermoAditivoDTO[];
