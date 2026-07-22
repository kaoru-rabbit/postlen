// Three bars of differing length approaching a limit line — the same shape as
// ProgressBar, drawn on the 32px grid shared with app/icon.svg.
const BARS = [
  { y: 7, w: 14 },
  { y: 14, w: 9 },
  { y: 21, w: 17 },
];

export function BrandMark({ size = 22 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="24.5" y="5" width="2" height="22" rx="1" fill="#52525b" />
      {BARS.map((b) => (
        <rect
          key={b.y}
          x="5.5"
          y={b.y}
          width={b.w}
          height="4"
          rx="2"
          fill="#0f766e"
        />
      ))}
    </svg>
  );
}

export function BrandLockup() {
  return (
    <span className="flex items-center gap-2">
      <BrandMark />
      <span className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        PostLen
      </span>
    </span>
  );
}
