export type StyleTokens = {
  colors: Record<string, string>;
  fonts: { sans: string; mono: string };
  fontSizes: Record<string, string>;
  fontWeights: Record<string, number>;
  radii: Record<string, string>;
  spacing: Record<string, string>;
  shadows: Record<string, string>;
  motion: { duration: string; easing: string };
};

export type StyleDefinition = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tokens: StyleTokens;
};

const baseSpacing = {
  "0": "0",
  "1": "4px",
  "2": "8px",
  "3": "12px",
  "4": "16px",
  "5": "24px",
  "6": "32px",
  "7": "48px",
  "8": "64px",
};

export const styles: StyleDefinition[] = [
  {
    slug: "vercel",
    name: "Vercel",
    tagline: "極簡黑白・高對比",
    description:
      "以純黑白為基底、Geist 字體、細緻的 1px 邊框與低調陰影，呈現俐落的開發者工具質感。",
    tokens: {
      colors: {
        background: "#ffffff",
        foreground: "#000000",
        "gray-100": "#f2f2f2",
        "gray-200": "#ebebeb",
        "gray-400": "#a1a1a1",
        "gray-600": "#666666",
        "gray-900": "#171717",
        border: "#eaeaea",
        primary: "#000000",
        "primary-foreground": "#ffffff",
        accent: "#0070f3",
        success: "#0070f3",
        warning: "#f5a623",
        error: "#ee0000",
      },
      fonts: {
        sans: '"Geist", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        mono: '"Geist Mono", "SFMono-Regular", Menlo, monospace',
      },
      fontSizes: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "48px",
      },
      fontWeights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
      radii: { sm: "4px", md: "6px", lg: "8px", xl: "12px", full: "9999px" },
      spacing: baseSpacing,
      shadows: {
        sm: "0 2px 4px rgba(0, 0, 0, 0.1)",
        md: "0 5px 10px rgba(0, 0, 0, 0.12)",
        lg: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      motion: { duration: "150ms", easing: "ease" },
    },
  },
  {
    slug: "stripe",
    name: "Stripe",
    tagline: "漸層紫藍・精緻商務",
    description:
      "深海軍藍文字搭配招牌紫色 Blurple，柔和的大陰影與圓角，適合金融與 SaaS 產品。",
    tokens: {
      colors: {
        background: "#ffffff",
        foreground: "#0a2540",
        "gray-100": "#f6f9fc",
        "gray-200": "#e3e8ee",
        "gray-400": "#adbdcc",
        "gray-600": "#425466",
        "gray-900": "#0a2540",
        border: "#e3e8ee",
        primary: "#635bff",
        "primary-foreground": "#ffffff",
        accent: "#00d4ff",
        success: "#00d924",
        warning: "#ffbb00",
        error: "#df1b41",
      },
      fonts: {
        sans: '"Sohne", "Inter", -apple-system, "Segoe UI", sans-serif',
        mono: '"Source Code Pro", Menlo, monospace',
      },
      fontSizes: {
        xs: "13px",
        sm: "15px",
        base: "17px",
        lg: "20px",
        xl: "26px",
        "2xl": "38px",
        "3xl": "56px",
      },
      fontWeights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
      radii: { sm: "4px", md: "6px", lg: "8px", xl: "16px", full: "9999px" },
      spacing: baseSpacing,
      shadows: {
        sm: "0 2px 5px -1px rgba(50, 50, 93, 0.25), 0 1px 3px -1px rgba(0, 0, 0, 0.3)",
        md: "0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3)",
        lg: "0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3)",
      },
      motion: { duration: "200ms", easing: "cubic-bezier(0.25, 1, 0.5, 1)" },
    },
  },
  {
    slug: "linear",
    name: "Linear",
    tagline: "深色模式・冷靜精準",
    description:
      "深灰背景、紫藍強調色與微光邊框，營造專注、高效率的生產力工具氛圍。",
    tokens: {
      colors: {
        background: "#08090a",
        foreground: "#f7f8f8",
        "gray-100": "#1c1c1f",
        "gray-200": "#23252a",
        "gray-400": "#62666d",
        "gray-600": "#8a8f98",
        "gray-900": "#d0d6e0",
        border: "rgba(255, 255, 255, 0.08)",
        primary: "#5e6ad2",
        "primary-foreground": "#ffffff",
        accent: "#7170ff",
        success: "#4cb782",
        warning: "#f2c94c",
        error: "#eb5757",
      },
      fonts: {
        sans: '"Inter Variable", "Inter", -apple-system, sans-serif',
        mono: '"Berkeley Mono", "JetBrains Mono", monospace',
      },
      fontSizes: {
        xs: "12px",
        sm: "13px",
        base: "15px",
        lg: "17px",
        xl: "21px",
        "2xl": "32px",
        "3xl": "56px",
      },
      fontWeights: { regular: 400, medium: 510, semibold: 590, bold: 680 },
      radii: { sm: "4px", md: "6px", lg: "8px", xl: "12px", full: "9999px" },
      spacing: baseSpacing,
      shadows: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.4)",
        md: "0 4px 24px rgba(0, 0, 0, 0.5)",
        lg: "0 0 0 1px rgba(255, 255, 255, 0.08), 0 24px 48px rgba(0, 0, 0, 0.6)",
      },
      motion: { duration: "160ms", easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
    },
  },
  {
    slug: "github",
    name: "GitHub",
    tagline: "實用清晰・開源社群",
    description:
      "取材自 Primer 設計系統：中性灰階、綠色主要按鈕與藍色連結，資訊密度高且易讀。",
    tokens: {
      colors: {
        background: "#ffffff",
        foreground: "#1f2328",
        "gray-100": "#f6f8fa",
        "gray-200": "#eaeef2",
        "gray-400": "#afb8c1",
        "gray-600": "#656d76",
        "gray-900": "#1f2328",
        border: "#d0d7de",
        primary: "#1f883d",
        "primary-foreground": "#ffffff",
        accent: "#0969da",
        success: "#1a7f37",
        warning: "#9a6700",
        error: "#d1242f",
      },
      fonts: {
        sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
        mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
      },
      fontSizes: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "40px",
      },
      fontWeights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
      radii: { sm: "3px", md: "6px", lg: "8px", xl: "12px", full: "9999px" },
      spacing: baseSpacing,
      shadows: {
        sm: "0 1px 0 rgba(31, 35, 40, 0.04)",
        md: "0 3px 6px rgba(140, 149, 159, 0.15)",
        lg: "0 8px 24px rgba(140, 149, 159, 0.2)",
      },
      motion: { duration: "80ms", easing: "cubic-bezier(0.33, 1, 0.68, 1)" },
    },
  },
  {
    slug: "apple",
    name: "Apple",
    tagline: "留白優雅・系統藍",
    description:
      "大量留白、SF Pro 字體、系統藍強調色與大圓角，帶來柔和親切的質感。",
    tokens: {
      colors: {
        background: "#ffffff",
        foreground: "#1d1d1f",
        "gray-100": "#f5f5f7",
        "gray-200": "#e8e8ed",
        "gray-400": "#aeaeb2",
        "gray-600": "#6e6e73",
        "gray-900": "#1d1d1f",
        border: "#d2d2d7",
        primary: "#0071e3",
        "primary-foreground": "#ffffff",
        accent: "#2997ff",
        success: "#34c759",
        warning: "#ff9f0a",
        error: "#ff3b30",
      },
      fonts: {
        sans: '"SF Pro Text", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
        mono: '"SF Mono", Menlo, monospace',
      },
      fontSizes: {
        xs: "12px",
        sm: "14px",
        base: "17px",
        lg: "21px",
        xl: "28px",
        "2xl": "40px",
        "3xl": "56px",
      },
      fontWeights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
      radii: { sm: "8px", md: "12px", lg: "18px", xl: "28px", full: "9999px" },
      spacing: baseSpacing,
      shadows: {
        sm: "0 2px 8px rgba(0, 0, 0, 0.06)",
        md: "0 4px 16px rgba(0, 0, 0, 0.08)",
        lg: "0 12px 40px rgba(0, 0, 0, 0.12)",
      },
      motion: { duration: "300ms", easing: "cubic-bezier(0.4, 0, 0.2, 1)" },
    },
  },
  {
    slug: "material",
    name: "Material 3",
    tagline: "動態色彩・溫暖圓潤",
    description:
      "Google Material You 的色調系統：紫色主色、色調化的表面與層次分明的高度陰影。",
    tokens: {
      colors: {
        background: "#fef7ff",
        foreground: "#1d1b20",
        "gray-100": "#f7f2fa",
        "gray-200": "#ece6f0",
        "gray-400": "#cac4d0",
        "gray-600": "#49454f",
        "gray-900": "#1d1b20",
        border: "#79747e",
        primary: "#6750a4",
        "primary-foreground": "#ffffff",
        accent: "#7d5260",
        success: "#386a20",
        warning: "#8b5000",
        error: "#b3261e",
      },
      fonts: {
        sans: '"Roboto", "Google Sans", system-ui, sans-serif',
        mono: '"Roboto Mono", monospace',
      },
      fontSizes: {
        xs: "11px",
        sm: "14px",
        base: "16px",
        lg: "22px",
        xl: "28px",
        "2xl": "36px",
        "3xl": "57px",
      },
      fontWeights: { regular: 400, medium: 500, semibold: 500, bold: 700 },
      radii: { sm: "4px", md: "12px", lg: "16px", xl: "28px", full: "9999px" },
      spacing: baseSpacing,
      shadows: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)",
        md: "0 1px 3px rgba(0, 0, 0, 0.3), 0 4px 8px 3px rgba(0, 0, 0, 0.15)",
        lg: "0 4px 4px rgba(0, 0, 0, 0.3), 0 8px 12px 6px rgba(0, 0, 0, 0.15)",
      },
      motion: { duration: "300ms", easing: "cubic-bezier(0.2, 0, 0, 1)" },
    },
  },
  {
    slug: "notion",
    name: "Notion",
    tagline: "溫暖紙感・文件導向",
    description:
      "米白與暖灰、柔和的文字色與極淡的陰影，適合寫作、筆記與知識庫介面。",
    tokens: {
      colors: {
        background: "#ffffff",
        foreground: "#37352f",
        "gray-100": "#f7f6f3",
        "gray-200": "#f1f1ef",
        "gray-400": "#c3c2bf",
        "gray-600": "#787774",
        "gray-900": "#37352f",
        border: "rgba(55, 53, 47, 0.09)",
        primary: "#2383e2",
        "primary-foreground": "#ffffff",
        accent: "#e16259",
        success: "#448361",
        warning: "#cb912f",
        error: "#d44c47",
      },
      fonts: {
        sans: 'ui-sans-serif, -apple-system, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif',
        mono: '"SFMono-Regular", Menlo, Consolas, "PT Mono", monospace',
      },
      fontSizes: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "30px",
        "3xl": "40px",
      },
      fontWeights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
      radii: { sm: "3px", md: "4px", lg: "6px", xl: "10px", full: "9999px" },
      spacing: baseSpacing,
      shadows: {
        sm: "0 0 0 1px rgba(15, 15, 15, 0.05), 0 1px 2px rgba(15, 15, 15, 0.1)",
        md: "0 0 0 1px rgba(15, 15, 15, 0.05), 0 3px 6px rgba(15, 15, 15, 0.1)",
        lg: "0 0 0 1px rgba(15, 15, 15, 0.05), 0 5px 10px rgba(15, 15, 15, 0.1), 0 15px 40px rgba(15, 15, 15, 0.2)",
      },
      motion: { duration: "120ms", easing: "ease-out" },
    },
  },
  {
    slug: "spotify",
    name: "Spotify",
    tagline: "黑底亮綠・活力娛樂",
    description:
      "深黑背景與招牌亮綠、粗體標題與膠囊按鈕，充滿能量的媒體娛樂風格。",
    tokens: {
      colors: {
        background: "#121212",
        foreground: "#ffffff",
        "gray-100": "#181818",
        "gray-200": "#282828",
        "gray-400": "#535353",
        "gray-600": "#b3b3b3",
        "gray-900": "#ffffff",
        border: "#2a2a2a",
        primary: "#1ed760",
        "primary-foreground": "#000000",
        accent: "#1db954",
        success: "#1ed760",
        warning: "#ffa42b",
        error: "#f15e6c",
      },
      fonts: {
        sans: '"Circular", "Helvetica Neue", Helvetica, Arial, sans-serif',
        mono: '"SF Mono", Menlo, monospace',
      },
      fontSizes: {
        xs: "11px",
        sm: "14px",
        base: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "72px",
      },
      fontWeights: { regular: 400, medium: 500, semibold: 700, bold: 900 },
      radii: { sm: "4px", md: "6px", lg: "8px", xl: "12px", full: "500px" },
      spacing: baseSpacing,
      shadows: {
        sm: "0 2px 4px rgba(0, 0, 0, 0.3)",
        md: "0 4px 12px rgba(0, 0, 0, 0.5)",
        lg: "0 8px 24px rgba(0, 0, 0, 0.5)",
      },
      motion: { duration: "200ms", easing: "cubic-bezier(0.3, 0, 0, 1)" },
    },
  },
];

export function getStyle(slug: string) {
  return styles.find((s) => s.slug === slug);
}

function mapBlock(
  name: string,
  plural: string,
  entries: [string, string | number][]
) {
  const lines = entries.map(([k]) => `  "${k}": $${name}-${k},`);
  return `$${plural}: (\n${lines.join("\n")}\n);`;
}

function varLines(prefix: string, entries: [string, string | number][]) {
  return entries.map(([k, v]) => `$${prefix}-${k}: ${v};`).join("\n");
}

export function toScss(style: StyleDefinition): string {
  const t = style.tokens;
  const colors = Object.entries(t.colors);
  const sizes = Object.entries(t.fontSizes);
  const weights = Object.entries(t.fontWeights);
  const radii = Object.entries(t.radii);
  const spacing = Object.entries(t.spacing);
  const shadows = Object.entries(t.shadows);

  return `// =============================================
// ${style.name} Style Tokens — _tokens.scss
// ${style.tagline}
// =============================================

// ---------- Colors ----------
${varLines("color", colors)}

// ---------- Typography ----------
$font-sans: ${t.fonts.sans};
$font-mono: ${t.fonts.mono};

${varLines("font-size", sizes)}

${varLines("font-weight", weights)}

// ---------- Radius ----------
${varLines("radius", radii)}

// ---------- Spacing ----------
${varLines("space", spacing)}

// ---------- Shadows ----------
${varLines("shadow", shadows)}

// ---------- Motion ----------
$duration: ${t.motion.duration};
$easing: ${t.motion.easing};

// ---------- Maps ----------
${mapBlock("color", "colors", colors)}

${mapBlock("font-size", "font-sizes", sizes)}

${mapBlock("radius", "radii", radii)}

${mapBlock("space", "spaces", spacing)}

${mapBlock("shadow", "shadows", shadows)}

// ---------- Helpers ----------
@function color($name) {
  @return map-get($colors, $name);
}

@function space($step) {
  @return map-get($spaces, $step);
}

// 將所有 token 輸出為 CSS 自訂屬性
:root {
  @each $name, $value in $colors {
    --color-#{$name}: #{$value};
  }
  @each $name, $value in $font-sizes {
    --font-size-#{$name}: #{$value};
  }
  @each $name, $value in $radii {
    --radius-#{$name}: #{$value};
  }
  @each $name, $value in $spaces {
    --space-#{$name}: #{$value};
  }
  @each $name, $value in $shadows {
    --shadow-#{$name}: #{$value};
  }
  --font-sans: #{$font-sans};
  --font-mono: #{$font-mono};
}

// ---------- Mixins ----------
@mixin button-primary {
  display: inline-flex;
  align-items: center;
  gap: $space-2;
  padding: $space-2 $space-4;
  font-family: $font-sans;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  color: $color-primary-foreground;
  background: $color-primary;
  border: 0;
  border-radius: $radius-md;
  transition: opacity $duration $easing;

  &:hover {
    opacity: 0.85;
  }
}

@mixin card {
  padding: $space-5;
  background: $color-background;
  border: 1px solid $color-border;
  border-radius: $radius-lg;
  box-shadow: $shadow-sm;
}
`;
}

export function toCss(style: StyleDefinition): string {
  const t = style.tokens;
  const block = (prefix: string, obj: Record<string, string | number>) =>
    Object.entries(obj)
      .map(([k, v]) => `  --${prefix}-${k}: ${v};`)
      .join("\n");

  return `/* ${style.name} Style Tokens — tokens.css */
:root {
  /* Colors */
${block("color", t.colors)}

  /* Typography */
  --font-sans: ${t.fonts.sans};
  --font-mono: ${t.fonts.mono};
${block("font-size", t.fontSizes)}
${block("font-weight", t.fontWeights)}

  /* Radius */
${block("radius", t.radii)}

  /* Spacing */
${block("space", t.spacing)}

  /* Shadows */
${block("shadow", t.shadows)}

  /* Motion */
  --duration: ${t.motion.duration};
  --easing: ${t.motion.easing};
}
`;
}

export function toJson(style: StyleDefinition): string {
  return JSON.stringify({ name: style.name, ...style.tokens }, null, 2) + "\n";
}
