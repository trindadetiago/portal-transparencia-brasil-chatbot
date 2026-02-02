/**
 * Types for consultar_contratos_por_cpf_cnpj tool
 * Based on Portal da Transparência API: /api-de-dados/contratos/cpf-cnpj
 */

import type { ContratoDTO } from "../base/api-types";

export interface ConsultarContratosPorCpfCnpjInput {
  /** CPF ou CNPJ do fornecedor - obrigatório */
  cpf_cnpj: string;
  /** Página consultada (padrão: 1) */
  pagina?: number;
}

export type { ContratoDTO };
export type ConsultarContratosPorCpfCnpjOutput = ContratoDTO[];
