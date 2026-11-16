export type ThemeName = "light" | "dark";

/**
 * 每組色票都包含以下語意色（預覽與程式碼都依賴它們）：
 * background, foreground, muted, surface, border,
 * primary, primary-foreground, accent，以及可選的 success / warning / error。
 * 其餘 key 保留各設計系統自己的命名（例如 Geist 的 gray-1000）。
 */
export type ColorSet = Record<string, string>;

export type StyleTokens = {
  colors: Partial<Record<ThemeName, ColorSet>>;
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
  defaultTheme: ThemeName;
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
    defaultTheme: "light",
    tokens: {
      colors: {
        // 來源：vercel.com/geist/colors（light-theme / dark-theme）
        light: {
          background: "#ffffff",
          foreground: "#171717",
          muted: "#4d4d4d",
          surface: "#f2f2f2",
          "gray-100": "#f2f2f2",
          "gray-200": "#ebebeb",
          "gray-600": "#a8a8a8",
          "gray-900": "#4d4d4d",
          "gray-1000": "#171717",
          border: "#ebebeb",
          primary: "#171717",
          "primary-foreground": "#ffffff",
          accent: "#006bff",
          success: "#28a948",
          warning: "#ffae00",
          error: "#fc0135",
        },
        dark: {
          background: "#0a0a0a",
          foreground: "#ededed",
          muted: "#a1a1a1",
          surface: "#1a1a1a",
          "gray-100": "#1a1a1a",
          "gray-200": "#1f1f1f",
          "gray-600": "#878787",
          "gray-900": "#a1a1a1",
          "gray-1000": "#ededed",
          border: "#2e2e2e",
          primary: "#ededed",
          "primary-foreground": "#0a0a0a",
          accent: "#006efe",
          success: "#00ac3a",
          warning: "#ffae00",
          error: "#f13342",
        },
      },
      fonts: {
        sans: '"Geist", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        mono: '"Geist Mono", "SFMono-Regular", Menlo, monospace',
      },
      fontSizes: { xs: "12px", sm: "14px", base: "16px", lg: "20px", xl: "24px", "2xl": "32px", "3xl": "48px" },
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
    slug: "linear",
    name: "Linear",
    tagline: "深色模式・冷靜精準",
    description:
      "深灰背景、紫藍強調色與微光邊框，營造專注、高效率的生產力工具氛圍。",
    defaultTheme: "dark",
    tokens: {
      colors: {
        // 來源：linear.app 的 CSS 變數（官網僅提供深色）
        dark: {
          background: "#08090a",
          foreground: "#f7f8f8",
          muted: "#8a8f98",
          surface: "#1c1c1f",
          "gray-100": "#1c1c1f",
          "gray-200": "#232326",
          "gray-400": "#62666d",
          "gray-600": "#8a8f98",
          "gray-900": "#d0d6e0",
          border: "#23252a",
          primary: "#5e6ad2",
          "primary-foreground": "#ffffff",
          accent: "#7170ff",
          success: "#27a644",
          warning: "#f0bf00",
          error: "#eb5757",
        },
      },
      fonts: {
        sans: '"Inter Variable", "Inter", -apple-system, sans-serif',
        mono: '"Berkeley Mono", "JetBrains Mono", monospace',
      },
      fontSizes: { xs: "12px", sm: "13px", base: "15px", lg: "17px", xl: "21px", "2xl": "32px", "3xl": "56px" },
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
    defaultTheme: "light",
    tokens: {
      colors: {
        // 來源：@primer/primitives functional themes（light / dark）
        light: {
          background: "#ffffff",
          foreground: "#1f2328",
          muted: "#59636e",
          surface: "#f6f8fa",
          "gray-100": "#f6f8fa",
          "gray-200": "#eaeef2",
          "gray-400": "#afb8c1",
          "gray-600": "#59636e",
          "gray-900": "#1f2328",
          border: "#d1d9e0",
          primary: "#1f883d",
          "primary-foreground": "#ffffff",
          accent: "#0969da",
          success: "#1a7f37",
          warning: "#9a6700",
          error: "#d1242f",
        },
        dark: {
          background: "#0d1117",
          foreground: "#f0f6fc",
          muted: "#9198a1",
          surface: "#151b23",
          "gray-100": "#151b23",
          "gray-200": "#212830",
          "gray-400": "#3d444d",
          "gray-600": "#9198a1",
          "gray-900": "#f0f6fc",
          border: "#3d444d",
          primary: "#238636",
          "primary-foreground": "#ffffff",
          accent: "#4493f8",
          success: "#3fb950",
          warning: "#d29922",
          error: "#f85149",
        },
      },
      fonts: {
        sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
        mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
      },
      fontSizes: { xs: "12px", sm: "14px", base: "16px", lg: "20px", xl: "24px", "2xl": "32px", "3xl": "40px" },
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
    defaultTheme: "light",
    tokens: {
      colors: {
        // 淺色來源：apple.com；深色來源：Apple HIG 系統色（dark appearance）
        light: {
          background: "#ffffff",
          foreground: "#1d1d1f",
          muted: "#6e6e73",
          surface: "#f5f5f7",
          "gray-100": "#f5f5f7",
          "gray-200": "#e8e8ed",
          "gray-400": "#86868b",
          "gray-600": "#6e6e73",
          "gray-900": "#1d1d1f",
          border: "#d2d2d7",
          primary: "#0071e3",
          "primary-foreground": "#ffffff",
          accent: "#0066cc",
          success: "#34c759",
          warning: "#ff9500",
          error: "#ff3b30",
        },
        dark: {
          background: "#000000",
          foreground: "#f5f5f7",
          muted: "#86868b",
          surface: "#1c1c1e",
          "gray-100": "#1c1c1e",
          "gray-200": "#2c2c2e",
          "gray-400": "#636366",
          "gray-600": "#8e8e93",
          "gray-900": "#f5f5f7",
          border: "#38383a",
          primary: "#0071e3",
          "primary-foreground": "#ffffff",
          accent: "#2997ff",
          success: "#30d158",
          warning: "#ff9f0a",
          error: "#ff453a",
        },
      },
      fonts: {
        sans: '"SF Pro Text", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
        mono: '"SF Mono", Menlo, monospace',
      },
      fontSizes: { xs: "12px", sm: "14px", base: "17px", lg: "21px", xl: "28px", "2xl": "40px", "3xl": "56px" },
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
    defaultTheme: "light",
    tokens: {
      colors: {
        // 來源：@material/web md-sys-color（baseline）。M3 沒有官方 success / warning 色。
        light: {
          background: "#fef7ff",
          foreground: "#1d1b20",
          muted: "#49454f",
          surface: "#f7f2fa",
          "surface-container-high": "#ece6f0",
          "outline-variant": "#cac4d0",
          border: "#79747e",
          primary: "#6750a4",
          "primary-foreground": "#ffffff",
          accent: "#7d5260",
          error: "#b3261e",
        },
        dark: {
          background: "#141218",
          foreground: "#e6e0e9",
          muted: "#cac4d0",
          surface: "#1d1b20",
          "surface-container-high": "#2b2930",
          "outline-variant": "#49454f",
          border: "#938f99",
          primary: "#d0bcff",
          "primary-foreground": "#381e72",
          accent: "#efb8c8",
          error: "#f2b8b5",
        },
      },
      fonts: {
        sans: '"Roboto", "Google Sans", system-ui, sans-serif',
        mono: '"Roboto Mono", monospace',
      },
      fontSizes: { xs: "11px", sm: "14px", base: "16px", lg: "22px", xl: "28px", "2xl": "36px", "3xl": "57px" },
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
    defaultTheme: "light",
    tokens: {
      colors: {
        // 來源：notion.site 的 .notion-light-theme / .notion-dark-theme 變數
        light: {
          background: "#ffffff",
          foreground: "#2c2c2b",
          muted: "#7d7a75",
          surface: "#f9f8f7",
          "gray-100": "#f9f8f7",
          "gray-200": "#f0efed",
          "gray-400": "#a19e99",
          "gray-600": "#7d7a75",
          "gray-900": "#2c2c2b",
          border: "#e6e5e3",
          primary: "#2783de",
          "primary-foreground": "#ffffff",
          accent: "#d5803b",
          success: "#50946e",
          warning: "#cb9434",
          error: "#cf5148",
        },
        dark: {
          background: "#191919",
          foreground: "#f0efed",
          muted: "#ada9a3",
          surface: "#202020",
          "gray-100": "#202020",
          "gray-200": "#383836",
          "gray-400": "#7d7a75",
          "gray-600": "#ada9a3",
          "gray-900": "#f0efed",
          border: "#383836",
          primary: "#2783de",
          "primary-foreground": "#ffffff",
          accent: "#d5803b",
          success: "#50946e",
          warning: "#cb9434",
          error: "#cf5148",
        },
      },
      fonts: {
        sans: 'ui-sans-serif, -apple-system, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif',
        mono: '"SFMono-Regular", Menlo, Consolas, "PT Mono", monospace',
      },
      fontSizes: { xs: "12px", sm: "14px", base: "16px", lg: "20px", xl: "24px", "2xl": "30px", "3xl": "40px" },
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
    defaultTheme: "dark",
    tokens: {
      colors: {
        // 來源：open.spotify.com 的 Encore 變數（僅深色）
        dark: {
          background: "#121212",
          foreground: "#ffffff",
          muted: "#b3b3b3",
          surface: "#1f1f1f",
          "gray-100": "#1f1f1f",
          "gray-200": "#2a2a2a",
          "gray-400": "#7c7c7c",
          "gray-600": "#b3b3b3",
          "gray-900": "#ffffff",
          border: "#2a2a2a",
          primary: "#1ed760",
          "primary-foreground": "#000000",
          accent: "#1db954",
          success: "#1ed760",
          warning: "#ffa42b",
          error: "#ed2c3f",
        },
      },
      fonts: {
        sans: '"Circular", "Helvetica Neue", Helvetica, Arial, sans-serif',
        mono: '"SF Mono", Menlo, monospace',
      },
      fontSizes: { xs: "11px", sm: "14px", base: "16px", lg: "20px", xl: "24px", "2xl": "32px", "3xl": "72px" },
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
  {
    slug: "carbon",
    name: "IBM Carbon",
    tagline: "方正理性・企業級",
    description:
      "IBM Carbon 設計系統：IBM Plex 字體、直角元件與明確的藍色互動色，適合資料密集的企業應用。",
    defaultTheme: "light",
    tokens: {
      colors: {
        // 來源：@carbon/themes（white / g100）
        light: {
          background: "#ffffff",
          foreground: "#161616",
          muted: "#525252",
          surface: "#f4f4f4",
          "layer-01": "#f4f4f4",
          "border-strong": "#8d8d8d",
          border: "#c6c6c6",
          primary: "#0f62fe",
          "primary-foreground": "#ffffff",
          accent: "#0043ce",
          success: "#24a148",
          warning: "#f1c21b",
          error: "#da1e28",
        },
        dark: {
          background: "#161616",
          foreground: "#f4f4f4",
          muted: "#c6c6c6",
          surface: "#262626",
          "layer-01": "#262626",
          "border-strong": "#6f6f6f",
          border: "#525252",
          primary: "#0f62fe",
          "primary-foreground": "#ffffff",
          accent: "#4589ff",
          success: "#42be65",
          warning: "#f1c21b",
          error: "#fa4d56",
        },
      },
      fonts: {
        sans: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif',
        mono: '"IBM Plex Mono", Menlo, "DejaVu Sans Mono", monospace',
      },
      fontSizes: { xs: "12px", sm: "14px", base: "16px", lg: "20px", xl: "28px", "2xl": "42px", "3xl": "54px" },
      fontWeights: { regular: 400, medium: 500, semibold: 600, bold: 600 },
      radii: { sm: "0", md: "0", lg: "0", xl: "0", full: "9999px" },
      spacing: baseSpacing,
      shadows: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.2)",
        md: "0 2px 6px rgba(0, 0, 0, 0.3)",
        lg: "0 4px 16px rgba(0, 0, 0, 0.3)",
      },
      motion: { duration: "110ms", easing: "cubic-bezier(0.2, 0, 0.38, 0.9)" },
    },
  },
  {
    slug: "atlassian",
    name: "Atlassian",
    tagline: "協作友善・清爽藍調",
    description:
      "Atlassian Design System（Jira、Confluence）：中性灰文字、品牌藍按鈕與細緻的半透明邊框。",
    defaultTheme: "light",
    tokens: {
      colors: {
        // 來源：@atlaskit/tokens（atlassian-light / atlassian-dark）
        light: {
          background: "#ffffff",
          foreground: "#292a2e",
          muted: "#505258",
          subtlest: "#6b6e76",
          surface: "#f8f8f8",
          border: "#0b120e24",
          primary: "#1868db",
          "primary-foreground": "#ffffff",
          accent: "#1868db",
          success: "#6a9a23",
          warning: "#e06c00",
          error: "#c9372c",
        },
        dark: {
          background: "#1f1f21",
          foreground: "#cecfd2",
          muted: "#a9abaf",
          subtlest: "#96999e",
          surface: "#18191a",
          border: "#e3e4f21f",
          primary: "#669df1",
          "primary-foreground": "#1f1f21",
          accent: "#669df1",
          success: "#82b536",
          warning: "#fbc828",
          error: "#f15b50",
        },
      },
      fonts: {
        sans: '"Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, sans-serif',
        mono: '"Atlassian Mono", ui-monospace, Menlo, "Segoe UI Mono", monospace',
      },
      fontSizes: { xs: "12px", sm: "14px", base: "16px", lg: "20px", xl: "24px", "2xl": "28px", "3xl": "32px" },
      fontWeights: { regular: 400, medium: 500, semibold: 600, bold: 653 },
      radii: { sm: "2px", md: "4px", lg: "8px", xl: "12px", full: "9999px" },
      spacing: baseSpacing,
      shadows: {
        sm: "0 1px 1px rgba(30, 31, 33, 0.25), 0 0 1px rgba(30, 31, 33, 0.31)",
        md: "0 8px 12px rgba(30, 31, 33, 0.15), 0 0 1px rgba(30, 31, 33, 0.31)",
        lg: "0 12px 24px rgba(30, 31, 33, 0.2), 0 0 1px rgba(30, 31, 33, 0.31)",
      },
      motion: { duration: "200ms", easing: "cubic-bezier(0.15, 1, 0.3, 1)" },
    },
  },
  {
    slug: "polaris",
    name: "Shopify Polaris",
    tagline: "商務後台・俐落中性",
    description:
      "Shopify 後台的 Polaris 設計系統：淺灰底配白色卡片、深灰主要按鈕與 Inter 字體。",
    defaultTheme: "light",
    tokens: {
      colors: {
        // 來源：@shopify/polaris-tokens（light；官方深色仍為 experimental，未收錄）
        light: {
          background: "#f1f1f1",
          foreground: "#303030",
          muted: "#616161",
          surface: "#ffffff",
          "surface-secondary": "#f7f7f7",
          border: "#e3e3e3",
          primary: "#303030",
          "primary-foreground": "#ffffff",
          accent: "#005bd3",
          success: "#047b5d",
          warning: "#ffe600",
          error: "#c70a24",
        },
      },
      fonts: {
        sans: '"Inter", -apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        mono: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
      },
      fontSizes: { xs: "11px", sm: "12px", base: "13px", lg: "16px", xl: "20px", "2xl": "24px", "3xl": "30px" },
      fontWeights: { regular: 450, medium: 550, semibold: 650, bold: 700 },
      radii: { sm: "4px", md: "8px", lg: "12px", xl: "16px", full: "9999px" },
      spacing: baseSpacing,
      shadows: {
        sm: "0 1px 0 rgba(26, 26, 26, 0.07)",
        md: "0 4px 6px -2px rgba(26, 26, 26, 0.2)",
        lg: "0 8px 16px -4px rgba(26, 26, 26, 0.22)",
      },
      motion: { duration: "150ms", easing: "cubic-bezier(0.25, 0.1, 0.25, 1)" },
    },
  },
];

export function getStyle(slug: string) {
  return styles.find((s) => s.slug === slug);
}

/** 該風格提供的主題，預設主題排第一 */
export function themesOf(style: StyleDefinition): ThemeName[] {
  const all = (["light", "dark"] as const).filter((t) => style.tokens.colors[t]);
  return [style.defaultTheme, ...all.filter((t) => t !== style.defaultTheme)];
}

export function colorsOf(style: StyleDefinition, theme?: ThemeName): ColorSet {
  return style.tokens.colors[theme ?? style.defaultTheme]!;
}

