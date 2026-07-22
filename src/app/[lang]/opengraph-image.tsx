import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const content: Record<string, { title: string; subtitle: string }> = {
  en: {
    title: "PostLen",
    subtitle: "One draft. Every platform's limit. Checked at once.",
  },
  ja: {
    title: "PostLen",
    subtitle: "1つの下書きを、全SNSの文字数制限に一度に通す。",
  },
};

// Miniature of the real 8-card grid. Fill ratios are illustrative, chosen so
// the near-limit and over-limit states each appear once.
const cards: { name: string; fill: number; tone: "ok" | "near" | "over" }[] = [
  { name: "X (Twitter)", fill: 0.72, tone: "ok" },
  { name: "Instagram", fill: 0.31, tone: "ok" },
  { name: "LinkedIn", fill: 0.24, tone: "ok" },
  { name: "Threads", fill: 0.94, tone: "near" },
  { name: "YouTube Title", fill: 1, tone: "over" },
  { name: "YouTube Desc", fill: 0.15, tone: "ok" },
  { name: "TikTok", fill: 0.41, tone: "ok" },
  { name: "Meta Description", fill: 0.63, tone: "ok" },
];

const barColor = { ok: "#0f766e", near: "#b45309", over: "#b91c1c" } as const;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ja" }];
}

function Mark() {
  const S = 64 / 32;
  const bars = [
    { y: 7, w: 14 },
    { y: 14, w: 9 },
    { y: 21, w: 17 },
  ];
  return (
    <div style={{ display: "flex", position: "relative", width: 64, height: 64 }}>
      <div
        style={{
          position: "absolute",
          left: 24.5 * S,
          top: 5 * S,
          width: 2 * S,
          height: 22 * S,
          borderRadius: 999,
          background: "#52525b",
        }}
      />
      {bars.map((b) => (
        <div
          key={b.y}
          style={{
            position: "absolute",
            left: 5.5 * S,
            top: b.y * S,
            width: b.w * S,
            height: 4 * S,
            borderRadius: 999,
            background: "#0f766e",
          }}
        />
      ))}
    </div>
  );
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang in content ? rawLang : "en";
  const { title, subtitle } = content[lang];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#f0fdfa",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "56px" }}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "560px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              <Mark />
              <div
                style={{
                  fontSize: 76,
                  fontWeight: 700,
                  color: "#18181b",
                  letterSpacing: "-2.5px",
                }}
              >
                {title}
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                fontSize: 32,
                lineHeight: 1.45,
                color: "#3f3f46",
              }}
            >
              {subtitle}
            </div>
            <div style={{ marginTop: "28px", fontSize: 24, color: "#52525b" }}>
              postlen.app
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "440px",
              gap: "14px",
            }}
          >
            {cards.map((c) => (
              <div
                key={c.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "213px",
                  background: "#ffffff",
                  border: "1px solid #d4d4d8",
                  borderRadius: "12px",
                  padding: "14px 14px 16px",
                }}
              >
                <div style={{ fontSize: 17, color: "#3f3f46" }}>{c.name}</div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "12px",
                    height: "6px",
                    width: "100%",
                    borderRadius: "999px",
                    background: "#e4e4e7",
                  }}
                >
                  <div
                    style={{
                      width: `${c.fill * 100}%`,
                      height: "6px",
                      borderRadius: "999px",
                      background: barColor[c.tone],
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
