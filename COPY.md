# サイト文言の編集場所

「この文字を変えたい」と思ったときに、どのファイルを開けばいいかの一覧。

## 大前提

**日本語と英語は必ずペアで直す。** どちらか片方だけ直すと、言語を切り替えたときに
古い文言が残る。ファイルは分かれている場合と、同じファイル内に並んでいる場合がある。

**変更後は必ずビルドを通す。** `npx next build` が通らなければ本番に反映されない。
JSON の閉じ忘れやカンマの付け忘れが最も多い原因。

---

## 1. UI の文言（ボタン・ラベル・プレースホルダ）

| ファイル |
|---|
| `src/app/[lang]/dictionaries/ja.json` |
| `src/app/[lang]/dictionaries/en.json` |

**2つのファイルは同じ構造。** 片方を直したら必ずもう片方も直す。

| キー | 対象 |
|---|---|
| `meta.title` / `meta.description` | 検索結果とブラウザタブに出るタイトル・説明 |
| `header.subtitle` | ヘッダー右の小さい文字 |
| `header.heading` | ページ最上部の大見出し（h1） |
| `header.tagline` | 大見出しの下の説明文 |
| `header.badgePrivacy` / `header.badgeAccuracy` | 見出し下の2つのバッジ |
| `editor.placeholder` | テキストエリアの薄い文字 |
| `editor.characters` | 「◯◯ 文字」の単位 |
| `editor.clearAll` | 「すべてクリア」ボタン |
| `editor.label` | 画面に出ない。読み上げ用のラベル |
| `editor.over` | 上限超過時の読み上げ文言 |
| `media.*` | 画像・動画のアップロード欄 |
| `sections.platforms` / `sections.preview` | 「プラットフォーム」「プレビュー」の見出し |
| `preview.*` | プレビュー内のダミー名・ユーザー名・時刻・各プラットフォームのプレースホルダ |
| `extras.hashtags` | カード内の「ハッシュタグ」表記 |
| `footer.text` | フッターの1行 |
| `ads.label` | 広告枠の上の「広告」表記（**AdSense規約上、消さないこと**） |
| `consent.*` | Cookie同意バナー |
| `lang.switch` | 言語切り替えボタン |
| `legal.*` | プライバシーポリシーと利用規約の**全文** |

### JSON を編集するときの注意

- 文字列は必ず `"` で囲む
- 各行の末尾にカンマ。ただし **`}` の直前の行にはカンマを付けない**
- 文中に `"` を書くときは `\"` にする
- 改行を入れたいときは `\n`

---

## 2. トップページの解説と FAQ

| ファイル |
|---|
| `src/content/home.ts` |

**日英が同じファイルに入っている。** 前半が `homeEn`、後半が `homeJa`。

ツールの下に並ぶ「このツールでできること」「対応プラットフォームの文字数制限」
「Xのカウントだけが異なる理由」「入力したテキストはブラウザの外に出ません」と、
その下の「よくある質問」。

構造は3種類のブロックの組み合わせ。

```ts
{ type: "p", text: "段落。" }

{ type: "list", items: ["箇条書き1", "箇条書き2"] }

{ type: "table",
  headers: ["列1", "列2"],
  rows: [["値1", "値2"], ["値3", "値4"]] }
```

`headers` の数と各 `rows` の要素数は必ず一致させる。ずれると表示が崩れる。

---

## 3. ブログ記事

| ファイル |
|---|
| `src/content/articles/x-twitter.ts` |
| `src/content/articles/instagram.ts` |
| `src/content/articles/linkedin.ts` |
| `src/content/articles/threads.ts` |
| `src/content/articles/youtube.ts` |
| `src/content/articles/tiktok.ts` |
| `src/content/articles/meta-description.ts` |
| `src/content/articles/comparison.ts` |
| `src/content/articles/how-to-use.ts` |

**1ファイルに日英の両方が入っている。** 前半が `〜En`、後半が `〜Ja`。

各記事の構成:

```ts
title:       記事タイトル（検索結果に出る）
description: 記事の説明（検索結果に出る。リード文としても表示される）
date:        日付
sections:    本文。home.ts と同じ p / list / table のブロック
faq:         [{ q: "質問", a: "回答" }]  ← 検索結果のリッチリザルト対象
```

記事を増やす場合は、新しいファイルを作ったあと
`src/lib/articles.ts` の import と配列に追加する。それを忘れると表示されない。

---

## 4. SNS シェア時のカード（OG画像）

| ファイル |
|---|
| `src/app/[lang]/opengraph-image.tsx` |

上部の `content` にある `subtitle` が、シェアされたときにカードに出る文言。
`cards` 配列はカードのミニチュアに出るプラットフォーム名とバーの長さ。

画像なので、変更後は `npx next build` してから
`out/ja/opengraph-image` を画像として開いて確認する。

---

## 5. アプリ名（ホーム画面に追加したときの表示）

| ファイル |
|---|
| `src/app/manifest.ts` |

`name` / `short_name` / `description`。日英の切り替えはない。

---

## 6. プラットフォームのカード名と上限

| ファイル |
|---|
| `src/lib/counters.ts` |

カードに出る `name`（"X (Twitter)" など）と `maxLength`（文字数上限）。
**日英共通**なので、ここは1箇所直せばよい。

上限の数値を変えるときは、`src/content/` の記事とトップページにも同じ数字が
書かれているので、両方直す。数字が食い違うと信頼性を損なう。

---

## 7. コード内に直接書かれている文言（注意）

辞書ファイルに入っていない文言が少しある。日英が `?` で並んで書かれている。

| 場所 | 文言 |
|---|---|
| `src/components/PostLenApp.tsx:187` あたり | 「各プラットフォームの詳細はブログで解説しています」 |
| `src/components/PostLenApp.tsx:221` | フッターの「ブログ」 |
| `src/app/[lang]/blog/page.tsx:20` | ブログ一覧のタブタイトル |
| `src/app/[lang]/blog/page.tsx:42` | 「← PostLenに戻る」 |
| `src/app/[lang]/blog/page.tsx:45` | ブログ一覧の見出し「ブログ」 |
| `src/app/[lang]/blog/page.tsx:49` | 「SNS文字数制限のガイドとヒント」 |
| `src/app/[lang]/blog/[slug]/page.tsx:68` | 「← ブログに戻る」 |
| `src/app/[lang]/blog/[slug]/page.tsx:84` | 「よくある質問」 |
| `src/app/[lang]/blog/[slug]/page.tsx:89` | 記事末尾の誘導文 |
| `src/app/[lang]/blog/[slug]/page.tsx:97` | 「PostLenを使ってみる →」 |

書き方はこの形。日本語と英語が1行に並んでいる。

```tsx
{lang === "ja" ? "ブログ" : "Blog"}
```

---

## 確認のしかた

**手元で見る**

```
npm run dev
```

→ http://localhost:3001/ja と /en を開く。保存すると自動で反映される。

**本番に出す前の確認**

```
npx next build
```

エラーが出たら反映されない。メッセージにファイル名と行番号が出る。

**本番へ**

```
git add -A
git commit -m "文言を修正"
git push
```

push すると Cloudflare Pages が自動でデプロイする。反映まで2〜4分ほど。

---

## 触らない方がよいもの

- `ads.label`（「広告」）— AdSense は広告とコンテンツが区別できることを要求している
- 記事とツールの**数値**（文字数上限、ハッシュタグ個数）— 事実なので、変えるなら
  必ず一次情報を確認してから。ここが間違っていると、このサイトの存在意義がなくなる
- `src/content/` 内の `slug` — URL になっている。変えると既存のリンクと検索結果が切れる
