export type Severity = "Low" | "Medium" | "High";

export interface RiskMatch {
  category: string;
  severity: Severity;
  matchedText: string;
  explanation: string;
}

export interface AnalysisResult {
  success: boolean;
  riskScore: number;
  severity: Severity;
  summary: string;
  aiSummary?: string | null;
  matches: RiskMatch[];
  sourceType: "url" | "text";
  warnings?: string[];
}