import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "./dictionaries";
import { DictionaryProvider } from "@/lib/i18n";
import { PostLenApp } from "@/components/PostLenApp";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";
import { AdSenseScript } from "@/components/AdSenseScript";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <DictionaryProvider dictionary={dict}>
      <PostLenApp lang={lang} />
      <CookieConsent />
      <Analytics />
      <AdSenseScript />
    </DictionaryProvider>
  );
}
