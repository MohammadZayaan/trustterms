"use client";

import { useState } from "react";

import { AnalysisResult } from "@/types/analysis";

import SummaryPanel from "./SummaryPanel";
import RiskCard from "./RiskCard";
import LoadingSkeleton from "./LoadingSkeleton";

export default function AnalyzerForm() {
    const [url, setUrl] = useState("");
    const [text, setText] = useState("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const [result, setResult] =
        useState<AnalysisResult | null>(null);

    async function handleAnalyze() {
        try {
            setLoading(true);

            setError("");

            setResult(null);

            const response = await fetch(
                "/api/analyze",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        url,
                        text,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error || "Analysis failed."
                );
            }

            setResult(data);
        } catch (err) {
            console.error(err);

            setError(
                err instanceof Error
                    ? err.message
                    : "Something went wrong."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <div className="border border-zinc-800 bg-zinc-900 rounded-2xl p-6 mb-8">
                <div className="space-y-5">
                    
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() =>
                                setText(
                                    "We may share your data with third-party advertisers, track your precise location, and retain your information indefinitely."
                                )
                            }
                            className="text-sm border border-zinc-700 hover:border-zinc-600 px-3 py-2 rounded-xl transition"
                        >
                            Load Sample Policy
                        </button>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm text-zinc-400">
                            Privacy Policy URL
                        </label>

                        <input
                            type="text"
                            placeholder="https://example.com/privacy"
                            value={url}
                            onChange={(e) =>
                                setUrl(e.target.value)
                            }
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-zinc-600"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-zinc-400">
                            Or Paste Policy Text
                        </label>

                        <textarea
                            placeholder="Paste terms or privacy policy..."
                            value={text}
                            onChange={(e) =>
                                setText(e.target.value)
                            }
                            rows={8}
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-zinc-600 resize-none"
                        />
                    </div>

                    <button
                        onClick={handleAnalyze}
                        disabled={loading}
                        className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-[1.02] hover:opacity-90 transition disabled:opacity-50"
                    >
                        {loading
                            ? "Analyzing..."
                            : "Analyze Policy"}
                    </button>
                </div>
            </div>

            {error && (
                <div className="border border-red-500/30 bg-red-500/10 text-red-400 rounded-2xl p-4 mb-6">
                    {error}
                </div>
            )}

            {loading && <LoadingSkeleton />}
            {!loading && !result && !error && (
                <div className="border border-dashed border-zinc-800 rounded-3xl p-12 text-center text-zinc-500">
                    Paste a privacy policy or URL to begin analysis.
                </div>
            )}
            {result && (
                <div>
                    <SummaryPanel result={result} />

                    <div className="grid md:grid-cols-2 gap-5">
                        {result.matches.map((match, index) => (
                            <RiskCard
                                key={index}
                                match={match}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}