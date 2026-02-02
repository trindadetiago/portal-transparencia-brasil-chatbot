import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { CPFCNPJDisplay } from "../base/components/CPFCNPJDisplay";
import { DateDisplay } from "../base/components/DateDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import { formatMonthYear, truncate } from "../base/utils/formatters";
import type { ConsultarCartoesPagamentoInput, ConsultarCartoesPagamentoOutput, CartoesDTO } from "./types";
import { CreditCard } from "lucide-react";

export function renderConsultarCartoesPagamentoInput(input: ConsultarCartoesPagamentoInput) {
  return input.mes_extrato_inicio ? <InfoField label="Período" value={`${formatMonthYear(input.mes_extrato_inicio)} - ${formatMonthYear(input.mes_extrato_fim || input.mes_extrato_inicio)}`} /> : <InfoField label="Página" value={input.pagina} />;
}

export function renderConsultarCartoesPagamentoOutput(output: ConsultarCartoesPagamentoOutput | string) {
  const gastos = parseToArray<CartoesDTO>(output);
  if (gastos.length === 0) return <EmptyState message="Nenhum gasto encontrado" icon={<CreditCard className="w-4 h-4" />} />;
  
  return (
    <DataTable
      columns={[
        { key: "portador", label: "Portador", render: (v: CartoesDTO["portador"]) => truncate(v?.nome || "", 20) },
        { key: "estabelecimento", label: "Estabelecimento", render: (v: CartoesDTO["estabelecimento"]) => truncate(v?.nome || "", 25) },
        { key: "valorTransacao", label: "Valor", render: (v: string) => <CurrencyDisplay value={parseFloat(v)} size="sm" />, align: "right" as const },
        { key: "dataTransacao", label: "Data", render: (v: string) => <DateDisplay value={v} /> },
        { key: "unidadeGestora", label: "Órgão", render: (v: CartoesDTO["unidadeGestora"]) => truncate(v?.nome || "", 20) },
      ]}
      data={gastos}
      maxRows={6}
    />
  );
}
