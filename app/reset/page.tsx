import type { Metadata } from "next";
import Link from "next/link";
import { CodeViewer } from "@/components/code-viewer";
import { resetCss } from "@/lib/reset";

export const metadata: Metadata = { title: "Reset CSS" };

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
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          清除瀏覽器預設樣式（margin、padding、字級、清單符號等），讓每個瀏覽器從相同的起點開始。
          使用 Eric Meyer 的 Reset CSS v2.0（public domain）。
        </p>
      </header>

      <section className="mb-10 grid gap-4 sm:grid-cols-3">
        {[
          ["先載入", "放在所有樣式與 token 之前引入，例如 @use \"reset\";"],
          ["搭配 token", "Reset 清空預設值，再用任一風格的 token 重新定義字體、顏色與間距。"],
          ["Tailwind 使用者", "Tailwind 已內建 Preflight（同樣是 reset），不需要再加這份。"],
        ].map(([title, body]) => (
          <div
            key={title}
            className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
          >
            <p className="font-medium">{title}</p>
            <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
              {body}
            </p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold">程式碼</h2>
        <CodeViewer files={files} />
      </section>
    </main>
  );
}
