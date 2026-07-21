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
          text: "The third column is the one that determines whether anyone reads your post. Most platforms truncate well before their stated limit, and the preview panel above shows where that cut falls.",
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
          text: "PostLenは、ひとつの下書きを8つの投稿先に対して同時にカウントし、それぞれでどう表示されるかを確認できます。一度入力すれば、上に並ぶすべてのプラットフォームのカードが、各自の文字数・上限・カウント規則に従って即座に更新されます。",
        },
        {
          type: "p",
          text: "すべてを同時にカウントすることに意味があるのは、プラットフォーム間の違いが通常のテキストエディタでは見えないからです。5つのプラットフォームには余裕をもって収まる下書きが6つ目では弾かれる、ということが起こります。公開前にそれに気づく方法は、同時に測ることだけです。",
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
          text: "投稿が読まれるかどうかを決めるのは3列目です。多くのプラットフォームは公表されている上限よりかなり手前で切り捨てており、上のプレビューでその位置を確認できます。",
        },
      ],
    },
    {
      heading: "Xのカウントだけが異なる理由",
      blocks: [
        {
          type: "p",
          text: "Xは主要プラットフォームで唯一、1文字を1文字として数えません。オープンソースのtwitter-text仕様に基づく重み付けカウントを採用しており、PostLenは同じ規則を実装しています。そのためXのカードに表示される数字は、単純な文字数ではなくXが実際に受け付ける基準と一致します。",
        },
        {
          type: "list",
          items: [
            "Unicodeの U+0000〜U+10FF の範囲にある文字は1単位です。ラテン文字、ギリシャ文字、キリル文字、アラビア文字、ヘブライ文字、タイ文字、デーヴァナーガリーが含まれます。",
            "U+10FF より上の文字は2単位です。実際には日本語・中国語・韓国語と絵文字が該当します。",
            "URLは実際の長さにかかわらず一律23単位です。Xがすべてのリンクをt.co経由に書き換えるためです。",
            "したがって日本語・中国語・韓国語の実質的な上限は280文字ではなく約140文字になります。",
          ],
        },
        {
          type: "p",
          text: "一般的な文字数カウンターは、リンク・絵文字・日本語を含むX向けの文章を必ず誤って表示します。しかもその誤差は、余裕があるように見える下書きが実際には上限を超えている程度には大きいものです。",
        },
      ],
    },
    {
      heading: "入力したテキストはブラウザの外に出ません",
      blocks: [
        {
          type: "p",
          text: "カウント、プレビューの描画、メディアの処理はすべてローカルで行われます。テキストがサーバーに送信されることはなく、アップロードした画像や動画もローカルのオブジェクトURLを介して処理され、保存も記録もされません。アカウントもログインもありません。",
        },
        {
          type: "p",
          text: "これは抽象的な話ではなく実務上の問題です。下書きには未発表の製品情報、取引先名、個人情報が日常的に含まれており、それをホスティング型のツールに貼り付けることは第三者に渡すことを意味します。PostLenにはそれを受け取りうるサーバー側の仕組みが存在しません。",
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
      q: "Xの文字数が他のカウンターと違うのはなぜですか？",
      a: "Xが重み付けカウントを採用しているためです。CJKの文字と絵文字は2単位、URLは一律23単位を消費します。PostLenはこの規則を適用しているため、表示される数字はXが実際に受け付ける基準と一致します。",
    },
    {
      q: "Xに日本語は何文字投稿できますか？",
      a: "約140文字です。1文字が280単位のうち2単位を消費するためです。同じ文章は、すべて1文字として数えるThreadsの500文字制限には余裕をもって収まります。",
    },
    {
      q: "画像や動画は文字数を消費しますか？",
      a: "しません。対応するどのプラットフォームでも、添付したメディアが文字数の枠を使うことはありません。",
    },
    {
      q: "入力したテキストはサーバーに送信されますか？",
      a: "されません。すべてブラウザ内で動作し、下書きを受け取りうるバックエンドは存在しません。",
    },
    {
      q: "どのプラットフォームに対応していますか？",
      a: "X（Twitter）、Instagram、LinkedIn、Threads、YouTubeのタイトルと説明文、TikTok、SEOのメタディスクリプションです。すべて同時にカウントされます。",
    },
  ],
};
