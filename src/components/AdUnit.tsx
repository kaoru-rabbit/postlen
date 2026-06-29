"use client";

import { useEffect, useRef } from "react";

const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID;

export function AdUnit({ slot, className }: { slot: string; className?: string }) {
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
