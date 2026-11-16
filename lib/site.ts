// 正式網址。若要換網域，可設定環境變數 NEXT_PUBLIC_SITE_URL 覆蓋。
const PRODUCTION_URL = "https://styles-token.hychen.space";

function resolveSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_URL;
}

export const site = {
  url: resolveSiteUrl().replace(/\/$/, ""),
  name: "Styles Token",
  title: "Styles Token — 複製各種風格的 Design Tokens",
  description:
    "免費複製 Vercel、Linear、GitHub、Apple、Material 3、Notion、Spotify 等知名風格的 Design Tokens，提供 SCSS、CSS 變數與 JSON 格式，以及 Reset CSS，一鍵複製到你的專案。",
  keywords: [
    "design tokens",
    "SCSS",
    "Sass",
    "CSS variables",
    "CSS 變數",
    "設計系統",
    "design system",
    "Vercel Geist",
    "Linear",
    "GitHub Primer",
    "Material 3",
    "Notion",
    "Spotify",
    "Reset CSS",
    "色票",
  ],
  author: { name: "Hy.C", url: "https://hyc.eshachem.com" },
  locale: "zh_TW",
};
