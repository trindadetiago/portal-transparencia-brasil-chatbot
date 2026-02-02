import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray, parseToObject } from "../base/utils/parsers";
import type { ConsultarDespesasItensEmpenhoHistoricoInput, ConsultarDespesasItensEmpenhoHistoricoOutput, HistoricoSubItemEmpenhoDTO } from "./types";

export function renderConsultarDespesasItensEmpenhoHistoricoInput(input: ConsultarDespesasItensEmpenhoHistoricoInput) {
  return <InfoField label="Consulta" value={JSON.stringify(input)} />;
}

export function renderConsultarDespesasItensEmpenhoHistoricoOutput(output: ConsultarDespesasItensEmpenhoHistoricoOutput | string) {
  const items = parseToArray<HistoricoSubItemEmpenhoDTO>(output);
  if (items.length === 0) return <EmptyState message="Nenhum resultado encontrado" />;
  
  return (
    <DataTable
      columns={[
        { key: "id", label: "ID", render: (v: number) => v?.toString() || "-" },
      ]}
      data={items}
      maxRows={5}
    />
  );
}