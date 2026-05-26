import AnalyzerForm from "./components/AnalyzerForm";
import Header from "./components/Header";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900 rounded-full px-4 py-2 text-sm text-zinc-400 mb-6">
            AI-Assisted Privacy Analysis
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Understand Terms
            <br />
            Before Accepting
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            TrustTerms analyzes Terms &
            Conditions and Privacy Policies
            to identify risky clauses, data
            collection behavior, and important
            legal concerns.
          </p>
        </div>

        <AnalyzerForm />
      </div>
    </main>
  );
}