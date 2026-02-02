/**
 * Types for consultar_viagens tool
 * Based on Portal da Transparência API: /api-de-dados/viagens
 */

import type { ViagemDTO } from "../base/api-types";

export interface ConsultarViagensInput {
  /** Data inicial da ida (DD/MM/AAAA) - obrigatório */
  data_ida_de: string;
  /** Data final da ida (DD/MM/AAAA) - obrigatório */
  data_ida_ate: string;
  /** Data inicial do retorno (DD/MM/AAAA) - obrigatório */
  data_retorno_de: string;
  /** Data final do retorno (DD/MM/AAAA) - obrigatório */
  data_retorno_ate: string;
  /** Código SIAFI do órgão - obrigatório */
  codigo_orgao: string;
  /** Página consultada (padrão: 1) */
  pagina?: number;
}

// Re-export from api-types for convenience
export type {
  ViagemDTO,
  DimViagemDTO,
  BeneficiarioDTO,
  CargoBeneficiarioDTO,
  FuncaoBeneficiarioDTO,
  OrgaoDTO,
  OrgaoMaximoDTO,
  UnidadeGestoraDTO,
} from "../base/api-types";

export type ConsultarViagensOutput = ViagemDTO[];
