/**
 * Types for consultar_renuncias_fiscais_empresas_imunes_isentas tool
 * Based on Portal da Transparência API: /api-de-dados/renuncias-fiscais-empresas-imunes-isentas
 */

import type { EmpresaImuneIsentaDTO } from "../base/api-types";

export interface ConsultarRenunciasFiscaisEmpresasImunesIsentasInput {
  /** Nome ou Sigla UF */
  nome_sigla_uf?: string;
  /** Código IBGE */
  codigo_ibge?: string;
  /** CNPJ */
  cnpj?: string;
  /** Beneficiário/Nome Fantasia */
  beneficiario_nome_fantasia?: string;
  /** Página consultada */
  pagina: number;
}

export type { EmpresaImuneIsentaDTO };
export type ConsultarRenunciasFiscaisEmpresasImunesIsentasOutput = EmpresaImuneIsentaDTO[];
