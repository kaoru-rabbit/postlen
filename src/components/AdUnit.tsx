"use client";

import { useEffect, useRef } from "react";

const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID;

export function AdUnit({
  slot,
  className,
  label,
}: {
  slot: string;
  className?: string;
  label: string;
}) {
  const pushed = useRef(false);

  useEffect(() => {
    if (!ADSENSE_ID || pushed.current) return;
    if (localStorage.getItem("cookie-consent") !== "granted") return;
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // ad blocker
    }
  }, []);

  if (!ADSENSE_ID) return null;

  return (
    <div className={className}>
      {/* AdSense requires ads to be distinguishable from page content. */}
      <p className="mb-1 text-[11px] tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
        {label}
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_ID}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
