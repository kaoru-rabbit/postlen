import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import { LegalPage } from "@/components/LegalPage";
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
  return { title: dict.legal.privacy.title };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  return <LegalPage lang={lang} content={dict.legal.privacy} backLabel={dict.legal.backToApp} />;
}
