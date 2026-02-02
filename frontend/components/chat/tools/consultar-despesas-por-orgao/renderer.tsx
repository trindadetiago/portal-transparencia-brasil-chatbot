import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { StatusBadge } from "../base/components/StatusBadge";
import { parseToArray } from "../base/utils/parsers";
import { truncate } from "../base/utils/formatters";
import type { ConsultarDespesasPorOrgaoInput, ConsultarDespesasPorOrgaoOutput, DespesaAnualPorOrgaoDTO } from "./types";
import { TrendingUp } from "lucide-react";

export function renderConsultarDespesasPorOrgaoInput(input: ConsultarDespesasPorOrgaoInput) {
  return (
    <div className="space-y-1">
      <InfoField label="Ano" value={input.ano} />
      <InfoField label="Página" value={input.pagina} />
      {(input.orgao_superior || input.orgao) && (
        <div className="flex flex-wrap gap-1 mt-1">
          {input.orgao_superior && <StatusBadge status={`Órgão Superior: ${input.orgao_superior}`} variant="info" />}
          {input.orgao && <StatusBadge status={`Órgão: ${input.orgao}`} variant="info" />}
        </div>
      )}
    </div>
  );
}

export function renderConsultarDespesasPorOrgaoOutput(output: ConsultarDespesasPorOrgaoOutput | string) {
  const despesas = parseToArray<DespesaAnualPorOrgaoDTO>(output);
  
  if (despesas.length === 0) {
    return <EmptyState message="Nenhuma despesa encontrada" icon={<TrendingUp className="w-4 h-4" />} />;
  }
  
  return (
    <DataTable
      columns={[
        {
          key: "orgao",
          label: "Órgão",
          render: (value: string) => <span className="font-medium">{truncate(value || "", 30)}</span>,
        },
        {
          key: "empenhado",
          label: "Empenhado",
          render: (value: string) => <CurrencyDisplay value={parseFloat(value)} />,
          align: "right" as const,
        },
        {
          key: "liquidado",
          label: "Liquidado",
          render: (value: string) => <CurrencyDisplay value={parseFloat(value)} />,
          align: "right" as const,
        },
        {
          key: "pago",
          label: "Pago",
          render: (value: string) => <CurrencyDisplay value={parseFloat(value)} />,
          align: "right" as const,
        },
      ]}
      data={despesas}
      maxRows={6}
    />
  );
}
