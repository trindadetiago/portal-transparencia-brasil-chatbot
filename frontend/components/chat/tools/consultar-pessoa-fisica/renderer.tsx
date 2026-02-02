import { DataCard, DataCardContent, DataCardHeader, DataCardTitle } from "../base/components/DataCard";
import { InfoField } from "../base/components/InfoField";
import { CPFCNPJDisplay } from "../base/components/CPFCNPJDisplay";
import { DateDisplay } from "../base/components/DateDisplay";
import { EmptyState } from "../base/components/EmptyState";
import { parseToObject } from "../base/utils/parsers";
import type { ConsultarPessoaFisicaInput, ConsultarPessoaFisicaOutput } from "./types";
import { User } from "lucide-react";

export function renderConsultarPessoaFisicaInput(input: ConsultarPessoaFisicaInput) {
  return input.cpf ? <InfoField label="CPF" value={<CPFCNPJDisplay value={input.cpf} mask />} /> : <InfoField label="NIS" value={input.nis} />;
}

export function renderConsultarPessoaFisicaOutput(output: ConsultarPessoaFisicaOutput | string) {
  const pessoa = parseToObject<ConsultarPessoaFisicaOutput>(output);
  if (!pessoa) return <EmptyState message="Pessoa não encontrada" />;
  
  return (
    <DataCard variant="bordered">
      <DataCardHeader>
        <div className="flex items-start gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <User className="w-4 h-4 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <DataCardTitle>{pessoa.nome}</DataCardTitle>
            <CPFCNPJDisplay value={pessoa.cpf} mask className="text-[9px]" />
          </div>
        </div>
      </DataCardHeader>
      <DataCardContent>
        <InfoField label="NIS" value={pessoa.nis} />
      </DataCardContent>
    </DataCard>
  );
}
