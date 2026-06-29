import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const content: Record<string, { title: string; subtitle: string }> = {
  en: {
    title: "PostLen",
    subtitle: "SNS Character Counter with Live Preview",
  },
  ja: {
    title: "PostLen",
    subtitle: "SNS文字数カウンター（ライブプレビュー付き）",
  },
};

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ja" }];
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #09090b 0%, #18181b 50%, #27272a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: "#fafafa",
              letterSpacing: "-2px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#a1a1aa",
              maxWidth: "800px",
              textAlign: "center",
            }}
          >
            {subtitle}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "48px",
          }}
        >
          {["X", "Instagram", "LinkedIn", "Threads", "YouTube", "TikTok"].map(
            (name) => (
              <div
                key={name}
                style={{
                  padding: "8px 20px",
                  borderRadius: "9999px",
                  border: "1px solid #3f3f46",
                  color: "#d4d4d8",
                  fontSize: 18,
                }}
              >
                {name}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
