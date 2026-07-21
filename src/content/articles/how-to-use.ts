import type { Article } from "../types";

export const howToUseEn: Article = {
  slug: "how-to-use-postlen",
  lang: "en",
  title: "How to Use PostLen: Counting, Previewing and Cross-Posting",
  description:
    "A guide to PostLen's character counter and post preview — how the weighted X counting works, what the preview shows, and why nothing you type leaves your browser.",
  date: "2026-07-02",
  sections: [
    {
      heading: "What PostLen does",
      blocks: [
        {
          type: "p",
          text: "PostLen counts a single draft against eight destinations at once — X, Instagram, LinkedIn, Threads, YouTube titles, YouTube descriptions, TikTok and SEO meta descriptions — and renders a preview shaped like whichever platform you select. It is free, requires no account, and runs entirely in the browser.",
        },
        {
          type: "p",
          text: "The reason for counting against everything simultaneously is that the platforms disagree in ways that are invisible in a plain text editor. A draft can be comfortably within limits on five platforms and over the limit on the sixth, and the only way to notice is to measure them together.",
        },
      ],
    },
    {
      heading: "Counting",
      blocks: [
        {
          type: "p",
          text: "Type or paste into the main text area and every platform card updates immediately. Each card shows the current count against that platform's maximum, with a bar that changes colour as you approach the limit.",
        },
        {
          type: "list",
          items: [
            "Green indicates comfortable headroom.",
            "Amber indicates that you are close to the limit.",
            "Red indicates that the draft exceeds what the platform will accept.",
          ],
        },
        {
          type: "p",
          text: "The X card does not count characters the way the others do. X applies weighted counting, in which characters above U+10FF — chiefly Japanese, Chinese, Korean and emoji — cost two units instead of one, and every URL costs a fixed 23 units regardless of its actual length. PostLen implements those rules, so the number on the X card is the number X will use, not the raw character count.",
        },
        {
          type: "p",
          text: "The Instagram card additionally tracks hashtags against the 30-per-post limit, since hashtags are frequently the constraint that bites before the 2,200-character caption limit does.",
        },
      ],
    },
    {
      heading: "The preview",
      blocks: [
        {
          type: "p",
          text: "Selecting a platform card switches the preview to that platform's layout — profile position, username treatment, timestamp and text formatting. The purpose is not decoration. Most platforms truncate posts well before their stated limit, and the preview is where that becomes visible.",
        },
        {
          type: "table",
          headers: ["Platform", "Limit", "Where the preview shows truncation"],
          rows: [
            ["Instagram", "2,200", "~125 characters"],
            ["LinkedIn", "3,000", "~140 characters"],
            ["TikTok", "4,000", "~70–100 characters"],
            ["YouTube description", "5,000", "~157 characters"],
          ],
        },
        {
          type: "p",
          text: "Seeing where a caption is cut off tends to change how it is written more than knowing the number does.",
        },
      ],
    },
    {
      heading: "Media",
      blocks: [
        {
          type: "p",
          text: "You can attach up to four images or one video to see how the post looks with media in place. The preview arranges attachments the way the selected platform does, which is the quickest way to check whether a four-image grid crops the way you expected.",
        },
        {
          type: "p",
          text: "Media never counts toward the character limit on any platform, so attachments do not change the counts. They are there to make the preview accurate.",
        },
      ],
    },
    {
      heading: "Privacy",
      blocks: [
        {
          type: "p",
          text: "Everything happens in your browser. Text is never transmitted to a server, uploaded images and video are handled locally through object URLs, and no draft is stored or logged anywhere. There is no account and nothing to sign in to.",
        },
        {
          type: "p",
          text: "This matters more than it might appear. Drafts frequently contain unannounced product details, client names or personal information, and pasting that into a hosted tool means handing it to a third party. PostLen has no server-side component that could receive it.",
        },
      ],
    },
    {
      heading: "Practical workflow",
      blocks: [
        {
          type: "list",
          items: [
            "Draft against X's limit first. It is the tightest constraint, and anything that fits there fits everywhere.",
            "Switch to Threads or Instagram and expand, adding the detail X could not accommodate.",
            "For LinkedIn and Instagram, check the preview to confirm the opening 125–140 characters stand alone.",
            "Paste long URLs directly for X, where they cost a flat 23 units, and shorten them for every other platform.",
            "Switch languages using the toggle in the header; the interface is available in English and Japanese.",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Is PostLen free?",
      a: "Yes, with no account required and no usage limits.",
    },
    {
      q: "Is my text sent anywhere?",
      a: "No. All counting and preview rendering happens in your browser, and there is no server-side component that could receive your drafts.",
    },
    {
      q: "Why does the X count differ from other character counters?",
      a: "X uses weighted counting: CJK characters and emoji cost two units, and every URL costs a fixed 23 units. PostLen applies those rules, so its number matches what X will accept.",
    },
    {
      q: "Which platforms does PostLen support?",
      a: "X, Instagram, LinkedIn, Threads, YouTube titles, YouTube descriptions, TikTok and SEO meta descriptions — all counted simultaneously.",
    },
    {
      q: "Can I upload images and video?",
      a: "Yes, up to four images or one video, processed locally to render an accurate preview. Media never affects the character count.",
    },
    {
      q: "Does PostLen work on mobile?",
      a: "Yes. The interface adapts to smaller screens and requires no installation.",
    },
  ],
};

export const howToUseJa: Article = {
  slug: "how-to-use-postlen",
  lang: "ja",
  title: "PostLenの使い方：カウント・プレビュー・複数SNSへの投稿",
  description:
    "PostLenの文字数カウンターと投稿プレビューの使い方。Xの重み付けカウントの仕組み、プレビューで確認できること、入力内容がブラウザから出ない理由を解説します。",
  date: "2026-07-02",
  sections: [
    {
      heading: "PostLenでできること",
      blocks: [
        {
          type: "p",
          text: "PostLenは、ひとつの下書きを8つの投稿先に対して同時にカウントします。X、Instagram、LinkedIn、Threads、YouTubeのタイトル、YouTubeの説明文、TikTok、SEOのメタディスクリプションです。選択したプラットフォームの見た目を模したプレビューも表示します。無料で、アカウント登録は不要、処理はすべてブラウザ内で完結します。",
        },
        {
          type: "p",
          text: "すべてを同時にカウントする理由は、プラットフォーム間の違いが通常のテキストエディタでは見えないからです。5つのプラットフォームには余裕をもって収まる下書きが、6つ目では上限を超えているということが起こり、それに気づく方法は同時に測ることだけです。",
        },
      ],
    },
    {
      heading: "カウント",
      blocks: [
        {
          type: "p",
          text: "メインのテキストエリアに入力または貼り付けると、すべてのプラットフォームのカードが即座に更新されます。各カードには、そのプラットフォームの上限に対する現在の文字数と、上限に近づくにつれて色が変わるバーが表示されます。",
        },
        {
          type: "list",
          items: [
            "緑：まだ余裕があります。",
            "オレンジ：上限が近づいています。",
            "赤：そのプラットフォームが受け付ける範囲を超えています。",
          ],
        },
        {
          type: "p",
          text: "Xのカードだけは他と数え方が異なります。Xは重み付けカウントを採用しており、U+10FF より上の文字、主に日本語・中国語・韓国語と絵文字は1文字あたり2単位を消費します。またURLは実際の長さにかかわらず一律23単位です。PostLenはこの規則を実装しているため、Xのカードに表示される数字は単純な文字数ではなく、Xが実際に使う数字と一致します。",
        },
        {
          type: "p",
          text: "Instagramのカードには、1投稿30個というハッシュタグの上限に対するカウントも表示されます。2,200文字のキャプション上限より先に、ハッシュタグの数が制約になることが多いためです。",
        },
      ],
    },
    {
      heading: "プレビュー",
      blocks: [
        {
          type: "p",
          text: "プラットフォームのカードを選ぶと、プレビューがそのプラットフォームのレイアウトに切り替わります。プロフィール画像の位置、ユーザーネームの扱い、タイムスタンプ、テキストの整形が再現されます。これは装飾のためではありません。多くのプラットフォームは公表されている上限よりかなり手前で投稿を切り捨てており、それが目に見える形になるのがプレビューです。",
        },
        {
          type: "table",
          headers: ["プラットフォーム", "上限", "プレビューで切り捨てが見える位置"],
          rows: [
            ["Instagram", "2,200", "約125文字"],
            ["LinkedIn", "3,000", "約140文字"],
            ["TikTok", "4,000", "約70〜100文字"],
            ["YouTube説明文", "5,000", "約157文字"],
          ],
        },
        {
          type: "p",
          text: "どこで切れるかを目で見ることは、数字を知ることよりも書き方を変える効果があります。",
        },
      ],
    },
    {
      heading: "メディア",
      blocks: [
        {
          type: "p",
          text: "画像を4枚まで、または動画を1本添付して、メディアがある状態での見え方を確認できます。プレビューは選択中のプラットフォームと同じ方法で添付物を配置するため、4枚組の画像が想定どおりにトリミングされるかを最短で確認できます。",
        },
        {
          type: "p",
          text: "メディアはどのプラットフォームでも文字数を消費しないため、添付してもカウントは変わりません。プレビューを正確にするためのものです。",
        },
      ],
    },
    {
      heading: "プライバシー",
      blocks: [
        {
          type: "p",
          text: "すべての処理がブラウザ内で行われます。テキストがサーバーに送信されることはなく、アップロードした画像や動画もオブジェクトURLを介してローカルで処理され、下書きがどこかに保存・記録されることもありません。アカウントもログインもありません。",
        },
        {
          type: "p",
          text: "これは見た目以上に重要です。下書きには未発表の製品情報、取引先名、個人情報が含まれていることが少なくなく、それをホスティング型のツールに貼り付けることは第三者に渡すことを意味します。PostLenにはそれを受け取りうるサーバー側の仕組みが存在しません。",
        },
      ],
    },
    {
      heading: "実際の使い方の流れ",
      blocks: [
        {
          type: "list",
          items: [
            "まずXの上限に合わせて書きます。最も厳しい制約なので、そこに収まればどこにでも収まります。",
            "ThreadsまたはInstagramに切り替えて広げ、Xに入らなかった内容を加えます。",
            "LinkedInとInstagramではプレビューを確認し、冒頭125〜140文字が単体で成立しているかを見ます。",
            "URLは、一律23単位のXにはそのまま貼り、それ以外のプラットフォームでは短縮します。",
            "ヘッダーの切り替えで言語を変更できます。日本語と英語に対応しています。",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "PostLenは無料ですか？",
      a: "無料です。アカウント登録は不要で、利用回数の制限もありません。",
    },
    {
      q: "入力したテキストはどこかに送信されますか？",
      a: "されません。カウントもプレビューの描画もすべてブラウザ内で行われ、下書きを受け取りうるサーバー側の仕組みは存在しません。",
    },
    {
      q: "Xの文字数が他のカウンターと違うのはなぜですか？",
      a: "Xが重み付けカウントを採用しているためです。CJKの文字と絵文字は2単位、URLは一律23単位を消費します。PostLenはこの規則を適用しているため、表示される数字はXが実際に受け付ける基準と一致します。",
    },
    {
      q: "どのプラットフォームに対応していますか？",
      a: "X、Instagram、LinkedIn、Threads、YouTubeのタイトルと説明文、TikTok、SEOのメタディスクリプションです。すべて同時にカウントされます。",
    },
    {
      q: "画像や動画をアップロードできますか？",
      a: "できます。画像4枚または動画1本まで、ローカルで処理してプレビューに反映します。メディアが文字数に影響することはありません。",
    },
    {
      q: "スマートフォンでも使えますか？",
      a: "使えます。画面サイズに合わせて表示が調整され、インストールも不要です。",
    },
  ],
};
