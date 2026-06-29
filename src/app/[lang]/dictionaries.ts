import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  ja: () => import("./dictionaries/ja.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;
export type Dictionary = Awaited<ReturnType<(typeof dictionaries)[Locale]>>;

export const locales: Locale[] = ["en", "ja"];
export const defaultLocale: Locale = "en";

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
