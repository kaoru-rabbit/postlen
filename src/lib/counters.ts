export interface Platform {
  id: string;
  name: string;
  icon: string;
  maxLength: number;
  count: (text: string) => number;
  extras?: (text: string) => { label: string; value: number; max?: number }[];
}

// X/Twitter weighted character counting.
// Weight-1 ranges are taken verbatim from the twitter-text configuration; every
// code point outside them (CJK, emoji) weighs 2. URLs always count as 23
// because X rewrites them through t.co.
const X_SINGLE_WEIGHT_RANGES: [number, number][] = [
  [0x0000, 0x10ff], // Latin, Greek, Cyrillic, Hebrew, Arabic, Thai, Devanagari, Georgian…
  [0x2000, 0x200d], // general punctuation and zero-width joiners
  [0x2010, 0x201f], // dashes and curly quotes
  [0x2032, 0x2037], // primes
];

function countXChars(text: string): number {
  const urlRegex = /https?:\/\/\S+/g;
  const stripped = text.replace(urlRegex, "");
  const urlCount = (text.match(urlRegex) || []).length;

  let weight = 0;
  for (const char of stripped) {
    const code = char.codePointAt(0)!;
    const isSingle = X_SINGLE_WEIGHT_RANGES.some(
      ([start, end]) => code >= start && code <= end
    );
    weight += isSingle ? 1 : 2;
  }
  return weight + urlCount * 23;
}

function countHashtags(text: string): number {
  return (text.match(/#[^\s#]+/g) || []).length;
}

export const platforms: Platform[] = [
  {
    id: "x",
    name: "X (Twitter)",
    icon: "𝕏",
    maxLength: 280,
    count: countXChars,
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: "📷",
    maxLength: 2200,
    count: (t) => t.length,
    // Instagram cut the per-post cap from 30 to 5, rolled out from Dec 2025.
    extras: (t) => [{ label: "Hashtags", value: countHashtags(t), max: 5 }],
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "in",
    maxLength: 3000,
    count: (t) => t.length,
  },
  {
    id: "threads",
    name: "Threads",
    icon: "@",
    maxLength: 500,
    count: (t) => t.length,
    // Threads allows a single topic tag per post, unlike every other platform.
    extras: (t) => [{ label: "Hashtags", value: countHashtags(t), max: 1 }],
  },
  {
    id: "youtube-title",
    name: "YouTube Title",
    icon: "▶",
    maxLength: 100,
    count: (t) => t.length,
  },
  {
    id: "youtube-desc",
    name: "YouTube Desc",
    icon: "▶",
    maxLength: 5000,
    count: (t) => t.length,
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: "♪",
    maxLength: 4000,
    count: (t) => t.length,
  },
  {
    id: "meta-desc",
    name: "Meta Description",
    icon: "◇",
    maxLength: 160,
    count: (t) => t.length,
  },
];
