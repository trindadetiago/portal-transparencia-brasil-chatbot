/**
 * Generic data table component
 */

import { cn } from "@/lib/utils";

interface Column<T> {
  key: string;
  label: string;
  render?: (value: any, row: T) => React.ReactNode;
  align?: "left" | "center" | "right";
  width?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  className?: string;
  maxRows?: number;
}

export function DataTable<T extends Record<string, any>>({
  columns,
  data,
  className,
  maxRows = 10,
}: DataTableProps<T>) {
  if (!data || data.length === 0) {
    return (
      <div className="text-[10px] text-muted-foreground/60 italic text-center py-2">
        Nenhum dado disponível
      </div>
    );
  }
  
  const displayData = data.slice(0, maxRows);
  const hasMore = data.length > maxRows;
  
  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="w-full text-[10px]">
        <thead>
          <tr className="border-b border-border/30">
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  "px-2 py-1 font-semibold text-muted-foreground",
                  col.align === "center" && "text-center",
                  col.align === "right" && "text-right",
                  col.align === "left" && "text-left"
                )}
                style={{ width: col.width }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayData.map((row, idx) => (
            <tr
              key={idx}
              className="border-b border-border/10 last:border-0 hover:bg-muted/30 transition-colors"
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cn(
                    "px-2 py-1.5",
                    col.align === "center" && "text-center",
                    col.align === "right" && "text-right",
                    col.align === "left" && "text-left"
                  )}
                >
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {hasMore && (
        <div className="text-[9px] text-muted-foreground/60 text-center mt-2">
          +{data.length - maxRows} registros não exibidos
        </div>
      )}
    </div>
  );
}
