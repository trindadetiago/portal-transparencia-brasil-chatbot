/**
 * Types for consultar_pessoa_fisica tool
 * Based on Portal da Transparência API: /api-de-dados/pessoa-fisica
 */

import type { PessoaFisicaDTO } from "../base/api-types";

export interface ConsultarPessoaFisicaInput {
  /** CPF da pessoa (obrigatório se NIS não informado) */
  cpf?: string;
  /** NIS da pessoa (obrigatório se CPF não informado) */
  nis?: string;
}

export type { PessoaFisicaDTO };
export type ConsultarPessoaFisicaOutput = PessoaFisicaDTO;
