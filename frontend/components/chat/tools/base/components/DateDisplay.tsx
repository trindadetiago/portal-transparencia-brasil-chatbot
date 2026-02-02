/**
 * Date display component
 */

import { formatDate } from "../utils/formatters";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";

interface DateDisplayProps {
  value: string | Date | null | undefined;
  showIcon?: boolean;
  className?: string;
}

export function DateDisplay({ value, showIcon = false, className }: DateDisplayProps) {
  const formatted = formatDate(value);
  
  if (!formatted) return null;
  
  return (
    <span className={cn("inline-flex items-center gap-1 text-[10px] text-muted-foreground", className)}>
      {showIcon && <Calendar className="w-3 h-3" />}
      {formatted}
    </span>
  );
}
