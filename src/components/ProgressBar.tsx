export function ProgressBar({ current, max }: { current: number; max: number }) {
  const ratio = current / max;
  const percent = Math.min(ratio * 100, 100);
  // Fills are one to two steps darker than the usual 500 so they clear WCAG
  // 1.4.11 (3:1 for non-text) against the lightened track.
  const color =
    ratio > 1 ? "bg-red-600" : ratio > 0.9 ? "bg-amber-700" : "bg-brand-600";
  return (
    <div className="h-1.5 w-full rounded-full bg-zinc-100 dark:bg-zinc-700">
      <div
        className={`h-1.5 rounded-full transition-all duration-150 ${color}`}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
