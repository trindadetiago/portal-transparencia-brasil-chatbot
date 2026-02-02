import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { DateDisplay } from "../base/components/DateDisplay";
import { SmartStatusBadge } from "../base/components/StatusBadge";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import { truncate } from "../base/utils/formatters";
import type { ConsultarLicitacoesInput, ConsultarLicitacoesOutput, LicitacaoDTO } from "./types";
import { Gavel } from "lucide-react";

export function renderConsultarLicitacoesInput(input: ConsultarLicitacoesInput) {
  return (
    <div className="space-y-1">
      <InfoField label="Órgão" value={input.codigo_orgao} />
      {(input.data_inicial || input.data_final) && (
        <InfoField label="Período" value={`${input.data_inicial || "..."} - ${input.data_final || "..."}`} />
      )}
    </div>
  );
}

export function renderConsultarLicitacoesOutput(output: ConsultarLicitacoesOutput | string) {
  const licitacoes = parseToArray<LicitacaoDTO>(output);
  
  if (licitacoes.length === 0) {
    return <EmptyState message="Nenhuma licitação encontrada" icon={<Gavel className="w-4 h-4" />} />;
  }
  
  return (
    <DataTable
      columns={[
        { key: "licitacao", label: "Número", render: (value: LicitacaoDTO["licitacao"]) => <span className="font-mono text-[10px]">{value?.numero || ""}</span> },
        { key: "modalidadeLicitacao", label: "Modalidade", render: (value: string) => <SmartStatusBadge status={value} /> },
        { key: "licitacao", label: "Objeto", render: (value: LicitacaoDTO["licitacao"]) => truncate(value?.objeto || "", 30) },
        { key: "situacaoCompra", label: "Situação", render: (value: string) => <SmartStatusBadge status={value} /> },
        { key: "dataAbertura", label: "Abertura", render: (value: string) => <DateDisplay value={value} /> },
      ]}
      data={licitacoes}
      maxRows={6}
    />
  );
}
