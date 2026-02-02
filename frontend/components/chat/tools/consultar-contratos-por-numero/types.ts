/**
 * Types for consultar_contratos_por_numero tool
 * Based on Portal da Transparência API: /api-de-dados/contratos/numero
 */

import type { ContratoDTO } from "../base/api-types";

export interface ConsultarContratosPorNumeroInput {
  /** Número do contrato */
  numero: string;
  /** Página consultada */
  pagina: number;
}

export type { ContratoDTO };
export type ConsultarContratosPorNumeroOutput = ContratoDTO[];
