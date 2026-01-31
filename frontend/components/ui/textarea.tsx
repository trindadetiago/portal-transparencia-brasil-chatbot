import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({
  className,
  showHandle = false,
  ...props
}: React.ComponentProps<"textarea"> & { showHandle?: boolean }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[80px] w-full rounded-xl border border-input bg-background px-4 py-3",
        "text-sm placeholder:text-muted-foreground/60",
        "transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/50",
        showHandle ? "resize-y" : "resize-none",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
