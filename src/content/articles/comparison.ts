import type { Article } from "../types";

export const comparisonEn: Article = {
  slug: "social-media-character-limits-comparison",
  lang: "en",
  title: "Social Media Character Limits Compared 2026: All Platforms in One Table",
  description:
    "Every major platform's character limits side by side, including how each counts non-Latin text and URLs — the two differences that break cross-posted drafts.",
  date: "2026-07-02",
  sections: [
    {
      heading: "Post limits across every platform",
      blocks: [
        {
          type: "table",
          headers: ["Platform", "Post limit", "Visible before truncation"],
          rows: [
            ["X (free)", "280 weighted", "All 280"],
            ["X Premium", "25,000", "First 280"],
            ["Threads", "500", "All 500"],
            ["Instagram", "2,200", "~125"],
            ["LinkedIn", "3,000", "~140"],
            ["TikTok", "4,000", "~70–100"],
            ["YouTube description", "5,000", "~157"],
            ["Facebook", "63,206", "~250"],
            ["Meta description (SEO)", "~160", "~155 desktop, ~120 mobile"],
          ],
        },
        {
          type: "p",
          text: "The second column is the one most people plan around, and the third is the one that determines results. On TikTok the gap is a factor of roughly fifty; on Facebook it is more than two hundred. Only X and Threads show the entire post by default.",
        },
      ],
    },
    {
      heading: "The two rules that break cross-posting",
      blocks: [
        {
          type: "p",
          text: "Character limits differ in obvious ways. Counting rules differ in ways that are easy to miss, and those are what cause a draft that fit on one platform to be rejected on another.",
        },
        {
          type: "table",
          headers: ["Platform", "Japanese / CJK", "URLs"],
          rows: [
            ["X", "2 units each", "Fixed 23 units"],
            ["Threads", "1 each", "Actual length"],
            ["Instagram", "1 each", "Actual length"],
            ["LinkedIn", "1 each", "Actual length"],
            ["TikTok", "1 each", "Actual length"],
            ["YouTube", "1 each", "Actual length"],
          ],
        },
        {
          type: "p",
          text: "X is the exception on both counts, and it is the platform people most often use as their baseline. A Japanese draft that measures 200 characters in a text editor costs 400 units on X — well over the 280 limit — while fitting comfortably everywhere else. Conversely, a long tracking URL that costs 23 units on X will consume its full length on every other platform.",
        },
        {
          type: "p",
          text: "The important detail about X's weighting is that it does not apply to all non-English text. Characters up to U+10FF count as one, which includes Cyrillic, Greek, Arabic, Hebrew, Thai and Devanagari. Only CJK scripts and emoji cost two.",
        },
      ],
    },
    {
      heading: "Profile and bio limits",
      blocks: [
        {
          type: "table",
          headers: ["Platform", "Bio", "Username", "Display name"],
          rows: [
            ["X", "160", "15", "50"],
            ["Instagram", "150", "30", "30"],
            ["Threads", "150 (shared with Instagram)", "30", "30"],
            ["LinkedIn", "220 (headline)", "—", "—"],
            ["TikTok", "80", "24", "30"],
            ["YouTube", "1,000 (channel description)", "3–30 (handle)", "100"],
          ],
        },
        {
          type: "p",
          text: "TikTok's 80-character bio is the tightest constraint on any major platform, and YouTube's 1,000-character channel description the most generous. LinkedIn's headline is not strictly a bio but performs the same function, appearing beside your name across the entire platform.",
        },
      ],
    },
    {
      heading: "Media allowances",
      blocks: [
        {
          type: "table",
          headers: ["Platform", "Images per post", "Video length"],
          rows: [
            ["X", "4", "Up to 2 min 20 s (longer with Premium)"],
            ["Threads", "10", "Up to 5 minutes"],
            ["Instagram feed", "20 (carousel)", "Up to 60 minutes"],
            ["LinkedIn", "20", "Up to 15 minutes"],
            ["TikTok", "35 (photo mode)", "Up to 10 minutes"],
          ],
        },
        {
          type: "p",
          text: "Attached media never counts against the character limit on any of these platforms, which makes images a reliable way to carry information that will not fit in the text.",
        },
      ],
    },
    {
      heading: "A workable cross-posting strategy",
      blocks: [
        {
          type: "p",
          text: "Copying identical text to every platform produces a message that is too long for X, too short for LinkedIn, and formatted for neither. A more effective approach is to write the constrained version first and expand it, rather than writing long and cutting down.",
        },
        {
          type: "list",
          items: [
            "Draft to X's limit first — 280 units, or about 140 characters in Japanese. Anything that survives this constraint will fit anywhere.",
            "Expand for Threads to 500 characters, adding the supporting detail X could not hold.",
            "For LinkedIn and Instagram, rewrite the opening so the first 125–140 characters stand alone, then continue.",
            "Adjust URLs by destination: paste them raw on X where they cost a flat 23, and shorten them everywhere else.",
            "Check the whole set at once rather than platform by platform, so the differences are visible while you are still writing.",
          ],
        },
        {
          type: "p",
          text: "PostLen exists for that last step. A single draft is measured against every platform simultaneously, with the weighted rules applied where they apply, and rendered as a preview shaped like each destination. Everything runs in the browser and no text is transmitted.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Which social platform has the longest character limit?",
      a: "Facebook, at 63,206 characters, though only about 250 are visible before truncation. Among platforms in common use for text posts, YouTube descriptions allow 5,000 and TikTok captions 4,000.",
    },
    {
      q: "Which platform has the shortest limit?",
      a: "X, at 280 weighted units on a free account — roughly 140 characters for Japanese, Chinese or Korean text.",
    },
    {
      q: "Why does my Japanese post fit on Threads but not on X?",
      a: "X counts CJK characters as two units, halving the effective limit to about 140 characters. Threads counts every character as one, so all 500 are available.",
    },
    {
      q: "Which platforms shorten URLs automatically?",
      a: "Only X, which routes every link through t.co at a fixed cost of 23 characters. Threads, Instagram, LinkedIn, TikTok and YouTube all charge the URL's literal length.",
    },
    {
      q: "Do images count toward character limits?",
      a: "No. On every major platform, attached images and video consume no characters.",
    },
    {
      q: "Can I post the same text everywhere?",
      a: "Technically yes, but the visible portion differs enormously — 125 characters on Instagram, 140 on LinkedIn, about 70 on TikTok. Adjusting the opening for each destination has a far larger effect than the total length does.",
    },
  ],
};

export const comparisonJa: Article = {
  slug: "social-media-character-limits-comparison",
  lang: "ja",
  title: "SNS文字数制限 比較 2026：全プラットフォームを一覧表で",
  description:
    "主要SNSの文字数制限を一覧比較。日本語とURLのカウント方式の違いという、投稿の使い回しが破綻する2つの原因まで解説します。",
  date: "2026-07-02",
  sections: [
    {
      heading: "投稿の文字数制限 一覧",
      blocks: [
        {
          type: "table",
          headers: ["プラットフォーム", "投稿の上限", "切り捨てまでの表示"],
          rows: [
            ["X（無料）", "280（重み付け）", "280すべて"],
            ["X Premium", "25,000", "最初の280"],
            ["Threads", "500", "500すべて"],
            ["Instagram", "2,200", "約125"],
            ["LinkedIn", "3,000", "約140"],
            ["TikTok", "4,000", "約70〜100"],
            ["YouTube説明文", "5,000", "約157"],
            ["Facebook", "63,206", "約250"],
            ["メタディスクリプション", "約160", "PC約155／モバイル約120"],
          ],
        },
        {
          type: "p",
          text: "多くの人が計画の基準にするのは2列目ですが、実際の成果を決めるのは3列目です。TikTokではその差が約50倍、Facebookでは200倍を超えます。標準の状態で投稿全文が表示されるのは、XとThreadsだけです。",
        },
      ],
    },
    {
      heading: "使い回しを壊す2つの規則",
      blocks: [
        {
          type: "p",
          text: "文字数の上限の違いは目に見えます。一方でカウント方式の違いは見落とされやすく、あるプラットフォームに収まった文章が別のプラットフォームで弾かれる原因は、たいていこちらです。",
        },
        {
          type: "table",
          headers: ["プラットフォーム", "日本語・CJK", "URL"],
          rows: [
            ["X", "1文字＝2単位", "一律23単位"],
            ["Threads", "1文字＝1", "実際の長さ"],
            ["Instagram", "1文字＝1", "実際の長さ"],
            ["LinkedIn", "1文字＝1", "実際の長さ"],
            ["TikTok", "1文字＝1", "実際の長さ"],
            ["YouTube", "1文字＝1", "実際の長さ"],
          ],
        },
        {
          type: "p",
          text: "どちらの規則でも例外はXだけであり、しかもXは多くの人が基準にしているプラットフォームです。テキストエディタで200文字と表示される日本語の下書きは、Xでは400単位を消費して280の上限を大きく超えますが、それ以外のプラットフォームには余裕をもって収まります。逆に、Xでは23単位で済む長いトラッキングURLは、他のすべてのプラットフォームで実際の長さを消費します。",
        },
        {
          type: "p",
          text: "Xの重み付けについて重要なのは、英語以外のすべてに適用されるわけではないという点です。U+10FF までの文字は1単位で、キリル文字、ギリシャ文字、アラビア文字、ヘブライ文字、タイ文字、デーヴァナーガリーが含まれます。2単位になるのはCJKの文字と絵文字だけです。",
        },
      ],
    },
    {
      heading: "プロフィールの文字数制限",
      blocks: [
        {
          type: "table",
          headers: ["プラットフォーム", "プロフィール", "ユーザーネーム", "表示名"],
          rows: [
            ["X", "160", "15", "50"],
            ["Instagram", "150", "30", "30"],
            ["Threads", "150（Instagramと共有）", "30", "30"],
            ["LinkedIn", "220（ヘッドライン）", "—", "—"],
            ["TikTok", "80", "24", "30"],
            ["YouTube", "1,000（チャンネル概要）", "3〜30（ハンドル）", "100"],
          ],
        },
        {
          type: "p",
          text: "TikTokの80文字は主要プラットフォームで最も厳しい制約であり、YouTubeの1,000文字が最も余裕があります。LinkedInのヘッドラインは厳密にはプロフィール文ではありませんが、プラットフォーム全体で名前の隣に表示されるという意味で同じ役割を果たしています。",
        },
      ],
    },
    {
      heading: "メディアの上限",
      blocks: [
        {
          type: "table",
          headers: ["プラットフォーム", "1投稿の画像", "動画の長さ"],
          rows: [
            ["X", "4枚", "最長2分20秒（Premiumで延長）"],
            ["Threads", "10枚", "最長5分"],
            ["Instagramフィード", "20枚（カルーセル）", "最長60分"],
            ["LinkedIn", "20枚", "最長15分"],
            ["TikTok", "35枚（フォトモード）", "最長10分"],
          ],
        },
        {
          type: "p",
          text: "いずれのプラットフォームでも、添付したメディアが文字数を消費することはありません。そのため画像は、本文に収まらない情報を確実に伝える手段になります。",
        },
      ],
    },
    {
      heading: "実際に機能する使い回しの手順",
      blocks: [
        {
          type: "p",
          text: "同じ文章をすべてのプラットフォームにコピーすると、Xには長すぎ、LinkedInには短すぎ、どちらの体裁にも合っていない投稿ができあがります。長く書いてから削るのではなく、最も制約の厳しい版を先に書いて広げていくほうが効果的です。",
        },
        {
          type: "list",
          items: [
            "まずXの上限に合わせて書きます。280単位、日本語なら約140文字です。この制約を通った文章はどこにでも収まります。",
            "Threads向けに500文字へ広げ、Xに入らなかった補足を加えます。",
            "LinkedInとInstagramでは、冒頭の125〜140文字が単体で成立するよう書き直してから続きを書きます。",
            "URLは投稿先ごとに調整します。一律23単位のXにはそのまま貼り、それ以外では短縮します。",
            "プラットフォームごとに確認するのではなく全体を同時に確認し、書いている最中に違いが見えるようにします。",
          ],
        },
        {
          type: "p",
          text: "PostLenはこの最後の工程のためにあります。ひとつの下書きをすべてのプラットフォームに対して同時に測定し、重み付けが必要な場所には重み付けを適用したうえで、各投稿先の見た目を模したプレビューを表示します。処理はすべてブラウザ内で行われ、テキストが送信されることはありません。",
        },
      ],
    },
  ],
  faq: [
    {
      q: "SNSで最も文字数制限が長いのはどこですか？",
      a: "Facebookの63,206文字ですが、切り捨てまでに見えるのは約250文字です。テキスト投稿でよく使われる範囲では、YouTubeの説明文が5,000文字、TikTokのキャプションが4,000文字です。",
    },
    {
      q: "最も制限が短いのはどこですか？",
      a: "Xです。無料アカウントで280単位、日本語・中国語・韓国語では約140文字にあたります。",
    },
    {
      q: "日本語の投稿がThreadsには収まるのにXには収まらないのはなぜですか？",
      a: "XはCJKの文字を2単位として数えるため、実質的な上限が約140文字に半減するからです。Threadsはすべて1文字として数えるので500文字すべてを使えます。",
    },
    {
      q: "URLを自動で短縮するのはどのプラットフォームですか？",
      a: "Xだけです。すべてのリンクをt.co経由にし、一律23文字分として扱います。Threads、Instagram、LinkedIn、TikTok、YouTubeはいずれもURLの実際の長さを消費します。",
    },
    {
      q: "画像は文字数に含まれますか？",
      a: "含まれません。主要なプラットフォームではいずれも、添付した画像や動画が文字数を消費することはありません。",
    },
    {
      q: "同じ文章をすべてのSNSに投稿してもよいですか？",
      a: "技術的には可能ですが、見える範囲が大きく異なります。Instagramは約125文字、LinkedInは約140文字、TikTokは約70文字です。全体の長さより、投稿先ごとに冒頭を調整するほうがはるかに効果があります。",
    },
  ],
};
