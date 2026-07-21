import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "./dictionaries";
import { DictionaryProvider } from "@/lib/i18n";
import { PostLenApp } from "@/components/PostLenApp";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";
import { AdSenseScript } from "@/components/AdSenseScript";
import { homeEn, homeJa } from "@/content/home";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);
  const content = lang === "ja" ? homeJa : homeEn;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <DictionaryProvider dictionary={dict}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PostLenApp lang={lang} />
      <CookieConsent />
      <Analytics />
      <AdSenseScript />
    </DictionaryProvider>
  );
}
