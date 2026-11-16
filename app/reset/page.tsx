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
      </header>

      <section>
        <h2 className="mb-4 text-lg font-semibold">程式碼</h2>
        <CodeViewer files={files} />
      </section>
    </main>
  );
}
