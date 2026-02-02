/**
 * Types for consultar_ceaf tool
 * Based on Portal da Transparência API: /api-de-dados/ceaf
 */

import type { CeafDTO } from "../base/api-types";

export interface ConsultarCeafInput {
  /** Página consultada (padrão: 1) */
  pagina?: number;
  /** CPF do sancionado */
  cpf_sancionado?: string;
  /** Nome do sancionado */
  nome_sancionado?: string;
  /** Órgão de lotação */
  orgao_lotacao?: string;
  /** Data início de publicação (DD/MM/AAAA) */
  data_publicacao_inicio?: string;
  /** Data fim de publicação (DD/MM/AAAA) */
  data_publicacao_fim?: string;
}

export type { CeafDTO };
export type ConsultarCeafOutput = CeafDTO[];
