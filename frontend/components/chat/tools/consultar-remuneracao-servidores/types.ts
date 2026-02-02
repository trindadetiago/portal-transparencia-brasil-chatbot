/**
 * Types for consultar_remuneracao_servidores tool
 * Based on Portal da Transparência API: /api-de-dados/servidores/remuneracao
 */

import type { ServidorRemuneracaoDTO } from "../base/api-types";

export interface ConsultarRemuneracaoServidoresInput {
  /** Mês/Ano no formato YYYYMM (ex: 202401) - obrigatório */
  mes_ano: number;
  /** Página consultada (padrão: 1) */
  pagina?: number;
  /** ID do servidor (idServidorAposentadoPensionista) */
  id?: number;
  /** CPF do servidor */
  cpf?: string;
}

export type { ServidorRemuneracaoDTO };
export type ConsultarRemuneracaoServidoresOutput = ServidorRemuneracaoDTO[];
