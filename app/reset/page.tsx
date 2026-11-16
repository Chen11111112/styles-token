import type { Metadata } from "next";
import Link from "next/link";
import { CodeViewer } from "@/components/code-viewer";
import { resetCss } from "@/lib/reset";

const description =
  "Eric Meyer Reset CSS v2.0：清除瀏覽器預設的 margin、padding、字級與清單樣式，讓各瀏覽器從相同起點開始。提供 CSS 與 SCSS，一鍵複製或下載。";

export const metadata: Metadata = {
  title: "Reset CSS（重置瀏覽器預設樣式）",
  description,
  keywords: ["Reset CSS", "CSS reset", "Eric Meyer reset", "重置樣式", "瀏覽器預設樣式"],
  alternates: { canonical: "/reset" },
  openGraph: { type: "article", url: "/reset", title: "Reset CSS", description },
  twitter: { card: "summary_large_image", title: "Reset CSS", description },
};

export default function ResetPage() {
  const files = [
    { id: "css", label: "CSS", filename: "reset.css", code: resetCss },
    { id: "scss", label: "SCSS", filename: "_reset.scss", code: resetCss },
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
        <CodeViewer files={files} />
      </section>
    </main>
  );
}
