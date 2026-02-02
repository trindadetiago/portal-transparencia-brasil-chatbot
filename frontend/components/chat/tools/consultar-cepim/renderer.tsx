import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { InfoField } from "../base/components/InfoField";
import { CPFCNPJDisplay } from "../base/components/CPFCNPJDisplay";
import { StatusBadge } from "../base/components/StatusBadge";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import { truncate } from "../base/utils/formatters";
import type { ConsultarCepimInput, ConsultarCepimOutput, CepimDTO } from "./types";
import { Building } from "lucide-react";

export function renderConsultarCepimInput(input: ConsultarCepimInput) {
  return input.uf_sancionado ? <StatusBadge status={`UF: ${input.uf_sancionado}`} variant="info" /> : <InfoField label="Página" value={input.pagina} />;
}

export function renderConsultarCepimOutput(output: ConsultarCepimOutput | string) {
  const registros = parseToArray<CepimDTO>(output);
  if (registros.length === 0) return <EmptyState message="Nenhuma entidade impedida" icon={<Building className="w-4 h-4" />} />;
  
  return (
    <div className="space-y-2">
      {registros.slice(0, 4).map((r, i) => (
        <DataCard key={i} variant="bordered" className="border-orange-200/50 dark:border-orange-900/50">
          <DataCardTitle>{truncate(r.pessoaJuridica?.nome || "", 35)}</DataCardTitle>
          <DataCardContent>
            <InfoField label="CNPJ" value={<CPFCNPJDisplay value={r.pessoaJuridica?.cnpjFormatado || ""} />} />
            <InfoField label="Órgão Superior" value={truncate(r.orgaoSuperior?.nome || "", 30)} />
            <InfoField label="Motivo" value={truncate(r.motivo || "", 40)} />
          </DataCardContent>
        </DataCard>
      ))}
    </div>
  );
}
