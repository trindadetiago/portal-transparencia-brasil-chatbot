/**
 * Types for consultar_imoveis_funcionais tool
 * Based on Portal da Transparência API: /api-de-dados/imoveis
 */

import type { ImovelFuncionalDTO } from "../base/api-types";

export interface ConsultarImoveisFuncionaisInput {
  /** Página consultada (padrão: 1) */
  pagina?: number;
  /** Código SIAFI do órgão responsável */
  codigo_orgao?: string;
  /** Situação do imóvel */
  situacao?: string;
  /** Região administrativa */
  regiao?: string;
  /** CEP do imóvel */
  cep?: string;
}

export type { ImovelFuncionalDTO };
export type ConsultarImoveisFuncionaisOutput = ImovelFuncionalDTO[];
