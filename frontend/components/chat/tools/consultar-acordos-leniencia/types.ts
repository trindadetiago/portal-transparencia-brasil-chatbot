/**
 * Types for consultar_acordos_leniencia tool
 * Based on Portal da Transparência API: /api-de-dados/acordos-leniencia
 */

import type { AcordosLenienciaDTO } from "../base/api-types";

export interface ConsultarAcordosLenienciaInput {
  /** Página consultada (padrão: 1) - obrigatório */
  pagina: number;
  /** CNPJ do sancionado */
  cnpj_sancionado?: string;
  /** Nome do sancionado */
  nome_sancionado?: string;
  /** Situação do acordo */
  situacao?: string;
  /** Data inicial da sanção (DD/MM/AAAA) */
  data_inicial_sancao?: string;
  /** Data final da sanção (DD/MM/AAAA) */
  data_final_sancao?: string;
}

export type { AcordosLenienciaDTO };
export type ConsultarAcordosLenienciaOutput = AcordosLenienciaDTO[];
