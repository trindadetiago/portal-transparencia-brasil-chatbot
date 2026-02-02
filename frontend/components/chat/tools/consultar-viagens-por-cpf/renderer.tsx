import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { DateDisplay } from "../base/components/DateDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { CPFCNPJDisplay } from "../base/components/CPFCNPJDisplay";
import { parseToArray } from "../base/utils/parsers";
import { truncate } from "../base/utils/formatters";
import type { ConsultarViagensPorCpfInput, ConsultarViagensPorCpfOutput, ViagemDTO } from "./types";
import { Plane } from "lucide-react";

export function renderConsultarViagensPorCpfInput(input: ConsultarViagensPorCpfInput) {
  return <InfoField label="CPF" value={<CPFCNPJDisplay value={input.cpf} />} />;
}

export function renderConsultarViagensPorCpfOutput(output: ConsultarViagensPorCpfOutput | string) {
  const viagens = parseToArray<ViagemDTO>(output);
  if (viagens.length === 0) return <EmptyState message="Nenhuma viagem encontrada para este CPF" icon={<Plane className="w-4 h-4" />} />;
  
  return (
    <DataTable
      columns={[
        { 
          key: "viagem", 
          label: "Motivo", 
          render: (v: ViagemDTO["viagem"]) => truncate(v?.motivo || "-", 30) 
        },
        { 
          key: "orgao", 
          label: "Órgão", 
          render: (v: ViagemDTO["orgao"]) => truncate(v?.sigla || v?.nome || "-", 15) 
        },
        { 
          key: "valorTotalViagem", 
          label: "Valor Total", 
          render: (v: number) => <CurrencyDisplay value={v} size="sm" />, 
          align: "right" as const 
        },
        { 
          key: "dataInicioAfastamento", 
          label: "Ida", 
          render: (v: string) => <DateDisplay value={v} /> 
        },
        { 
          key: "dataFimAfastamento", 
          label: "Retorno", 
          render: (v: string) => <DateDisplay value={v} /> 
        },
        { 
          key: "situacao", 
          label: "Situação", 
          render: (v: string) => truncate(v || "-", 12) 
        },
      ]}
      data={viagens}
      maxRows={5}
    />
  );
}
