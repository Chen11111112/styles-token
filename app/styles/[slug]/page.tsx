import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getStyle, styles, themesOf } from "@/lib/styles";
import { toCss, toJson, toScss } from "@/lib/generators";
import { StyleShowcase } from "@/components/style-showcase";
import { CodeViewer } from "@/components/code-viewer";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return styles.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/styles/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const style = getStyle(slug);
  if (!style) return { title: "找不到風格", robots: { index: false } };

  const title = `${style.name} 風格 Design Tokens（SCSS / CSS / JSON）`;
  const description = `${style.name} 風格 design tokens：${style.description} 提供 SCSS 變數、CSS 自訂屬性與 JSON，含色票、字體、圓角、間距與陰影，一鍵複製。`;
  const url = `/styles/${style.slug}`;
  return {
    title,
    description,
    keywords: [
      `${style.name} design tokens`,
      `${style.name} SCSS`,
      `${style.name} 色票`,
      `${style.name} CSS variables`,
    ],
    alternates: { canonical: url },
    openGraph: { type: "article", url, title, description },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function StylePage({ params }: PageProps<"/styles/[slug]">) {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-16">
      <Link
        href="/"
        className="text-sm text-zinc-500 transition hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← 所有風格
      </Link>
      <Suspense
        fallback={
          <div className="mt-6 space-y-4">
            <div className="h-10 w-64 animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-64 animate-pulse rounded-xl bg-zinc-100 dark:bg-zinc-900" />
          </div>
        }
      >
        <StyleContent params={params} />
      </Suspense>
    </main>
  );
}

async function StyleContent({
  params,
}: {
  params: PageProps<"/styles/[slug]">["params"];
}) {
  const { slug } = await params;
  const style = getStyle(slug);
  if (!style) notFound();

  const files = [
    { id: "scss", label: "SCSS", filename: "_tokens.scss", code: toScss(style) },
    { id: "css", label: "CSS", filename: "tokens.css", code: toCss(style) },
    { id: "json", label: "JSON", filename: "tokens.json", code: toJson(style) },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: site.name, item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: `${style.name} 風格 Design Tokens`,
        item: `${site.url}/styles/${style.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <header className="mt-6 mb-10">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {style.name} 風格 Design Tokens
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          {style.description}
        </p>
      </header>

      <StyleShowcase name={style.name} themes={themesOf(style)} tokens={style.tokens} />

      <section>
        <h2 className="mb-4 text-lg font-semibold">程式碼</h2>
        <CodeViewer files={files} />
      </section>
    </>
  );
}
