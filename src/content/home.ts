import type { Section } from "./types";

type HomeContent = {
  sections: Section[];
  faqHeading: string;
  faq: { q: string; a: string }[];
};

export const homeEn: HomeContent = {
  sections: [
    {
      heading: "What this tool does",
      blocks: [
        {
          type: "p",
          text: "PostLen counts a single draft against eight destinations at the same time and shows you how it will look on each one. Type once, and every platform card above updates immediately with its own count, its own limit, and its own counting rules.",
        },
        {
          type: "p",
          text: "Counting against everything simultaneously matters because the platforms disagree in ways a plain text editor cannot show. A draft can sit comfortably inside the limit on five platforms and be rejected by the sixth, and the only way to catch that before publishing is to measure them together.",
        },
      ],
    },
    {
      heading: "Character limits for every supported platform",
      blocks: [
        {
          type: "table",
          headers: ["Platform", "Limit", "Visible before truncation"],
          rows: [
            ["X (Twitter)", "280 weighted units", "All 280"],
            ["Instagram caption", "2,200 characters", "~125"],
            ["LinkedIn post", "3,000 characters", "~140"],
            ["Threads", "500 characters", "All 500"],
            ["YouTube title", "100 characters", "~60 in search"],
            ["YouTube description", "5,000 characters", "~157"],
            ["TikTok caption", "4,000 characters", "~70–100"],
            ["Meta description", "~160 characters", "~155 desktop, ~120 mobile"],
          ],
        },
        {
          type: "p",
          text: "The third column is the one that determines whether anyone reads your post. Most platforms truncate well before their stated limit, so the number you should write to is usually not the number they advertise.",
        },
      ],
    },
    {
      heading: "Why the X count is different",
      blocks: [
        {
          type: "p",
          text: "X is the only major platform that does not count characters one for one. It applies weighted counting from the open-source twitter-text specification, and PostLen implements the same rules, so the number on the X card is the number X will accept — not a raw character count.",
        },
        {
          type: "list",
          items: [
            "Characters in the Unicode range U+0000–U+10FF cost one unit. This covers Latin, Greek, Cyrillic, Arabic, Hebrew, Thai and Devanagari.",
            "Everything above U+10FF costs two units — in practice, Japanese, Chinese, Korean and emoji.",
            "Every URL costs a fixed 23 units regardless of its real length, because X rewrites links through t.co.",
            "The effective limit for Japanese, Chinese and Korean text is therefore about 140 characters, not 280.",
          ],
        },
        {
          type: "p",
          text: "A generic character counter will misreport any X post containing a link, an emoji or CJK text — often badly enough that a draft appearing to be well within the limit is actually over it.",
        },
      ],
    },
    {
      heading: "Your text never leaves your browser",
      blocks: [
        {
          type: "p",
          text: "All counting, preview rendering and media handling happens locally. No text is transmitted to a server, uploaded images and video are processed through local object URLs, and nothing is stored or logged. There is no account and nothing to sign in to.",
        },
        {
          type: "p",
          text: "This is a practical concern rather than an abstract one. Drafts routinely contain unannounced product details, client names and personal information, and pasting them into a hosted tool means handing that material to a third party. PostLen has no server-side component that could receive it.",
        },
      ],
    },
  ],
  faqHeading: "Frequently asked questions",
  faq: [
    {
      q: "Is PostLen free?",
      a: "Yes. There is no account, no sign-up and no usage limit.",
    },
    {
      q: "Why does the X count differ from other character counters?",
      a: "X uses weighted counting, where CJK characters and emoji cost two units and every URL costs a fixed 23. PostLen applies those rules, so its figure matches what X will actually accept.",
    },
    {
      q: "How many Japanese characters fit in an X post?",
      a: "About 140, because each one costs two of the 280 weighted units. The same text fits comfortably within Threads' 500-character limit, which counts every character as one.",
    },
    {
      q: "Do images and video use up characters?",
      a: "No. On every supported platform, attached media consumes no part of the character limit.",
    },
    {
      q: "Is my text sent to a server?",
      a: "No. Everything runs in your browser and there is no back end that could receive your drafts.",
    },
    {
      q: "Which platforms are supported?",
      a: "X (Twitter), Instagram, LinkedIn, Threads, YouTube titles, YouTube descriptions, TikTok and SEO meta descriptions — all counted at once.",
    },
  ],
};

export const homeJa: HomeContent = {
  sections: [
    {
      heading: "このツールでできること",
      blocks: [
        {
          type: "p",
          text: "PostLenは、ひとつの下書きを8つの投稿先に対して同時に数えます。入力は一度きりで、上に並ぶカードが投稿先ごとの上限とカウント規則ですぐに数え直し、それぞれでどう表示されるかを見せます。",
        },
      ],
    },
    {
      heading: "対応プラットフォームの文字数制限",
      blocks: [
        {
          type: "table",
          headers: ["プラットフォーム", "上限", "切り捨てまでの表示"],
          rows: [
            ["X（Twitter）", "280単位（重み付け）", "280すべて"],
            ["Instagramキャプション", "2,200文字", "約125"],
            ["LinkedIn投稿", "3,000文字", "約140"],
            ["Threads", "500文字", "500すべて"],
            ["YouTubeタイトル", "100文字", "検索で約60"],
            ["YouTube説明文", "5,000文字", "約157"],
            ["TikTokキャプション", "4,000文字", "約70〜100"],
            ["メタディスクリプション", "約160文字", "PC約155／モバイル約120"],
          ],
        },
        {
          type: "p",
          text: "3列目を見てください。投稿が読まれるかはここで決まります。多くのプラットフォームは公称の上限よりかなり手前で本文を切り捨てるので、実際に書くべき目安は公称の数字とずれてきます。",
        },
      ],
    },
    {
      heading: "Xの文字数カウントについて",
      blocks: [
        {
          type: "p",
          text: "Xは特殊で、主要プラットフォームで唯一、1文字を1文字として数えません。オープンソースのtwitter-text仕様にもとづく重み付けカウントを使い、PostLenも同じ規則を実装しました。そのためXのカードに出る数字は、単なる文字数ではなく、Xが実際に受け付ける値と一致します。",
        },
        {
          type: "list",
          items: [
            "Unicodeの U+0000〜U+10FF の範囲にある文字は1単位で、ラテン文字、ギリシャ文字、キリル文字がここに入ります。アラビア文字、ヘブライ文字、タイ文字、デーヴァナーガリーも同じです。",
            "U+10FF より上の文字は2単位で、実際には日本語・中国語・韓国語と絵文字が該当します。",
            "URLは実際の長さにかかわらず一律23単位で、Xがすべてのリンクをt.co経由に書き換えるからです。",
            "したがって日本語・中国語・韓国語の実質的な上限は280文字ではなく約140文字になります。",
          ],
        },
        {
          type: "p",
          text: "一般的な文字数カウンターは、リンクや絵文字、日本語を含むX向けの文章で数字を誤ります。PostLenは誤りません。",
        },
      ],
    },
   
  ],
  faqHeading: "よくある質問",
  faq: [
    {
      q: "PostLenは無料ですか？",
      a: "無料です。アカウント登録も、利用回数の制限もありません。",
    },
    {
      q: "なぜXの文字数は他のカウンターと違うのですか？",
      a: "Xが重み付けカウントを採用しているからです。CJKの文字と絵文字は2単位で、URLは一律23単位を消費します。",
    },
   
    
    {
      q: "入力した情報は安全ですか？",
      a: "安全です。すべてブラウザの中で動くので、下書きが外に出ることはありません。",
    },
    {
      q: "どのプラットフォームに対応していますか？",
      a: "全部で8つです。X（Twitter）、Instagram、LinkedIn、Threadsに対応し、YouTubeのタイトルと説明文、TikTok、SEOのメタディスクリプションも同じで、すべて同時に数えます。",
    },
  ],
};
