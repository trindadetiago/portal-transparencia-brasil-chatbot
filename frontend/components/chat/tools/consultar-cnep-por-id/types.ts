/**
 * Types for consultar_cnep_por_id tool
 * Based on Portal da Transparência API: /api-de-dados/cnep/{id}
 */

import type { CnepDTO } from "../base/api-types";

export interface ConsultarCnepPorIdInput {
  /** ID do registro - obrigatório */
  id: number;
}

export type { CnepDTO };
export type ConsultarCnepPorIdOutput = CnepDTO;
