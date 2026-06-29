"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID;

export function AdSenseScript() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookie-consent") === "granted") {
      setConsented(true);
    }
    const handler = () => setConsented(true);
    window.addEventListener("consent-granted", handler);
    return () => window.removeEventListener("consent-granted", handler);
  }, []);

  if (!ADSENSE_ID || !consented) return null;

  return (
    <Script
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  );
}
