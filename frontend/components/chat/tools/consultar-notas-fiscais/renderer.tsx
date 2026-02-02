import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { DateDisplay } from "../base/components/DateDisplay";
import { StatusBadge } from "../base/components/StatusBadge";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import { truncate } from "../base/utils/formatters";
import type { ConsultarNotasFiscaisInput, ConsultarNotasFiscaisOutput, NotaFiscalDTO } from "./types";
import { Receipt } from "lucide-react";

export function renderConsultarNotasFiscaisInput(input: ConsultarNotasFiscaisInput) {
  return input.nome_produto ? <StatusBadge status={`Produto: ${input.nome_produto}`} variant="info" /> : <InfoField label="Página" value={input.pagina} />;
}

export function renderConsultarNotasFiscaisOutput(output: ConsultarNotasFiscaisOutput | string) {
  const notas = parseToArray<NotaFiscalDTO>(output);
  if (notas.length === 0) return <EmptyState message="Nenhuma nota fiscal encontrada" icon={<Receipt className="w-4 h-4" />} />;
  
  return (
    <DataTable
      columns={[
        { key: "numero", label: "NF", render: (v: number) => <span className="font-mono text-[10px]">{v}</span> },
        { key: "nomeFornecedor", label: "Fornecedor", render: (v: string) => truncate(v, 20) },
        { key: "cnpjFornecedor", label: "CNPJ", render: (v: string) => <span className="font-mono text-[9px]">{v}</span> },
        { key: "valorNotaFiscal", label: "Valor", render: (v: string) => <CurrencyDisplay value={parseFloat(v)} size="sm" />, align: "right" as const },
        { key: "dataEmissao", label: "Data", render: (v: string) => <DateDisplay value={v} /> },
        { key: "orgaoDestinatario", label: "Órgão", render: (v: string) => truncate(v, 15) },
      ]}
      data={notas}
      maxRows={5}
    />
  );
}
