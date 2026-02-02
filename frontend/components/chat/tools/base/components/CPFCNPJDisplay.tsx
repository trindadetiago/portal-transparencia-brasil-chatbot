/**
 * CPF/CNPJ display component with formatting and masking
 */

import { formatCPFCNPJ, maskCPF } from "../utils/formatters";
import { cn } from "@/lib/utils";

interface CPFCNPJDisplayProps {
  value: string | null | undefined;
  mask?: boolean;
  className?: string;
}

export function CPFCNPJDisplay({ value, mask = false, className }: CPFCNPJDisplayProps) {
  if (!value) return null;
  
  const formatted = mask ? maskCPF(value) : formatCPFCNPJ(value);
  
  return (
    <span className={cn("font-mono text-[10px] text-muted-foreground", className)}>
      {formatted}
    </span>
  );
}
