/**
 * Types for consultar_servidores_por_orgao tool
 * Based on Portal da Transparência API: /api-de-dados/servidores/por-orgao
 */

import type { ServidorPorOrgaoDTO } from "../base/api-types";

export interface ConsultarServidoresPorOrgaoInput {
  /** <a href='/swagger-ui.html#!/211rg227os/orgaosSiapeUsingGET'  */
  orgao_lotacao?: string;
  /** <a href='/swagger-ui.html#!/211rg227os/orgaosSiapeUsingGET'  */
  orgao_exercicio?: string;
  /** Tipo servidor (Civil: 1; Militar: 2) */
  tipo_servidor?: number;
  /** Tipo vínculo (Função: 1; Cargo: 2; Outros: 3; Militares: 4 */
  tipo_vinculo?: number;
  /** Licença (Sim: 1; Não: 0) */
  licenca?: number;
  /** Página consultada */
  pagina: number;
}

export type { ServidorPorOrgaoDTO };
export type ConsultarServidoresPorOrgaoOutput = ServidorPorOrgaoDTO[];
