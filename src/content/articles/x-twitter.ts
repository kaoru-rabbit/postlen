import type { Article } from "../types";

export const xTwitterEn: Article = {
  slug: "x-twitter-character-limit",
  lang: "en",
  title: "X (Twitter) Character Limit 2026: How Weighted Counting Actually Works",
  description:
    "X does not count characters one for one. This guide explains the weighted counting rules — which scripts cost 2, why every URL costs exactly 23 — and lists every field limit.",
  date: "2026-07-02",
  sections: [
    {
      heading: "Every X character limit",
      blocks: [
        {
          type: "p",
          text: "X allows 280 characters per post on a free account and 25,000 on a Premium subscription. The Premium figure is less useful than it appears: only the first 280 characters render in the timeline, with the remainder collapsed behind a \"Show more\" link. For anything that must be read without an extra tap, 280 remains the number that matters.",
        },
        {
          type: "table",
          headers: ["Field", "Limit"],
          rows: [
            ["Post (free account)", "280 weighted characters"],
            ["Post (X Premium)", "25,000 characters"],
            ["Direct message", "10,000 characters"],
            ["Bio", "160 characters"],
            ["Display name", "50 characters"],
            ["Username (@handle)", "15 characters"],
            ["Location field", "30 characters"],
            ["Poll option", "25 characters each"],
            ["List name", "25 characters"],
            ["List description", "100 characters"],
            ["Image alt text", "1,000 characters"],
          ],
        },
      ],
    },
    {
      heading: "Weighted counting: the rule almost every guide gets wrong",
      blocks: [
        {
          type: "p",
          text: "X is the only major platform that does not count characters one for one. It uses a weighted system, published as part of the open-source twitter-text library, in which each character costs either 1 or 2 units depending on where it falls in Unicode. The 280 limit is a budget of weighted units, not of characters.",
        },
        {
          type: "p",
          text: "The rule itself is simple once stated precisely: characters in the Unicode range U+0000 to U+10FF cost 1 unit, and everything outside that range costs 2. What makes this widely misreported is that the range is far broader than \"English\" or even \"Latin\".",
        },
        {
          type: "table",
          headers: ["Script", "Cost per character"],
          rows: [
            ["Latin (English, French, Vietnamese…)", "1"],
            ["Greek", "1"],
            ["Cyrillic (Russian, Ukrainian…)", "1"],
            ["Hebrew", "1"],
            ["Arabic", "1"],
            ["Thai", "1"],
            ["Devanagari (Hindi, Marathi…)", "1"],
            ["Japanese (kana and kanji)", "2"],
            ["Chinese", "2"],
            ["Korean (hangul)", "2"],
            ["Emoji", "2"],
          ],
        },
        {
          type: "p",
          text: "The common claim that \"non-English characters count as two\" is therefore wrong. Arabic, Hebrew, Thai, Hindi, Russian and Greek all count as one, exactly like English. The characters that cost two are, in practice, CJK scripts and emoji.",
        },
      ],
    },
    {
      heading: "What this means if you write in Japanese, Chinese or Korean",
      blocks: [
        {
          type: "p",
          text: "Because each CJK character costs two units, the effective allowance is 140 characters rather than 280. This is the single most consequential fact about posting on X in these languages, and it is why a Japanese post that fits on Threads will often not fit on X.",
        },
        {
          type: "table",
          headers: ["Language", "Weighted limit", "Characters you can actually type"],
          rows: [
            ["English", "280", "280"],
            ["Russian", "280", "280"],
            ["Arabic", "280", "280"],
            ["Japanese", "280", "140"],
            ["Chinese", "280", "140"],
            ["Korean", "280", "140"],
          ],
        },
        {
          type: "p",
          text: "Mixed-script posts are charged proportionally. A post combining 100 Latin characters with 50 Japanese characters costs 100 + 100 = 200 units, leaving 80 units — that is, 80 more Latin characters or 40 more Japanese ones.",
        },
      ],
    },
    {
      heading: "Why every URL costs exactly 23",
      blocks: [
        {
          type: "p",
          text: "X automatically rewrites every link through its t.co shortener, and charges a fixed 23 units for it regardless of the original length. This applies whether the URL is 15 characters or 300, and it applies even though the full link is what appears in the rendered post.",
        },
        {
          type: "list",
          items: [
            "A 12-character link such as example.com still costs 23 units — shortening it makes the post longer, not shorter.",
            "A 250-character URL with tracking parameters also costs 23, so there is no reason to strip parameters for length reasons on X specifically.",
            "Using a third-party shortener before posting wastes effort and can reduce trust, since the visible domain becomes the shortener's rather than yours.",
            "This behaviour is unique to X. Threads, Instagram, LinkedIn and TikTok all charge the literal length of the URL.",
          ],
        },
        {
          type: "p",
          text: "The practical rule is to paste long links directly into X and to shorten them everywhere else. Applying the same habit across platforms is the most common source of miscounted drafts.",
        },
      ],
    },
    {
      heading: "What does not count",
      blocks: [
        {
          type: "list",
          items: [
            "Attached images, GIFs and video consume no characters. Up to four images may be attached to a post.",
            "Quoted posts do not add the quoted text to your own count.",
            "In replies, leading @mentions of the accounts being replied to are excluded from the 280.",
            "Alt text has its own separate 1,000-character budget and never affects the post itself.",
          ],
        },
        {
          type: "p",
          text: "Mentions typed inside the body of a post, as opposed to the automatic ones at the start of a reply, are counted at their literal length like any other text.",
        },
      ],
    },
    {
      heading: "Counting a draft accurately",
      blocks: [
        {
          type: "p",
          text: "A plain character counter will misreport any X post containing a link, an emoji or CJK text, sometimes by a wide margin — a draft that appears to be 250 characters can be well over the limit once weighting and the 23-unit URL cost are applied.",
        },
        {
          type: "p",
          text: "PostLen implements the weighted rules and the fixed URL cost, so the number shown is the number X will use. It counts the same draft against Threads, Instagram, LinkedIn, YouTube, TikTok and meta descriptions at the same time, which makes the differences between platforms visible while you are still writing.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is the X (Twitter) character limit?",
      a: "280 weighted units on a free account and 25,000 for X Premium subscribers. Only the first 280 characters are visible in the timeline before a \"Show more\" link, regardless of tier.",
    },
    {
      q: "How many Japanese characters fit in an X post?",
      a: "About 140. Japanese, Chinese and Korean characters each cost two weighted units against the 280 budget.",
    },
    {
      q: "Do all non-English characters count as two on X?",
      a: "No — this is a widespread misconception. Only characters above U+10FF cost two, which in practice means CJK scripts and emoji. Arabic, Hebrew, Thai, Hindi, Russian and Greek all count as one, the same as English.",
    },
    {
      q: "How many characters does a link use on X?",
      a: "Exactly 23, whatever its actual length, because X routes every link through its t.co shortener. Shortening a URL before posting therefore saves nothing on X.",
    },
    {
      q: "Do images count toward the character limit?",
      a: "No. Up to four images, or one GIF or video, can be attached without using any of the 280 units.",
    },
    {
      q: "Does X Premium really allow 25,000 characters?",
      a: "Yes, but only the first 280 appear in the timeline before the post is collapsed behind \"Show more\", so the opening 280 still determine whether anyone reads the rest.",
    },
  ],
};

export const xTwitterJa: Article = {
  slug: "x-twitter-character-limit",
  lang: "ja",
  title: "X（Twitter）文字数制限 2026：重み付けカウントの正確な仕組み",
  description:
    "Xは1文字を1文字として数えません。どの文字が2文字分になるのか、なぜURLは必ず23文字分になるのか、重み付けカウントの規則と全項目の上限を解説します。",
  date: "2026-07-02",
  sections: [
    {
      heading: "Xの文字数制限 一覧",
      blocks: [
        {
          type: "p",
          text: "Xの投稿は無料アカウントで280文字分、X Premiumで25,000文字です。ただしPremiumの数字は見かけほど役に立たず、タイムラインには最初の280文字分しか出ません。残りは「さらに表示」の裏に隠れます。追加の操作なしで読ませたいなら話は別で、基準はやはり280です。",
        },
        {
          type: "table",
          headers: ["項目", "上限"],
          rows: [
            ["投稿（無料アカウント）", "280文字分（重み付け）"],
            ["投稿（X Premium）", "25,000文字"],
            ["ダイレクトメッセージ", "10,000文字"],
            ["プロフィール", "160文字"],
            ["表示名", "50文字"],
            ["ユーザー名（@ハンドル）", "15文字"],
            ["場所", "30文字"],
            ["アンケート選択肢", "各25文字"],
            ["リスト名", "25文字"],
            ["リストの説明", "100文字"],
            ["画像の代替テキスト", "1,000文字"],
          ],
        },
      ],
    },
    {
      heading: "重み付けカウント：多くの解説が間違えている規則",
      blocks: [
        {
          type: "p",
          text: "Xは主要プラットフォームの中で唯一、1文字を1文字として数えません。かわりに、オープンソースのtwitter-textライブラリが仕様を公開している重み付け方式を使います。各文字の消費は1単位か2単位で、Unicode上の位置で決まります。280という上限は文字数ではなく、単位の予算です。",
        },
        {
          type: "p",
          text: "規則自体は、正確に述べれば単純です。Unicodeの U+0000 から U+10FF までの範囲にある文字は1単位、それ以外はすべて2単位です。誤解が広まる原因は範囲の広さにあり、この範囲は「英語」の枠を超え、「ラテン文字」よりもずっと広いのです。",
        },
        {
          type: "table",
          headers: ["文字種", "1文字あたりの消費"],
          rows: [
            ["ラテン文字（英語・フランス語・ベトナム語など）", "1"],
            ["ギリシャ文字", "1"],
            ["キリル文字（ロシア語・ウクライナ語など）", "1"],
            ["ヘブライ文字", "1"],
            ["アラビア文字", "1"],
            ["タイ文字", "1"],
            ["デーヴァナーガリー（ヒンディー語など）", "1"],
            ["日本語（かな・漢字）", "2"],
            ["中国語", "2"],
            ["韓国語（ハングル）", "2"],
            ["絵文字", "2"],
          ],
        },
        {
          type: "p",
          text: "したがって、よくある説明は誤りです。「英語以外の文字は2文字分」ではありません。アラビア文字もヘブライ文字も1文字分で、タイ文字も英語と同じです。ヒンディー語もロシア語も変わらず、ギリシャ語も1文字分です。2文字分を消費する文字は限られ、実際にはCJK（日中韓）と絵文字だけです。",
        },
      ],
    },
    {
      heading: "日本語で投稿する場合の実際の上限",
      blocks: [
        {
          type: "p",
          text: "日本語の文字は1文字につき2単位を消費するので、実際に入力できる量は280文字ではなく140文字にとどまります。これは日本語でXを使う人にとって最も重要な事実です。Threadsに収まる日本語の文章がXには収まらないことがあり、原因はここにあります。",
        },
        {
          type: "table",
          headers: ["言語", "重み付け上限", "実際に入力できる文字数"],
          rows: [
            ["英語", "280", "280"],
            ["ロシア語", "280", "280"],
            ["アラビア語", "280", "280"],
            ["日本語", "280", "140"],
            ["中国語", "280", "140"],
            ["韓国語", "280", "140"],
          ],
        },
        {
          type: "p",
          text: "文字種が混ざる投稿は比例して計算します。ラテン文字100文字と日本語50文字を組み合わせた投稿なら、消費は 100 + 100 = 200単位です。残りは80単位で、あと80文字の英数字を足せます。日本語なら40文字です。",
        },
      ],
    },
    {
      heading: "URLが必ず23文字分になる理由",
      blocks: [
        {
          type: "p",
          text: "Xはすべてのリンクを自動的にt.co短縮サービス経由に書き換え、一律23単位を課金します。元の長さは関係なく、URLが15文字でも300文字でも同じです。投稿には元のリンクが見えますが、それでも扱いは変わりません。",
        },
        {
          type: "list",
          items: [
            "example.com のような12文字のリンクでも23単位を消費し、短縮するとかえって文字数が増えます。",
            "トラッキングパラメータ付きの250文字のURLも23単位で、Xに限っては、文字数を理由にパラメータを削る必要はありません。",
            "投稿前に外部の短縮サービスを使っても労力の無駄なうえ、見えるドメインが自分のものでなくなり、信頼の面でも不利になります。",
            "この挙動はXに固有です。Threads、Instagram、LinkedIn、TikTokはいずれもURLの実際の長さを消費します。",
          ],
        },
        {
          type: "p",
          text: "実務的な指針は単純です。Xには長いリンクをそのまま貼り、それ以外では短縮します。同じ習慣をすべてに当てはめてはいけません。それが下書きの数え違いで最も多い原因です。",
        },
      ],
    },
    {
      heading: "文字数に入らないもの",
      blocks: [
        {
          type: "list",
          items: [
            "添付した画像、GIF、動画は文字数を消費せず、1投稿に画像を4枚まで添付できます。",
            "引用した投稿の本文は、自分の文字数に入りません。",
            "返信の場合、先頭に自動で付く返信先アカウントの@メンションは280に含まれません。",
            "代替テキストは独立した1,000文字の枠を持ち、投稿本文に影響しません。",
          ],
        },
        {
          type: "p",
          text: "本文中に自分で入力した@メンションは、返信の先頭に自動で付くものとは別物です。他のテキストと同じく、実際の文字数を消費します。",
        },
      ],
    },
    {
      heading: "下書きを正確に数える",
      blocks: [
        {
          type: "p",
          text: "単純な文字数カウンターは、リンクや絵文字、日本語を含むX向けの文章で必ず数を誤り、しかも誤差は小さくありません。250文字に見える下書きが、重み付けと23単位のURLコストを加えると上限を大きく超えていることもあります。",
        },
        {
          type: "p",
          text: "PostLenは重み付けの規則とURLの固定コストを実装したので、画面に出る数字はXが実際に使う数字と一致します。同じ下書きはThreads、Instagram、LinkedIn、YouTube、TikTok、メタディスクリプションにも同時に通ります。書きながら違いが見えてきます。",
        },
      ],
    },
  ],
  faq: [
    {
      q: "X（Twitter）の文字数制限は何文字ですか？",
      a: "無料アカウントは280文字分（重み付け単位）で、X Premiumは25,000文字です。ただしどちらのプランでも、タイムラインには最初の280文字分しか出ず、それ以降は「さらに表示」に折りたたまれます。",
    },
    {
      q: "Xに日本語は何文字投稿できますか？",
      a: "約140文字です。日本語・中国語・韓国語の文字は、280の予算に対して1文字あたり2単位を消費します。",
    },
    {
      q: "英語以外の文字はすべて2文字分ですか？",
      a: "いいえ。これは広く見られる誤解です。2単位を消費する文字は U+10FF より上に限り、実際にはCJKの文字と絵文字だけです。アラビア文字もヘブライ文字も1文字分で、タイ文字も英語と同じです。ヒンディー語もロシア語も変わらず、ギリシャ語も同じです。",
    },
    {
      q: "Xでリンクは何文字分になりますか？",
      a: "Xがすべてのリンクをt.co経由に書き換えるので、実際の長さにかかわらず必ず23文字分です。投稿前にURLを短縮しても無駄で、文字数の節約にはなりません。",
    },
    {
      q: "画像は文字数に含まれますか？",
      a: "含まれません。画像は4枚まで、GIFや動画なら1本まで添付でき、280単位は消費しません。",
    },
    {
      q: "X Premiumなら本当に25,000文字投稿できますか？",
      a: "できます。ただしタイムラインには最初の280文字分までしか出ず、それ以降は「さらに表示」に折りたたまれます。続きを読まれるかどうかは冒頭で決まり、最初の280文字分が勝負です。",
    },
  ],
};
