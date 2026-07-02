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
    <div className="min-h-screen bg-zinc-950 text-zinc-300">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <Link
          href={`/${lang}`}
          className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          ← {lang === "ja" ? "PostLenに戻る" : "Back to PostLen"}
        </Link>
        <h1 className="mt-8 text-3xl font-bold text-zinc-100">
          {lang === "ja" ? "ブログ" : "Blog"}
        </h1>
        <p className="mt-2 text-zinc-400">
          {lang === "ja"
            ? "SNS文字数制限のガイドとヒント"
            : "Guides and tips for social media character limits"}
        </p>

        <div className="mt-10 space-y-8">
          {articles.map((article) => (
            <article key={article.slug} className="group">
              <Link href={`/${lang}/blog/${article.slug}`}>
                <h2 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
                  {article.title}
                </h2>
                <p className="mt-1 text-sm text-zinc-500">{article.date}</p>
                <p className="mt-2 text-zinc-400">{article.description}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
