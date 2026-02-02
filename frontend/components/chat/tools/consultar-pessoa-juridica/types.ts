/**
 * Types for consultar_pessoa_juridica tool
 * Based on Portal da Transparência API: /api-de-dados/pessoa-juridica
 */

import type { PessoaJuridicaDTO } from "../base/api-types";

export interface ConsultarPessoaJuridicaInput {
  /** CNPJ da empresa - obrigatório */
  cnpj: string;
}

export type { PessoaJuridicaDTO };
export type ConsultarPessoaJuridicaOutput = PessoaJuridicaDTO;
