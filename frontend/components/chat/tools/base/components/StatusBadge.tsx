/**
 * Status badge component with color variants
 */

import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
  variant?: "default" | "success" | "warning" | "danger" | "info";
  className?: string;
}

const variantStyles = {
  default: "bg-muted text-muted-foreground",
  success: "bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400",
  warning: "bg-yellow-100 text-yellow-700 dark:bg-yellow-950/30 dark:text-yellow-400",
  danger: "bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400",
  info: "bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400",
};

export function StatusBadge({ status, variant = "default", className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-medium",
        variantStyles[variant],
        className
      )}
    >
      {status}
    </span>
  );
}

/**
 * Auto-detect variant based on status text
 */
export function SmartStatusBadge({ status, className }: { status: string; className?: string }) {
  const statusLower = status.toLowerCase();
  
  let variant: StatusBadgeProps["variant"] = "default";
  
  if (statusLower.includes("ativo") || statusLower.includes("conclu") || statusLower.includes("aprovado")) {
    variant = "success";
  } else if (statusLower.includes("pendente") || statusLower.includes("andamento")) {
    variant = "warning";
  } else if (statusLower.includes("cancelado") || statusLower.includes("suspen") || statusLower.includes("inativo")) {
    variant = "danger";
  } else if (statusLower.includes("publicado") || statusLower.includes("aberto")) {
    variant = "info";
  }
  
  return <StatusBadge status={status} variant={variant} className={className} />;
}
