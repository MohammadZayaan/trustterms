import { Severity } from "@/types/analysis";

export function calculateRiskScore(
  severities: Severity[]
): number {
  let score = 0;

  severities.forEach((severity) => {
    if (severity === "Low") score += 5;
    if (severity === "Medium") score += 15;
    if (severity === "High") score += 30;
  });

  return Math.min(score, 100);
}

export function getOverallSeverity(
  score: number
): Severity {
  if (score >= 70) return "High";
  if (score >= 31) return "Medium";
  return "Low";
}