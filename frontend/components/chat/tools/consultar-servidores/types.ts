/**
 * Types for consultar_servidores tool
 * Based on Portal da Transparência API: /api-de-dados/servidores
 */

import type { CadastroServidorDTO } from "../base/api-types";

export interface ConsultarServidoresInput {
  /** Página consultada (padrão: 1) - obrigatório */
  pagina: number;
  /** Tipo do Servidor (1=Civil, 2=Militar) */
  tipo_servidor?: number;
  /** Situação do Servidor (1=Ativo, 2=Inativo, 3=Pensionista) */
  situacao_servidor?: number;
  /** CPF do Servidor */
  cpf?: string;
  /** Nome do Servidor */
  nome?: string;
  /** Código SIAPE do órgão de exercício */
  orgao_exercicio?: string;
  /** Código SIAPE do órgão de lotação */
  orgao_lotacao?: string;
}

export type { CadastroServidorDTO };
export type ConsultarServidoresOutput = CadastroServidorDTO[];
