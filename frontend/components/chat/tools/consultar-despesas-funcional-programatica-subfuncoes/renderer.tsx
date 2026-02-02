import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray, parseToObject } from "../base/utils/parsers";
import type { ConsultarDespesasFuncionalProgramaticaSubfuncoesInput, ConsultarDespesasFuncionalProgramaticaSubfuncoesOutput, FuncionalProgramaticaDTO } from "./types";

export function renderConsultarDespesasFuncionalProgramaticaSubfuncoesInput(input: ConsultarDespesasFuncionalProgramaticaSubfuncoesInput) {
  return <InfoField label="Consulta" value={JSON.stringify(input)} />;
}

export function renderConsultarDespesasFuncionalProgramaticaSubfuncoesOutput(output: ConsultarDespesasFuncionalProgramaticaSubfuncoesOutput | string) {
  const items = parseToArray<FuncionalProgramaticaDTO>(output);
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