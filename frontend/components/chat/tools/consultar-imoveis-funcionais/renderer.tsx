import { DataCard, DataCardContent, DataCardTitle } from "../base/components/DataCard";
import { InfoField } from "../base/components/InfoField";
import { CurrencyDisplay } from "../base/components/CurrencyDisplay";
import { SmartStatusBadge } from "../base/components/StatusBadge";
import { EmptyState } from "../base/components/EmptyState";
import { parseToArray } from "../base/utils/parsers";
import { truncate } from "../base/utils/formatters";
import type { ConsultarImoveisFuncionaisInput, ConsultarImoveisFuncionaisOutput, ImovelFuncionalDTO } from "./types";
import { Home } from "lucide-react";

export function renderConsultarImoveisFuncionaisInput(input: ConsultarImoveisFuncionaisInput) {
  return input.situacao ? <InfoField label="Situação" value={<SmartStatusBadge status={input.situacao} />} /> : <InfoField label="Página" value={input.pagina} />;
}

export function renderConsultarImoveisFuncionaisOutput(output: ConsultarImoveisFuncionaisOutput | string) {
  const imoveis = parseToArray<ImovelFuncionalDTO>(output);
  if (imoveis.length === 0) return <EmptyState message="Nenhum imóvel encontrado" icon={<Home className="w-4 h-4" />} />;
  
  return (
    <div className="space-y-2">
      {imoveis.slice(0, 5).map((im, i) => (
        <DataCard key={i} variant="bordered">
          <DataCardTitle>{im.endereco}</DataCardTitle>
          <DataCardContent>
            <InfoField label="Situação" value={<SmartStatusBadge status={im.situacao?.descricao || ""} />} />
            <InfoField label="Órgão" value={truncate(im.orgaoResponsavel?.nome || "", 30)} />
            <InfoField label="CEP" value={im.cep} />
            <InfoField label="Região" value={im.regiao?.descricao || ""} />
          </DataCardContent>
        </DataCard>
      ))}
    </div>
  );
}
