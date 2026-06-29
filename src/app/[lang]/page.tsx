import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "./dictionaries";
import { DictionaryProvider } from "@/lib/i18n";
import { PostLenApp } from "@/components/PostLenApp";

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
    </DictionaryProvider>
  );
}
