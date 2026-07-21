import type { Article } from "../types";

export const tiktokEn: Article = {
  slug: "tiktok-character-limits",
  lang: "en",
  title: "TikTok Character Limits 2026: Captions, Bio, Comments & Hashtags",
  description:
    "TikTok's caption limit grew from 150 to 4,000 characters, but the visible portion did not. Here is every limit and how much of it viewers actually see.",
  date: "2026-07-02",
  sections: [
    {
      heading: "TikTok limits in full",
      blocks: [
        {
          type: "table",
          headers: ["Field", "Limit", "Visible before truncation"],
          rows: [
            ["Video caption", "4,000 characters", "~70–100 characters"],
            ["Bio", "80 characters", "Fully shown"],
            ["Username", "24 characters", "Fully shown"],
            ["Display name", "30 characters", "Fully shown"],
            ["Comment", "150 characters", "Fully shown"],
            ["Reply to comment", "150 characters", "Fully shown"],
            ["Direct message", "500 characters", "Fully shown"],
            ["Playlist name", "50 characters", "Fully shown"],
          ],
        },
        {
          type: "p",
          text: "TikTok raised the caption limit from 150 characters to 4,000, a change that made captions genuinely useful for context and search. What did not change is the interface: the caption overlays the video in a narrow band at the bottom of the screen, and only the first line or two is visible before the viewer has to tap.",
        },
      ],
    },
    {
      heading: "The 80-character bio",
      blocks: [
        {
          type: "p",
          text: "TikTok's bio is the tightest profile field among the major platforms — roughly half of Instagram's 150 and Threads' 150, and exactly half of X's 160. Eighty characters is one short sentence, which forces a single clear statement rather than a list of interests.",
        },
        {
          type: "list",
          items: [
            "Line breaks are permitted and cost one character each, which is expensive at this length.",
            "Emoji count as one character in most cases and are often used as separators to save space.",
            "The bio is the only place a clickable link can appear, subject to account eligibility.",
            "Keyword terms in the bio are searchable, so a descriptive noun generally earns its space.",
          ],
        },
      ],
    },
    {
      heading: "Captions: 4,000 available, roughly 70 visible",
      blocks: [
        {
          type: "p",
          text: "Because the caption sits over the video rather than beside it, TikTok shows very little of it by default — approximately 70 to 100 characters depending on device and whether the video has music attribution or a location tag. Everything past that requires a tap.",
        },
        {
          type: "p",
          text: "The expanded caption still matters. TikTok's search has grown substantially and caption text is indexed, so the full 4,000 characters function much like a video description on YouTube: largely unseen by casual viewers, but load-bearing for discovery.",
        },
        {
          type: "list",
          items: [
            "Use the first 70 characters to state what the video shows, not to greet the viewer.",
            "Place hashtags at the end, since they consume the visible window if placed first.",
            "Include the words someone would type into TikTok search, spelled plainly.",
            "Do not pad the caption to use the full 4,000 characters; length itself carries no benefit.",
          ],
        },
      ],
    },
    {
      heading: "Hashtags and how they are charged",
      blocks: [
        {
          type: "p",
          text: "TikTok imposes no explicit cap on the number of hashtags, but every hashtag counts against the caption's 4,000 characters, so the constraint is practical rather than formal. Three to five specific hashtags consistently outperform long blocks of general ones.",
        },
        {
          type: "p",
          text: "Broad hashtags such as #fyp and #foryoupage remain widely used, though there is no evidence they influence distribution. Narrow hashtags that describe the actual subject perform better because they place the video in a smaller, more relevant pool.",
        },
      ],
    },
    {
      heading: "How TikTok counts characters",
      blocks: [
        {
          type: "p",
          text: "TikTok counts every character as one, with no weighting by script. Japanese, Chinese and Korean captions have the full 4,000 characters available. URLs count their literal length and are not clickable within captions, which is why links are conventionally placed in the bio.",
        },
        {
          type: "p",
          text: "The 150-character comment limit is worth noting separately, since it is unusually short. Replies are held to the same 150, which makes TikTok comment threads structurally different from those on platforms allowing several thousand characters per reply.",
        },
      ],
    },
    {
      heading: "Checking a caption before posting",
      blocks: [
        {
          type: "p",
          text: "TikTok's editor shows a counter against the 4,000-character limit but gives no indication of where the visible portion ends. PostLen counts TikTok captions alongside X, Instagram, LinkedIn, Threads, YouTube and meta descriptions, so a caption intended for cross-posting can be checked against every destination in one pass, entirely within your browser.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is the TikTok caption character limit?",
      a: "4,000 characters, raised from the original 150. Only about 70–100 characters are visible over the video before the viewer must tap to expand.",
    },
    {
      q: "How long can a TikTok bio be?",
      a: "80 characters — the shortest bio field among the major platforms, roughly half of Instagram's 150.",
    },
    {
      q: "How many hashtags can I use on TikTok?",
      a: "There is no fixed cap, but hashtags count against the 4,000-character caption limit. Three to five specific hashtags generally work better than long blocks of broad ones.",
    },
    {
      q: "What is the TikTok comment character limit?",
      a: "150 characters, and the same limit applies to replies.",
    },
    {
      q: "Do Japanese characters count as two on TikTok?",
      a: "No. TikTok counts every character as one regardless of script, so the full 4,000 characters are available in any language.",
    },
    {
      q: "Should I use all 4,000 characters?",
      a: "No. Length alone provides no benefit. Write what genuinely describes the video and includes the terms people would search for, then stop.",
    },
  ],
};

export const tiktokJa: Article = {
  slug: "tiktok-character-limits",
  lang: "ja",
  title: "TikTok文字数制限 2026：キャプション・プロフィール・コメント・ハッシュタグ",
  description:
    "TikTokのキャプション上限は150文字から4,000文字に拡大しましたが、表示される範囲は変わっていません。全項目の制限と、実際に見える分量を解説します。",
  date: "2026-07-02",
  sections: [
    {
      heading: "TikTokの文字数制限 一覧",
      blocks: [
        {
          type: "table",
          headers: ["項目", "上限", "切り捨てまでの表示"],
          rows: [
            ["動画のキャプション", "4,000文字", "約70〜100文字"],
            ["プロフィール", "80文字", "全文表示"],
            ["ユーザーネーム", "24文字", "全文表示"],
            ["表示名", "30文字", "全文表示"],
            ["コメント", "150文字", "全文表示"],
            ["コメントへの返信", "150文字", "全文表示"],
            ["ダイレクトメッセージ", "500文字", "全文表示"],
            ["プレイリスト名", "50文字", "全文表示"],
          ],
        },
        {
          type: "p",
          text: "TikTokはキャプションの上限を150文字から4,000文字に引き上げました。この変更により、キャプションは文脈の説明と検索の両面で実際に役立つものになりました。変わっていないのはインターフェースのほうです。キャプションは画面下部の狭い帯として動画に重なって表示されるため、タップする前に見えるのは1〜2行にすぎません。",
        },
      ],
    },
    {
      heading: "80文字のプロフィール",
      blocks: [
        {
          type: "p",
          text: "TikTokのプロフィール文は主要プラットフォームの中で最も短く、Instagramの150文字やThreadsの150文字のおよそ半分、Xの160文字のちょうど半分です。80文字は日本語なら1文程度で、興味の一覧を並べる余地はなく、ひとつの明確な主張に絞ることを強います。",
        },
        {
          type: "list",
          items: [
            "改行は使えますが1文字を消費します。この長さでは高くつきます。",
            "絵文字は多くの場合1文字で、スペースを節約するための区切りとしてよく使われます。",
            "クリックできるリンクを置けるのはプロフィールだけです（アカウントの条件による）。",
            "プロフィール内の語は検索対象になるため、内容を表す名詞は入れる価値があります。",
          ],
        },
      ],
    },
    {
      heading: "キャプション：4,000文字書けて、見えるのは約70文字",
      blocks: [
        {
          type: "p",
          text: "キャプションは動画の横ではなく上に重なって表示されるため、初期状態ではごくわずかしか見えません。端末や、楽曲のクレジット・位置情報タグの有無によって変わりますが、およそ70〜100文字程度です。それ以降を読むにはタップが必要です。",
        },
        {
          type: "p",
          text: "展開後のキャプションにも意味があります。TikTokの検索機能は大きく成長しており、キャプションのテキストは検索対象になります。4,000文字の枠はYouTubeの動画説明文に近い役割を果たしていて、通りすがりの視聴者にはほとんど読まれない一方、発見されるかどうかを支えています。",
        },
        {
          type: "list",
          items: [
            "最初の70文字は挨拶ではなく、動画に何が写っているかの説明に使います。",
            "ハッシュタグは末尾に置きます。先頭に置くと見える範囲を消費します。",
            "TikTokの検索窓に打ち込まれそうな語を、そのままの表記で含めます。",
            "4,000文字を埋めるために文章を水増ししないでください。長さ自体には何の利点もありません。",
          ],
        },
      ],
    },
    {
      heading: "ハッシュタグの扱い",
      blocks: [
        {
          type: "p",
          text: "TikTokはハッシュタグの個数に明示的な上限を設けていませんが、すべてのハッシュタグがキャプションの4,000文字を消費するため、制約は形式的ではなく実質的なものになります。具体的なハッシュタグを3〜5個使うほうが、一般的な語を大量に並べるより一貫して良い結果が出ます。",
        },
        {
          type: "p",
          text: "#fyp や #おすすめ のような広いハッシュタグは今も広く使われていますが、これらが配信に影響するという根拠はありません。実際の題材を説明する狭いハッシュタグのほうが、より小さく関連性の高い母集団に動画を置けるため機能します。",
        },
      ],
    },
    {
      heading: "TikTokの文字カウント方法",
      blocks: [
        {
          type: "p",
          text: "TikTokはすべての文字を1文字としてカウントし、文字種による重み付けはありません。日本語・中国語・韓国語のキャプションでも4,000文字をそのまま使えます。URLは実際の長さがカウントされ、キャプション内ではリンクとして機能しません。リンクをプロフィールに置くのが慣例なのはこのためです。",
        },
        {
          type: "p",
          text: "コメントの150文字という制限は個別に触れておく価値があります。他のプラットフォームと比べて際立って短いためです。返信も同じ150文字なので、1件あたり数千文字を許容するプラットフォームとは、コメント欄の性質そのものが構造的に異なります。",
        },
      ],
    },
    {
      heading: "投稿前にキャプションを確認する",
      blocks: [
        {
          type: "p",
          text: "TikTokの編集画面は4,000文字に対するカウンターを表示しますが、見える範囲がどこで終わるかは示しません。PostLenはTikTokのキャプションを、X・Instagram・LinkedIn・Threads・YouTube・メタディスクリプションと並べてカウントします。複数のプラットフォームに投稿するキャプションを一度にすべての投稿先に対して確認でき、処理はすべてブラウザ内で完結します。",
        },
      ],
    },
  ],
  faq: [
    {
      q: "TikTokのキャプションは何文字まで書けますか？",
      a: "4,000文字です（当初の150文字から拡大されました）。動画の上に表示されるのは約70〜100文字までで、それ以降はタップして展開する必要があります。",
    },
    {
      q: "TikTokのプロフィールは何文字まで書けますか？",
      a: "80文字です。主要プラットフォームの中で最も短く、Instagramの150文字の約半分です。",
    },
    {
      q: "ハッシュタグはいくつまで使えますか？",
      a: "個数の上限はありませんが、キャプションの4,000文字を消費します。一般的な語を大量に並べるより、具体的なハッシュタグを3〜5個使うほうが機能します。",
    },
    {
      q: "TikTokのコメントは何文字まで書けますか？",
      a: "150文字です。返信にも同じ制限が適用されます。",
    },
    {
      q: "TikTokで日本語は2文字としてカウントされますか？",
      a: "いいえ。文字種にかかわらず1文字としてカウントされるため、どの言語でも4,000文字をすべて使えます。",
    },
    {
      q: "4,000文字すべて使うべきですか？",
      a: "いいえ。長さ自体に利点はありません。動画を実際に説明し、検索されそうな語を含めたうえで、それ以上は書かないのが適切です。",
    },
  ],
};
