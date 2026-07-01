import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { hasLocale, getDictionary, type Locale } from "./dictionaries";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateStaticParams() {
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
    metadataBase: new URL("https://postlen.app"),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: lang === "ja"
      ? ["文字数カウント", "SNS文字数カウンター", "Twitter文字数", "Instagram文字数制限", "文字数カウンター"]
      : ["character counter", "twitter character counter", "instagram caption length", "social media character count", "SNS文字数カウント"],
    alternates: {
      languages: {
        en: "/en",
        ja: "/ja",
      },
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${geist.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
