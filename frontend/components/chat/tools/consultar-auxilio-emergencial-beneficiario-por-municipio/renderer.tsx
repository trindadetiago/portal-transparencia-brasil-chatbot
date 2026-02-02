import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import { formatMonthYear } from "../base/utils/formatters";
import type { ConsultarAuxilioEmergencialBeneficiarioPorMunicipioInput, ConsultarAuxilioEmergencialBeneficiarioPorMunicipioOutput, AuxilioEmergencialDTO } from "./types";
import { Heart } from "lucide-react";

export function renderConsultarAuxilioEmergencialBeneficiarioPorMunicipioInput(input: ConsultarAuxilioEmergencialBeneficiarioPorMunicipioInput) {
  return (
    <div className="space-y-1">
      <InfoField label="Período" value={formatMonthYear(input.mes_ano.toString())} />
      <InfoField label="Código IBGE" value={input.codigo_ibge} />
    </div>
  );
}

export function renderConsultarAuxilioEmergencialBeneficiarioPorMunicipioOutput(output: ConsultarAuxilioEmergencialBeneficiarioPorMunicipioOutput | string) {
  const beneficiarios = parseToArray<AuxilioEmergencialDTO>(output);
  if (beneficiarios.length === 0) return <EmptyState message="Nenhum beneficiário encontrado" icon={<Heart className="w-4 h-4" />} />;
  
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
      data={beneficiarios}
      maxRows={5}
    />
  );
}
