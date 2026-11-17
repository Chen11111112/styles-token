export type ThemeName = "light" | "dark";

/**
 * 每組色票都包含以下語意色（預覽與程式碼都依賴它們）：
 * background, foreground, muted, surface, border,
 * primary, primary-foreground, accent，以及可選的 success / warning / error。
 * 其餘 key 保留各設計系統自己的命名（例如 Geist 的 gray-1000）。
 */
export type ColorSet = Record<string, string>;

/**
 * 選用的視覺效果（依主題）。預覽會使用以下 key：
 * border-width, background-image, surface-backdrop（backdrop-filter）,
 * card-shadow（取代 shadow-md）, heading-shadow（標題 text-shadow）
 */
export type EffectSet = Record<string, string>;

export type StyleTokens = {
  colors: Partial<Record<ThemeName, ColorSet>>;
  effects?: Partial<Record<ThemeName, EffectSet>>;
  fonts: { sans: string; mono: string; display?: string };
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

  // ---------- 以下為原創美學風格（非品牌） ----------
  {
    slug: "neo-brutalism",
    name: "Neo-Brutalism",
    tagline: "粗框硬陰影・大膽撞色",
    description:
      "新粗野主義：厚黑邊框、無模糊的硬陰影、高飽和撞色與粗體字，個性鮮明、帶點反設計的趣味。",
    defaultTheme: "light",
    tokens: {
      colors: {
        light: {
          background: "#fffdf5",
          foreground: "#000000",
          muted: "#3d3d3d",
          surface: "#ffffff",
          border: "#000000",
          primary: "#ffde03",
          "primary-foreground": "#000000",
          secondary: "#90e0ff",
          accent: "#ff90e8",
          success: "#23d160",
          warning: "#ff9f1c",
          error: "#ff3b3b",
        },
        dark: {
          background: "#121212",
          foreground: "#fffdf5",
          muted: "#c4c4c4",
          surface: "#1e1e1e",
          border: "#fffdf5",
          primary: "#ffde03",
          "primary-foreground": "#000000",
          secondary: "#90e0ff",
          accent: "#ff90e8",
          success: "#23d160",
          warning: "#ff9f1c",
          error: "#ff5c5c",
        },
      },
      effects: {
        light: { "border-width": "3px", "card-shadow": "6px 6px 0 0 #000000" },
        dark: { "border-width": "3px", "card-shadow": "6px 6px 0 0 #fffdf5" },
      },
      fonts: {
        sans: '"Space Grotesk", "Archivo", system-ui, sans-serif',
        display: '"Archivo Black", "Space Grotesk", Impact, sans-serif',
        mono: '"Space Mono", ui-monospace, monospace',
      },
      fontSizes: { xs: "12px", sm: "14px", base: "16px", lg: "20px", xl: "28px", "2xl": "40px", "3xl": "64px" },
      fontWeights: { regular: 400, medium: 600, semibold: 700, bold: 900 },
      radii: { sm: "0", md: "4px", lg: "8px", xl: "12px", full: "9999px" },
      spacing: baseSpacing,
      shadows: {
        sm: "2px 2px 0 0 #000000",
        md: "4px 4px 0 0 #000000",
        lg: "8px 8px 0 0 #000000",
      },
      motion: { duration: "100ms", easing: "cubic-bezier(0.2, 0, 0, 1)" },
    },
  },
  {
    slug: "glassmorphism",
    name: "Glassmorphism",
    tagline: "毛玻璃・漸層光暈",
    description:
      "玻璃擬態：半透明表面加上背景模糊，疊在柔和的彩色光暈上，營造輕盈、有層次的未來感。",
    defaultTheme: "dark",
    tokens: {
      colors: {
        dark: {
          background: "#0f0c29",
          foreground: "#ffffff",
          muted: "rgba(255, 255, 255, 0.7)",
          surface: "rgba(255, 255, 255, 0.12)",
          border: "rgba(255, 255, 255, 0.25)",
          primary: "#ffffff",
          "primary-foreground": "#1a1446",
          accent: "#7dd3fc",
          success: "#6ee7b7",
          warning: "#fcd34d",
          error: "#fda4af",
        },
        light: {
          background: "#eef2ff",
          foreground: "#1e1b4b",
          muted: "rgba(30, 27, 75, 0.7)",
          surface: "rgba(255, 255, 255, 0.45)",
          border: "rgba(255, 255, 255, 0.7)",
          primary: "#4f46e5",
          "primary-foreground": "#ffffff",
          accent: "#db2777",
          success: "#059669",
          warning: "#d97706",
          error: "#e11d48",
        },
      },
      effects: {
        dark: {
          "background-image":
            "radial-gradient(circle at 20% 20%, rgba(236, 72, 153, 0.55), transparent 40%), radial-gradient(circle at 80% 30%, rgba(59, 130, 246, 0.55), transparent 45%), radial-gradient(circle at 50% 95%, rgba(168, 85, 247, 0.5), transparent 50%), linear-gradient(135deg, #0f0c29, #24243e)",
          "surface-backdrop": "blur(20px) saturate(160%)",
          "card-shadow": "0 8px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
        },
        light: {
          "background-image":
            "radial-gradient(circle at 15% 20%, rgba(244, 114, 182, 0.6), transparent 40%), radial-gradient(circle at 85% 25%, rgba(96, 165, 250, 0.6), transparent 45%), radial-gradient(circle at 50% 95%, rgba(167, 139, 250, 0.55), transparent 50%), linear-gradient(135deg, #eef2ff, #fdf2f8)",
          "surface-backdrop": "blur(20px) saturate(160%)",
          "card-shadow": "0 8px 32px rgba(31, 38, 135, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
        },
      },
      fonts: {
        sans: '"Inter", "SF Pro Display", -apple-system, sans-serif',
        mono: '"JetBrains Mono", ui-monospace, monospace',
      },
      fontSizes: { xs: "12px", sm: "14px", base: "16px", lg: "20px", xl: "26px", "2xl": "38px", "3xl": "56px" },
      fontWeights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
      radii: { sm: "8px", md: "12px", lg: "20px", xl: "28px", full: "9999px" },
      spacing: baseSpacing,
      shadows: {
        sm: "0 2px 8px rgba(0, 0, 0, 0.12)",
        md: "0 8px 32px rgba(0, 0, 0, 0.2)",
        lg: "0 16px 48px rgba(0, 0, 0, 0.3)",
      },
      motion: { duration: "250ms", easing: "cubic-bezier(0.4, 0, 0.2, 1)" },
    },
  },
  {
    slug: "terminal",
    name: "Retro Terminal",
    tagline: "綠色磷光・掃描線",
    description:
      "復古終端機：黑底綠字、等寬字體、文字微光與 CRT 掃描線，帶有 80 年代電腦螢幕的駭客氛圍。",
    defaultTheme: "dark",
    tokens: {
      colors: {
        dark: {
          background: "#0a0f0a",
          foreground: "#33ff66",
          muted: "#1fae45",
          surface: "#0f1a10",
          border: "#1f5c2a",
          primary: "#33ff66",
          "primary-foreground": "#0a0f0a",
          accent: "#ffb000",
          success: "#33ff66",
          warning: "#ffb000",
          error: "#ff4d4d",
        },
      },
      effects: {
        dark: {
          "border-width": "1px",
          "background-image":
            "repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0px, rgba(0, 0, 0, 0.25) 1px, transparent 1px, transparent 3px)",
          "heading-shadow": "0 0 8px rgba(51, 255, 102, 0.7)",
          "card-shadow": "0 0 0 1px #1f5c2a, 0 0 24px rgba(51, 255, 102, 0.15)",
        },
      },
      fonts: {
        sans: '"IBM Plex Mono", "VT323", ui-monospace, monospace',
        display: '"VT323", "IBM Plex Mono", ui-monospace, monospace',
        mono: '"IBM Plex Mono", "VT323", ui-monospace, monospace',
      },
      fontSizes: { xs: "12px", sm: "13px", base: "15px", lg: "18px", xl: "24px", "2xl": "36px", "3xl": "56px" },
      fontWeights: { regular: 400, medium: 400, semibold: 700, bold: 700 },
      radii: { sm: "0", md: "0", lg: "0", xl: "0", full: "0" },
      spacing: baseSpacing,
      shadows: {
        sm: "0 0 4px rgba(51, 255, 102, 0.3)",
        md: "0 0 12px rgba(51, 255, 102, 0.3)",
        lg: "0 0 24px rgba(51, 255, 102, 0.35)",
      },
      motion: { duration: "0ms", easing: "steps(2, end)" },
    },
  },
  {
    slug: "cyberpunk",
    name: "Cyberpunk",
    tagline: "霓虹粉藍・未來都市",
    description:
      "賽博龐克：深紫夜色上的霓虹桃紅與電光青、發光邊框與網格背景，強烈的科幻都市感。",
    defaultTheme: "dark",
    tokens: {
      colors: {
        dark: {
          background: "#0d0221",
          foreground: "#f0f0ff",
          muted: "#a59bd6",
          surface: "#1a0b3d",
          border: "#05d9e8",
          primary: "#ff2a6d",
          "primary-foreground": "#0d0221",
          secondary: "#f9f002",
          accent: "#05d9e8",
          success: "#00ff9f",
          warning: "#f9f002",
          error: "#ff3864",
        },
      },
      effects: {
        dark: {
          "border-width": "1px",
          "background-image":
            "linear-gradient(rgba(5, 217, 232, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(5, 217, 232, 0.08) 1px, transparent 1px)",
          "background-size": "32px 32px",
          "heading-shadow": "0 0 6px #ff2a6d, 0 0 18px rgba(255, 42, 109, 0.6), 2px 2px 0 #05d9e8",
          "card-shadow": "0 0 0 1px #05d9e8, 0 0 20px rgba(5, 217, 232, 0.35), inset 0 0 20px rgba(5, 217, 232, 0.08)",
        },
      },
      fonts: {
        sans: '"Rajdhani", "Chakra Petch", "Segoe UI", sans-serif',
        display: '"Orbitron", "Rajdhani", sans-serif',
        mono: '"Share Tech Mono", ui-monospace, monospace',
      },
      fontSizes: { xs: "12px", sm: "14px", base: "16px", lg: "20px", xl: "28px", "2xl": "40px", "3xl": "64px" },
      fontWeights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
      radii: { sm: "0", md: "2px", lg: "4px", xl: "8px", full: "9999px" },
      spacing: baseSpacing,
      shadows: {
        sm: "0 0 6px rgba(255, 42, 109, 0.5)",
        md: "0 0 16px rgba(5, 217, 232, 0.4)",
        lg: "0 0 32px rgba(255, 42, 109, 0.5)",
      },
      motion: { duration: "180ms", easing: "cubic-bezier(0.7, 0, 0.3, 1)" },
    },
  },
  {
    slug: "editorial",
    name: "Editorial",
    tagline: "報刊襯線・紙張質感",
    description:
      "報刊編輯風：米色紙張、高對比襯線標題、細線分隔與紅色點綴，像一份精心排版的雜誌。",
    defaultTheme: "light",
    tokens: {
      colors: {
        light: {
          background: "#f7f3ea",
          foreground: "#1a1a1a",
          muted: "#5c5c5c",
          surface: "#fffdf8",
          border: "#1a1a1a",
          primary: "#1a1a1a",
          "primary-foreground": "#f7f3ea",
          accent: "#b3261e",
          success: "#2e6b3f",
          warning: "#a15c00",
          error: "#b3261e",
        },
        dark: {
          background: "#161513",
          foreground: "#ece6d9",
          muted: "#a39e93",
          surface: "#1f1d1a",
          border: "#ece6d9",
          primary: "#ece6d9",
          "primary-foreground": "#161513",
          accent: "#e05a47",
          success: "#6fae7f",
          warning: "#d9a441",
          error: "#e05a47",
        },
      },
      effects: {
        light: { "border-width": "1px", "card-shadow": "none" },
        dark: { "border-width": "1px", "card-shadow": "none" },
      },
      fonts: {
        sans: '"Source Serif 4", "Noto Serif TC", Georgia, serif',
        display: '"Playfair Display", "Noto Serif TC", "Times New Roman", Georgia, serif',
        mono: '"IBM Plex Mono", ui-monospace, monospace',
      },
      fontSizes: { xs: "12px", sm: "15px", base: "18px", lg: "22px", xl: "30px", "2xl": "48px", "3xl": "72px" },
      fontWeights: { regular: 400, medium: 500, semibold: 700, bold: 900 },
      radii: { sm: "0", md: "0", lg: "0", xl: "0", full: "9999px" },
      spacing: baseSpacing,
      shadows: { sm: "none", md: "none", lg: "none" },
      motion: { duration: "200ms", easing: "ease-in-out" },
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

export function effectsOf(style: StyleDefinition, theme?: ThemeName): EffectSet {
  return style.tokens.effects?.[theme ?? style.defaultTheme] ?? {};
}

/** 預覽用：把 effects 轉成背景、邊框、陰影等樣式值 */
export function surfaceStyles(
  colors: ColorSet,
  effects: EffectSet,
  fallbackShadow: string
) {
  const bw = effects["border-width"] ?? "1px";
  return {
    page: {
      backgroundColor: colors.background,
      backgroundImage: effects["background-image"],
      backgroundSize: effects["background-size"],
      border: `${bw} solid ${colors.border}`,
    },
    card: {
      background: colors.surface,
      border: `${bw} solid ${colors.border}`,
      boxShadow: effects["card-shadow"] ?? fallbackShadow,
      backdropFilter: effects["surface-backdrop"],
      WebkitBackdropFilter: effects["surface-backdrop"],
    },
    borderWidth: bw,
    headingShadow: effects["heading-shadow"],
  };
}

