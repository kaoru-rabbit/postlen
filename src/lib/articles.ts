export type Article = {
  slug: string;
  lang: "en" | "ja";
  title: string;
  description: string;
  date: string;
  sections: { heading: string; body: string }[];
};

const articles: Article[] = [
  {
    slug: "x-twitter-character-limit",
    lang: "en",
    title: "X (Twitter) Character Limit Guide 2026: Everything You Need to Know",
    description: "Complete guide to X (Twitter) character limits including posts, DMs, bios, and tips to write within the 280-character limit.",
    date: "2026-07-02",
    sections: [
      {
        heading: "What Is the X (Twitter) Character Limit?",
        body: "X (formerly Twitter) has a standard character limit of 280 characters for regular posts. This limit was doubled from the original 140 characters in November 2017. Premium subscribers (X Premium) can post up to 25,000 characters per post, but the first 280 characters are what appear in the timeline before a \"Show more\" link."
      },
      {
        heading: "How X Counts Characters",
        body: "X uses its own character counting method. Most characters count as 1, but URLs always count as 23 characters regardless of their actual length (X uses t.co link shortening). Emojis count as 2 characters. CJK characters (Chinese, Japanese, Korean) count as 2 characters each. Mentions (@username) count toward the limit, while media attachments (images, videos, GIFs) do not."
      },
      {
        heading: "Character Limits for Different Features",
        body: "Posts: 280 characters (25,000 for Premium). Direct Messages: 10,000 characters. Bio: 160 characters. Display Name: 50 characters. Username: 15 characters. Lists: Name 25 characters, Description 100 characters. Polls: 25 characters per option."
      },
      {
        heading: "Tips for Writing Within the Limit",
        body: "Use abbreviations where appropriate. Replace long URLs with link shorteners (though X shortens them automatically). Break long thoughts into a thread instead of cramming everything into one post. Use tools like PostLen to check your character count before posting. Remove unnecessary words and use concise language."
      },
      {
        heading: "Why Character Limits Matter",
        body: "Character limits force writers to be concise and clear. Studies show that shorter posts tend to get higher engagement rates on X. Posts between 71-100 characters receive the highest engagement. A well-crafted short message often performs better than a lengthy one."
      }
    ]
  },
  {
    slug: "x-twitter-character-limit",
    lang: "ja",
    title: "X (Twitter) 文字数制限ガイド 2026：知っておくべきすべてのこと",
    description: "X (Twitter) の投稿、DM、プロフィールの文字数制限と、280文字以内で効果的に書くコツを解説。",
    date: "2026-07-02",
    sections: [
      {
        heading: "X (Twitter) の文字数制限とは？",
        body: "X（旧Twitter）の通常投稿の文字数制限は280文字です。2017年11月に元の140文字から倍増されました。Xプレミアム加入者は1投稿あたり最大25,000文字まで投稿可能ですが、タイムラインには最初の280文字のみが表示され、「もっと見る」リンクが付きます。"
      },
      {
        heading: "Xの文字カウント方法",
        body: "Xは独自の文字カウント方法を使用しています。半角英数字は1文字としてカウントされますが、URLは実際の長さに関係なく常に23文字としてカウントされます（t.co短縮リンクを使用）。絵文字は2文字としてカウントされます。日本語・中国語・韓国語（CJK文字）は1文字が2文字としてカウントされるため、実質的に日本語では140文字程度が目安となります。メンション（@ユーザー名）はカウントに含まれますが、メディア添付（画像、動画、GIF）は含まれません。"
      },
      {
        heading: "機能別の文字数制限",
        body: "投稿：280文字（プレミアムは25,000文字）。ダイレクトメッセージ：10,000文字。プロフィール：160文字。表示名：50文字。ユーザー名：15文字。リスト：名前25文字、説明100文字。アンケート：選択肢あたり25文字。"
      },
      {
        heading: "文字数制限内で書くコツ",
        body: "適切な略語を使用しましょう。長いURLはリンク短縮サービスを活用しましょう（Xが自動的に短縮しますが）。長い内容はスレッドに分割して投稿しましょう。PostLenなどのツールを使って投稿前に文字数を確認しましょう。不要な言葉を削除し、簡潔な表現を心がけましょう。"
      },
      {
        heading: "文字数制限が重要な理由",
        body: "文字数制限は、簡潔で明確な文章を書くことを促します。調査によると、Xでは短い投稿ほどエンゲージメント率が高くなる傾向があります。71〜100文字の投稿が最も高いエンゲージメントを獲得しています。よく練られた短いメッセージは、長いメッセージよりも効果的なことが多いのです。"
      }
    ]
  },
  {
    slug: "instagram-character-limits",
    lang: "en",
    title: "Instagram Character Limits 2026: Captions, Bio, Hashtags & More",
    description: "Complete guide to Instagram character limits for captions, bios, comments, hashtags, and Reels descriptions.",
    date: "2026-07-02",
    sections: [
      {
        heading: "Instagram Caption Character Limit",
        body: "Instagram captions can be up to 2,200 characters long. However, only the first 125 characters appear in the feed before the \"more\" link. This makes the first sentence or two critical for engagement — it needs to hook readers and encourage them to tap \"more\" to read the rest."
      },
      {
        heading: "Bio and Profile Limits",
        body: "Instagram Bio: 150 characters. Username: 30 characters. Name: 30 characters. These strict limits mean every character counts. Your bio should clearly communicate who you are and what you offer. Use line breaks and emojis strategically to make it scannable."
      },
      {
        heading: "Hashtags and Comments",
        body: "You can use up to 30 hashtags per post and up to 10 per Story. Comments can be up to 2,200 characters. While you can use up to 30 hashtags, Instagram's own recommendation is to use 3-5 highly relevant hashtags rather than the maximum. Hashtag text counts toward your caption character limit."
      },
      {
        heading: "Reels and Stories",
        body: "Reels descriptions have the same 2,200-character limit as regular post captions. Story text overlays don't have an official character limit, but are constrained by screen space. Alt text for accessibility can be up to 100 characters."
      },
      {
        heading: "Best Practices for Instagram Copy",
        body: "Front-load the most important information in the first 125 characters. Use line breaks to improve readability. Place hashtags either at the end of the caption or in the first comment. Use PostLen to preview exactly how your caption will look and ensure you're within limits before posting."
      }
    ]
  },
  {
    slug: "instagram-character-limits",
    lang: "ja",
    title: "Instagram文字数制限 2026：キャプション・プロフィール・ハッシュタグ完全ガイド",
    description: "Instagramのキャプション、プロフィール、コメント、ハッシュタグ、リールの文字数制限を徹底解説。",
    date: "2026-07-02",
    sections: [
      {
        heading: "Instagramキャプションの文字数制限",
        body: "Instagramのキャプションは最大2,200文字まで入力できます。ただし、フィードでは最初の125文字のみが表示され、「続きを読む」リンクが表示されます。そのため、最初の1〜2文がエンゲージメントにとって非常に重要です。読者の関心を引き、「続きを読む」をタップさせる内容にしましょう。"
      },
      {
        heading: "プロフィールの文字数制限",
        body: "プロフィール（自己紹介）：150文字。ユーザーネーム：30文字。名前：30文字。これらの厳しい制限では、一文字一文字が重要です。自己紹介では、あなたが誰で何を提供しているかを明確に伝えましょう。改行と絵文字を戦略的に使って読みやすくしましょう。"
      },
      {
        heading: "ハッシュタグとコメント",
        body: "1投稿あたり最大30個のハッシュタグ、ストーリーでは最大10個のハッシュタグが使用できます。コメントは最大2,200文字です。30個まで使用可能ですが、Instagram公式は最大数ではなく、関連性の高いハッシュタグを3〜5個使用することを推奨しています。ハッシュタグのテキストはキャプションの文字数制限に含まれます。"
      },
      {
        heading: "リールとストーリーズ",
        body: "リールの説明文は通常の投稿キャプションと同じ2,200文字の制限があります。ストーリーズのテキストオーバーレイには公式の文字数制限はありませんが、画面スペースによって制約されます。アクセシビリティのための代替テキストは最大100文字です。"
      },
      {
        heading: "Instagram投稿のベストプラクティス",
        body: "最も重要な情報は最初の125文字に配置しましょう。改行を使って読みやすくしましょう。ハッシュタグはキャプションの最後か、最初のコメントに配置しましょう。PostLenを使って投稿前にキャプションの見た目を確認し、制限内に収まっているかチェックしましょう。"
      }
    ]
  },
  {
    slug: "linkedin-post-character-limit",
    lang: "en",
    title: "LinkedIn Character Limits 2026: Posts, Articles, Profiles & More",
    description: "Everything about LinkedIn character limits for posts, articles, company pages, and profile sections.",
    date: "2026-07-02",
    sections: [
      {
        heading: "LinkedIn Post Character Limit",
        body: "LinkedIn posts can be up to 3,000 characters long. However, only the first 140 characters are visible before the \"see more\" link on desktop, and even fewer on mobile. The first two lines are crucial for stopping the scroll and getting people to expand your post."
      },
      {
        heading: "LinkedIn Article Limits",
        body: "LinkedIn articles (published through the platform's publishing tool) can be up to 125,000 characters — essentially no practical limit for most content. Article titles can be up to 150 characters. Articles support rich formatting including headings, images, links, and embedded media."
      },
      {
        heading: "Profile Character Limits",
        body: "Headline: 220 characters. About/Summary: 2,600 characters. Job Title: 100 characters. Job Description: 2,000 characters. Skills: 80 characters each. Recommendations: 3,000 characters. Your headline appears everywhere on LinkedIn, making it the most important text to optimize."
      },
      {
        heading: "Company Page Limits",
        body: "Company Name: 100 characters. Company Description: 2,000 characters. Tagline: 120 characters. Specialties: 256 characters. Company updates follow the same 3,000-character limit as personal posts."
      },
      {
        heading: "Tips for LinkedIn Content",
        body: "Hook readers in the first 140 characters. Use short paragraphs and white space for readability. LinkedIn's algorithm favors posts that generate meaningful comments, so end with a question or call-to-action. Use PostLen to craft your post and preview it before publishing."
      }
    ]
  },
  {
    slug: "linkedin-post-character-limit",
    lang: "ja",
    title: "LinkedIn文字数制限 2026：投稿・記事・プロフィール完全ガイド",
    description: "LinkedInの投稿、記事、会社ページ、プロフィールセクションの文字数制限を徹底解説。",
    date: "2026-07-02",
    sections: [
      {
        heading: "LinkedIn投稿の文字数制限",
        body: "LinkedInの投稿は最大3,000文字まで入力できます。ただし、デスクトップでは最初の140文字のみが表示され、「もっと見る」リンクが表示されます。モバイルではさらに少ない文字数しか表示されません。最初の2行がスクロールを止め、投稿を展開してもらうために非常に重要です。"
      },
      {
        heading: "LinkedIn記事の制限",
        body: "LinkedInの記事（プラットフォームの公開ツールを通じて公開）は最大125,000文字まで書くことができ、実質的にほとんどのコンテンツにとって制限はありません。記事のタイトルは最大150文字です。記事は見出し、画像、リンク、埋め込みメディアなどのリッチフォーマットに対応しています。"
      },
      {
        heading: "プロフィールの文字数制限",
        body: "ヘッドライン：220文字。自己紹介/概要：2,600文字。職種：100文字。職務内容：2,000文字。スキル：各80文字。推薦文：3,000文字。ヘッドラインはLinkedInのあらゆる場所に表示されるため、最適化すべき最も重要なテキストです。"
      },
      {
        heading: "会社ページの制限",
        body: "会社名：100文字。会社概要：2,000文字。タグライン：120文字。専門分野：256文字。会社の投稿は個人の投稿と同じ3,000文字の制限が適用されます。"
      },
      {
        heading: "LinkedIn投稿のコツ",
        body: "最初の140文字で読者を引きつけましょう。短い段落と空白を使って読みやすくしましょう。LinkedInのアルゴリズムは有意義なコメントを生む投稿を優遇するため、質問やアクションの呼びかけで締めくくりましょう。PostLenを使って投稿を作成し、公開前にプレビューしましょう。"
      }
    ]
  },
  {
    slug: "threads-character-limit",
    lang: "en",
    title: "Threads Character Limit 2026: Complete Guide",
    description: "Guide to Threads character limits for posts, replies, and bio, plus tips for effective Threads content.",
    date: "2026-07-02",
    sections: [
      {
        heading: "Threads Post Character Limit",
        body: "Threads allows up to 500 characters per post. This places it between X's 280-character limit and Instagram's 2,200-character caption limit. Threads is designed for text-based conversations, offering more room than X while keeping posts concise."
      },
      {
        heading: "What Counts Toward the Limit",
        body: "On Threads, most characters count as 1, similar to Instagram. URLs, mentions, and hashtags all count toward the character limit. Emojis generally count as 1 character. Threads does not shorten URLs like X does, so long URLs will consume more of your character allowance."
      },
      {
        heading: "Media and Attachments",
        body: "You can attach up to 10 images or 1 video (up to 5 minutes) per Threads post. Media attachments do not count toward the character limit. You can also add a link preview which doesn't count toward the limit either."
      },
      {
        heading: "Profile and Bio Limits",
        body: "Threads bio: 150 characters (shared with Instagram). Username: same as your Instagram username. Threads profiles are linked to Instagram accounts, so your profile information is largely shared between the two platforms."
      },
      {
        heading: "Writing Effective Threads Posts",
        body: "With 500 characters, you have enough room to make a complete point but still need to be deliberate with your words. Start with a strong hook. Use line breaks for readability. For longer content, create a thread (multiple connected posts). Check your character count with PostLen before posting."
      }
    ]
  },
  {
    slug: "threads-character-limit",
    lang: "ja",
    title: "Threads文字数制限 2026：完全ガイド",
    description: "Threadsの投稿、返信、プロフィールの文字数制限と、効果的な投稿のコツを解説。",
    date: "2026-07-02",
    sections: [
      {
        heading: "Threads投稿の文字数制限",
        body: "Threadsでは1投稿あたり最大500文字まで入力できます。これはXの280文字制限とInstagramの2,200文字キャプション制限の間に位置します。Threadsはテキストベースの会話用に設計されており、Xよりも多くのスペースを提供しながら、投稿を簡潔に保ちます。"
      },
      {
        heading: "文字数のカウント方法",
        body: "Threadsでは、Instagramと同様にほとんどの文字は1文字としてカウントされます。URL、メンション、ハッシュタグはすべて文字数制限に含まれます。絵文字は一般的に1文字としてカウントされます。ThreadsはXのようにURLを短縮しないため、長いURLはより多くの文字数を消費します。"
      },
      {
        heading: "メディアと添付ファイル",
        body: "Threadsの投稿には最大10枚の画像または1本の動画（最大5分）を添付できます。メディアの添付は文字数制限にカウントされません。リンクプレビューも文字数制限にカウントされません。"
      },
      {
        heading: "プロフィールの制限",
        body: "Threadsの自己紹介：150文字（Instagramと共有）。ユーザーネーム：Instagramのユーザーネームと同じ。ThreadsのプロフィールはInstagramアカウントにリンクされているため、プロフィール情報は両プラットフォーム間で共有されます。"
      },
      {
        heading: "効果的なThreads投稿の書き方",
        body: "500文字あれば、完全な要点を伝えるのに十分なスペースがありますが、言葉選びは慎重に行う必要があります。強いフックで始めましょう。改行を使って読みやすくしましょう。長いコンテンツの場合はスレッド（複数の連続投稿）を作成しましょう。PostLenを使って投稿前に文字数を確認しましょう。"
      }
    ]
  },
  {
    slug: "youtube-character-limits",
    lang: "en",
    title: "YouTube Character Limits 2026: Titles, Descriptions & Tags",
    description: "Complete guide to YouTube character limits for video titles, descriptions, tags, and channel details.",
    date: "2026-07-02",
    sections: [
      {
        heading: "YouTube Title Character Limit",
        body: "YouTube video titles can be up to 100 characters. However, titles are truncated in search results and suggested videos at around 60-70 characters. For maximum visibility, keep your title under 60 characters and front-load the most important keywords."
      },
      {
        heading: "YouTube Description Limit",
        body: "Video descriptions can be up to 5,000 characters. Only the first 150-200 characters appear \"above the fold\" before viewers click \"Show more.\" Place your most important information, links, and calls-to-action in those first 200 characters."
      },
      {
        heading: "Tags and Metadata",
        body: "Tags: 500 characters total (not per tag). Channel name: 100 characters. Channel description: 1,000 characters. Playlist title: 150 characters. Playlist description: 5,000 characters. Comment: 10,000 characters. While tags are less important for SEO than they once were, they still help YouTube understand your content."
      },
      {
        heading: "Shorts and Community Posts",
        body: "YouTube Shorts titles follow the same 100-character limit. Community posts can be up to 5,000 characters. Community post poll options: 65 characters each. Shorts descriptions support the full 5,000 characters but are rarely seen by viewers."
      },
      {
        heading: "Optimizing Your YouTube Text",
        body: "Use PostLen to craft titles that fit within the visible range. Include primary keywords in the first 60 characters of your title. Structure descriptions with timestamps, links, and relevant information in the first 200 characters. Write descriptions that are at least 250 words for better SEO."
      }
    ]
  },
  {
    slug: "youtube-character-limits",
    lang: "ja",
    title: "YouTube文字数制限 2026：タイトル・説明文・タグ完全ガイド",
    description: "YouTubeの動画タイトル、説明文、タグ、チャンネル情報の文字数制限を徹底解説。",
    date: "2026-07-02",
    sections: [
      {
        heading: "YouTubeタイトルの文字数制限",
        body: "YouTubeの動画タイトルは最大100文字まで入力できます。ただし、検索結果やおすすめ動画では約60〜70文字で切り捨てられます。最大限の視認性を確保するために、タイトルは60文字以内に収め、最も重要なキーワードを先頭に配置しましょう。"
      },
      {
        heading: "YouTube説明文の制限",
        body: "動画の説明文は最大5,000文字まで入力できます。視聴者が「もっと見る」をクリックする前に表示されるのは最初の150〜200文字のみです。最も重要な情報、リンク、行動の呼びかけは最初の200文字以内に配置しましょう。"
      },
      {
        heading: "タグとメタデータ",
        body: "タグ：合計500文字（タグごとではなく）。チャンネル名：100文字。チャンネル説明：1,000文字。再生リストのタイトル：150文字。再生リストの説明：5,000文字。コメント：10,000文字。タグは以前ほどSEOに重要ではありませんが、YouTubeがコンテンツを理解するのに役立ちます。"
      },
      {
        heading: "ショートとコミュニティ投稿",
        body: "YouTubeショートのタイトルも同じ100文字の制限があります。コミュニティ投稿は最大5,000文字です。コミュニティ投稿のアンケート選択肢：各65文字。ショートの説明文は5,000文字に対応していますが、視聴者に見られることはほとんどありません。"
      },
      {
        heading: "YouTubeテキストの最適化",
        body: "PostLenを使って、表示範囲内に収まるタイトルを作成しましょう。タイトルの最初の60文字にメインキーワードを含めましょう。説明文はタイムスタンプ、リンク、関連情報を最初の200文字以内に配置して構成しましょう。SEO対策として説明文は最低250ワード以上書きましょう。"
      }
    ]
  },
  {
    slug: "tiktok-character-limits",
    lang: "en",
    title: "TikTok Character Limits 2026: Captions, Bio & Comments",
    description: "Complete guide to TikTok character limits for video captions, bio, comments, and username.",
    date: "2026-07-02",
    sections: [
      {
        heading: "TikTok Caption Character Limit",
        body: "TikTok video captions can be up to 4,000 characters. This is a significant increase from the original 150-character limit. The expanded limit allows creators to add detailed descriptions, context, keywords, and hashtags to improve discoverability."
      },
      {
        heading: "Profile and Bio Limits",
        body: "Bio: 80 characters. Username: 24 characters. Display Name: 30 characters. TikTok has one of the shortest bio limits among major platforms, requiring you to be extremely concise about who you are and what content you create."
      },
      {
        heading: "Comments and Messages",
        body: "Comments: 150 characters. Direct Messages: 500 characters. These short limits keep interactions quick and conversational, matching TikTok's fast-paced nature."
      },
      {
        heading: "Hashtags on TikTok",
        body: "Hashtags count toward your caption's character limit. There's no official limit on the number of hashtags, but 3-5 relevant ones perform best. The #FYP and #ForYouPage hashtags are widely used but their effectiveness is debated. Focus on niche, relevant hashtags for better targeting."
      },
      {
        heading: "Optimizing TikTok Text",
        body: "Use the first line of your caption as a hook — it's what viewers see without tapping \"more.\" Include relevant keywords for TikTok's search functionality. Keep hashtags relevant and specific. Use PostLen to count characters and preview your caption before posting to ensure it looks exactly how you want."
      }
    ]
  },
  {
    slug: "tiktok-character-limits",
    lang: "ja",
    title: "TikTok文字数制限 2026：キャプション・プロフィール・コメント完全ガイド",
    description: "TikTokの動画キャプション、プロフィール、コメント、ユーザーネームの文字数制限を徹底解説。",
    date: "2026-07-02",
    sections: [
      {
        heading: "TikTokキャプションの文字数制限",
        body: "TikTokの動画キャプションは最大4,000文字まで入力できます。これは当初の150文字制限から大幅に増加しました。拡大された制限により、クリエイターは詳細な説明、文脈、キーワード、ハッシュタグを追加して発見可能性を向上させることができます。"
      },
      {
        heading: "プロフィールの制限",
        body: "自己紹介：80文字。ユーザーネーム：24文字。表示名：30文字。TikTokは主要なプラットフォームの中で最も短い自己紹介制限を持っており、自分が誰で何のコンテンツを作っているかを極めて簡潔に伝える必要があります。"
      },
      {
        heading: "コメントとメッセージ",
        body: "コメント：150文字。ダイレクトメッセージ：500文字。これらの短い制限により、やりとりは素早くカジュアルに保たれ、TikTokのテンポの速い性質に合っています。"
      },
      {
        heading: "TikTokでのハッシュタグ",
        body: "ハッシュタグはキャプションの文字数制限に含まれます。ハッシュタグの数に公式な制限はありませんが、関連性の高い3〜5個が最も効果的です。#FYPや#おすすめなどのハッシュタグは広く使われていますが、その効果については議論があります。より良いターゲティングのために、ニッチで関連性の高いハッシュタグに注力しましょう。"
      },
      {
        heading: "TikTokテキストの最適化",
        body: "キャプションの最初の行をフックとして使いましょう。「もっと見る」をタップしなくても見える部分です。TikTokの検索機能のために関連キーワードを含めましょう。ハッシュタグは関連性が高く具体的なものにしましょう。PostLenを使って文字数をカウントし、投稿前にキャプションをプレビューして、意図通りの見た目になっているか確認しましょう。"
      }
    ]
  },
  {
    slug: "how-to-use-postlen",
    lang: "en",
    title: "How to Use PostLen: Free SNS Character Counter Guide",
    description: "Learn how to use PostLen to count characters, preview posts, and optimize your social media content across all major platforms.",
    date: "2026-07-02",
    sections: [
      {
        heading: "What Is PostLen?",
        body: "PostLen is a free, browser-based character counter and post preview tool for social media. It supports X (Twitter), Instagram, LinkedIn, Threads, YouTube, TikTok, and meta descriptions. Everything runs in your browser — your text is never sent to any server, making it completely private."
      },
      {
        heading: "Counting Characters",
        body: "Simply type or paste your text into the main text area. PostLen instantly shows you the character count for each supported platform. Each platform card displays your current count versus the maximum allowed. The progress bar changes color as you approach the limit: green when you're well within limits, yellow as you get close, and red when you exceed it."
      },
      {
        heading: "Live Preview",
        body: "Click any platform card to see a live preview of how your post will appear on that platform. The preview mimics the actual look and feel of each platform, including profile picture placement, username display, and text formatting. This helps you catch formatting issues before you post."
      },
      {
        heading: "Media Upload and Preview",
        body: "PostLen supports image and video uploads to preview how media will appear with your post. You can upload up to 4 images or 1 video. The preview shows the media layout as it would appear on the selected platform. All media processing happens in your browser — files are never uploaded to any server."
      },
      {
        heading: "Tips for Getting the Most Out of PostLen",
        body: "Use PostLen before every important social media post. Draft your content in PostLen, check character counts across all platforms if you're cross-posting, and use the preview to verify formatting. Switch between languages using the language toggle in the header. Bookmark postlen.app for quick access whenever you need to check character counts."
      }
    ]
  },
  {
    slug: "how-to-use-postlen",
    lang: "ja",
    title: "PostLenの使い方：無料SNS文字数カウンター完全ガイド",
    description: "PostLenを使って文字数をカウントし、投稿をプレビューし、すべての主要プラットフォームでSNSコンテンツを最適化する方法を解説。",
    date: "2026-07-02",
    sections: [
      {
        heading: "PostLenとは？",
        body: "PostLenは、SNS向けの無料ブラウザベースの文字数カウンター＆投稿プレビューツールです。X（Twitter）、Instagram、LinkedIn、Threads、YouTube、TikTok、メタディスクリプションに対応しています。すべてブラウザ内で動作し、テキストがサーバーに送信されることはないため、完全にプライベートです。"
      },
      {
        heading: "文字数のカウント方法",
        body: "メインのテキストエリアにテキストを入力またはペーストするだけです。PostLenは対応する各プラットフォームの文字数を即座に表示します。各プラットフォームカードには、現在の文字数と最大許容文字数が表示されます。プログレスバーは制限に近づくにつれて色が変わります：制限内では緑、近づくと黄色、超過すると赤になります。"
      },
      {
        heading: "ライブプレビュー",
        body: "任意のプラットフォームカードをクリックすると、そのプラットフォームで投稿がどのように表示されるかのライブプレビューが表示されます。プレビューは各プラットフォームの実際の見た目を再現し、プロフィール画像の配置、ユーザーネームの表示、テキストのフォーマットを含みます。投稿前にフォーマットの問題を発見するのに役立ちます。"
      },
      {
        heading: "メディアのアップロードとプレビュー",
        body: "PostLenは画像と動画のアップロードに対応しており、投稿と一緒にメディアがどのように表示されるかをプレビューできます。最大4枚の画像または1本の動画をアップロードできます。プレビューは選択したプラットフォームでのメディアレイアウトを表示します。すべてのメディア処理はブラウザ内で行われ、ファイルがサーバーにアップロードされることはありません。"
      },
      {
        heading: "PostLenを最大限活用するコツ",
        body: "重要なSNS投稿の前に毎回PostLenを使いましょう。PostLenでコンテンツを下書きし、クロスポストする場合はすべてのプラットフォームの文字数を確認し、プレビューでフォーマットを検証しましょう。ヘッダーの言語切り替えを使って言語を変更できます。文字数を確認する必要がある時にすぐアクセスできるよう、postlen.appをブックマークしておきましょう。"
      }
    ]
  },
  {
    slug: "meta-description-character-limit",
    lang: "en",
    title: "Meta Description Character Limit 2026: SEO Best Practices",
    description: "Guide to meta description character limits, SEO best practices, and how to write descriptions that improve click-through rates.",
    date: "2026-07-02",
    sections: [
      {
        heading: "What Is the Meta Description Limit?",
        body: "Meta descriptions should be between 150-160 characters. Google typically truncates descriptions at around 155-160 characters on desktop and 120 characters on mobile. While there's no hard technical limit, keeping your description within this range ensures it displays fully in search results."
      },
      {
        heading: "Why Meta Descriptions Matter for SEO",
        body: "Meta descriptions don't directly affect search rankings, but they significantly impact click-through rates (CTR). A well-written meta description acts as an ad for your page in search results. Higher CTR signals to Google that your page is relevant, which can indirectly improve rankings."
      },
      {
        heading: "How to Write Effective Meta Descriptions",
        body: "Include your target keyword naturally. Write a compelling value proposition. Include a call-to-action (\"Learn more\", \"Get started\", \"Try free\"). Make each description unique — avoid duplicates across pages. Match the description to the page content accurately."
      },
      {
        heading: "Common Meta Description Mistakes",
        body: "Too short (under 100 characters) — wastes valuable SERP real estate. Too long (over 160 characters) — gets truncated with \"...\". Keyword stuffing — looks spammy and reduces CTR. Duplicate descriptions across multiple pages. Not including one at all — Google will auto-generate one, which is often suboptimal."
      },
      {
        heading: "Using PostLen for Meta Descriptions",
        body: "PostLen includes a dedicated Meta Description counter with a 160-character limit. Type your description and see exactly how many characters you're using. The color-coded progress bar helps you stay within the optimal range. Use this to craft perfectly-sized meta descriptions for every page on your site."
      }
    ]
  },
  {
    slug: "meta-description-character-limit",
    lang: "ja",
    title: "メタディスクリプション文字数制限 2026：SEOベストプラクティス",
    description: "メタディスクリプションの文字数制限、SEOのベストプラクティス、クリック率を向上させる説明文の書き方を解説。",
    date: "2026-07-02",
    sections: [
      {
        heading: "メタディスクリプションの文字数制限とは？",
        body: "メタディスクリプションは150〜160文字の間にすべきです。Googleは通常、デスクトップでは約155〜160文字、モバイルでは120文字前後で説明文を切り捨てます。技術的なハードリミットはありませんが、この範囲内に収めることで検索結果に完全に表示されます。日本語の場合は全角文字のため、約70〜80文字が目安となります。"
      },
      {
        heading: "メタディスクリプションがSEOに重要な理由",
        body: "メタディスクリプションは検索順位に直接影響しませんが、クリック率（CTR）に大きく影響します。よく書かれたメタディスクリプションは、検索結果でのページの広告として機能します。CTRが高いとGoogleにページの関連性が高いことを示し、間接的に順位向上につながる可能性があります。"
      },
      {
        heading: "効果的なメタディスクリプションの書き方",
        body: "ターゲットキーワードを自然に含めましょう。魅力的な価値提案を書きましょう。行動を促すフレーズを含めましょう（「詳しくはこちら」「今すぐ始める」「無料で試す」）。各ページのメタディスクリプションをユニークにし、重複を避けましょう。ページの内容に正確に一致させましょう。"
      },
      {
        heading: "よくあるメタディスクリプションの間違い",
        body: "短すぎる（100文字未満）— 検索結果の貴重なスペースを無駄にします。長すぎる（160文字超）—「...」で切り捨てられます。キーワードの詰め込み — スパムに見え、CTRが低下します。複数のページで同じメタディスクリプションを使用。メタディスクリプションを設定しない — Googleが自動生成しますが、最適ではないことが多いです。"
      },
      {
        heading: "PostLenでメタディスクリプションを作成",
        body: "PostLenにはメタディスクリプション専用の160文字制限カウンターが含まれています。メタディスクリプションを入力して、正確な文字数を確認できます。色分けされたプログレスバーで最適な範囲内に収まっているか一目で分かります。サイトの各ページに最適なサイズのメタディスクリプションを作成するために活用してください。"
      }
    ]
  },
  {
    slug: "social-media-character-limits-comparison",
    lang: "en",
    title: "Social Media Character Limits Comparison 2026: All Platforms",
    description: "Side-by-side comparison of character limits across X, Instagram, LinkedIn, Threads, YouTube, TikTok, and more.",
    date: "2026-07-02",
    sections: [
      {
        heading: "Post/Caption Limits at a Glance",
        body: "X (Twitter): 280 characters (25,000 for Premium). Instagram: 2,200 characters. LinkedIn: 3,000 characters. Threads: 500 characters. YouTube Description: 5,000 characters. TikTok: 4,000 characters. Facebook: 63,206 characters. Each platform has a different philosophy about content length, from X's brevity to Facebook's essentially unlimited text."
      },
      {
        heading: "Bio/Profile Limits Compared",
        body: "X Bio: 160 characters. Instagram Bio: 150 characters. LinkedIn Headline: 220 characters. Threads Bio: 150 characters (shared with Instagram). YouTube Channel Description: 1,000 characters. TikTok Bio: 80 characters. TikTok has the shortest bio limit, while LinkedIn offers the most space for professional descriptions."
      },
      {
        heading: "How Different Platforms Count Characters",
        body: "Not all platforms count characters the same way. X counts CJK characters as 2 and always counts URLs as 23 characters. Instagram and Threads count most characters as 1. LinkedIn counts all characters equally. Understanding these differences is crucial for cross-platform posting."
      },
      {
        heading: "Visible Text vs. Total Limit",
        body: "Most platforms show only a preview of longer posts. X: Full 280 visible. Instagram: First 125 characters visible in feed. LinkedIn: First 140 characters visible before \"see more\". YouTube: First 150-200 characters of description visible. The visible portion is what drives engagement — optimize for it."
      },
      {
        heading: "Cross-Platform Posting Strategy",
        body: "When cross-posting, don't just copy the same text everywhere. Tailor your message to each platform's limit and audience. Use PostLen to check all platform limits simultaneously — type once and see how your text fits across every platform. Focus on platforms where your target audience is most active."
      }
    ]
  },
  {
    slug: "social-media-character-limits-comparison",
    lang: "ja",
    title: "SNS文字数制限比較 2026：全プラットフォーム一覧",
    description: "X、Instagram、LinkedIn、Threads、YouTube、TikTokなど主要SNSの文字数制限を一覧比較。",
    date: "2026-07-02",
    sections: [
      {
        heading: "投稿/キャプションの文字数制限一覧",
        body: "X（Twitter）：280文字（プレミアムは25,000文字）。Instagram：2,200文字。LinkedIn：3,000文字。Threads：500文字。YouTube説明文：5,000文字。TikTok：4,000文字。Facebook：63,206文字。各プラットフォームはコンテンツの長さについて異なる考え方を持っており、Xの簡潔さからFacebookのほぼ無制限のテキストまで様々です。"
      },
      {
        heading: "プロフィールの文字数制限比較",
        body: "Xプロフィール：160文字。Instagramプロフィール：150文字。LinkedInヘッドライン：220文字。Threadsプロフィール：150文字（Instagramと共有）。YouTubeチャンネル説明：1,000文字。TikTokプロフィール：80文字。TikTokが最も短い制限を持ち、LinkedInはプロフェッショナルな説明に最も多くのスペースを提供しています。"
      },
      {
        heading: "プラットフォーム別の文字カウント方法",
        body: "すべてのプラットフォームが同じ方法で文字をカウントするわけではありません。XはCJK文字を2文字としてカウントし、URLは常に23文字としてカウントします。InstagramとThreadsはほとんどの文字を1文字としてカウントします。LinkedInはすべての文字を均等にカウントします。クロスプラットフォーム投稿にはこれらの違いを理解することが重要です。"
      },
      {
        heading: "表示されるテキスト vs. 総制限",
        body: "ほとんどのプラットフォームは長い投稿のプレビューのみを表示します。X：280文字が完全に表示。Instagram：フィードでは最初の125文字が表示。LinkedIn：「もっと見る」の前に最初の140文字が表示。YouTube：説明文の最初の150〜200文字が表示。表示される部分がエンゲージメントを左右するため、ここを最適化しましょう。"
      },
      {
        heading: "クロスプラットフォーム投稿戦略",
        body: "クロスポストする際は、同じテキストをそのままコピーするのではなく、各プラットフォームの制限とオーディエンスに合わせてメッセージを調整しましょう。PostLenを使えば、一度入力するだけですべてのプラットフォームの制限を同時に確認できます。ターゲットオーディエンスが最もアクティブなプラットフォームに集中しましょう。"
      }
    ]
  }
];

export function getArticlesByLang(lang: string): Article[] {
  return articles.filter((a) => a.lang === lang);
}

export function getArticle(slug: string, lang: string): Article | undefined {
  return articles.find((a) => a.slug === slug && a.lang === lang);
}

export function getAllArticleSlugs(): { slug: string; lang: string }[] {
  return articles.map((a) => ({ slug: a.slug, lang: a.lang }));
}
