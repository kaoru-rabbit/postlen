"use client";

import { useState } from "react";
import Link from "next/link";
import { platforms } from "@/lib/counters";
import { useDictionary } from "@/lib/i18n";
import { PlatformCard } from "./PlatformCard";
import { ImageUpload } from "./ImageUpload";
import { Preview } from "./Preview";

export function PostLenApp({ lang }: { lang: string }) {
  const dict = useDictionary();
  const [text, setText] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("x");
  const [images, setImages] = useState<string[]>([]);

  function handleImagesAdd(files: File[]) {
    const newUrls = files.map((f) => URL.createObjectURL(f));
    setImages((prev) => [...prev, ...newUrls].slice(0, 4));
  }

  function handleImageRemove(index: number) {
    setImages((prev) => {
      URL.revokeObjectURL(prev[index]);
      return prev.filter((_, i) => i !== index);
    });
  }

  function handleImagesClear() {
    images.forEach((url) => URL.revokeObjectURL(url));
    setImages([]);
  }

  const otherLang = lang === "ja" ? "en" : "ja";

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            PostLen
          </h1>
          <div className="flex items-center gap-4">
            <p className="text-sm text-zinc-500">{dict.header.subtitle}</p>
            <Link
              href={`/${otherLang}`}
              className="text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors border border-zinc-300 dark:border-zinc-700 rounded px-2 py-1"
            >
              {dict.lang.switch}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={dict.editor.placeholder}
          className="w-full resize-none rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-4 text-base leading-relaxed text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:border-zinc-500 dark:focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:focus:ring-zinc-400 min-h-[160px]"
          rows={6}
        />

        <div className="mt-2 flex items-center justify-between text-xs text-zinc-500">
          <span>{text.length} {dict.editor.characters}</span>
          {(text.length > 0 || images.length > 0) && (
            <button
              onClick={() => { setText(""); handleImagesClear(); }}
              className="hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              {dict.editor.clearAll}
            </button>
          )}
        </div>

        <ImageUpload
          images={images}
          onImagesAdd={handleImagesAdd}
          onImageRemove={handleImageRemove}
          onImagesClear={handleImagesClear}
        />

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-sm font-medium text-zinc-500 uppercase tracking-wide">
              {dict.sections.platforms}
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {platforms.map((p) => (
                <PlatformCard
                  key={p.id}
                  platform={p}
                  text={text}
                  selected={selectedPlatform === p.id}
                  onClick={() => setSelectedPlatform(p.id)}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-medium text-zinc-500 uppercase tracking-wide">
              {dict.sections.preview}
            </h2>
            <div className="sticky top-8">
              <Preview text={text} images={images} platformId={selectedPlatform} />
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800 py-6">
        <div className="mx-auto max-w-5xl px-4 text-center text-xs text-zinc-400">
          {dict.footer.text}
        </div>
      </footer>
    </div>
  );
}
