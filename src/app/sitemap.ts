export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { getArticlesByLang } from "@/lib/articles";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://postlen.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja`,
        },
      },
    },
    {
      url: `${BASE_URL}/ja`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: `${BASE_URL}/en`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja/blog`,
        },
      },
    },
    {
      url: `${BASE_URL}/ja/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/blog`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja/privacy`,
        },
      },
    },
    {
      url: `${BASE_URL}/ja/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/privacy`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja/terms`,
        },
      },
    },
    {
      url: `${BASE_URL}/ja/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/terms`,
        },
      },
    },
  ];

  const articlePages: MetadataRoute.Sitemap = getArticlesByLang("en").map(
    (article) => ({
      url: `${BASE_URL}/en/blog/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja/blog/${article.slug}`,
        },
      },
    })
  );

  const articlePagesJa: MetadataRoute.Sitemap = getArticlesByLang("ja").map(
    (article) => ({
      url: `${BASE_URL}/ja/blog/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/blog/${article.slug}`,
        },
      },
    })
  );

  return [...staticPages, ...articlePages, ...articlePagesJa];
}
