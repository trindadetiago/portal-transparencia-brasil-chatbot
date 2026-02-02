/**
 * Base types shared across all tools
 */

export interface ToolMetadata {
  label: string;
  category?: string;
}

export interface ToolRenderer<TInput = any, TOutput = any> {
  renderInput?: (input: TInput) => React.ReactNode;
  renderOutput?: (output: TOutput) => React.ReactNode;
  getLabel?: (input?: TInput) => string;
  getInputLabel?: (viewMode: "normal" | "raw") => string;
  getOutputLabel?: (viewMode: "normal" | "raw") => string;
}

export type ViewMode = "normal" | "raw";
