import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { DateDisplay } from "../base/components/DateDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import { truncate } from "../base/utils/formatters";
import type { ConsultarAcordosLenienciaInput, ConsultarAcordosLenienciaOutput, AcordosLenienciaDTO } from "./types";
import { FileText } from "lucide-react";

export function renderConsultarAcordosLenienciaInput(input: ConsultarAcordosLenienciaInput) {
  return (
    <div className="space-y-1">
      {input.cnpj_sancionado && <InfoField label="CNPJ" value={input.cnpj_sancionado} />}
      {input.nome_sancionado && <InfoField label="Nome" value={input.nome_sancionado} />}
      {input.situacao && <InfoField label="Situação" value={input.situacao} />}
    </div>
  );
}

export function renderConsultarAcordosLenienciaOutput(output: ConsultarAcordosLenienciaOutput | string) {
  const acordos = parseToArray<AcordosLenienciaDTO>(output);
  if (acordos.length === 0) return <EmptyState message="Nenhum acordo de leniência encontrado" icon={<FileText className="w-4 h-4" />} />;
  
  return (
    <DataTable
      columns={[
        { 
          key: "orgaoResponsavel", 
          label: "Órgão Responsável", 
          render: (v: string) => truncate(v || "-", 25) 
        },
        { 
          key: "situacaoAcordo", 
          label: "Situação", 
          render: (v: string) => truncate(v || "-", 15) 
        },
        { 
          key: "dataInicioAcordo", 
          label: "Início", 
          render: (v: string) => <DateDisplay value={v} /> 
        },
        { 
          key: "dataFimAcordo", 
          label: "Fim", 
          render: (v: string) => <DateDisplay value={v} /> 
        },
        { 
          key: "quantidade", 
          label: "Qtd. Sanções", 
          render: (v: number) => v?.toLocaleString('pt-BR') || "-",
          align: "right" as const 
        },
      ]}
      data={acordos}
      maxRows={5}
    />
  );
}
