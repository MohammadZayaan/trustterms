import { AlertTriangle } from "lucide-react";

import { RiskMatch } from "@/types/analysis";

import SeverityBadge from "./SeverityBadge";

interface Props {
  match: RiskMatch;
}

export default function RiskCard({
  match,
}: Props) {
  return (
    <div className="border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-6 hover:border-zinc-700 transition">
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="bg-red-500/10 text-red-400 p-2 rounded-xl">
            <AlertTriangle size={18} />
          </div>

          <h3 className="font-semibold text-lg">
            {match.category}
          </h3>
        </div>

        <SeverityBadge severity={match.severity} />
      </div>

      <p className="text-zinc-400 mb-5 leading-relaxed">
        {match.explanation}
      </p>

      <div className="bg-black/40 border border-zinc-800 rounded-2xl p-4">
        <p className="text-sm text-zinc-300 font-mono">
          “{match.matchedText}”
        </p>
      </div>
    </div>
  );
}