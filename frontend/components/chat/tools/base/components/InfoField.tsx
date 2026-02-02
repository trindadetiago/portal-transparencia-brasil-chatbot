/**
 * Info field component for displaying label + value pairs
 */

import { cn } from "@/lib/utils";

interface InfoFieldProps {
  label: string;
  value: React.ReactNode;
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export function InfoField({ label, value, className, orientation = "horizontal" }: InfoFieldProps) {
  if (value === null || value === undefined || value === "") return null;
  
  if (orientation === "vertical") {
    return (
      <div className={cn("space-y-0.5", className)}>
        <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wide">
          {label}
        </div>
        <div className="text-[11px] text-foreground">
          {value}
        </div>
      </div>
    );
  }
  
  return (
    <div className={cn("flex items-baseline gap-2", className)}>
      <span className="text-[10px] font-semibold text-muted-foreground shrink-0">
        {label}:
      </span>
      <span className="text-[11px] text-foreground">
        {value}
      </span>
    </div>
  );
}
