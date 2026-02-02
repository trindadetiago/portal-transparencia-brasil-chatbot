/**
 * Types for consultar_contratos_apostilamento tool
 * Based on Portal da Transparência API: /api-de-dados/contratos/apostilamento
 */

import type { ApostilamentoDTO } from "../base/api-types";

export interface ConsultarContratosApostilamentoInput {
  /** ID do registro */
  id: number;
}

export type { ApostilamentoDTO };
export type ConsultarContratosApostilamentoOutput = ApostilamentoDTO[];
