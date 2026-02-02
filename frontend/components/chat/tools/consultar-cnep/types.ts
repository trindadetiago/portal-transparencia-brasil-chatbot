/**
 * Types for consultar_cnep tool
 * Based on Portal da Transparência API: /api-de-dados/cnep
 */

import type { CnepDTO } from "../base/api-types";

export interface ConsultarCnepInput {
  /** Página consultada (padrão: 1) */
  pagina?: number;
  /** CPF ou CNPJ do sancionado */
  codigo_sancionado?: string;
  /** Nome do sancionado */
  nome_sancionado?: string;
  /** Nome do órgão sancionador */
  orgao_sancionador?: string;
  /** Data inicial da sanção (DD/MM/AAAA) */
  data_inicial_sancao?: string;
  /** Data final da sanção (DD/MM/AAAA) */
  data_final_sancao?: string;
}

export type { CnepDTO };
export type ConsultarCnepOutput = CnepDTO[];
