import { ShieldCheck } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white text-black p-2 rounded-xl">
            <ShieldCheck size={20} />
          </div>

          <div>
            <h1 className="font-bold text-lg">
              TrustTerms
            </h1>

            <p className="text-xs text-zinc-500">
              Privacy Policy Analyzer
            </p>
          </div>
        </div>

        <div className="text-sm text-zinc-500">
          MVP
        </div>
      </div>
    </header>
  );
}