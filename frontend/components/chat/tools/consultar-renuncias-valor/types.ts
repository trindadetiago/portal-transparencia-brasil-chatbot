/**
 * Types for consultar_renuncias_valor tool
 * Based on Portal da Transparência API: /api-de-dados/renuncias-valor
 */

import type { RenunciaDTO } from "../base/api-types";

export interface ConsultarRenunciasValorInput {
  /** Nome ou Sigla UF */
  nome_sigla_uf?: string;
  /** Código IBGE */
  codigo_ibge?: string;
  /** CNPJ */
  cnpj?: string;
  /** Página consultada */
  pagina: number;
}

export type { RenunciaDTO };
export type ConsultarRenunciasValorOutput = RenunciaDTO[];
