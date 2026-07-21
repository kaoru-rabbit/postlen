import { notFound } from "next/navigation";
import Link from "next/link";
import { hasLocale } from "../../dictionaries";
import { getArticle, getAllArticleSlugs } from "@/lib/articles";
import { ArticleBody } from "@/components/ArticleBody";
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
    alternates: {
      canonical: `/${lang}/blog/${slug}`,
      languages: {
        en: `/en/blog/${slug}`,
        ja: `/ja/blog/${slug}`,
      },
    },
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

  const isJa = lang === "ja";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-2xl px-6 py-16">
        <Link
          href={`/${lang}/blog`}
          className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          ← {isJa ? "ブログに戻る" : "Back to Blog"}
        </Link>

        <h1 className="mt-8 text-3xl font-bold text-zinc-100 leading-tight">
          {article.title}
        </h1>
        <p className="mt-3 text-sm text-zinc-500">{article.date}</p>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          {article.description}
        </p>

        <ArticleBody
          sections={article.sections}
          faq={article.faq}
          faqHeading={isJa ? "よくある質問" : "Frequently asked questions"}
        />

        <div className="mt-16 rounded-lg border border-zinc-800 p-6">
          <p className="text-zinc-300">
            {isJa
              ? "PostLenなら、この記事で扱ったすべてのプラットフォームの文字数を同時に確認できます。"
              : "PostLen counts your draft against every platform in this article at the same time."}
          </p>
          <Link
            href={`/${lang}`}
            className="mt-3 inline-block text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            {isJa ? "PostLenを使ってみる →" : "Try PostLen →"}
          </Link>
        </div>
      </div>
    </div>
  );
}
