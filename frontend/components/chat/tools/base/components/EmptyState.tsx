/**
 * Empty state component
 */

import { cn } from "@/lib/utils";
import { FileQuestion } from "lucide-react";

interface EmptyStateProps {
  message?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  message = "Nenhum resultado encontrado",
  icon,
  className
}: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-4 text-center", className)}>
      <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center mb-2">
        {icon || <FileQuestion className="w-4 h-4 text-muted-foreground" />}
      </div>
      <p className="text-[10px] text-muted-foreground/60 italic">
        {message}
      </p>
    </div>
  );
}
