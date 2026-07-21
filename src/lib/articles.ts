import type { Article } from "@/content/types";
import { youtubeEn, youtubeJa } from "@/content/articles/youtube";
import { threadsEn, threadsJa } from "@/content/articles/threads";
import { xTwitterEn, xTwitterJa } from "@/content/articles/x-twitter";
import { instagramEn, instagramJa } from "@/content/articles/instagram";
import {
  metaDescriptionEn,
  metaDescriptionJa,
} from "@/content/articles/meta-description";
import { linkedinEn, linkedinJa } from "@/content/articles/linkedin";
import { tiktokEn, tiktokJa } from "@/content/articles/tiktok";
import { comparisonEn, comparisonJa } from "@/content/articles/comparison";
import { howToUseEn, howToUseJa } from "@/content/articles/how-to-use";

export type { Article };

const articles: Article[] = [
  xTwitterEn,
  xTwitterJa,
  instagramEn,
  instagramJa,
  linkedinEn,
  linkedinJa,
  threadsEn,
  threadsJa,
  youtubeEn,
  youtubeJa,
  tiktokEn,
  tiktokJa,
  howToUseEn,
  howToUseJa,
  metaDescriptionEn,
  metaDescriptionJa,
  comparisonEn,
  comparisonJa,
];

export function getArticlesByLang(lang: string): Article[] {
  return articles.filter((a) => a.lang === lang);
}

export function getArticle(slug: string, lang: string): Article | undefined {
  return articles.find((a) => a.slug === slug && a.lang === lang);
}

export function getAllArticleSlugs(): { slug: string; lang: string }[] {
  return articles.map((a) => ({ slug: a.slug, lang: a.lang }));
}
