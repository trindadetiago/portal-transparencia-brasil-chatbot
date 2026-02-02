import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { CPFCNPJDisplay } from "../base/components/CPFCNPJDisplay";
import { DateDisplay } from "../base/components/DateDisplay";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import { truncate } from "../base/utils/formatters";
import type { ConsultarContratosPorCpfCnpjInput, ConsultarContratosPorCpfCnpjOutput, ContratoDTO } from "./types";
import { FileText } from "lucide-react";

export function renderConsultarContratosPorCpfCnpjInput(input: ConsultarContratosPorCpfCnpjInput) {
  return (
    <div className="space-y-1">
      <InfoField label="CPF/CNPJ" value={<CPFCNPJDisplay value={input.cpf_cnpj} />} />
      <InfoField label="Página" value={input.pagina} />
    </div>
  );
}

export function renderConsultarContratosPorCpfCnpjOutput(output: ConsultarContratosPorCpfCnpjOutput | string) {
  const contratos = parseToArray<ContratoDTO>(output);
  
  if (contratos.length === 0) {
    return <EmptyState message="Nenhum contrato encontrado" icon={<FileText className="w-4 h-4" />} />;
  }
  
  return (
    <DataTable
      columns={[
        { key: "numero", label: "Número", render: (value: string) => <span className="font-mono text-[10px]">{value}</span> },
        { key: "objeto", label: "Objeto", render: (value: string) => truncate(value, 35) },
        { key: "fornecedor", label: "Fornecedor", render: (value: ContratoDTO["fornecedor"]) => truncate(value?.nome || "", 25) },
        { key: "valorFinalCompra", label: "Valor", render: (value: number) => <CurrencyDisplay value={value} size="sm" />, align: "right" as const },
        { key: "dataAssinatura", label: "Data", render: (value: string) => <DateDisplay value={value} /> },
      ]}
      data={contratos}
      maxRows={6}
    />
  );
}
