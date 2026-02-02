/**
 * Types for consultar_renuncias_fiscais_empresas_habilitadas tool
 * Based on Portal da Transparência API: /api-de-dados/renuncias-fiscais-empresas-habilitadas-beneficios-fiscais
 */

import type { EmpresaHabilitadaBeneficioFiscalDTO } from "../base/api-types";

export interface ConsultarRenunciasFiscaisEmpresasHabilitadasInput {
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

export type { EmpresaHabilitadaBeneficioFiscalDTO };
export type ConsultarRenunciasFiscaisEmpresasHabilitadasOutput = EmpresaHabilitadaBeneficioFiscalDTO[];
