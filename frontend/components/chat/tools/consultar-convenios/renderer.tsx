import { InfoField } from "../base/components/InfoField";
import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { SmartStatusBadge, StatusBadge } from "../base/components/StatusBadge";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import { truncate } from "../base/utils/formatters";
import type { ConsultarConveniosInput, ConsultarConveniosOutput, ConvenioDTO } from "./types";
import { Handshake } from "lucide-react";

export function renderConsultarConveniosInput(input: ConsultarConveniosInput) {
  const filters = [];
  if (input.uf) filters.push({ label: "UF", value: input.uf });
  if (input.situacao) filters.push({ label: "Situação", value: input.situacao });
  
  return (
    <div className="space-y-1">
      {filters.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {filters.map((f, i) => <StatusBadge key={i} status={`${f.label}: ${f.value}`} variant="info" />)}
        </div>
      )}
    </div>
  );
}

export function renderConsultarConveniosOutput(output: ConsultarConveniosOutput | string) {
  const convenios = parseToArray<ConvenioDTO>(output);
  
  if (convenios.length === 0) {
    return <EmptyState message="Nenhum convênio encontrado" icon={<Handshake className="w-4 h-4" />} />;
  }
  
  return (
    <div className="space-y-2">
      {convenios.slice(0, 5).map((convenio, idx) => (
        <DataCard key={idx} variant="bordered">
          <DataCardTitle>{convenio.dimConvenio?.numero || convenio.id}</DataCardTitle>
          <DataCardContent>
            <InfoField label="Objeto" value={truncate(convenio.dimConvenio?.objeto || "", 40)} />
            <InfoField label="Convenente" value={truncate(convenio.convenente?.nome || "", 30)} />
            <InfoField label="Valor" value={<CurrencyDisplay value={convenio.valor} />} />
            <InfoField label="Situação" value={<SmartStatusBadge status={convenio.situacao} />} />
          </DataCardContent>
        </DataCard>
      ))}
      {convenios.length > 5 && (
        <div className="text-[9px] text-muted-foreground/60 text-center">+{convenios.length - 5} não exibidos</div>
      )}
    </div>
  );
}
