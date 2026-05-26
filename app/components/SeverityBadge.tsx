import { Severity } from "@/types/analysis";

interface Props {
  severity: Severity;
}

export default function SeverityBadge({
  severity,
}: Props) {
  const styles = {
    Low: "bg-green-500/20 text-green-400 border-green-500/30",
    Medium:
      "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    High: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full border text-sm font-medium ${styles[severity]}`}
    >
      {severity} Risk
    </span>
  );
}