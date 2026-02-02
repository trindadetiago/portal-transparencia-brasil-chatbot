import { InfoField } from "../base/components/InfoField";
import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { DateDisplay } from "../base/components/DateDisplay";
import { StatusBadge } from "../base/components/StatusBadge";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import { formatMonthYear, truncate } from "../base/utils/formatters";
import type { ConsultarRecursosRecebidosInput, ConsultarRecursosRecebidosOutput, PessoaRecursosRecebidosUGMesDesnormalizadaDTO } from "./types";
import { DollarSign } from "lucide-react";

export function renderConsultarRecursosRecebidosInput(input: ConsultarRecursosRecebidosInput) {
  const activeFilters: Array<{ label: string; value: any }> = [];
  
  if (input.uf) activeFilters.push({ label: "UF", value: input.uf });
  if (input.nome_favorecido) activeFilters.push({ label: "Favorecido", value: input.nome_favorecido });
  
  return (
    <div className="space-y-1">
      <InfoField label="Período" value={`${formatMonthYear(input.mes_ano_inicio)} - ${formatMonthYear(input.mes_ano_fim)}`} />
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-1">
          {activeFilters.map((filter, idx) => (
            <StatusBadge key={idx} status={`${filter.label}: ${filter.value}`} variant="info" />
          ))}
        </div>
      )}
    </div>
  );
}

export function renderConsultarRecursosRecebidosOutput(output: ConsultarRecursosRecebidosOutput | string) {
  const recursos = parseToArray<PessoaRecursosRecebidosUGMesDesnormalizadaDTO>(output);
  
  if (recursos.length === 0) {
    return <EmptyState message="Nenhum recurso encontrado" icon={<DollarSign className="w-4 h-4" />} />;
  }
  
  return (
    <div className="space-y-2">
      {recursos.slice(0, 6).map((recurso, idx) => (
        <DataCard key={idx} variant="bordered">
          <DataCardTitle>{truncate(recurso.nomePessoa || "", 40)}</DataCardTitle>
          <DataCardContent>
            <InfoField label="Tipo" value={recurso.tipoPessoa || ""} />
            <InfoField label="Valor" value={<CurrencyDisplay value={recurso.valor} size="md" />} />
            <InfoField label="Órgão" value={truncate(recurso.nomeOrgao || "", 30)} />
            <InfoField label="Mês/Ano" value={recurso.anoMes?.toString() || ""} />
          </DataCardContent>
        </DataCard>
      ))}
      {recursos.length > 6 && (
        <div className="text-[9px] text-muted-foreground/60 text-center">
          +{recursos.length - 6} recursos não exibidos
        </div>
      )}
    </div>
  );
}
