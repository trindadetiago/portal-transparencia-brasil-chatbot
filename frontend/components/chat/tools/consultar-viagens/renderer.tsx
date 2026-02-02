import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { DateDisplay } from "../base/components/DateDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import { truncate } from "../base/utils/formatters";
import type { ConsultarViagensInput, ConsultarViagensOutput, ViagemDTO } from "./types";
import { Plane } from "lucide-react";

export function renderConsultarViagensInput(input: ConsultarViagensInput) {
  return (
    <div className="space-y-1">
      <InfoField label="Período Ida" value={`${input.data_ida_de} - ${input.data_ida_ate}`} />
      <InfoField label="Período Retorno" value={`${input.data_retorno_de} - ${input.data_retorno_ate}`} />
      <InfoField label="Órgão" value={input.codigo_orgao} />
    </div>
  );
}

export function renderConsultarViagensOutput(output: ConsultarViagensOutput | string) {
  const viagens = parseToArray<ViagemDTO>(output);
  if (viagens.length === 0) return <EmptyState message="Nenhuma viagem encontrada" icon={<Plane className="w-4 h-4" />} />;
  
  return (
    <DataTable
      columns={[
        { 
          key: "beneficiario", 
          label: "Viajante", 
          render: (v: ViagemDTO["beneficiario"]) => truncate(v?.nome || "-", 20) 
        },
        { 
          key: "viagem", 
          label: "Motivo", 
          render: (v: ViagemDTO["viagem"]) => truncate(v?.motivo || "-", 25) 
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
