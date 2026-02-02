import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import type { ConsultarAuxilioEmergencialPorCpfOuNisInput, ConsultarAuxilioEmergencialPorCpfOuNisOutput, AuxilioEmergencialDTO } from "./types";
import { Heart } from "lucide-react";

export function renderConsultarAuxilioEmergencialPorCpfOuNisInput(input: ConsultarAuxilioEmergencialPorCpfOuNisInput) {
  return (
    <div className="space-y-1">
      {input.codigo_beneficiario && <InfoField label="CPF/NIS Beneficiário" value={input.codigo_beneficiario} />}
      {input.codigo_responsavel_familiar && <InfoField label="CPF/NIS Responsável" value={input.codigo_responsavel_familiar} />}
    </div>
  );
}

export function renderConsultarAuxilioEmergencialPorCpfOuNisOutput(output: ConsultarAuxilioEmergencialPorCpfOuNisOutput | string) {
  const registros = parseToArray<AuxilioEmergencialDTO>(output);
  if (registros.length === 0) return <EmptyState message="Nenhum registro encontrado" icon={<Heart className="w-4 h-4" />} />;
  
  return (
    <DataTable
      columns={[
        { 
          key: "beneficiario", 
          label: "Beneficiário", 
          render: (v: AuxilioEmergencialDTO["beneficiario"]) => v?.nome || "-" 
        },
        { 
          key: "municipio", 
          label: "Município", 
          render: (v: AuxilioEmergencialDTO["municipio"]) => v?.nomeIBGE || "-" 
        },
        { 
          key: "valor", 
          label: "Valor", 
          render: (v: number) => <CurrencyDisplay value={v} size="sm" />, 
          align: "right" as const 
        },
        { 
          key: "situacaoAuxilioEmergencial", 
          label: "Situação", 
          render: (v: string) => v || "-" 
        },
      ]}
      data={registros}
      maxRows={5}
    />
  );
}
