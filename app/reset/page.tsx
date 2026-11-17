import type { Metadata } from "next";
import Link from "next/link";
import { ResetViewer } from "@/components/reset-viewer";
import { meyerReset, modernReset } from "@/lib/reset";

const description =
  "Reset CSS：預設提供 Modern Reset（box-sizing、圖片自適應、表單繼承字體、減少動態效果等），也可切換為 Eric Meyer Reset v2.0。提供 CSS 與 SCSS，一鍵複製或下載。";

export const metadata: Metadata = {
  title: "Reset CSS（重置瀏覽器預設樣式）",
  description,
  keywords: ["Reset CSS", "CSS reset", "Modern CSS reset", "Eric Meyer reset", "重置樣式", "瀏覽器預設樣式"],
  alternates: { canonical: "/reset" },
  openGraph: { type: "article", url: "/reset", title: "Reset CSS", description },
  twitter: { card: "summary_large_image", title: "Reset CSS", description },
};

export default function ResetPage() {
  const variants = [
    {
      id: "modern",
      label: "Modern Reset",
      note: "只修正不好用的預設值（推薦）",
      slug: "modern-reset",
      code: modernReset,
    },
    {
      id: "meyer",
      label: "Meyer Reset",
      note: "Eric Meyer v2.0：清空所有預設樣式",
      slug: "meyer-reset",
      code: meyerReset,
    },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-16">
      <Link
        href="/"
        className="text-sm text-zinc-500 transition hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← 所有風格
      </Link>

      <header className="mt-6 mb-10">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Reset CSS
        </h1>
      </header>

      <section>
        <h2 className="mb-4 text-lg font-semibold">程式碼</h2>
        <ResetViewer variants={variants} />
      </section>
    </main>
  );
}
