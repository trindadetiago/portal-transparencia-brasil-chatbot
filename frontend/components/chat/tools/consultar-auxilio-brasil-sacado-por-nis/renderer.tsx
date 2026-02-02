import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { DateDisplay } from "../base/components/DateDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import type { ConsultarAuxilioBrasilSacadoPorNisInput, ConsultarAuxilioBrasilSacadoPorNisOutput, AuxilioBrasilPagoDTO } from "./types";
import { Heart } from "lucide-react";

export function renderConsultarAuxilioBrasilSacadoPorNisInput(input: ConsultarAuxilioBrasilSacadoPorNisInput) {
  return <InfoField label="NIS" value={input.nis} />;
}

export function renderConsultarAuxilioBrasilSacadoPorNisOutput(output: ConsultarAuxilioBrasilSacadoPorNisOutput | string) {
  const pagamentos = parseToArray<AuxilioBrasilPagoDTO>(output);
  if (pagamentos.length === 0) return <EmptyState message="Nenhum pagamento encontrado" icon={<Heart className="w-4 h-4" />} />;
  
  return (
    <DataTable
      columns={[
        { 
          key: "beneficiarioAuxilioBrasil", 
          label: "Beneficiário", 
          render: (v: AuxilioBrasilPagoDTO["beneficiarioAuxilioBrasil"]) => v?.nome || "-" 
        },
        { 
          key: "municipio", 
          label: "Município", 
          render: (v: AuxilioBrasilPagoDTO["municipio"]) => v?.nomeIBGE || "-" 
        },
        { 
          key: "valorSaque", 
          label: "Valor", 
          render: (v: number) => <CurrencyDisplay value={v} size="sm" />, 
          align: "right" as const 
        },
        { 
          key: "dataSaque", 
          label: "Data Saque", 
          render: (v: string) => <DateDisplay value={v} /> 
        },
      ]}
      data={pagamentos}
      maxRows={5}
    />
  );
}
