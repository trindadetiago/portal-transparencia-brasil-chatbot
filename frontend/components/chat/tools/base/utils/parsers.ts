/**
 * Utility functions for parsing API responses
 */

/**
 * Safely parse JSON string or return the object as-is
 */
export function parseJSON<T = any>(value: string | T | null | undefined): T | null {
  if (value === null || value === undefined) return null;
  
  if (typeof value === "string") {
    try {
      return JSON.parse(value) as T;
    } catch {
      return null;
    }
  }
  
  return value as T;
}

/**
 * Parse output to array, handling both array and object responses
 */
export function parseToArray<T = any>(output: any): T[] {
  const parsed = parseJSON(output);
  
  if (Array.isArray(parsed)) {
    return parsed;
  }
  
  if (parsed && typeof parsed === "object") {
    // If it's an object, wrap it in an array
    return [parsed as T];
  }
  
  return [];
}

/**
 * Parse output to single object
 */
export function parseToObject<T = any>(output: any): T | null {
  const parsed = parseJSON(output);
  
  if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
    return parsed as T;
  }
  
  if (Array.isArray(parsed) && parsed.length > 0) {
    return parsed[0] as T;
  }
  
  return null;
}

/**
 * Check if response is an error string
 */
export function isErrorResponse(output: any): boolean {
  if (typeof output === "string") {
    return output.toLowerCase().includes("error") || 
           output.toLowerCase().includes("erro");
  }
  return false;
}

/**
 * Extract error message from response
 */
export function getErrorMessage(output: any): string {
  if (typeof output === "string") return output;
  
  const parsed = parseJSON(output);
  
  if (parsed && typeof parsed === "object") {
    return (parsed as any).error || (parsed as any).message || "Erro desconhecido";
  }
  
  return "Erro ao processar resposta";
}
