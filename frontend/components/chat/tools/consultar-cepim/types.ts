/**
 * Types for consultar_cepim tool
 * Based on Portal da Transparência API: /api-de-dados/cepim
 */

import type { CepimDTO } from "../base/api-types";

export interface ConsultarCepimInput {
  /** Página consultada (padrão: 1) */
  pagina?: number;
  /** CNPJ do sancionado */
  cnpj_sancionado?: string;
  /** Nome do sancionado */
  nome_sancionado?: string;
  /** UF do sancionado */
  uf_sancionado?: string;
  /** Nome do órgão/entidade */
  orgao_entidade?: string;
}

export type { CepimDTO };
export type ConsultarCepimOutput = CepimDTO[];
