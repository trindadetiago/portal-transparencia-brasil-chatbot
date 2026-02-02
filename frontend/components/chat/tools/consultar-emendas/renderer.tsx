import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { StatusBadge } from "../base/components/StatusBadge";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import { truncate } from "../base/utils/formatters";
import type { ConsultarEmendasInput, ConsultarEmendasOutput, ConsultaEmendasDTO } from "./types";
import { FileEdit } from "lucide-react";

export function renderConsultarEmendasInput(input: ConsultarEmendasInput) {
  return input.ano ? <InfoField label="Ano" value={input.ano} /> : <InfoField label="Página" value={input.pagina} />;
}

export function renderConsultarEmendasOutput(output: ConsultarEmendasOutput | string) {
  const emendas = parseToArray<ConsultaEmendasDTO>(output);
  if (emendas.length === 0) return <EmptyState message="Nenhuma emenda encontrada" icon={<FileEdit className="w-4 h-4" />} />;
  
  return (
    <DataTable
      columns={[
        { key: "numeroEmenda", label: "Número", render: (v: string) => <span className="font-mono text-[10px]">{v}</span> },
        { key: "nomeAutor", label: "Autor", render: (v: string) => truncate(v, 25) },
        { key: "localidadeDoGasto", label: "Localidade", render: (v: string) => truncate(v, 20) },
        { key: "tipoEmenda", label: "Tipo", render: (v: string) => <StatusBadge status={v} variant="info" /> },
        { key: "funcao", label: "Função", render: (v: string) => truncate(v, 15) },
      ]}
      data={emendas}
      maxRows={5}
    />
  );
}
