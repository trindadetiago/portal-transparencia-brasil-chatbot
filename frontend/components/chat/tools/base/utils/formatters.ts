/**
 * Utility functions for formatting data
 */

/**
 * Format number as Brazilian currency (R$)
 */
export function formatCurrency(value: number | string | null | undefined): string {
  if (value === null || value === undefined) return "R$ 0,00";
  
  const numValue = typeof value === "string" ? parseFloat(value) : value;
  
  if (isNaN(numValue)) return "R$ 0,00";
  
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numValue);
}

/**
 * Format CPF (123.456.789-00)
 */
export function formatCPF(cpf: string | null | undefined): string {
  if (!cpf) return "";
  
  const cleaned = cpf.replace(/\D/g, "");
  
  if (cleaned.length !== 11) return cpf;
  
  return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

/**
 * Format CNPJ (12.345.678/0001-90)
 */
export function formatCNPJ(cnpj: string | null | undefined): string {
  if (!cnpj) return "";
  
  const cleaned = cnpj.replace(/\D/g, "");
  
  if (cleaned.length !== 14) return cnpj;
  
  return cleaned.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
}

/**
 * Format CPF or CNPJ automatically
 */
export function formatCPFCNPJ(value: string | null | undefined): string {
  if (!value) return "";
  
  const cleaned = value.replace(/\D/g, "");
  
  if (cleaned.length === 11) return formatCPF(value);
  if (cleaned.length === 14) return formatCNPJ(value);
  
  return value;
}

/**
 * Mask CPF (***123456**)
 */
export function maskCPF(cpf: string | null | undefined): string {
  if (!cpf) return "";
  
  const cleaned = cpf.replace(/\D/g, "");
  
  if (cleaned.length !== 11) return cpf;
  
  return `***${cleaned.substring(3, 9)}**`;
}

/**
 * Format date to Brazilian format (DD/MM/YYYY)
 */
export function formatDate(date: string | Date | null | undefined): string {
  if (!date) return "";
  
  try {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    
    if (isNaN(dateObj.getTime())) return String(date);
    
    return new Intl.DateTimeFormat("pt-BR").format(dateObj);
  } catch {
    return String(date);
  }
}

/**
 * Format month/year (YYYYMM) to readable format (Janeiro/2025)
 */
export function formatMonthYear(mesAno: string | null | undefined): string {
  if (!mesAno || mesAno.length !== 6) return String(mesAno || "");
  
  const year = mesAno.substring(0, 4);
  const month = parseInt(mesAno.substring(4, 6), 10);
  
  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  
  return `${months[month - 1]}/${year}`;
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string | null | undefined, maxLength: number): string {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}

/**
 * Format large numbers with K, M, B suffixes
 */
export function formatCompactNumber(value: number | null | undefined): string {
  if (value === null || value === undefined) return "0";
  
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(1)}B`;
  }
  
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}M`;
  }
  
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1)}K`;
  }
  
  return String(value);
}
