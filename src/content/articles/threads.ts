import type { Article } from "../types";

export const threadsEn: Article = {
  slug: "threads-character-limit",
  lang: "en",
  title: "Threads Character Limit 2026: Posts, Bio, Replies & Media",
  description:
    "The complete set of Threads character limits — 500 for posts, 150 for bio — plus how counting works, what media costs, and how Threads compares with X and Instagram.",
  date: "2026-07-02",
  sections: [
    {
      heading: "Threads limits in full",
      blocks: [
        {
          type: "p",
          text: "Threads sits deliberately between X and Instagram. Posts are capped at 500 characters, roughly 1.8 times what X allows on a free account and about a quarter of an Instagram caption. The result is a format with room for a developed thought but not for an essay.",
        },
        {
          type: "table",
          headers: ["Field", "Limit", "Notes"],
          rows: [
            ["Post", "500 characters", "Same for replies and quote posts"],
            ["Bio", "150 characters", "Shared with the Instagram profile"],
            ["Username", "30 characters", "Inherited from Instagram"],
            ["Display name", "30 characters", "Editable separately"],
            ["Link in bio", "No practical limit", "Multiple links supported"],
            ["Images per post", "10", "No character cost"],
            ["Video per post", "1 (up to 5 minutes)", "No character cost"],
            ["Poll options", "4 options", "25 characters each"],
          ],
        },
        {
          type: "p",
          text: "Because a Threads account is created from an Instagram account, the username and bio are not independent fields. Editing your Threads bio edits the same 150 characters that appear on your Instagram profile, which is worth knowing before you rewrite it to suit one platform.",
        },
      ],
    },
    {
      heading: "How Threads counts characters",
      blocks: [
        {
          type: "p",
          text: "Threads uses simple one-for-one counting with no weighting, matching Instagram's behaviour and differing sharply from X. This has a significant practical effect for anyone writing in Japanese, Chinese, Korean or any other non-Latin script.",
        },
        {
          type: "list",
          items: [
            "Every character costs 1, regardless of script. A 500-character Japanese post genuinely holds 500 Japanese characters.",
            "Line breaks count as 1 each, so heavily formatted posts with white space between paragraphs spend real budget on layout.",
            "Mentions and hashtags count their full literal length.",
            "URLs count their actual length. Threads does not shorten links the way X does, so a long URL can consume a fifth of your post.",
            "Attached images and video cost nothing against the 500 characters.",
          ],
        },
        {
          type: "p",
          text: "The URL behaviour is the detail most often carried over incorrectly from X. On X, any link costs a flat 23 characters no matter how long it is. On Threads there is no such discount — a 90-character campaign URL costs 90 characters. Shortening links before posting therefore has a real, measurable benefit on Threads that it does not have on X.",
        },
      ],
    },
    {
      heading: "Threads compared with X and Instagram",
      blocks: [
        {
          type: "p",
          text: "The three platforms are frequently used for the same message, and the differences in both limit and counting rule determine how much rewriting is required.",
        },
        {
          type: "table",
          headers: ["", "Threads", "X (free)", "Instagram"],
          rows: [
            ["Post limit", "500", "280", "2,200"],
            ["Non-Latin characters", "1 each", "2 each", "1 each"],
            ["URL cost", "Actual length", "Fixed 23", "Actual length"],
            ["Images per post", "10", "4", "10 (carousel 20)"],
            ["Bio", "150", "160", "150"],
          ],
        },
        {
          type: "p",
          text: "The row that surprises people is the second one. A Japanese post of 280 characters is impossible on X, where the effective allowance is about 140 Japanese characters. The same text fits comfortably on Threads. For Japanese-language accounts, Threads offers roughly 3.5 times the usable space of a free X account, not the 1.8 times the raw numbers suggest.",
        },
      ],
    },
    {
      heading: "Writing well inside 500 characters",
      blocks: [
        {
          type: "p",
          text: "Five hundred characters is enough to state a position and support it with a single piece of evidence, which is roughly one short paragraph in English or two or three sentences in Japanese. It is not enough for a preamble. Posts that open by explaining what they are about to say tend to run out of room before saying it.",
        },
        {
          type: "list",
          items: [
            "Open with the claim itself rather than context leading up to it.",
            "Budget for line breaks if you intend to use them; four paragraph breaks cost the same as a short word.",
            "Shorten URLs before posting, since they are charged at full length.",
            "Split longer material into a chain of connected posts rather than compressing it into one.",
            "Reserve roughly 30 characters of headroom if you expect to edit after posting.",
          ],
        },
        {
          type: "p",
          text: "Threads has no equivalent of X Premium's extended limit, so 500 characters is the ceiling for every account. Content that genuinely needs more room has to be structured as a chain, where each post remains readable on its own.",
        },
      ],
    },
    {
      heading: "Checking a draft before posting",
      blocks: [
        {
          type: "p",
          text: "The Threads composer shows a counter only as you approach the limit, which makes it awkward to plan a post that also has to work on X or Instagram. PostLen counts against all of them at once and renders a preview shaped like each platform, so you can see where a post would be truncated before publishing it. Text is processed entirely in the browser and never sent to a server.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is the Threads character limit?",
      a: "500 characters per post, and the same limit applies to replies and quote posts. There is no paid tier that raises it.",
    },
    {
      q: "How long can a Threads bio be?",
      a: "150 characters. The Threads bio and the Instagram bio are the same field, so editing one changes the other.",
    },
    {
      q: "Do Japanese characters count as two on Threads?",
      a: "No. Threads counts every character as one regardless of script, so a Japanese post can use all 500 characters. X is the platform that counts non-Latin characters as two.",
    },
    {
      q: "Do links count toward the 500-character limit?",
      a: "Yes, at their full literal length. Threads does not shorten URLs, so unlike X — where every link costs a flat 23 characters — shortening a long URL before posting genuinely saves space.",
    },
    {
      q: "Do images and video use up characters?",
      a: "No. You can attach up to 10 images or one video of up to five minutes without affecting the character count.",
    },
    {
      q: "Can I post more than 500 characters on Threads?",
      a: "Not in a single post. Longer material has to be split into a chain of connected posts, each within the 500-character limit.",
    },
  ],
};

export const threadsJa: Article = {
  slug: "threads-character-limit",
  lang: "ja",
  title: "Threads文字数制限 2026：投稿・プロフィール・返信・メディア",
  description:
    "Threadsの文字数制限を網羅。投稿500文字、プロフィール150文字に加え、カウント方式、メディアの扱い、XやInstagramとの違いを解説します。",
  date: "2026-07-02",
  sections: [
    {
      heading: "Threadsの文字数制限 一覧",
      blocks: [
        {
          type: "p",
          text: "ThreadsはXとInstagramの中間に位置づけられています。投稿の上限は500文字で、無料アカウントのXの約1.8倍、Instagramのキャプションの約4分の1にあたります。ひとつの考えをきちんと述べられるだけの余裕はあるものの、長文を書く形式ではありません。",
        },
        {
          type: "table",
          headers: ["項目", "上限", "備考"],
          rows: [
            ["投稿", "500文字", "返信・引用投稿も同じ"],
            ["プロフィール", "150文字", "Instagramと共有"],
            ["ユーザーネーム", "30文字", "Instagramから引き継ぎ"],
            ["表示名", "30文字", "個別に編集可能"],
            ["プロフィールのリンク", "実質制限なし", "複数登録可能"],
            ["1投稿の画像", "10枚", "文字数を消費しない"],
            ["1投稿の動画", "1本（最長5分）", "文字数を消費しない"],
            ["アンケート選択肢", "4つ", "各25文字"],
          ],
        },
        {
          type: "p",
          text: "ThreadsのアカウントはInstagramアカウントから作成されるため、ユーザーネームとプロフィール文は独立した項目ではありません。Threadsのプロフィールを編集すると、Instagramのプロフィールに表示される同じ150文字が変更されます。片方に合わせて書き直す前に知っておくべき点です。",
        },
      ],
    },
    {
      heading: "Threadsの文字カウント方法",
      blocks: [
        {
          type: "p",
          text: "Threadsは重み付けのない単純な1文字＝1カウント方式で、Instagramと同じ挙動です。Xとは大きく異なります。この違いは、日本語・中国語・韓国語などラテン文字以外で書く人にとって非常に大きな意味を持ちます。",
        },
        {
          type: "list",
          items: [
            "文字種にかかわらず、すべての文字が1文字分です。500文字の日本語投稿には、実際に日本語500文字が入ります。",
            "改行も1文字分としてカウントされるため、段落間に空行を入れる書き方はレイアウトに実際の文字数を消費します。",
            "メンションとハッシュタグは、そのままの文字数がカウントされます。",
            "URLは実際の長さがそのままカウントされます。ThreadsはXのようにリンクを短縮しないため、長いURLは投稿の5分の1を消費することもあります。",
            "添付した画像や動画は、500文字の枠を一切消費しません。",
          ],
        },
        {
          type: "p",
          text: "Xからの思い込みで最も間違えられやすいのがURLの扱いです。Xではリンクの長さに関係なく一律23文字分ですが、Threadsにその割引はありません。90文字のキャンペーンURLは、そのまま90文字を消費します。したがって、投稿前にリンクを短縮する効果は、Xにはなくても、Threadsには実際に測定できる形で現れます。",
        },
      ],
    },
    {
      heading: "XとInstagramとの比較",
      blocks: [
        {
          type: "p",
          text: "この3つのプラットフォームには同じ内容を投稿することが多く、上限とカウント方式の違いが、どれだけ書き直しが必要になるかを決めます。",
        },
        {
          type: "table",
          headers: ["", "Threads", "X（無料）", "Instagram"],
          rows: [
            ["投稿の上限", "500", "280", "2,200"],
            ["日本語などの扱い", "1文字", "2文字", "1文字"],
            ["URLの消費", "実際の長さ", "一律23", "実際の長さ"],
            ["1投稿の画像", "10枚", "4枚", "10枚（カルーセル20枚）"],
            ["プロフィール", "150", "160", "150"],
          ],
        },
        {
          type: "p",
          text: "意外に思われるのは2行目です。Xで日本語280文字の投稿は不可能で、実際に使えるのは日本語で約140文字です。同じ文章がThreadsには余裕を持って収まります。日本語アカウントにとってThreadsは、数字上の1.8倍ではなく、実質的に無料版Xの約3.5倍の分量を書ける場所ということになります。",
        },
      ],
    },
    {
      heading: "500文字で的確に書く",
      blocks: [
        {
          type: "p",
          text: "500文字は、主張を述べたうえで根拠をひとつ添えられる分量です。日本語であれば2〜3文にあたります。前置きを書く余裕はありません。「これから何を話すか」から始まる投稿は、肝心の内容にたどり着く前に文字数が尽きる傾向があります。",
        },
        {
          type: "list",
          items: [
            "背景説明ではなく、主張そのものから書き始めます。",
            "改行を使うなら、その分を計算に入れます。空行4つは短い単語1つ分に相当します。",
            "URLは実際の長さで課金されるため、投稿前に短縮します。",
            "長い内容は1投稿に圧縮せず、連続した投稿に分割します。",
            "投稿後の修正を想定するなら、30文字程度の余裕を残しておきます。",
          ],
        },
        {
          type: "p",
          text: "ThreadsにはX Premiumのような上限拡張の仕組みがないため、500文字はすべてのアカウント共通の上限です。それ以上の分量が本当に必要な内容は、各投稿が単体で読めるように連投として構成する必要があります。",
        },
      ],
    },
    {
      heading: "投稿前に下書きを確認する",
      blocks: [
        {
          type: "p",
          text: "Threadsの投稿画面は上限が近づいてからしかカウンターを表示しないため、XやInstagramにも同時に投稿する文章を組み立てるには不便です。PostLenはすべてのプラットフォームに対して同時にカウントし、各プラットフォームの見た目を模したプレビューを表示するので、どこで切り捨てられるかを公開前に確認できます。テキストはすべてブラウザ内で処理され、サーバーに送信されることはありません。",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Threadsの文字数制限は何文字ですか？",
      a: "1投稿あたり500文字です。返信や引用投稿にも同じ制限が適用され、上限を引き上げる有料プランはありません。",
    },
    {
      q: "Threadsのプロフィールは何文字まで書けますか？",
      a: "150文字です。ThreadsとInstagramのプロフィール文は同じ項目のため、片方を編集するともう片方も変わります。",
    },
    {
      q: "Threadsで日本語は2文字としてカウントされますか？",
      a: "いいえ。Threadsは文字種にかかわらず1文字としてカウントするため、日本語でも500文字すべてを使えます。ラテン文字以外を2文字として数えるのはXです。",
    },
    {
      q: "リンクは500文字に含まれますか？",
      a: "含まれます。しかも実際の長さのままです。ThreadsはURLを短縮しないため、リンクが一律23文字分となるXとは異なり、投稿前の短縮に実際の節約効果があります。",
    },
    {
      q: "画像や動画は文字数を消費しますか？",
      a: "しません。画像10枚、または最長5分の動画1本を、文字数に影響を与えずに添付できます。",
    },
    {
      q: "Threadsに500文字以上投稿できますか？",
      a: "1つの投稿ではできません。長い内容は、それぞれ500文字以内の連続した投稿に分割する必要があります。",
    },
  ],
};
