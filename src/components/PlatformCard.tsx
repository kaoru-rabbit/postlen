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
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-xl border p-4 text-left transition-all ${
        selected
          ? "border-zinc-900 dark:border-zinc-100 shadow-sm"
          : "border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500"
      }`}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {platform.name}
        </span>
        <span
          className={`text-sm font-mono ${
            over
              ? "text-red-500 font-semibold"
              : remaining <= platform.maxLength * 0.1
                ? "text-amber-500"
                : "text-zinc-500 dark:text-zinc-400"
          }`}
        >
          {over ? remaining : count} / {platform.maxLength}
        </span>
      </div>
      <ProgressBar current={count} max={platform.maxLength} />
      {platform.extras && text.length > 0 && (
        <div className="mt-2 space-y-1">
          {platform.extras(text).map((extra) => {
            const label = extra.label === "Hashtags" ? dict.extras.hashtags : extra.label;
            return (
              <div
                key={extra.label}
                className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400"
              >
                <span>{label}</span>
                <span className={extra.max && extra.value > extra.max ? "text-red-500" : ""}>
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
