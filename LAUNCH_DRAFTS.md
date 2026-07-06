# PostLen ローンチ告知 下書き

AdSense審査通過後に投稿する。審査待ちの間は下書きを寝かせておき、通過したタイミングで日付・リンクだけ確認して投稿する。

---

## Product Hunt（英語）

**Tagline (60字以内)**
Free SNS character counter with live preview for every platform

**Description**
PostLen counts characters for X, Instagram, LinkedIn, Threads, YouTube, TikTok, and meta descriptions — with a live preview so you see exactly how your post will look before you hit publish.

No sign-up. No servers. Everything runs in your browser, so your drafts never leave your device.

Built because I kept switching between five different counter tools and none of them showed a preview. X's own weighted counting (URLs = 23 chars, CJK = 2 chars) is also easy to get wrong by hand, so PostLen replicates it exactly.

**First comment (投稿者コメント)**
Hey PH! Built this as a solo side project. It's a completely static site — no backend, no tracking beyond anonymous analytics (opt-in), no account needed. Would love feedback on which platforms to add next (Bluesky? Mastodon?).

---

## Zenn（日本語、技術記事風）

**タイトル案**
個人開発でSNS文字数カウンターを作って公開した話（Next.js + Cloudflare Pages）

**構成メモ**
1. 作った経緯: 投稿前に文字数を確認するのに複数ツールを行き来していた面倒さ
2. 機能: X/Instagram/LinkedIn/Threads/YouTube/TikTok/meta descriptionに対応、プレビュー付き
3. 技術選定: Next.js静的エクスポート + Cloudflare Pages（ランニングコスト¥0)
4. つまずいた点: Vercel Hobbyプランの商用利用禁止規定でCloudflareへ移行した話、force-staticの罠
5. Xの文字数カウント仕様（URL=23文字固定、CJK=2文字）の実装
6. 今後: 対応プラットフォーム追加、フィードバック募集
7. リンク: https://postlen.app

技術記事として書くことで「宣伝臭さ」を薄める。Zennは自己プロモーションに比較的寛容だが、学び・実装の話を前面に出す。

---

## Reddit

投稿先候補: r/SideProject, r/InternetIsBeautiful, r/socialmedia
（r/socialmediaは業者っぽい投稿に厳しいので反応を見て判断）

**r/SideProject 用**

タイトル: I built a free character counter that shows a live preview for X, Instagram, LinkedIn, Threads, YouTube & TikTok

本文:
Kept losing track of character limits across platforms, especially X's weird counting rules (URLs always count as 23 chars, CJK characters count as 2). Built PostLen to solve it for myself, decided to make it public.

Everything runs client-side — no account, no data sent anywhere. Would appreciate any feedback, especially on which platform to add next.

https://postlen.app

---

## 投稿順序・タイミングの推奨

1. AdSense承認を確認
2. Zenn記事を先に出す（技術コミュニティは寛容、フィードバックで細かいバグを拾える）
3. 2〜3日様子を見てProduct Huntへ（時差を考えて米国朝〜昼にあたる日本時間で予約投稿）
4. Redditはr/SideProjectから。反応が良ければ他のサブへ展開
5. 各投稿はGA4で流入元を計測し、どのチャネルが実際のリピート利用に繋がったか記録しておく（次作の告知戦略にフィードバック）
