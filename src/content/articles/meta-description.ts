import type { Article } from "../types";

export const metaDescriptionEn: Article = {
  slug: "meta-description-character-limit",
  lang: "en",
  title: "Meta Description Length 2026: Why Google Measures Pixels, Not Characters",
  description:
    "Google truncates meta descriptions by pixel width, not character count. This guide explains the real limits, why 155 characters is only a proxy, and how to write descriptions that survive.",
  date: "2026-07-02",
  sections: [
    {
      heading: "The limit is a width, not a number",
      blocks: [
        {
          type: "p",
          text: "Almost every guide states that a meta description should be 155 or 160 characters. That figure is a useful approximation, but it is not the rule Google applies. Google truncates snippets by rendered pixel width — roughly 920 pixels on desktop and 680 on mobile — which means the number of characters that fit depends on which characters they are.",
        },
        {
          type: "table",
          headers: ["Context", "Approximate width", "Characters that typically fit"],
          rows: [
            ["Desktop search result", "~920 px", "150–165"],
            ["Mobile search result", "~680 px", "115–130"],
            ["Description with wide characters", "same width", "Noticeably fewer"],
            ["Description with narrow characters", "same width", "Noticeably more"],
          ],
        },
        {
          type: "p",
          text: "The practical consequence is that two descriptions of exactly 158 characters can behave differently: one displays in full, the other is cut off. A description built from wide letters such as m and w occupies more space than one built from i, l and t, even at identical character counts.",
        },
      ],
    },
    {
      heading: "Why 155 characters is still a reasonable target",
      blocks: [
        {
          type: "p",
          text: "Pixel measurement is impractical to work with while writing, and for ordinary English prose the relationship between characters and width is stable enough that 155 characters serves as a dependable proxy. Writing to that target and treating anything past it as expendable produces descriptions that survive truncation in the great majority of cases.",
        },
        {
          type: "p",
          text: "Mobile is the constraint worth designing for. At roughly 115–130 characters, mobile truncation is considerably tighter than desktop, and mobile accounts for the majority of search traffic for most sites. A description whose essential meaning is complete by 120 characters works everywhere.",
        },
      ],
    },
    {
      heading: "Japanese and other full-width scripts",
      blocks: [
        {
          type: "p",
          text: "Full-width characters occupy approximately twice the horizontal space of Latin characters, so the same pixel budget holds far fewer of them. For Japanese, Chinese and Korean descriptions, the working target is roughly 70 to 80 characters on desktop and around 50 on mobile.",
        },
        {
          type: "p",
          text: "This is a display-width effect rather than a counting rule. Google is not weighting these characters the way X does; they simply take up more room. The distinction matters when reading advice written for English-language sites, which will consistently overstate how much text fits.",
        },
      ],
    },
    {
      heading: "What meta descriptions do and do not affect",
      blocks: [
        {
          type: "p",
          text: "Meta descriptions have not been a direct ranking signal for many years. Their function is entirely to influence whether someone clicks a result that already ranks. This makes them worth writing carefully but not worth optimising for keyword density.",
        },
        {
          type: "list",
          items: [
            "Google rewrites descriptions for a substantial share of queries, generating a snippet from page content when it judges that more relevant than the supplied text.",
            "A rewritten snippet is not a penalty and does not indicate a problem with the description.",
            "Keywords matching the query are shown in bold, which is a legitimate reason to include the terms a page is targeting.",
            "Duplicate descriptions across many pages reduce their usefulness, since the snippet no longer distinguishes one result from another.",
            "Omitting the description entirely leaves Google to generate one, which is often serviceable but rarely as persuasive as a written one.",
          ],
        },
      ],
    },
    {
      heading: "Writing a description that earns the click",
      blocks: [
        {
          type: "list",
          items: [
            "State what the page contains, not what the page is about — specificity outperforms summary.",
            "Include the primary query terms naturally so they appear in bold in the result.",
            "Complete the essential meaning within 120 characters so it survives mobile truncation.",
            "Avoid opening with the site name, which is already displayed above the snippet.",
            "Write a distinct description for every page that matters; templated descriptions read as templated.",
          ],
        },
        {
          type: "p",
          text: "PostLen includes a meta description counter set to 160 characters, alongside counters for X, Instagram, LinkedIn, Threads, YouTube and TikTok. Because the same draft is measured against every target at once, a description written for search can be checked against social limits in the same pass.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is the ideal meta description length?",
      a: "Around 155 characters for desktop and about 120 for mobile. Google truncates by pixel width rather than character count, so these figures are reliable approximations rather than hard limits.",
    },
    {
      q: "Does Google measure meta descriptions in characters or pixels?",
      a: "Pixels — roughly 920 on desktop and 680 on mobile. Two descriptions with identical character counts can truncate differently depending on the width of the characters used.",
    },
    {
      q: "How long should a Japanese meta description be?",
      a: "About 70–80 characters for desktop and around 50 for mobile. Full-width characters occupy roughly twice the width of Latin ones, so fewer fit in the same pixel budget.",
    },
    {
      q: "Do meta descriptions affect rankings?",
      a: "Not directly. They influence click-through rate on results that already rank, which is why they are worth writing well but not worth stuffing with keywords.",
    },
    {
      q: "Why does Google show different text than my meta description?",
      a: "Google rewrites snippets for a large share of queries when page content appears more relevant to the specific search. This is normal behaviour and not a penalty.",
    },
    {
      q: "What happens if I do not write a meta description?",
      a: "Google generates one from the page content. This usually works, but a written description is generally more persuasive because it can be framed deliberately.",
    },
  ],
};

export const metaDescriptionJa: Article = {
  slug: "meta-description-character-limit",
  lang: "ja",
  title: "メタディスクリプションの文字数 2026：Googleが測っているのはピクセル幅",
  description:
    "Googleはメタディスクリプションを文字数ではなくピクセル幅で切り捨てます。実際の上限、155文字が目安にすぎない理由、切り捨てられない書き方を解説します。",
  date: "2026-07-02",
  sections: [
    {
      heading: "上限は文字数ではなく幅",
      blocks: [
        {
          type: "p",
          text: "ほとんどの解説はメタディスクリプションを155文字または160文字と説明します。この数字は目安として有用ですが、Googleが適用している規則そのものではありません。Googleはスニペットを描画後のピクセル幅で切り捨てており、その幅はPCで約920ピクセル、モバイルで約680ピクセルです。つまり何文字入るかは、どの文字を使うかによって変わります。",
        },
        {
          type: "table",
          headers: ["表示環境", "おおよその幅", "収まる文字数の目安"],
          rows: [
            ["PCの検索結果", "約920px", "半角150〜165"],
            ["モバイルの検索結果", "約680px", "半角115〜130"],
            ["全角中心の文章", "同じ幅", "半角の約半分"],
            ["幅の狭い文字が多い文章", "同じ幅", "やや多く収まる"],
          ],
        },
        {
          type: "p",
          text: "実務上の帰結として、まったく同じ158文字のディスクリプションでも、片方は全文表示され、もう片方は切り捨てられるということが起こります。mやwのような幅の広い文字で構成された文章は、iやlで構成された文章より多くの空間を占めます。",
        },
      ],
    },
    {
      heading: "それでも155文字が妥当な目標である理由",
      blocks: [
        {
          type: "p",
          text: "執筆しながらピクセル幅を測るのは現実的ではありません。通常の文章であれば文字数と幅の関係は十分に安定しているため、155文字は信頼できる代替指標として機能します。この目標に合わせて書き、それを超える部分は削っても問題ない内容にしておけば、大半のケースで切り捨てを回避できます。",
        },
        {
          type: "p",
          text: "設計の基準にすべきはモバイルです。モバイルの切り捨ては半角115〜130文字相当とPCよりかなり厳しく、多くのサイトでは検索流入の過半数をモバイルが占めます。要点が半角120文字以内で完結しているディスクリプションは、どの環境でも機能します。",
        },
      ],
    },
    {
      heading: "日本語の場合の目安",
      blocks: [
        {
          type: "p",
          text: "全角文字は半角文字のおよそ2倍の横幅を占めるため、同じピクセル幅に収まる文字数は大きく減ります。日本語のディスクリプションでは、PCで約70〜80文字、モバイルで約50文字が実用的な目標になります。",
        },
        {
          type: "p",
          text: "これはカウント規則ではなく表示幅の問題です。Googleは日本語をXのように2文字分として数えているわけではなく、単に横幅を多く取るということです。英語圏向けに書かれた解説を読む際、この違いを踏まえないと、収まる分量を一貫して過大に見積もることになります。",
        },
      ],
    },
    {
      heading: "メタディスクリプションが影響するもの・しないもの",
      blocks: [
        {
          type: "p",
          text: "メタディスクリプションは長年にわたり直接的な順位決定要因ではありません。その役割は、すでに表示されている検索結果がクリックされるかどうかに影響することに尽きます。丁寧に書く価値はありますが、キーワードの密度を最適化する価値はありません。",
        },
        {
          type: "list",
          items: [
            "Googleは相当な割合のクエリでディスクリプションを書き換え、ページ本文からスニペットを生成します。そのほうが検索意図に合うと判断した場合です。",
            "書き換えられること自体はペナルティではなく、ディスクリプションに問題があることも意味しません。",
            "検索語と一致する語は太字で表示されるため、対象としている語を含める合理的な理由になります。",
            "多数のページで同じディスクリプションを使うと、結果を見分ける役割を果たさなくなり有用性が下がります。",
            "設定しない場合はGoogleが自動生成します。多くの場合それなりに機能しますが、意図をもって書いた文章ほど説得力は出ません。",
          ],
        },
      ],
    },
    {
      heading: "クリックされるディスクリプションの書き方",
      blocks: [
        {
          type: "list",
          items: [
            "ページが「何についてのページか」ではなく「何が書いてあるか」を示します。要約より具体性が有効です。",
            "対象クエリの語を自然に含め、検索結果で太字になるようにします。",
            "要点を半角120文字（全角約60文字）以内で完結させ、モバイルの切り捨てに耐えるようにします。",
            "サイト名から書き始めるのは避けます。スニペットの上にすでに表示されています。",
            "重要なページには個別のディスクリプションを書きます。テンプレートで生成した文章はそう読まれます。",
          ],
        },
        {
          type: "p",
          text: "PostLenには160文字に設定されたメタディスクリプション用のカウンターがあり、X・Instagram・LinkedIn・Threads・YouTube・TikTokのカウンターと並んで表示されます。同じ下書きがすべての対象に対して同時に測定されるため、検索向けに書いた文章をそのままSNSの制限に照らして確認できます。",
        },
      ],
    },
  ],
  faq: [
    {
      q: "メタディスクリプションは何文字が最適ですか？",
      a: "PCで半角155文字前後、モバイルで半角120文字前後です。日本語なら全角70〜80文字が目安になります。Googleは文字数ではなくピクセル幅で切り捨てるため、これらは厳密な上限ではなく信頼できる目安です。",
    },
    {
      q: "Googleは文字数とピクセルのどちらで測っていますか？",
      a: "ピクセルです。PCで約920px、モバイルで約680pxです。文字数が同じでも、使われている文字の幅によって切り捨てられ方が変わります。",
    },
    {
      q: "日本語のメタディスクリプションは何文字が目安ですか？",
      a: "PCで約70〜80文字、モバイルで約50文字です。全角文字は半角の約2倍の幅を占めるため、同じピクセル幅に収まる文字数が少なくなります。",
    },
    {
      q: "メタディスクリプションは検索順位に影響しますか？",
      a: "直接的には影響しません。すでに表示されている検索結果のクリック率に影響するため、丁寧に書く価値はありますが、キーワードを詰め込む価値はありません。",
    },
    {
      q: "設定した文章と違う内容が検索結果に表示されるのはなぜですか？",
      a: "Googleは検索語に対してページ本文のほうが適切だと判断した場合、スニペットを書き換えます。これは通常の挙動でペナルティではありません。",
    },
    {
      q: "メタディスクリプションを設定しないとどうなりますか？",
      a: "Googleがページ内容から自動生成します。多くの場合機能しますが、意図をもって書いた文章のほうが一般に説得力があります。",
    },
  ],
};
