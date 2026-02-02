/**
 * Renderer for consultar_remuneracao_servidores tool
 */

import { InfoField } from "../base/components/InfoField";
import { DataTable } from "../base/components/DataTable";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { StatusBadge } from "../base/components/StatusBadge";
import { parseToArray } from "../base/utils/parsers";
import { formatMonthYear, truncate } from "../base/utils/formatters";
import type { ConsultarRemuneracaoServidoresInput, ConsultarRemuneracaoServidoresOutput, ServidorRemuneracaoDTO } from "./types";
import { DollarSign } from "lucide-react";

export function renderConsultarRemuneracaoServidoresInput(input: ConsultarRemuneracaoServidoresInput) {
  return (
    <div className="space-y-1">
      <InfoField label="Período" value={formatMonthYear(input.mes_ano.toString())} />
      <InfoField label="Página" value={input.pagina} />
      {input.id && (
        <div className="flex items-center gap-2 mt-1">
          <StatusBadge status={`ID: ${input.id}`} variant="info" />
        </div>
      )}
      {input.cpf && (
        <div className="flex items-center gap-2 mt-1">
          <StatusBadge status={`CPF: ${input.cpf}`} variant="info" />
        </div>
      )}
    </div>
  );
}

export function renderConsultarRemuneracaoServidoresOutput(output: ConsultarRemuneracaoServidoresOutput | string) {
  const remuneracoes = parseToArray<ServidorRemuneracaoDTO>(output);
  
  if (remuneracoes.length === 0) {
    return <EmptyState message="Nenhuma remuneração encontrada" icon={<DollarSign className="w-4 h-4" />} />;
  }
  
  // Flatten remuneracoesDTO array
  const remuneracoesFlat = remuneracoes.flatMap(r => 
    r.remuneracoesDTO.map(rem => ({
      servidor: r.servidor?.pessoa?.nome || "",
      mesAno: rem.mesAno,
      remuneracaoBasicaBruta: rem.remuneracaoBasicaBruta,
      valorTotalRemuneracaoAposDeducoes: rem.valorTotalRemuneracaoAposDeducoes,
    }))
  );
  
  return (
    <DataTable
      columns={[
        {
          key: "servidor",
          label: "Servidor",
          render: (value: string) => truncate(value, 25),
        },
        {
          key: "mesAno",
          label: "Período",
          render: (value: string) => formatMonthYear(value),
        },
        {
          key: "remuneracaoBasicaBruta",
          label: "Básico",
          render: (value: string) => <CurrencyDisplay value={parseFloat(value)} size="sm" />,
          align: "right" as const,
        },
        {
          key: "valorTotalRemuneracaoAposDeducoes",
          label: "Líquido",
          render: (value: string) => <CurrencyDisplay value={parseFloat(value)} size="md" />,
          align: "right" as const,
        },
      ]}
      data={remuneracoesFlat}
      maxRows={6}
    />
  );
}
