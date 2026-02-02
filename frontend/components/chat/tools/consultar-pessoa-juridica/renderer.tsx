import { DataCard, DataCardContent, DataCardHeader, DataCardTitle } from "../base/components/DataCard";
import { InfoField } from "../base/components/InfoField";
import { CPFCNPJDisplay } from "../base/components/CPFCNPJDisplay";
import { SmartStatusBadge } from "../base/components/StatusBadge";
import { EmptyState } from "../base/components/EmptyState";
import { parseToObject } from "../base/utils/parsers";
import type { ConsultarPessoaJuridicaInput, ConsultarPessoaJuridicaOutput } from "./types";
import { Building } from "lucide-react";

export function renderConsultarPessoaJuridicaInput(input: ConsultarPessoaJuridicaInput) {
  return <InfoField label="CNPJ" value={<CPFCNPJDisplay value={input.cnpj} />} />;
}

export function renderConsultarPessoaJuridicaOutput(output: ConsultarPessoaJuridicaOutput | string) {
  const empresa = parseToObject<ConsultarPessoaJuridicaOutput>(output);
  if (!empresa) return <EmptyState message="Empresa não encontrada" />;
  
  return (
    <DataCard variant="bordered">
      <DataCardHeader>
        <div className="flex items-start gap-2">
          <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
            <Building className="w-4 h-4 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <DataCardTitle>{empresa.razaoSocial}</DataCardTitle>
            {empresa.nomeFantasia && <p className="text-[10px] text-muted-foreground">{empresa.nomeFantasia}</p>}
          </div>
        </div>
      </DataCardHeader>
      <DataCardContent>
        <InfoField label="CNPJ" value={<CPFCNPJDisplay value={empresa.cnpj} />} />
        {empresa.nomeFantasia && <InfoField label="Nome Fantasia" value={empresa.nomeFantasia} />}
      </DataCardContent>
    </DataCard>
  );
}
