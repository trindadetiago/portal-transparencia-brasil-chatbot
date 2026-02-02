/**
 * Types for consultar_contratos tool
 * Based on Portal da Transparência API: /api-de-dados/contratos
 */

import type { ContratoDTO } from "../base/api-types";

export interface ConsultarContratosInput {
  /** Código SIAFI do órgão - obrigatório */
  codigo_orgao: string;
  /** Página consultada (padrão: 1) */
  pagina?: number;
  /** Data inicial (DD/MM/AAAA) */
  data_inicial?: string;
  /** Data final (DD/MM/AAAA) */
  data_final?: string;
}

export type { ContratoDTO };
export type ConsultarContratosOutput = ContratoDTO[];
