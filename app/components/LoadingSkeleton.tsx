export default function LoadingSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-10 bg-zinc-800 rounded-xl" />

      <div className="h-32 bg-zinc-800 rounded-2xl" />

      <div className="grid md:grid-cols-2 gap-4">
        <div className="h-40 bg-zinc-800 rounded-2xl" />
        <div className="h-40 bg-zinc-800 rounded-2xl" />
      </div>
    </div>
  );
}