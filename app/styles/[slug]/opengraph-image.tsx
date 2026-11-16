import { ImageResponse } from "next/og";
import { colorsOf, getStyle, styles } from "@/lib/styles";

export const alt = "Style design tokens preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return styles.map((s) => ({ slug: s.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const style = getStyle(slug) ?? styles[0];
  const c = colorsOf(style);
  const swatches = ["primary", "accent", "success", "warning", "error"];

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
          background: c.background,
          color: c.foreground,
        }}
      >
        <div style={{ fontSize: 28, color: c.muted }}>
          styles-token / design tokens
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>
            {style.name}
          </div>
          <div style={{ fontSize: 34, color: c.muted, marginTop: 12 }}>
            SCSS · CSS variables · JSON
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              padding: "16px 32px",
              fontSize: 28,
              background: c.primary,
              color: c["primary-foreground"],
              borderRadius: 12,
            }}
          >
            Copy tokens
          </div>
          <div style={{ display: "flex", marginLeft: "auto", gap: 14 }}>
            {swatches.filter((k) => c[k]).map((k) => (
              <div
                key={k}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 999,
                  background: c[k],
                  border: `2px solid ${c.border}`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
