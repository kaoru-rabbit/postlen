import type { Article } from "../types";

export const youtubeEn: Article = {
  slug: "youtube-character-limits",
  lang: "en",
  title: "YouTube Character Limits 2026: Titles, Descriptions, Tags & Handles",
  description:
    "Every YouTube character limit in one place — titles, descriptions, tags, channel bios, Shorts, community posts and comments — plus where each field visibly truncates.",
  date: "2026-07-02",
  sections: [
    {
      heading: "Every YouTube character limit at a glance",
      blocks: [
        {
          type: "p",
          text: "YouTube enforces a different limit on almost every text field, and the hard limit is rarely the number that matters. What matters is where the text visibly truncates, because that is the point at which viewers stop reading. The table below lists the hard maximum YouTube will accept, alongside the approximate point where the field gets cut off in the interface.",
        },
        {
          type: "table",
          headers: ["Field", "Hard limit", "Visible before truncation"],
          rows: [
            ["Video title", "100 characters", "~60–70 in search results"],
            ["Video description", "5,000 characters", "~157 (about 3 lines)"],
            ["Tags (combined)", "500 characters total", "Not shown to viewers"],
            ["Channel name", "100 characters", "Varies by placement"],
            ["Channel description (About)", "1,000 characters", "~100 in the sidebar"],
            ["Handle (@name)", "3–30 characters", "Fully shown"],
            ["Playlist title", "150 characters", "~50 in grid view"],
            ["Playlist description", "5,000 characters", "~100"],
            ["Comment", "10,000 characters", "~500 before Read more"],
            ["Community post", "5,000 characters", "~400"],
            ["Poll option", "65 characters", "Fully shown"],
          ],
        },
        {
          type: "p",
          text: "The gap between the two columns is the single most useful thing to internalise. A 100-character title is technically valid, but roughly a third of it will be invisible in the place where most people decide whether to click.",
        },
      ],
    },
    {
      heading: "How YouTube counts characters",
      blocks: [
        {
          type: "p",
          text: "YouTube uses a plain character count. Every character costs exactly one unit, with no weighting and no special cases. This is worth stating explicitly because it differs from X (Twitter), which counts non-Latin characters as two units and forces every URL to a fixed 23-character cost. On YouTube, none of that applies.",
        },
        {
          type: "list",
          items: [
            "Japanese, Chinese, Korean, Cyrillic, Arabic and Greek characters each count as 1.",
            "Emoji count as 1 in most cases, though certain composed emoji (skin-tone or family sequences) are built from multiple code points and can cost more than they appear to.",
            "Spaces, line breaks and punctuation all count as 1.",
            "URLs count their literal length. YouTube does not shorten links, so a long tracking URL genuinely consumes 100+ characters of your description.",
            "Hashtags count toward the description limit. YouTube surfaces up to three of them beside the video title, choosing the ones it judges most engaging rather than the first three you wrote.",
          ],
        },
        {
          type: "p",
          text: "The practical consequence for non-English creators is favourable: a Japanese title has the same 100-character budget as an English one, which in practice carries considerably more meaning per character.",
        },
      ],
    },
    {
      heading: "Titles: why 60 characters is the real limit",
      blocks: [
        {
          type: "p",
          text: "YouTube accepts 100 characters in a title, but the field is displayed in several places with different amounts of room, and each one clips the text at a different point. Search results and suggested-video sidebars are the two placements that drive the most views, and both are tighter than the hard limit.",
        },
        {
          type: "table",
          headers: ["Placement", "Approximate visible length"],
          rows: [
            ["Desktop search results", "60–70 characters"],
            ["Suggested videos sidebar", "~50 characters"],
            ["Mobile app feed", "~40 characters on two lines"],
            ["Watch page (above description)", "Full 100 characters"],
          ],
        },
        {
          type: "p",
          text: "Because the mobile feed shows the least, the safest structure is to place the specific, distinguishing words first and any branding or series name last. A title reading \"How to Fix Slow Wi-Fi in 5 Minutes | TechChannel Ep. 42\" survives truncation intact; the same title with the channel name in front loses its meaning entirely on mobile.",
        },
        {
          type: "list",
          items: [
            "Front-load the words a viewer would actually search for.",
            "Keep the essential promise inside the first 40 characters so it survives every placement.",
            "Treat anything past 70 characters as optional context, not as information you rely on.",
            "Avoid ALL CAPS and excessive punctuation; these do not extend visibility and can trip spam heuristics.",
          ],
        },
      ],
    },
    {
      heading: "Descriptions: the first 157 characters carry the weight",
      blocks: [
        {
          type: "p",
          text: "A description can run to 5,000 characters, but viewers see roughly three lines — about 157 characters — before the \"Show more\" control hides the rest. Everything that must be read without a click belongs in that opening window: what the video delivers, and the single most important link.",
        },
        {
          type: "p",
          text: "The remaining 4,800 characters are still worth using. They are indexed, they give YouTube context about the topic, and they are where timestamps, resources and disclosures live. A well-structured description generally follows a predictable order.",
        },
        {
          type: "list",
          items: [
            "Opening 157 characters: a plain-language summary plus the primary call to action.",
            "Chapters: timestamps beginning at 00:00, which YouTube converts into a chapter track when at least three are present and each is 10 seconds or longer.",
            "Resources: links to anything referenced in the video.",
            "Channel context: subscribe prompt, related playlists, social profiles.",
            "Disclosures: affiliate relationships or sponsorships, which platform policy requires you to state.",
          ],
        },
        {
          type: "p",
          text: "Two details catch people out. YouTube displays up to three hashtags beside the video title, but it selects the ones it considers most engaging — you cannot choose them by ordering. And exceeding 60 hashtags on a video or playlist makes YouTube ignore every hashtag on that content, which its documentation also warns can lead to removal from search results.",
        },
      ],
    },
    {
      heading: "Tags: 500 characters shared across every tag",
      blocks: [
        {
          type: "p",
          text: "The 500-character tag allowance is a combined budget rather than a per-tag limit, and commas count toward it. Roughly 30 to 40 short tags will exhaust the field. YouTube has stated that tags play a minimal role in discovery, their main documented use being to compensate for common misspellings of words central to the video.",
        },
        {
          type: "p",
          text: "Because their ranking value is limited, the sensible approach is to spend the budget on a small number of genuinely descriptive terms and any misspellings your audience plausibly types, rather than packing the field with loosely related keywords.",
        },
      ],
    },
    {
      heading: "Shorts, community posts and comments",
      blocks: [
        {
          type: "p",
          text: "Shorts inherit the standard video fields: 100 characters for the title and 5,000 for the description. The practical difference is that the Shorts player surfaces very little of either, so the title carries nearly the entire burden of explaining the video. In this format the useful budget is closer to 40 characters than 100.",
        },
        {
          type: "p",
          text: "Community posts allow 5,000 characters with roughly 400 visible before truncation, and each poll option is capped at 65 characters. Comments allow a generous 10,000 characters, though the interface collapses anything beyond about 500 behind a \"Read more\" link.",
        },
      ],
    },
    {
      heading: "Checking your limits before you publish",
      blocks: [
        {
          type: "p",
          text: "YouTube Studio shows a counter for the title and description, but it counts against the hard limit rather than the visible one, which is the number that actually affects click-through. It also gives you no way to compare a title against the other platforms you may be promoting the video on.",
        },
        {
          type: "p",
          text: "PostLen counts YouTube titles and descriptions alongside X, Instagram, LinkedIn, Threads, TikTok and meta descriptions simultaneously, so a single draft can be checked against every destination at once. Everything runs in the browser and no text is transmitted anywhere.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is the maximum YouTube video title length?",
      a: "100 characters. However, search results display only about 60–70 characters and the mobile feed roughly 40, so the practical limit for anything you need viewers to read is closer to 60.",
    },
    {
      q: "How many characters can a YouTube description hold?",
      a: "5,000 characters. Only the first 157 or so appear before the \"Show more\" control, so the opening lines should contain your summary and most important link.",
    },
    {
      q: "Do Japanese characters count as two on YouTube?",
      a: "No. YouTube counts every character as one unit regardless of script. This differs from X (Twitter), where characters outside the Latin ranges count as two.",
    },
    {
      q: "Is the 500-character tag limit per tag or for all tags combined?",
      a: "Combined. All tags plus their separating commas share a single 500-character budget, which in practice allows roughly 30–40 short tags.",
    },
    {
      q: "How many hashtags should a YouTube description contain?",
      a: "Up to three appear beside the video title, chosen by YouTube as the most engaging rather than by the order you wrote them. The hard limit is 60: pass it and YouTube ignores every hashtag on that video. A small, relevant set remains the sensible approach.",
    },
    {
      q: "Do YouTube Shorts have different character limits?",
      a: "No. Shorts use the same 100-character title and 5,000-character description limits as standard videos, but the player shows far less of the title, so aim for around 40 characters.",
    },
  ],
};

export const youtubeJa: Article = {
  slug: "youtube-character-limits",
  lang: "ja",
  title: "YouTube文字数制限 2026：タイトル・説明文・タグ・ハンドル完全ガイド",
  description:
    "YouTubeのタイトル、説明文、タグ、チャンネル概要、ショート、コミュニティ投稿、コメントの文字数制限と、実際に表示が切れる位置をまとめて解説します。",
  date: "2026-07-02",
  sections: [
    {
      heading: "YouTubeの文字数制限 一覧",
      blocks: [
        {
          type: "p",
          text: "YouTubeはほぼすべてのテキスト欄に異なる制限を設けていますが、実務で重要なのは上限そのものではなく「どこで表示が切れるか」です。視聴者が読むのを止める位置がそこだからです。以下の表は、YouTubeが受け付ける上限と、インターフェース上で実際に切り捨てられるおおよその位置を並べたものです。",
        },
        {
          type: "table",
          headers: ["項目", "上限", "切り捨てまでの表示目安"],
          rows: [
            ["動画タイトル", "100文字", "検索結果で約60〜70文字"],
            ["動画の説明文", "5,000文字", "約157文字（3行程度）"],
            ["タグ（合計）", "合計500文字", "視聴者には非表示"],
            ["チャンネル名", "100文字", "配置により変動"],
            ["チャンネル概要", "1,000文字", "サイドバーで約100文字"],
            ["ハンドル（@名）", "3〜30文字", "全文表示"],
            ["再生リスト名", "150文字", "グリッド表示で約50文字"],
            ["再生リストの説明", "5,000文字", "約100文字"],
            ["コメント", "10,000文字", "約500文字で「続きを読む」"],
            ["コミュニティ投稿", "5,000文字", "約400文字"],
            ["アンケート選択肢", "65文字", "全文表示"],
          ],
        },
        {
          type: "p",
          text: "この2つの列の差を理解しておくことが最も重要です。100文字のタイトルは技術的には有効ですが、視聴者がクリックするかどうかを判断する場所では、その3分の1程度が見えていません。",
        },
      ],
    },
    {
      heading: "YouTubeの文字カウント方法",
      blocks: [
        {
          type: "p",
          text: "YouTubeは単純な文字数カウントを採用しています。すべての文字が正確に1文字分としてカウントされ、重み付けも特例もありません。これを明示しておく価値があるのは、X（Twitter）とは異なるためです。Xでは日本語などのラテン文字以外が2文字分としてカウントされ、URLは長さに関係なく23文字分に固定されます。YouTubeではそうした処理は一切行われません。",
        },
        {
          type: "list",
          items: [
            "日本語・中国語・韓国語・キリル文字・アラビア文字・ギリシャ文字は、いずれも1文字として計算されます。",
            "絵文字は多くの場合1文字ですが、肌色や家族の絵文字など複数のコードポイントで構成されるものは、見た目より多くの文字数を消費することがあります。",
            "スペース、改行、記号もすべて1文字としてカウントされます。",
            "URLは実際の文字数がそのまま加算されます。YouTubeはリンクを短縮しないため、長いトラッキングURLは説明文の100文字以上を実際に消費します。",
            "ハッシュタグは説明文の文字数に含まれます。タイトル横に表示されるのは最大3つですが、先頭の3つではなくYouTubeが「最もエンゲージメントが高い」と判断したものが選ばれます。",
          ],
        },
        {
          type: "p",
          text: "日本語話者にとってこれは有利に働きます。日本語のタイトルも英語と同じ100文字の枠を使えるため、1文字あたりに込められる情報量は実質的にかなり多くなります。",
        },
      ],
    },
    {
      heading: "タイトル：実質的な上限が60文字である理由",
      blocks: [
        {
          type: "p",
          text: "YouTubeはタイトルに100文字まで許容しますが、この項目は複数の場所に異なる幅で表示され、それぞれ違う位置で切り捨てられます。再生数に最も影響するのは検索結果と関連動画のサイドバーであり、どちらも上限よりかなり狭くなっています。",
        },
        {
          type: "table",
          headers: ["表示場所", "表示される目安"],
          rows: [
            ["PC版検索結果", "60〜70文字"],
            ["関連動画サイドバー", "約50文字"],
            ["モバイルアプリのフィード", "2行で約40文字"],
            ["視聴ページ（説明文の上）", "100文字すべて"],
          ],
        },
        {
          type: "p",
          text: "最も表示が狭いのはモバイルフィードなので、具体的で他と区別できる言葉を先頭に置き、ブランド名やシリーズ名は末尾に回すのが安全な構成です。「Wi-Fiが遅いときの直し方 5分で解決 | テックチャンネル 第42回」というタイトルは切り捨てられても意味が通りますが、チャンネル名を先頭に置くと、モバイルでは内容がまったく伝わりません。",
        },
        {
          type: "list",
          items: [
            "視聴者が実際に検索しそうな言葉を先頭に配置します。",
            "最も伝えたい要点は最初の40文字以内に収め、どの表示場所でも残るようにします。",
            "70文字より後ろは補足情報とみなし、そこに重要な情報を置かないようにします。",
            "全角の記号や過度な装飾は表示範囲を広げる効果がなく、スパム判定のリスクを高めるため避けます。",
          ],
        },
      ],
    },
    {
      heading: "説明文：最初の157文字がすべてを左右する",
      blocks: [
        {
          type: "p",
          text: "説明文は5,000文字まで書けますが、視聴者に見えるのは3行程度、約157文字までで、それ以降は「もっと見る」に隠れます。クリックなしで読まれる必要がある情報、つまり動画の内容と最も重要なリンクは、この冒頭部分に置かなければなりません。",
        },
        {
          type: "p",
          text: "残りの約4,800文字にも価値があります。検索の対象になり、YouTubeに動画のテーマを伝える手がかりとなり、タイムスタンプや参考リンク、各種の開示情報を置く場所になります。よく構成された説明文は、おおむね次の順序に従っています。",
        },
        {
          type: "list",
          items: [
            "冒頭157文字：平易な言葉での要約と、最も重要な行動喚起。",
            "チャプター：00:00から始まるタイムスタンプ。3つ以上あり、各区間が10秒以上あればYouTubeがチャプターとして認識します。",
            "参考リンク：動画内で言及した資料へのリンク。",
            "チャンネル情報：登録の案内、関連する再生リスト、SNSアカウント。",
            "開示事項：アフィリエイトや広告案件の明示。これはプラットフォームのポリシー上必要です。",
          ],
        },
        {
          type: "p",
          text: "見落とされがちな点が2つあります。タイトル横に表示されるハッシュタグは最大3つですが、どれが選ばれるかは YouTube がエンゲージメントを基に判断するため、記述の順番では指定できません。そして1つの動画または再生リストに60個を超えるハッシュタグがあると、YouTube はそのコンテンツのハッシュタグをすべて無視します。公式ヘルプは検索結果からの削除もありうると警告しています。",
        },
      ],
    },
    {
      heading: "タグ：全タグで共有する500文字",
      blocks: [
        {
          type: "p",
          text: "500文字のタグ枠はタグごとではなく合計の予算であり、区切りのカンマも文字数に含まれます。短いタグであれば30〜40個程度で使い切ります。YouTubeはタグが検索・発見に果たす役割は限定的だと公表しており、公式に説明されている主な用途は、動画の主題となる語のよくある誤表記を補うことです。",
        },
        {
          type: "p",
          text: "ランキングへの影響が限られている以上、関連の薄いキーワードを詰め込むより、本当に内容を説明する少数の語と、視聴者が実際に打ちそうな誤表記に予算を使うほうが合理的です。",
        },
      ],
    },
    {
      heading: "ショート・コミュニティ投稿・コメント",
      blocks: [
        {
          type: "p",
          text: "ショートは通常の動画と同じ項目を使い、タイトル100文字、説明文5,000文字です。実務上の違いは、ショートのプレーヤーがどちらもほとんど表示しない点にあります。そのため動画の内容を伝える役割はタイトルがほぼ一手に引き受けることになり、実用的な目安は100文字ではなく40文字程度になります。",
        },
        {
          type: "p",
          text: "コミュニティ投稿は5,000文字まで書けますが、切り捨てまでに見えるのは約400文字です。アンケートの選択肢は各65文字までです。コメントは10,000文字と余裕がありますが、約500文字を超える部分は「続きを読む」の中に折りたたまれます。",
        },
      ],
    },
    {
      heading: "公開前に文字数を確認する",
      blocks: [
        {
          type: "p",
          text: "YouTube Studioにもタイトルと説明文のカウンターはありますが、表示される数字は上限に対するものであり、クリック率を左右する「実際に見える範囲」ではありません。また、同じ動画を告知する他のプラットフォームと見比べることもできません。",
        },
        {
          type: "p",
          text: "PostLenはYouTubeのタイトルと説明文を、X・Instagram・LinkedIn・Threads・TikTok・メタディスクリプションと同時にカウントします。1つの下書きをすべての投稿先に対して一度に確認できます。処理はすべてブラウザ内で完結し、入力したテキストが送信されることはありません。",
        },
      ],
    },
  ],
  faq: [
    {
      q: "YouTubeの動画タイトルは何文字まで入りますか？",
      a: "100文字です。ただし検索結果では約60〜70文字、モバイルのフィードでは約40文字しか表示されないため、確実に読ませたい内容の実質的な上限は60文字程度と考えるべきです。",
    },
    {
      q: "YouTubeの説明文は何文字まで書けますか？",
      a: "5,000文字です。「もっと見る」の前に表示されるのは約157文字までなので、要約と最も重要なリンクは冒頭に置いてください。",
    },
    {
      q: "YouTubeでは日本語は2文字としてカウントされますか？",
      a: "いいえ。YouTubeは文字種にかかわらずすべて1文字としてカウントします。ラテン文字以外を2文字として数えるX（Twitter）とは異なります。",
    },
    {
      q: "タグの500文字はタグ1つあたりですか、合計ですか？",
      a: "合計です。すべてのタグと区切りのカンマが1つの500文字の枠を共有し、短いタグなら30〜40個程度が上限になります。",
    },
    {
      q: "説明文のハッシュタグはいくつ付けるべきですか？",
      a: "タイトル横に表示されるのは最大3つで、記述順ではなく YouTube がエンゲージメントを基に選びます。上限は60個で、これを超えるとその動画のハッシュタグはすべて無視されます。実務上は関連性の高い少数に絞るのが妥当です。",
    },
    {
      q: "YouTubeショートの文字数制限は通常の動画と違いますか？",
      a: "同じです。タイトル100文字、説明文5,000文字が適用されます。ただしプレーヤーに表示されるタイトルはかなり短いため、40文字程度を目安にしてください。",
    },
  ],
};
