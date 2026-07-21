import type { Article } from "../types";

export const linkedinEn: Article = {
  slug: "linkedin-post-character-limit",
  lang: "en",
  title: "LinkedIn Character Limits 2026: Posts, Headline, About & Articles",
  description:
    "Every LinkedIn character limit — 3,000 for posts, 220 for the headline, 2,600 for About — plus the ~140-character cutoff that decides whether a post gets expanded.",
  date: "2026-07-02",
  sections: [
    {
      heading: "LinkedIn limits in full",
      blocks: [
        {
          type: "table",
          headers: ["Field", "Limit", "Visible before truncation"],
          rows: [
            ["Post", "3,000 characters", "~140 (desktop), ~100 (mobile)"],
            ["Article body", "125,000 characters", "Full"],
            ["Article title", "150 characters", "Full"],
            ["Headline", "220 characters", "~60 in feed and search"],
            ["About / summary", "2,600 characters", "~265"],
            ["Job title", "100 characters", "Full"],
            ["Job description", "2,000 characters", "~350"],
            ["Skill name", "80 characters", "Full"],
            ["Recommendation", "3,000 characters", "~300"],
            ["Comment", "1,250 characters", "~250"],
            ["Company description", "2,000 characters", "~150"],
            ["Company tagline", "120 characters", "Full"],
            ["Connection request note", "300 characters", "Full"],
          ],
        },
        {
          type: "p",
          text: "LinkedIn is unusual in that its two most important fields sit at opposite extremes. A post allows 3,000 characters but reveals about 140 of them; a headline allows 220 and is the single piece of text that follows your name across every surface of the platform.",
        },
      ],
    },
    {
      heading: "The 140-character decision point",
      blocks: [
        {
          type: "p",
          text: "In the feed, a post is collapsed after roughly 140 characters on desktop and closer to 100 on mobile, with the remainder hidden behind a \"see more\" control. Expanding a post is a deliberate action, and LinkedIn's ranking system treats it as an engagement signal — which means the opening lines do not merely influence readership, they influence distribution.",
        },
        {
          type: "list",
          items: [
            "Deliver a complete, self-contained statement within the first two lines.",
            "Avoid using the opening for context, credentials or throat-clearing.",
            "A single line break early in the post makes the visible portion easier to read and does not reduce how much text is shown.",
            "Hooks that create an obvious information gap outperform summaries, because expanding is the only way to close the gap.",
          ],
        },
        {
          type: "p",
          text: "Posts written as a single dense paragraph are penalised in practice rather than by policy: the visible fragment is harder to parse, so fewer readers expand, so distribution narrows.",
        },
      ],
    },
    {
      heading: "The headline is the highest-leverage field",
      blocks: [
        {
          type: "p",
          text: "At 220 characters the headline is not especially long, but it appears beside your name in the feed, in search results, in comments, in messages and in notifications. It is also indexed by LinkedIn's search, which makes it the primary determinant of whether you appear in results for a given term.",
        },
        {
          type: "p",
          text: "Around 60 characters are visible in most contexts, so the structure that works is to lead with the role or specialism and place supporting detail afterwards, where truncation costs nothing. A headline reading \"Data Engineer — streaming pipelines, Kafka, dbt | Writing about analytics infrastructure\" is fully functional even when cut at 60 characters.",
        },
      ],
    },
    {
      heading: "How LinkedIn counts characters",
      blocks: [
        {
          type: "p",
          text: "LinkedIn counts every character as one, with no weighting for script and no special treatment of URLs. Line breaks count as one character each, which is worth accounting for in heavily formatted posts, and emoji count as one in most cases.",
        },
        {
          type: "p",
          text: "URLs count their literal length, so a long tracking link consumes real space — unlike X, where every link costs a flat 23 characters. LinkedIn also replaces a pasted URL with a link preview card, and the URL text can be deleted from the post afterwards while the card remains, which recovers the characters entirely.",
        },
      ],
    },
    {
      heading: "Articles versus posts",
      blocks: [
        {
          type: "p",
          text: "LinkedIn articles allow 125,000 characters, which is effectively unlimited, and support headings, images and embedded media. They are indexed by external search engines, which posts largely are not, making them the appropriate format for material with a long useful life.",
        },
        {
          type: "p",
          text: "Posts, by contrast, receive substantially more distribution within the LinkedIn feed. The common pattern is to publish the substantive version as an article and a self-contained summary as a post, rather than treating the post as a teaser that requires a click to make sense.",
        },
      ],
    },
    {
      heading: "Drafting outside the composer",
      blocks: [
        {
          type: "p",
          text: "LinkedIn's composer shows no counter until you near the 3,000-character limit and gives no indication of where the 140-character cutoff falls. PostLen displays both the count and a preview shaped like the LinkedIn feed, and measures the same draft against X, Threads, Instagram, YouTube and TikTok at once. All processing happens in the browser.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is the LinkedIn post character limit?",
      a: "3,000 characters. Only about 140 are visible on desktop and around 100 on mobile before the \"see more\" link.",
    },
    {
      q: "How long can a LinkedIn headline be?",
      a: "220 characters, though roughly 60 are visible in the feed and search results. Lead with your role or specialism so the visible portion stands alone.",
    },
    {
      q: "How many characters can a LinkedIn article contain?",
      a: "125,000 — effectively unlimited. Articles also support headings, images and embedded media, and are indexed by external search engines.",
    },
    {
      q: "Do links count toward the LinkedIn character limit?",
      a: "Yes, at their literal length. However, once LinkedIn generates a preview card you can delete the URL text from the post and keep the card, recovering those characters.",
    },
    {
      q: "Do Japanese characters count as two on LinkedIn?",
      a: "No. LinkedIn counts every character as one regardless of script.",
    },
    {
      q: "What is the character limit on a connection request note?",
      a: "300 characters, and the entire note is shown to the recipient without truncation.",
    },
  ],
};

export const linkedinJa: Article = {
  slug: "linkedin-post-character-limit",
  lang: "ja",
  title: "LinkedIn文字数制限 2026：投稿・ヘッドライン・自己紹介・記事",
  description:
    "LinkedInの文字数制限を網羅。投稿3,000文字、ヘッドライン220文字、自己紹介2,600文字に加え、投稿が展開されるかを決める約140文字の境界を解説します。",
  date: "2026-07-02",
  sections: [
    {
      heading: "LinkedInの文字数制限 一覧",
      blocks: [
        {
          type: "table",
          headers: ["項目", "上限", "切り捨てまでの表示"],
          rows: [
            ["投稿", "3,000文字", "PC約140／モバイル約100"],
            ["記事の本文", "125,000文字", "全文"],
            ["記事のタイトル", "150文字", "全文"],
            ["ヘッドライン", "220文字", "フィード・検索で約60"],
            ["自己紹介", "2,600文字", "約265"],
            ["職種名", "100文字", "全文"],
            ["職務内容", "2,000文字", "約350"],
            ["スキル名", "80文字", "全文"],
            ["推薦文", "3,000文字", "約300"],
            ["コメント", "1,250文字", "約250"],
            ["会社概要", "2,000文字", "約150"],
            ["会社のタグライン", "120文字", "全文"],
            ["つながり申請メッセージ", "300文字", "全文"],
          ],
        },
        {
          type: "p",
          text: "LinkedInで特徴的なのは、最も重要な2つの項目が両極端にあることです。投稿は3,000文字書けるのに見えるのは約140文字。一方ヘッドラインは220文字しかありませんが、プラットフォームのあらゆる場所で名前の隣に表示され続けます。",
        },
      ],
    },
    {
      heading: "140文字という分岐点",
      blocks: [
        {
          type: "p",
          text: "フィードでは、投稿はPCで約140文字、モバイルでは約100文字で折りたたまれ、残りは「もっと見る」の中に隠れます。投稿を展開するのは意識的な操作であり、LinkedInのアルゴリズムはこれをエンゲージメントの signal として扱います。つまり冒頭の数行は、読まれるかどうかだけでなく、どれだけ拡散されるかを左右します。",
        },
        {
          type: "list",
          items: [
            "最初の2行で、それ単体で意味が通る内容を言い切ります。",
            "冒頭を背景説明や自己紹介、前置きに使わないようにします。",
            "投稿の早い段階に改行を1つ入れると見える部分が読みやすくなり、表示される文字数が減ることもありません。",
            "要約よりも、情報の欠落を意識させる書き出しのほうが機能します。展開する以外にその欠落を埋める方法がないためです。",
          ],
        },
        {
          type: "p",
          text: "ひとつの塊で書かれた投稿は、規約上のペナルティではなく実質的な不利を受けます。見える部分が読み取りにくいため展開されにくく、結果として配信が伸びないという流れです。",
        },
      ],
    },
    {
      heading: "ヘッドラインが最も効果の大きい項目",
      blocks: [
        {
          type: "p",
          text: "220文字のヘッドラインは決して長くありませんが、フィード、検索結果、コメント、メッセージ、通知のすべてで名前の隣に表示されます。さらにLinkedInの検索対象でもあるため、特定の語で検索されたときに自分が表示されるかどうかを決める主要な要素になります。",
        },
        {
          type: "p",
          text: "多くの場面で見えるのは約60文字なので、役割や専門領域を先頭に置き、補足は後ろに回す構成が有効です。「データエンジニア｜ストリーミング基盤・Kafka・dbt｜分析基盤について発信」というヘッドラインは、60文字で切られても機能します。",
        },
      ],
    },
    {
      heading: "LinkedInの文字カウント方法",
      blocks: [
        {
          type: "p",
          text: "LinkedInはすべての文字を1文字としてカウントします。文字種による重み付けはなく、URLの特別扱いもありません。改行も1文字を消費するため、整形を多用する投稿では計算に入れる必要があります。絵文字は多くの場合1文字です。",
        },
        {
          type: "p",
          text: "URLは実際の長さがカウントされるため、長いトラッキングリンクは実際にスペースを消費します。リンクが一律23文字分となるXとは異なります。ただしLinkedInは貼り付けたURLからリンクプレビューのカードを生成するため、カードが表示された後に本文からURLの文字列を削除すれば、その分の文字数を完全に取り戻せます。",
        },
      ],
    },
    {
      heading: "記事と投稿の使い分け",
      blocks: [
        {
          type: "p",
          text: "LinkedInの記事は125,000文字まで書け、実質的に上限はありません。見出し、画像、埋め込みメディアにも対応しています。投稿とは異なり外部の検索エンジンにインデックスされるため、長く読まれ続ける内容に適した形式です。",
        },
        {
          type: "p",
          text: "一方で投稿は、LinkedInのフィード内での配信量が記事よりはるかに大きくなります。よく取られる方法は、本編を記事として公開し、それ単体で完結する要約を投稿として出すというものです。投稿を「クリックしないと意味が通らない予告」にしてしまうのは得策ではありません。",
        },
      ],
    },
    {
      heading: "投稿画面の外で下書きする",
      blocks: [
        {
          type: "p",
          text: "LinkedInの投稿画面は3,000文字に近づくまでカウンターを表示せず、140文字の境界も示しません。PostLenは文字数とLinkedInのフィードを模したプレビューの両方を表示し、同じ下書きをX・Threads・Instagram・YouTube・TikTokに対して同時に測定します。処理はすべてブラウザ内で行われます。",
        },
      ],
    },
  ],
  faq: [
    {
      q: "LinkedInの投稿は何文字まで書けますか？",
      a: "3,000文字です。「もっと見る」の前に表示されるのはPCで約140文字、モバイルで約100文字です。",
    },
    {
      q: "ヘッドラインは何文字まで入りますか？",
      a: "220文字ですが、フィードや検索結果で見えるのは約60文字です。役割や専門領域を先頭に置き、見える部分だけで意味が通るようにしてください。",
    },
    {
      q: "LinkedInの記事は何文字まで書けますか？",
      a: "125,000文字で、実質的に上限はありません。見出しや画像にも対応し、外部の検索エンジンにインデックスされます。",
    },
    {
      q: "リンクは文字数に含まれますか？",
      a: "含まれます。実際の長さがそのままカウントされます。ただしプレビューカードが生成された後であれば、本文からURLを削除してもカードは残るため、その分の文字数を取り戻せます。",
    },
    {
      q: "LinkedInで日本語は2文字としてカウントされますか？",
      a: "いいえ。LinkedInは文字種にかかわらずすべて1文字としてカウントします。",
    },
    {
      q: "つながり申請のメッセージは何文字まで書けますか？",
      a: "300文字です。全文が相手に表示され、切り捨てられることはありません。",
    },
  ],
};
