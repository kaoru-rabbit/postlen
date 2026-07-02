import { notFound } from "next/navigation";
import Link from "next/link";
import { hasLocale } from "../../dictionaries";
import { getArticle, getAllArticleSlugs } from "@/lib/articles";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllArticleSlugs().map(({ slug, lang }) => ({ lang, slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const article = getArticle(slug, lang);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();

  const article = getArticle(slug, lang);
  if (!article) notFound();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <Link
          href={`/${lang}/blog`}
          className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          ← {lang === "ja" ? "ブログに戻る" : "Back to Blog"}
        </Link>
        <h1 className="mt-8 text-3xl font-bold text-zinc-100">
          {article.title}
        </h1>
        <p className="mt-2 text-sm text-zinc-500">{article.date}</p>
        <p className="mt-6 leading-relaxed">{article.description}</p>
        {article.sections.map((section) => (
          <section key={section.heading} className="mt-8">
            <h2 className="text-lg font-semibold text-zinc-100">
              {section.heading}
            </h2>
            <p className="mt-2 leading-relaxed">{section.body}</p>
          </section>
        ))}

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <p className="text-sm text-zinc-500">
            {lang === "ja"
              ? "PostLenを使って、投稿前に文字数を確認しましょう。"
              : "Use PostLen to check your character count before posting."}
          </p>
          <Link
            href={`/${lang}`}
            className="mt-2 inline-block text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            {lang === "ja" ? "PostLenを使ってみる →" : "Try PostLen →"}
          </Link>
        </div>
      </div>
    </div>
  );
}
