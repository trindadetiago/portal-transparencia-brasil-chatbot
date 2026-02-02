/**
 * List item component with optional icon/avatar
 */

import { cn } from "@/lib/utils";

interface ListItemProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  meta?: React.ReactNode;
  className?: string;
}

export function ListItem({ title, subtitle, icon, meta, className }: ListItemProps) {
  return (
    <div className={cn("flex items-start gap-2 rounded p-2 hover:bg-muted/30 transition-colors", className)}>
      {icon && (
        <div className="shrink-0 w-6 h-6 rounded bg-muted/50 flex items-center justify-center">
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="text-[11px] font-medium text-foreground truncate">
          {title}
        </div>
        {subtitle && (
          <div className="text-[10px] text-muted-foreground truncate">
            {subtitle}
          </div>
        )}
      </div>
      {meta && (
        <div className="shrink-0 text-[10px] text-muted-foreground">
          {meta}
        </div>
      )}
    </div>
  );
}
