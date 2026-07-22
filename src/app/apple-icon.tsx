import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Mirrors icon.svg, which is drawn on a 32px grid.
const S = 180 / 32;
const bars = [
  { y: 7, w: 14 },
  { y: 14, w: 9 },
  { y: 21, w: 17 },
];

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          // iOS masks its own rounded corners, so this tile stays square.
          background: "#0f766e",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 24.5 * S,
            top: 5 * S,
            width: 2 * S,
            height: 22 * S,
            borderRadius: 1 * S,
            background: "#99f6e4",
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
              borderRadius: 2 * S,
              background: "#ffffff",
            }}
          />
        ))}
      </div>
    ),
    { ...size }
  );
}
