import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import { formatMonthYear } from "../base/utils/formatters";
import type { ConsultarBolsaFamiliaPorMunicipioInput, ConsultarBolsaFamiliaPorMunicipioOutput, BeneficioPorMunicipioDTO } from "./types";

export function renderConsultarBolsaFamiliaPorMunicipioInput(input: ConsultarBolsaFamiliaPorMunicipioInput) {
  return (
    <div className="space-y-1">
      <InfoField label="Período" value={formatMonthYear(input.mes_ano)} />
      <InfoField label="Código IBGE" value={input.codigo_ibge} />
    </div>
  );
}

export function renderConsultarBolsaFamiliaPorMunicipioOutput(output: ConsultarBolsaFamiliaPorMunicipioOutput | string) {
  const beneficios = parseToArray<BeneficioPorMunicipioDTO>(output);
  
  if (beneficios.length === 0) {
    return <EmptyState message="Dados não encontrados" />;
  }
  
  return (
    <DataTable
      columns={[
        { 
          key: "municipio", 
          label: "Município", 
          render: (v: BeneficioPorMunicipioDTO["municipio"]) => v?.nomeIBGE || "-" 
        },
        { 
          key: "tipo", 
          label: "Tipo", 
          render: (v: BeneficioPorMunicipioDTO["tipo"]) => v?.descricao || "-" 
        },
        { 
          key: "valor", 
          label: "Valor", 
          render: (v: number) => <CurrencyDisplay value={v} size="sm" />, 
          align: "right" as const 
        },
        { 
          key: "quantidadeBeneficiados", 
          label: "Beneficiários", 
          render: (v: number) => v?.toLocaleString('pt-BR') || "-",
          align: "right" as const 
        },
      ]}
      data={beneficios}
      maxRows={5}
    />
  );
}
