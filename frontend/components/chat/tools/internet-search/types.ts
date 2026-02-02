/**
 * Types for internet_search tool
 */

export interface InternetSearchInput {
  query: string;
  max_results?: number;
}

export interface SearchResult {
  title: string;
  url: string;
  content: string;
  score?: number;
}

export interface InternetSearchOutput {
  results: SearchResult[];
  query?: string;
}
