/**
 * Types for consultar_permissionarios tool
 * Based on Portal da Transparência API: /api-de-dados/permissionarios
 */

import type { PermissionarioDTO } from "../base/api-types";

export interface ConsultarPermissionariosInput {
  /** <a href='/swagger-ui/index.html#/Órgãos/orgaosSiafi' target= */
  codigo_orgao_responsavel_gestao_siafi?: string;
  /** Descrição do Órgão do Ocupante */
  descricao_orgao_ocupante?: string;
  /** CPF Ocupante */
  cpf_ocupante?: string;
  /** Data início ocupação(DD/MM/AAAA) */
  data_inicio_ocupacao?: string;
  /** Data fim ocupação (DD/MM/AAAA) */
  data_fim_ocupacao?: string;
  /** Página consultada */
  pagina: number;
}

export type { PermissionarioDTO };
export type ConsultarPermissionariosOutput = PermissionarioDTO[];
