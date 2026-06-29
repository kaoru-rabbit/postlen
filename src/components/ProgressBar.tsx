export function ProgressBar({ current, max }: { current: number; max: number }) {
  const ratio = current / max;
  const percent = Math.min(ratio * 100, 100);
  const color =
    ratio > 1 ? "bg-red-500" : ratio > 0.9 ? "bg-amber-500" : "bg-emerald-500";
  return (
    <div className="h-1.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-700">
      <div
        className={`h-1.5 rounded-full transition-all duration-150 ${color}`}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
