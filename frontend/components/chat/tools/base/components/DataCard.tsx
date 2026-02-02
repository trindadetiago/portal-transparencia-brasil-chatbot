/**
 * Generic data card component
 */

import { cn } from "@/lib/utils";

interface DataCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "bordered";
}

export function DataCard({ children, className, variant = "default" }: DataCardProps) {
  return (
    <div
      className={cn(
        "rounded p-2",
        variant === "default" && "bg-background/50",
        variant === "elevated" && "bg-background/50 shadow-sm",
        variant === "bordered" && "bg-background/50 border border-border/30",
        className
      )}
    >
      {children}
    </div>
  );
}

export function DataCardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mb-2", className)}>{children}</div>;
}

export function DataCardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h4 className={cn("text-[12px] font-semibold text-foreground", className)}>
      {children}
    </h4>
  );
}

export function DataCardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("space-y-1", className)}>{children}</div>;
}
