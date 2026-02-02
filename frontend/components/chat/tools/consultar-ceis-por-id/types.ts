/**
 * Types for consultar_ceis_por_id tool
 * Based on Portal da Transparência API: /api-de-dados/ceis/{id}
 */

import type { CeisDTO } from "../base/api-types";

export interface ConsultarCeisPorIdInput {
  /** ID do registro - obrigatório */
  id: number;
}

export type { CeisDTO };
export type ConsultarCeisPorIdOutput = CeisDTO;
