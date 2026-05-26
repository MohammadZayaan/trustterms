import { RISK_PATTERNS } from "./constants";
import {
    AnalysisResult,
    RiskMatch,
} from "@/types/analysis";

import {
    calculateRiskScore,
    getOverallSeverity,
} from "./riskScorer";

export function analyzePolicyText(
    text: string,
    sourceType: "url" | "text"
): AnalysisResult {
    const matches: RiskMatch[] = [];

    for (const risk of RISK_PATTERNS) {
        const found = text.match(risk.pattern);

        if (found) {
            matches.push({
                category: risk.category,
                severity: risk.severity,
                matchedText: found[0],
                explanation: risk.explanation,
            });
        }
    }

    const severities = matches.map(
        (match) => match.severity
    );

    const riskScore = calculateRiskScore(severities);

    const severity = getOverallSeverity(riskScore);

    let summary =
        "No major concerning clauses were detected.";

    if (matches.length > 0) {
        const highRiskCount = matches.filter(
            (m) => m.severity === "High"
        ).length;

        summary = `Detected ${matches.length} potentially important clause${matches.length > 1 ? "s" : ""
            } including ${highRiskCount} high-risk issue${highRiskCount !== 1 ? "s" : ""
            }.`;
    }

    if (matches.length > 0) {
        summary = `Detected ${matches.length} potentially important clause${matches.length > 1 ? "s" : ""
            } that users should review carefully.`;
    }

    return {
        success: true,
        riskScore,
        severity,
        summary,
        aiSummary: null,
        matches,
        sourceType,
        warnings: [],
    };
}