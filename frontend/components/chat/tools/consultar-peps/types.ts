/**
 * Types for consultar_peps tool
 * Based on Portal da Transparência API: /api-de-dados/peps
 */

import type { PEPDTO } from "../base/api-types";

export interface ConsultarPepsInput {
  /** CPF do Servidor */
  cpf?: string;
  /** Nome do Servidor */
  nome?: string;
  /** Descrição da Função */
  descricao_funcao?: string;
  /** <a href='/swagger-ui.html#!/211rg227os/orgaosSiapeUsingGET'  */
  orgao_servidor_lotacao?: string;
  /** Data início do exercício, período inicial (DD/MM/AAAA) */
  data_inicio_exercicio_de?: string;
  /** Data início do exercício, período final (DD/MM/AAAA) */
  dat_inicio_exercicio_ate?: string;
  /** Data fim do exercício, período inicial (DD/MM/AAAA) */
  data_fim_exercicio_de?: string;
  /** Data fim do exercício, período final (DD/MM/AAAA) */
  dat_fim_exercicio_ate?: string;
  /** Página consultada */
  pagina: number;
}

export type { PEPDTO };
export type ConsultarPepsOutput = PEPDTO[];
