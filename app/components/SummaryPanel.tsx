"use client";

import { Copy } from "lucide-react";

import { AnalysisResult } from "@/types/analysis";
import SeverityBadge from "./SeverityBadge";

interface Props {
  result: AnalysisResult;
}

export default function SummaryPanel({
  result,
}: Props) {
  const trustScore = 100 - result.riskScore;

  return (
    <div className="border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <p className="text-zinc-500 text-sm">
              Risk Analysis
            </p>

            <span className="text-xs bg-zinc-800 border border-zinc-700 px-2 py-1 rounded-full text-zinc-400">
              {result.sourceType === "url"
                ? "Analyzed from URL"
                : "Analyzed from Text"}
            </span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-6xl font-bold tracking-tight">
              {result.riskScore}
            </h2>

            <SeverityBadge
              severity={result.severity}
            />
          </div>

          <div className="flex items-start gap-4">
            <p className="text-zinc-300 leading-relaxed max-w-2xl">
              {result.summary}
            </p>

            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  result.summary
                )
              }
              className="border border-zinc-700 hover:border-zinc-600 bg-zinc-900 p-2 rounded-xl transition"
            >
              <Copy size={16} />
            </button>
          </div>
        </div>

        <div className="border border-zinc-800 bg-zinc-900 rounded-3xl p-6 min-w-[220px]">
          <p className="text-zinc-500 text-sm mb-2">
            Trust Score
          </p>

          <h3 className="text-5xl font-bold mb-2">
            {trustScore}
          </h3>

          <p className="text-sm text-zinc-400">
            Higher is safer.
          </p>
        </div>
      </div>
    </div>
  );
}