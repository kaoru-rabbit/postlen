import { notFound } from "next/navigation";
import Link from "next/link";
import { hasLocale, type Locale, getDictionary } from "../dictionaries";
import { getArticlesByLang } from "@/lib/articles";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ja" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang as Locale);
  return {
    title: lang === "ja" ? "ブログ — PostLen" : "Blog — PostLen",
    description: dict.meta.description,
  };
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const articles = getArticlesByLang(lang);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <Link
          href={`/${lang}`}
          className="inline-block py-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          ← {lang === "ja" ? "PostLenに戻る" : "Back to PostLen"}
        </Link>
        <h1 className="mt-6 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {lang === "ja" ? "ブログ" : "Blog"}
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          {lang === "ja"
            ? "SNS文字数制限のガイドとヒント"
            : "Guides and tips for social media character limits"}
        </p>

        <div className="mt-10 space-y-4">
          {articles.map((article) => (
            <article key={article.slug}>
              <Link
                href={`/${lang}/blog/${article.slug}`}
                className="block rounded-lg border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
              >
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {article.title}
                </h2>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {article.date}
                </p>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {article.description}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
