# PostLen ローンチ告知

2026-07-22 改訂。7/6版は製品の実態と乖離していたため全面差し替え。

**投稿は本人が行う。** 以下は、そのままコピーして投稿できる完成文面。

---

## 訴求の前提（重要）

7/6版は「8プラットフォーム同時カウント」「ブラウザ内完結」「Xの重み付けカウント」の3点を
差別化として書いていた。**競合の socialcal.app が同じ3点をすでに前面に訴求しており、
しかも9プラットフォーム対応で数では負けている。** そのまま出すと「後発の同じ主張」になる。

同時カウントは差別化ではなく参加資格として扱う。裏が取れている訴求は次の2点のみ。

1. **日本語UIと日本語記事9本。** 主要競合は英語のみ。Xの重み付けは日本語話者にとって
   「280と書いてあるのに140しか入らない」という最も痛い形で現れる。
2. **画像・動画を載せた実機風プレビュー。** socialcal はテキストベースのみでメディア添付なし。
   PostLen は X の1〜4枚グリッド、Instagram のカルーセル、LinkedIn/Threads のレイアウトを再現。

**書いてはいけないこと**
- 「唯一」「最も正確」などの比較優位
- 「replicates X's counting exactly」— 後述の既知の非互換があるため
- 「no tracking」— AdSense と GA4 を入れている
- 「every platform にプレビュー」— 専用プレビューは X/Instagram/LinkedIn/Threads の4つのみ。
  YouTube・TikTok・メタディスクリプションは汎用枠

## 既知の非互換（聞かれたら正直に答える）

twitter-text と挙動が分かれる点が3つ残っている。Reddit や HN では試されるので先に自分から書く。

1. スキームなしURL（`example.com`）を23単位として扱わない。`https?://` のみ検出
2. NFC正規化をしていないため、結合文字（`e` + 濁点類）が2単位になる
3. t.co の長さ23をハードコードしており、X側の変更に自動追随しない

---

## 1. X（本人アカウント・日本語）— 最初

```
SNSの文字数カウンター作りました。1つの下書きをX/Instagram/LinkedIn/Threads/YouTube/TikTok/メタディスクリプションの8枠に同時に通して、それぞれの見た目をプレビューします。画像4枚と動画も載せられます。登録不要・無料。
https://postlen.app/ja
```

```
作った理由：Xは「280文字」と書いてありますが日本語は1文字2単位なので実際は約140字です。URLは長さに関係なく一律23単位。ここを間違えたまま書き上げて貼り付けたら弾かれる、というのを何度もやりました。
```

```
実装で一番ハマったのがまさにそこで、1単位として扱うUnicodeの範囲をU+04FFで止めていて、ヘブライ語・アラビア語・タイ語・デーヴァナーガリー、それにem dashや引用符まで2単位で数えていました。twitter-textの仕様はU+10FFまで。日本語だけ見ていたら気づけなかった。
```

```
「12ヶ月で12プロダクト」の1本目です。感想やバグ報告をもらえると嬉しいです。次はBlueskyかMastodonを足すか迷っています。
```

## 2. Zenn（日本語・技術記事）— Xと同日

宣伝記事ではなく、記事単体で読む価値がある技術記事にする。軸は Unicode 範囲のバグ一本。
ツール紹介は末尾3〜4行のみ。

**タイトル案（強い順）**
1. Xの文字数カウントを自作したら、アラビア語とem dashを2文字で数えていた話
2. twitter-textの重み付けカウントを実装して踏んだ罠（U+04FFとU+10FF）
3. 個人開発でSNS文字数カウンターを作って公開した（Next.js 16 + Cloudflare Pages）

**冒頭**

```
SNSの文字数カウンターを作って公開しました。その過程で、X（Twitter）の文字数カウント実装に
自分で入れたバグの話を書きます。日本語だけをテストしていると絶対に見つからない種類のバグでした。

## Xの文字数は「文字数」ではない

Xは1文字を1文字として数えません。twitter-text という公開仕様に基づく「重み付けカウント」を
採用していて、要点は3つです。

- U+0000〜U+10FF の文字は1単位
- それより上（日本語・中国語・韓国語・絵文字）は2単位
- URLは実際の長さに関係なく一律23単位（すべてt.co経由に書き換えられるため）

だから日本語の実質上限は280字ではなく約140字になります。
```

**構成**
1. 上記の導入
2. 最初の実装（`X_SINGLE_WEIGHT_RANGES` の先頭を `[0x0000, 0x04ff]` にしていた）
3. 何が壊れていたか — ヘブライ語・アラビア語・タイ語・デーヴァナーガリー・グルジア語、
   および em dash と曲線引用符が2単位に。ASCIIと日本語しかテストせず、両方とも
   正解を返してしまうため気づけなかった
4. 正しい仕様値 `[0x0000,0x10ff] [0x2000,0x200d] [0x2010,0x201f] [0x2032,0x2037]` と、
   なぜ一般句読点・ダッシュ・プライム記号だけが飛び地で1単位なのか
5. **今も残っている非互換3つ**（上記）— ここが記事の信頼性を決める
6. 上限そのものが動く話 — Instagram のハッシュタグが2025年12月に30→5、
   YouTube を15と誤記していて公式の60に訂正。「上限を定数で持つツールは書いた時点で腐り始める」
7. 技術構成 — Next.js 16 静的エクスポート + Cloudflare Pages、Vercel Hobby の商用利用規約で
   移行した経緯、`force-static` の罠
8. ツール紹介3〜4行 + https://postlen.app/ja

## 3. Reddit r/SideProject（英語）— Day 7 前後

規範: 動くURL必須、サインアップの壁は不可、何を作り何故作り何のフィードバックが欲しいかを書く、
短期の再投稿はスパム扱い、全コメントに返信。投稿後3時間は返信できる時間を確保する。

**タイトル**
```
I built a character counter that shows your post with the images attached, not just the count
```

**本文**
```
There are a lot of character counters already, so I want to be upfront about why I made another one.

Two things kept annoying me. First, I write in Japanese, and X counts Japanese characters as 2 units,
so the real limit is about 140, not 280. URLs are always 23 units no matter how long they are.
Most counters I found just count raw characters and tell me I have room when I don't.

Second, the number alone never told me what I wanted to know. I wanted to see the post - with the
photos in it - the way it will actually sit in the feed.

So PostLen counts one draft against 8 things at once (X, Instagram, LinkedIn, Threads, YouTube title,
YouTube description, TikTok, and SEO meta description), and you can drop in up to 4 images or a video
and see them laid out the way X, Instagram, LinkedIn and Threads lay them out. The other three
platforms get a plain preview for now.

No account, and the text stays in your browser - there is no backend that could receive it.
It's free and there are ads on it, that's the plan for keeping it up.

https://postlen.app

One thing I got wrong and had to fix: I implemented X's weighted counting but capped the "counts as 1"
Unicode range at U+04FF instead of U+10FF. That meant Hebrew, Arabic, Thai, Devanagari and Georgian
were all counted as 2 units each, and so were em dashes and curly quotes. I only tested English and
Japanese, and both of those happened to give the right answer, so I never saw it.

I'm a university student in Japan and this is the first of 12 projects I want to ship this year.
What I'd most like feedback on: is the preview actually useful to you, or do you only care about the
number? And which platform should I add next - I'm thinking Bluesky.
```

## 4. Show HN（英語・任意）— Day 14 前後

このジャンルは HN では手垢がついている。出すなら Unicode 実装の話を前面に。1回のみ。

**タイトル**
```
Show HN: PostLen – Character counter that implements X's weighted counting rules
```

**投稿者コメント（投稿直後に自分で付ける）**
```
I made this because I write in Japanese and X's weighted counting bites constantly: CJK is 2 units,
so 280 is really ~140, and every URL is a flat 23 because of t.co.

The part I got wrong for a while, in case it's useful to anyone implementing this: twitter-text's
weight-1 set is U+0000-U+10FF plus three small islands (U+2000-U+200D, U+2010-U+201F, U+2032-U+2037).
I had capped the first range at U+04FF, which quietly made Hebrew, Arabic, Thai, Devanagari and
Georgian cost 2 units each - and em dashes and curly quotes too. English and Japanese both happen
to give correct answers with the wrong range, and those were the only two I tested.

Known gaps vs. the real spec, which I'd rather state than have someone find: I only detect URLs with
an explicit http(s) scheme, so a bare "example.com" isn't charged 23; I don't NFC-normalize before
counting, so decomposed characters cost 2; and the t.co length is hardcoded at 23.

It's static, runs entirely client-side, no account. Ads pay for it. Happy to hear where the counting
is still wrong.

https://postlen.app
```

## 5. Product Hunt（英語）— AdSense承認後・最後

PH は実質やり直しが効かない。製品が最良の状態になってから撃つ。

**Tagline（57字）**
```
Count one draft against 8 social platforms, with previews
```

**Description（251字）**
```
Paste your draft once. PostLen counts it for X, Instagram, LinkedIn, Threads, YouTube (title and description), TikTok and meta descriptions at once, and shows a preview of each — including your images or video. No account, nothing leaves your browser.
```

**First comment**
```
Hi PH. I'm a university student in Japan and this is my first launch.

Two things made me build it. X counts Japanese characters as 2 units, so the real limit there is about
140 and not 280, and every URL costs a flat 23 regardless of length - I kept writing drafts that looked
fine and weren't. And I wanted to see the post with its photos in it, not just a number, so the preview
lays images out the way X, Instagram, LinkedIn and Threads actually lay them out (up to 4 images or one
video). YouTube, TikTok and meta descriptions get a simpler preview for now.

Everything is in English and Japanese, tool and articles both. That was the main reason to build another
one of these - the good English tools don't help someone writing in Japanese understand why their
post won't fit.

It's free, runs entirely in the browser with no account, and is funded by ads.

Two things I'd genuinely like input on: which platform to add next (Bluesky is top of my list), and
whether showing where each platform truncates in the feed would be worth building.
```

## 見送る投稿先

| 投稿先 | 理由 |
|---|---|
| r/InternetIsBeautiful | 新規性を評価する板。このジャンルでは通らない |
| r/socialmedia, r/marketing | 初投稿者のツールリンクは業者判定されやすく、アカウント評価が下がる |
| Qiita | Zennとの二重投稿は最も嫌われる形。Zenn一本に |
| r/webdev | 自作品は Showoff Saturday 限定の運用。出すなら現行ルールを再確認してから |
| はてなブックマーク | Zenn記事が伸びれば自然に乗る。自分で操作しない |

---

## 順序と時期

**AdSense承認を待つのは Product Hunt だけ。他は先に出す。**

不承認理由は「有用性の低いコンテンツ」であり、Googleの審査基準にトラフィック量の要件はない。
流入を止めても承認は早まらない一方、待つ間に失うのはフィードバックと初期ユーザー。
この規模での広告収益は月数百円のオーダーで、告知を数週間止めて守る金額ではない。
審査期間はむしろ、外部の指摘を製品に反映する時間として使う。

| # | 時期 | 投稿先 |
|---|---|---|
| 0 | 告知前 | 空の広告枠が出ていないか本番で目視。OGカードが新画像を拾うかX Card Validatorで確認 |
| 1 | Day 0 火〜木 09:00 JST | X（本人アカウント） |
| 2 | Day 0 火〜木 09:00 JST | Zenn記事 |
| 3 | Day 7 前後 火〜木 21:00〜23:00 JST | r/SideProject（米東部の朝8〜10時） |
| 4 | Day 14 前後 火〜木 22:00 JST | Show HN（任意。Redditから1週間以上空ける） |
| 5 | AdSense承認後 火〜木 16:01 JST | Product Hunt（PHのデイは00:01 PT開始） |

---

## 想定質問と回答

**他の文字数カウンターと何が違う？**
> They do the counting well. Two things I have that they don't: it's fully bilingual EN/JA including
> the articles, and you can drop your actual images or video into the preview and see the layout.
> If you only need the number, honestly their tool is fine — socialcal covers 9 platforms and I cover 8.

優位性を捏造しない。この答え方は Reddit と HN では加点される。

**なぜ Bluesky / Facebook / Mastodon がない？**
> Not built yet. Bluesky is next.

予定を盛らない。

**広告があるのにプライバシー訴求は矛盾では？**（最も来やすい）
> Two different things, and I should be precise: your draft text never leaves the browser, there's no
> backend that could receive it. But the page does load Google AdSense and Google Analytics, and those
> set cookies if you accept the banner. Declining the banner blocks analytics.

「no tracking」とは絶対に書かない。

**カウントがXの実際と合わない**
既知の非互換3つに該当すればそれを示す。該当しなければ
「That's a real bug, thank you — what was the exact string?」と受ける。
24時間以内に直して報告するとスレッドが好転する。

**AIに作らせただけでは？**
> I used AI while building it, yes. The Unicode range bug I described is mine and I found it by
> reading the twitter-text spec.

隠さない。否定するより実装の細部を語る方が効く。

## 荒れた場合

- 「またカウンターか」系: 反論しない。1回だけ差分を置いて沈黙。連投が最悪手
- モデレーターに削除された: 抗議せずルールを読み直す。同じsubへ再投稿しない
- 技術的な誤りを指摘された: 即座に認め、修正コミットのリンクを貼る。最も評価される振る舞い
- 人格攻撃・国籍や英語への言及: 返信しない。ブロックして次へ

---

## 効果測定

**0〜24時間** — GA4のリアルタイムと参照元。UTMを付ける
（`?utm_source=zenn&utm_medium=post&utm_campaign=launch`）。
ただし **Reddit と HN は UTM付きURLを嫌うので素のURL**にし、参照元ドメインで判別する。
各投稿のコメント数（1週間後の残存トラフィックを最もよく予測する）。

**7日後** — 媒体別のセッション / 直帰率 / 平均エンゲージメント時間。
滞在時間が短い媒体は次作で使わない。`/ja` と `/en` の比率で日本語訴求の当否を検証。
どのブログ記事に外部から着地したか。

**30日後** — Search Console で被リンクと掲載順位の変化。個人開発ツールで長期に効くのはこれだけ。
直接流入（リピート）の絶対数。AdSenseの承認状況とRPM。
**次作への申し送りを1ページ書く** — どの媒体が滞在時間の長いユーザーを連れてきたか、
どの1文に反応があったか。12プロダクト戦略ではこの記録の複利が本体。
