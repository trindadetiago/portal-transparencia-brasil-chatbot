/**
 * Currency display component
 */

import { formatCurrency } from "../utils/formatters";
import { cn } from "@/lib/utils";

interface CurrencyDisplayProps {
  value: number | string | null | undefined;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function CurrencyDisplay({ value, className, size = "md" }: CurrencyDisplayProps) {
  const formatted = formatCurrency(value);
  
  return (
    <span
      className={cn(
        "font-mono font-semibold text-green-700 dark:text-green-400",
        size === "sm" && "text-[10px]",
        size === "md" && "text-[11px]",
        size === "lg" && "text-[13px]",
        className
      )}
    >
      {formatted}
    </span>
  );
}
