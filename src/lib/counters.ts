export interface Platform {
  id: string;
  name: string;
  icon: string;
  maxLength: number;
  count: (text: string) => number;
  extras?: (text: string) => { label: string; value: number; max?: number }[];
}

// X/Twitter weighted character counting
// Ranges based on twitter-text library: characters outside Basic Latin + Latin Extended
// count as 2; URLs always count as 23
function countXChars(text: string): number {
  const urlRegex = /https?:\/\/\S+/g;
  let stripped = text.replace(urlRegex, "");
  const urlCount = (text.match(urlRegex) || []).length;

  let weight = 0;
  for (const char of stripped) {
    const code = char.codePointAt(0)!;
    // Basic Latin through Latin Extended-B + some combining marks
    if (code <= 0x04ff || (code >= 0x1e00 && code <= 0x1eff)) {
      weight += 1;
    } else {
      weight += 2;
    }
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
    extras: (t) => [{ label: "Hashtags", value: countHashtags(t), max: 30 }],
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
