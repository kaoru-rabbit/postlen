import type { Platform } from "@/lib/counters";
import { useDictionary } from "@/lib/i18n";
import { ProgressBar } from "./ProgressBar";

export function PlatformCard({
  platform,
  text,
  selected,
  onClick,
}: {
  platform: Platform;
  text: string;
  selected: boolean;
  onClick: () => void;
}) {
  const dict = useDictionary();
  const count = platform.count(text);
  const remaining = platform.maxLength - count;
  const over = remaining < 0;
  const near = !over && remaining <= platform.maxLength * 0.1;

  return (
    <button
      onClick={onClick}
      aria-pressed={selected}
      className={`w-full rounded-xl border p-4 text-left transition-colors ${
        selected
          ? "border-brand-700 bg-brand-50 ring-1 ring-brand-700 dark:border-zinc-100 dark:bg-zinc-800 dark:ring-zinc-100"
          : "border-zinc-200 bg-white hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-500"
      }`}
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {platform.name}
        </span>
        <span className="flex items-baseline gap-1.5">
          <span
            className={`font-mono text-base font-semibold tabular-nums ${
              over
                ? "text-red-700 dark:text-red-400"
                : near
                  ? "text-amber-700 dark:text-amber-400"
                  : "text-zinc-900 dark:text-zinc-200"
            }`}
          >
            {count}
            <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400">
              {" / "}
              {platform.maxLength}
            </span>
          </span>
          {over && (
            <span className="rounded bg-red-100 px-1.5 py-0.5 font-mono text-xs font-semibold text-red-700 dark:bg-red-950 dark:text-red-300">
              +{-remaining}
            </span>
          )}
        </span>
      </div>
      <ProgressBar current={count} max={platform.maxLength} />
      {platform.extras && text.length > 0 && (
        <div className="mt-2 space-y-1">
          {platform.extras(text).map((extra) => {
            const label = extra.label === "Hashtags" ? dict.extras.hashtags : extra.label;
            const extraOver = extra.max !== undefined && extra.value > extra.max;
            return (
              <div
                key={extra.label}
                className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400"
              >
                <span>{label}</span>
                <span
                  className={
                    extraOver ? "font-semibold text-red-700 dark:text-red-400" : ""
                  }
                >
                  {extra.value}
                  {extra.max && ` / ${extra.max}`}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </button>
  );
}
