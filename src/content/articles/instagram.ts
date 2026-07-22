import type { Article } from "../types";

export const instagramEn: Article = {
  slug: "instagram-character-limits",
  lang: "en",
  title: "Instagram Character Limits 2026: Captions, Bio, Hashtags & Reels",
  description:
    "All Instagram character limits — 2,200 for captions, 150 for bio, and the 5-hashtag cap introduced in December 2025 — plus the 125-character cutoff that decides whether anyone reads the rest.",
  date: "2026-07-02",
  sections: [
    {
      heading: "Instagram limits in full",
      blocks: [
        {
          type: "table",
          headers: ["Field", "Limit", "Visible before truncation"],
          rows: [
            ["Caption (feed, Reels)", "2,200 characters", "~125 characters"],
            ["Bio", "150 characters", "Fully shown"],
            ["Username", "30 characters", "Fully shown"],
            ["Name field", "30 characters", "Fully shown"],
            ["Comment", "2,200 characters", "~150 characters"],
            ["Hashtags per post", "5 (was 30)", "First 3 in preview"],
            ["Hashtags per Story", "10", "—"],
            ["Alt text", "100 characters", "Not displayed visually"],
            ["Images per carousel", "20", "—"],
          ],
        },
        {
          type: "p",
          text: "The 2,200-character caption allowance is generous, but the number that governs performance is 125. That is roughly where the feed cuts the caption off and replaces the remainder with a \"more\" link, and the proportion of viewers who tap it is small.",
        },
      ],
    },
    {
      heading: "How Instagram counts characters",
      blocks: [
        {
          type: "p",
          text: "Instagram uses straightforward one-for-one counting. Every character costs the same regardless of script, which means a Japanese caption has the full 2,200 characters available rather than the halved allowance that X's weighted system imposes.",
        },
        {
          type: "list",
          items: [
            "All scripts count as 1 per character, including Japanese, Chinese, Korean, Arabic and Cyrillic.",
            "Line breaks count as 1 each, which matters because Instagram captions are typically formatted with generous white space.",
            "Hashtags count their full length against the caption's 2,200 characters.",
            "@mentions count their full length.",
            "URLs count their literal length and are not clickable in captions, which is why the link is conventionally placed in the bio.",
          ],
        },
        {
          type: "p",
          text: "Because line breaks are charged, a caption formatted into eight short paragraphs spends more of its budget on structure than one written as a single block. This is rarely a binding constraint at 2,200 characters, but it becomes relevant in the 150-character bio, where two line breaks represent more than one percent of the available space.",
        },
      ],
    },
    {
      heading: "The first 125 characters",
      blocks: [
        {
          type: "p",
          text: "In the feed, a caption is truncated at approximately 125 characters. The exact figure shifts with username length, device width and whether the post carries a location tag, so treating 125 as an approximate ceiling rather than a precise one is the safer approach.",
        },
        {
          type: "p",
          text: "What this means in practice is that a caption has two distinct jobs. The opening sentence has to work as a standalone hook, and the remainder has to reward the tap. Captions that begin with context — describing the setting, thanking collaborators, explaining what the post is about — spend the visible portion on material that gives the reader no reason to continue.",
        },
        {
          type: "list",
          items: [
            "Put the most surprising or useful statement in the first sentence.",
            "Avoid opening with @mentions, which consume visible space and read as administrative.",
            "If the caption asks a question, ask it early rather than at the end.",
            "Place hashtags at the end of the caption or in the first comment so they do not occupy the visible window.",
          ],
        },
      ],
    },
    {
      heading: "Hashtags: five, down from thirty",
      blocks: [
        {
          type: "p",
          text: "Instagram cut the per-post limit from 30 hashtags to five, rolling the change out from December 2025. This is not a style recommendation but an enforced cap: posts carrying more than five are reported to stop being surfaced in Explore, in hashtag browse pages and in Reels recommendations. Long hashtag blocks, which were standard practice for years, now actively cost reach.",
        },
        {
          type: "p",
          text: "Two structural details are worth knowing. Hashtags in the first comment behave identically to hashtags in the caption for discovery purposes, so moving them there keeps the caption clean without cost. And only the first three hashtags appear in the truncated preview, so any hashtag placed early is competing with your opening sentence for the same 125 characters.",
        },
      ],
    },
    {
      heading: "Bio: 150 characters that appear everywhere",
      blocks: [
        {
          type: "p",
          text: "The bio is the most constrained field on the platform and the most frequently seen. At 150 characters it holds roughly two short sentences, and it has to establish who the account belongs to, what it posts, and what the visitor should do next.",
        },
        {
          type: "list",
          items: [
            "The name field, separately limited to 30 characters, is searchable — putting a descriptive term there rather than only a personal name improves discoverability.",
            "Line breaks are permitted in the bio and cost one character each.",
            "The bio is shared with Threads: editing it in one place changes it in both.",
            "Emoji count as one character each in the bio, though composed emoji can cost more.",
          ],
        },
      ],
    },
    {
      heading: "Checking captions before posting",
      blocks: [
        {
          type: "p",
          text: "Instagram's composer does not show a character counter until you are close to the limit, and it gives no indication of where the 125-character cutoff falls. PostLen shows the count and renders a preview shaped like the Instagram feed, so the truncation point is visible while you write. It counts the same draft against X, Threads, LinkedIn, YouTube and TikTok simultaneously, and processes everything in the browser without transmitting your text.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is the Instagram caption character limit?",
      a: "2,200 characters. Only about 125 appear in the feed before the \"more\" link, so the opening sentence carries most of the weight.",
    },
    {
      q: "How long can an Instagram bio be?",
      a: "150 characters, including line breaks and emoji. The same field appears on your Threads profile.",
    },
    {
      q: "How many hashtags can I use on Instagram?",
      a: "Five per post. Instagram reduced the cap from 30 starting in December 2025, and going over it is reported to remove the post from Explore, hashtag pages and Reels recommendations. Hashtags count toward the caption's 2,200-character limit.",
    },
    {
      q: "Do Japanese characters count as two on Instagram?",
      a: "No. Instagram counts every character as one regardless of script, so a Japanese caption can use the full 2,200 characters.",
    },
    {
      q: "Does putting hashtags in the first comment still work?",
      a: "Yes. Hashtags in the first comment are treated the same way as hashtags in the caption for discovery, and they keep the visible portion of the caption free.",
    },
    {
      q: "Do Reels have a different caption limit?",
      a: "No. Reels use the same 2,200-character caption limit as feed posts.",
    },
  ],
};

export const instagramJa: Article = {
  slug: "instagram-character-limits",
  lang: "ja",
  title: "Instagram文字数制限 2026：キャプション・プロフィール・ハッシュタグ・リール",
  description:
    "Instagramの文字数制限を網羅。キャプション2,200文字、プロフィール150文字、2025年12月に5個へ縮小されたハッシュタグ上限に加え、続きを読まれるかを左右する125文字の境界を解説します。",
  date: "2026-07-02",
  sections: [
    {
      heading: "Instagramの文字数制限 一覧",
      blocks: [
        {
          type: "table",
          headers: ["項目", "上限", "切り捨てまでの表示"],
          rows: [
            ["キャプション（フィード・リール）", "2,200文字", "約125文字"],
            ["プロフィール", "150文字", "全文表示"],
            ["ユーザーネーム", "30文字", "全文表示"],
            ["名前", "30文字", "全文表示"],
            ["コメント", "2,200文字", "約150文字"],
            ["1投稿のハッシュタグ", "5個（旧30個）", "プレビューでは3個"],
            ["ストーリーズのハッシュタグ", "10個", "—"],
            ["代替テキスト", "100文字", "画面には表示されない"],
            ["カルーセルの画像", "20枚", "—"],
          ],
        },
        {
          type: "p",
          text: "キャプションの2,200文字という枠は十分に見えますが、実際の成果を左右するのは125という数字です。フィードでキャプションが切り捨てられ、残りが「続きを読む」に置き換わるのがおおよそこの位置で、そこをタップする人の割合は多くありません。",
        },
      ],
    },
    {
      heading: "Instagramの文字カウント方法",
      blocks: [
        {
          type: "p",
          text: "Instagramは単純な1文字＝1カウント方式です。文字種にかかわらず消費は同じなので、日本語のキャプションでも2,200文字をそのまま使えます。Xの重み付け方式のように枠が半分になることはありません。",
        },
        {
          type: "list",
          items: [
            "日本語・中国語・韓国語・アラビア文字・キリル文字を含め、すべての文字が1文字分です。",
            "改行も1文字分としてカウントされます。Instagramのキャプションは空白を多く取って整形されることが多いため、これは無視できません。",
            "ハッシュタグは、そのままの文字数がキャプションの2,200文字に含まれます。",
            "@メンションも実際の文字数がカウントされます。",
            "URLは実際の長さがカウントされますが、キャプション内ではリンクとして機能しません。リンクをプロフィールに置くのが慣例なのはこのためです。",
          ],
        },
        {
          type: "p",
          text: "改行が課金されるため、8つの短い段落に整形したキャプションは、ひとつの塊で書いた場合より多くの予算を構造に使っています。2,200文字あればこれが制約になることはまれですが、150文字のプロフィールでは事情が異なり、改行2つで利用可能な枠の1%以上を占めます。",
        },
      ],
    },
    {
      heading: "最初の125文字",
      blocks: [
        {
          type: "p",
          text: "フィードでは、キャプションはおよそ125文字で切り捨てられます。正確な位置はユーザーネームの長さ、画面幅、位置情報タグの有無によって変わるため、125は厳密な数値ではなく目安の上限として扱うのが安全です。",
        },
        {
          type: "p",
          text: "つまりキャプションには2つの異なる役割があります。冒頭の一文はそれ単体で興味を引く必要があり、残りの部分はタップに見合う内容でなければなりません。状況説明、協力者への謝辞、投稿の趣旨説明から始まるキャプションは、読者が読み進める理由にならない内容に、見える部分を使ってしまっています。",
        },
        {
          type: "list",
          items: [
            "最も意外な、あるいは最も役に立つ内容を1文目に置きます。",
            "@メンションから書き始めるのは避けます。見える範囲を消費するうえ、事務的な印象を与えます。",
            "キャプションで質問を投げかけるなら、末尾ではなく早い段階で行います。",
            "ハッシュタグはキャプションの末尾か最初のコメントに置き、見える範囲を占有しないようにします。",
          ],
        },
      ],
    },
    {
      heading: "ハッシュタグ：30個から5個へ縮小",
      blocks: [
        {
          type: "p",
          text: "Instagramは1投稿あたりのハッシュタグ上限を30個から5個へ引き下げ、2025年12月から展開しました。これは推奨ではなく実際に適用される制限で、5個を超える投稿はExplore（発見タブ）、ハッシュタグの一覧ページ、リールのレコメンドに表示されなくなると報告されています。長年一般的だった大量のハッシュタグの羅列は、現在ではリーチを損なう行為になりました。",
        },
        {
          type: "p",
          text: "構造上、知っておくべき点が2つあります。ひとつは、最初のコメントに置いたハッシュタグは発見性の面でキャプション内のものと同じように機能するため、キャプションを整理する目的で移動しても損失がないこと。もうひとつは、切り捨て後のプレビューに表示されるハッシュタグは最初の3つだけであり、前方に置いたハッシュタグは冒頭の一文と同じ125文字を奪い合うということです。",
        },
      ],
    },
    {
      heading: "プロフィール：あらゆる場所に表示される150文字",
      blocks: [
        {
          type: "p",
          text: "プロフィール文はこのプラットフォームで最も制約が厳しく、最も頻繁に見られる項目です。150文字は日本語なら短い2文程度で、そのなかで誰のアカウントか、何を投稿しているか、訪問者に次に何をしてほしいかを示す必要があります。",
        },
        {
          type: "list",
          items: [
            "「名前」欄は30文字の別枠で、検索対象になります。個人名だけでなく内容を表す語を入れると見つけられやすくなります。",
            "プロフィール文では改行が使え、1つにつき1文字を消費します。",
            "プロフィール文はThreadsと共有されており、片方で編集するともう片方も変わります。",
            "絵文字は基本的に1文字ですが、複数のコードポイントで構成される絵文字はそれ以上を消費することがあります。",
          ],
        },
      ],
    },
    {
      heading: "投稿前にキャプションを確認する",
      blocks: [
        {
          type: "p",
          text: "Instagramの投稿画面は上限が近づくまで文字数を表示せず、125文字の境界がどこにあるかも示しません。PostLenは文字数を表示しながらInstagramのフィードを模したプレビューを描画するため、書いている最中に切り捨て位置が見えます。同じ下書きをX・Threads・LinkedIn・YouTube・TikTokに対して同時にカウントし、処理はすべてブラウザ内で完結してテキストが送信されることはありません。",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Instagramのキャプションは何文字まで書けますか？",
      a: "2,200文字です。フィードで「続きを読む」の前に表示されるのは約125文字なので、冒頭の一文が最も重要になります。",
    },
    {
      q: "Instagramのプロフィールは何文字まで書けますか？",
      a: "改行や絵文字を含めて150文字です。同じ内容がThreadsのプロフィールにも表示されます。",
    },
    {
      q: "ハッシュタグはいくつまで使えますか？",
      a: "1投稿5個までです。2025年12月から30個より縮小されました。超過するとExplore、ハッシュタグページ、リールのレコメンドから外れると報告されています。ハッシュタグはキャプションの2,200文字に含まれます。",
    },
    {
      q: "Instagramで日本語は2文字としてカウントされますか？",
      a: "いいえ。Instagramは文字種にかかわらず1文字としてカウントするため、日本語でも2,200文字をすべて使えます。",
    },
    {
      q: "ハッシュタグを最初のコメントに入れても効果はありますか？",
      a: "あります。最初のコメントのハッシュタグは発見性の面でキャプション内と同様に扱われ、キャプションの見える部分を空けておけます。",
    },
    {
      q: "リールのキャプションは通常の投稿と制限が違いますか？",
      a: "同じです。リールもフィード投稿と同じ2,200文字のキャプション制限が適用されます。",
    },
  ],
};
