"use client";

import { useState, useEffect, useCallback } from "react";
import { useDictionary } from "@/lib/i18n";

export function CookieConsent() {
  const dict = useDictionary();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) {
      setVisible(true);
    }
  }, []);

  const accept = useCallback(() => {
    localStorage.setItem("cookie-consent", "granted");
    setVisible(false);
    window.dispatchEvent(new Event("consent-granted"));
  }, []);

  const decline = useCallback(() => {
    localStorage.setItem("cookie-consent", "denied");
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4">
      <div className="mx-auto max-w-xl rounded-xl border border-zinc-700 bg-zinc-900 p-4 shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <p className="text-sm text-zinc-300 flex-1">{dict.consent.message}</p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="rounded-lg px-4 py-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            {dict.consent.decline}
          </button>
          <button
            onClick={accept}
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition-colors"
          >
            {dict.consent.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
