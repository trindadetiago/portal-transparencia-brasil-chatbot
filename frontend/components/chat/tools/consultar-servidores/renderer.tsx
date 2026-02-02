/**
 * Renderer for consultar_servidores tool
 */

import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { CPFCNPJDisplay } from "../base/components/CPFCNPJDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { StatusBadge } from "../base/components/StatusBadge";
import { parseToArray } from "../base/utils/parsers";
import { truncate } from "../base/utils/formatters";
import type { ConsultarServidoresInput, ConsultarServidoresOutput, CadastroServidorDTO } from "./types";
import { Users } from "lucide-react";

export function renderConsultarServidoresInput(input: ConsultarServidoresInput) {
  const activeFilters: Array<{ label: string; value: any }> = [];
  
  if (input.nome) activeFilters.push({ label: "Nome", value: input.nome });
  if (input.cpf) activeFilters.push({ label: "CPF", value: input.cpf });
  if (input.tipo_servidor) {
    activeFilters.push({
      label: "Tipo",
      value: input.tipo_servidor === 1 ? "Civil" : "Militar"
    });
  }
  if (input.orgao_exercicio) activeFilters.push({ label: "Órgão Exercício", value: input.orgao_exercicio });
  if (input.orgao_lotacao) activeFilters.push({ label: "Órgão Lotação", value: input.orgao_lotacao });
  
  return (
    <div className="space-y-1">
      <InfoField label="Página" value={input.pagina} />
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-1">
          {activeFilters.map((filter, idx) => (
            <StatusBadge key={idx} status={`${filter.label}: ${filter.value}`} variant="info" />
          ))}
        </div>
      )}
    </div>
  );
}

export function renderConsultarServidoresOutput(output: ConsultarServidoresOutput | string) {
  const servidoresCompletos = parseToArray<CadastroServidorDTO>(output);
  
  if (servidoresCompletos.length === 0) {
    return <EmptyState message="Nenhum servidor encontrado" icon={<Users className="w-4 h-4" />} />;
  }
  
  // Flatten the nested structure for display
  const servidoresFlat = servidoresCompletos.map(item => {
    const srv = item.servidor;
    
    // Get cargo from funcao or fichas
    let cargo = srv?.funcao?.descricaoFuncaoCargo || "";
    if (!cargo && item.fichasFuncao && item.fichasFuncao.length > 0) {
      cargo = item.fichasFuncao[0].funcao || "";
    }
    if (!cargo && item.fichasCargoEfetivo && item.fichasCargoEfetivo.length > 0) {
      cargo = item.fichasCargoEfetivo[0].cargo || "";
    }
    
    return {
      nome: srv?.pessoa?.nome || "",
      cpf: srv?.pessoa?.cpfFormatado || "",
      orgao: srv?.orgaoServidorExercicio?.nome || srv?.orgaoServidorLotacao?.nome || "",
      cargo: cargo,
    };
  });
  
  return (
    <DataTable
      columns={[
        {
          key: "nome",
          label: "Nome",
          render: (value: string) => (
            <span className="font-medium">{truncate(value, 30)}</span>
          ),
        },
        {
          key: "cpf",
          label: "CPF",
          render: (value: string) => <CPFCNPJDisplay value={value} />,
        },
        {
          key: "orgao",
          label: "Órgão",
          render: (value: string) => truncate(value, 25),
        },
        {
          key: "cargo",
          label: "Cargo",
          render: (value: string) => truncate(value || "N/A", 20),
        },
      ]}
      data={servidoresFlat}
      maxRows={8}
    />
  );
}
