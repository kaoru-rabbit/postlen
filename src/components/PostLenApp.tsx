"use client";

import { useState } from "react";
import Link from "next/link";
import { platforms } from "@/lib/counters";
import { useDictionary } from "@/lib/i18n";
import { PlatformCard } from "./PlatformCard";
import { MediaUpload } from "./MediaUpload";
import { Preview } from "./Preview";
import { AdUnit } from "./AdUnit";
import { ArticleBody } from "./ArticleBody";
import { homeEn, homeJa } from "@/content/home";

export function PostLenApp({ lang }: { lang: string }) {
  const dict = useDictionary();
  const [text, setText] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("x");
  const [images, setImages] = useState<string[]>([]);
  const [video, setVideo] = useState<string | null>(null);

  function handleImagesAdd(files: File[]) {
    if (video) {
      URL.revokeObjectURL(video);
      setVideo(null);
    }
    const newUrls = files.map((f) => URL.createObjectURL(f));
    setImages((prev) => [...prev, ...newUrls].slice(0, 4));
  }

  function handleImageRemove(index: number) {
    setImages((prev) => {
      URL.revokeObjectURL(prev[index]);
      return prev.filter((_, i) => i !== index);
    });
  }

  function handleVideoAdd(file: File) {
    images.forEach((url) => URL.revokeObjectURL(url));
    setImages([]);
    if (video) URL.revokeObjectURL(video);
    setVideo(URL.createObjectURL(file));
  }

  function handleMediaClear() {
    images.forEach((url) => URL.revokeObjectURL(url));
    setImages([]);
    if (video) {
      URL.revokeObjectURL(video);
      setVideo(null);
    }
  }

  const otherLang = lang === "ja" ? "en" : "ja";
  const hasMedia = images.length > 0 || video !== null;
  const content = lang === "ja" ? homeJa : homeEn;

  // Announce only once the selected platform is within 10% of its limit, so
  // screen readers are not interrupted on every keystroke.
  const active = platforms.find((p) => p.id === selectedPlatform);
  const activeCount = active ? active.count(text) : 0;
  const activeRemaining = active ? active.maxLength - activeCount : 0;
  const limitStatus =
    active && text.length > 0 && activeRemaining <= active.maxLength * 0.1
      ? `${active.name}: ${activeCount} / ${active.maxLength}${
          activeRemaining < 0 ? `, ${-activeRemaining} ${dict.editor.over}` : ""
        }`
      : "";

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            PostLen
          </span>
          <div className="flex items-center gap-4">
            <p className="hidden text-sm text-zinc-600 sm:block dark:text-zinc-400">
              {dict.header.subtitle}
            </p>
            <Link
              href={`/${otherLang}`}
              className="rounded border border-zinc-300 px-3 py-2 text-xs text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              {dict.lang.switch}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          {dict.header.heading}
        </h1>
        <p className="mt-2 mb-6 max-w-3xl text-zinc-600 dark:text-zinc-400">
          {dict.header.tagline}
        </p>

        <label htmlFor="postlen-input" className="sr-only">
          {dict.editor.label}
        </label>
        <textarea
          id="postlen-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={dict.editor.placeholder}
          className="min-h-[160px] w-full resize-none rounded-xl border border-zinc-300 bg-white p-4 text-base leading-relaxed text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-400 dark:focus:border-zinc-400 dark:focus:ring-zinc-400"
          rows={6}
        />

        <p aria-live="polite" className="sr-only">
          {limitStatus}
        </p>

        <div className="mt-2 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
          <span>{text.length} {dict.editor.characters}</span>
          {(text.length > 0 || hasMedia) && (
            <button
              onClick={() => { setText(""); handleMediaClear(); }}
              className="-my-1 px-2 py-2 hover:text-zinc-900 dark:hover:text-zinc-200"
            >
              {dict.editor.clearAll}
            </button>
          )}
        </div>

        <MediaUpload
          images={images}
          video={video}
          onImagesAdd={handleImagesAdd}
          onImageRemove={handleImageRemove}
          onVideoAdd={handleVideoAdd}
          onMediaClear={handleMediaClear}
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
              <Preview text={text} images={images} video={video} platformId={selectedPlatform} />
            </div>
          </div>
        </div>
      </main>

      <AdUnit slot="POSTLEN_BOTTOM" className="mx-auto max-w-5xl px-4 mt-12" />

      <section className="mx-auto mt-20 max-w-2xl px-4 text-zinc-700 dark:text-zinc-300">
        <ArticleBody
          sections={content.sections}
          faq={content.faq}
          faqHeading={content.faqHeading}
        />
        <p className="mt-12 text-sm text-zinc-600 dark:text-zinc-400">
          {lang === "ja" ? (
            <>
              各プラットフォームの詳細は
              <Link
                href={`/${lang}/blog`}
                className="text-zinc-900 underline underline-offset-2 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-white"
              >
                ブログ
              </Link>
              で解説しています。
            </>
          ) : (
            <>
              Detailed guides for each platform are available on the{" "}
              <Link
                href={`/${lang}/blog`}
                className="text-zinc-900 underline underline-offset-2 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-white"
              >
                blog
              </Link>
              .
            </>
          )}
        </p>
      </section>

      <footer className="mt-16 border-t border-zinc-200 py-6 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-4 text-center text-xs text-zinc-600 dark:text-zinc-400">
          <p>{dict.footer.text}</p>
          <div className="mt-1 flex justify-center gap-2">
            <Link
              href={`/${lang}/blog`}
              className="px-2 py-2 transition-colors hover:text-zinc-900 dark:hover:text-zinc-200"
            >
              {lang === "ja" ? "ブログ" : "Blog"}
            </Link>
            <Link
              href={`/${lang}/privacy`}
              className="px-2 py-2 transition-colors hover:text-zinc-900 dark:hover:text-zinc-200"
            >
              {dict.legal.privacy.title}
            </Link>
            <Link
              href={`/${lang}/terms`}
              className="px-2 py-2 transition-colors hover:text-zinc-900 dark:hover:text-zinc-200"
            >
              {dict.legal.terms.title}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
