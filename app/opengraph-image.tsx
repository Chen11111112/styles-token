import { ImageResponse } from "next/og";
import { colorsOf, styles } from "@/lib/styles";

export const alt = "Styles Token — Copy design tokens in any style";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 預設字型不含中文，所以分享圖使用英文文字
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0a0a0a",
          color: "#ededed",
        }}
      >
        <div style={{ fontSize: 28, color: "#888" }}>styles-token</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>
            Copy design tokens
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>
            in any style.
          </div>
          <div style={{ fontSize: 30, color: "#a1a1a1", marginTop: 24 }}>
            SCSS · CSS variables · JSON · Reset CSS
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {styles.map((s) => (
            <div
              key={s.slug}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 18px",
                borderRadius: 999,
                border: "1px solid #333",
                fontSize: 22,
              }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 999,
                  background: colorsOf(s).primary,
                  border: "1px solid #555",
                }}
              />
              {s.name}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
