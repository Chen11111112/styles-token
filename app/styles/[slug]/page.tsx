import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getStyle, styles, toCss, toJson, toScss } from "@/lib/styles";
import { CodeViewer } from "@/components/code-viewer";

export function generateStaticParams() {
  return styles.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/styles/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const style = getStyle(slug);
  return { title: style ? `${style.name} 風格 Tokens` : "找不到風格" };
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

  const t = style.tokens;
  const files = [
    { id: "scss", label: "SCSS", filename: "_tokens.scss", code: toScss(style) },
    { id: "css", label: "CSS", filename: "tokens.css", code: toCss(style) },
    { id: "json", label: "JSON", filename: "tokens.json", code: toJson(style) },
  ];

  return (
    <>
      <header className="mt-6 mb-10">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {style.name} 風格
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          {style.description}
        </p>
      </header>

      {/* 預覽 */}
      <section
        className="mb-10 rounded-xl p-6 sm:p-8"
        style={{
          background: t.colors.background,
          color: t.colors.foreground,
          fontFamily: t.fonts.sans,
          border: `1px solid ${t.colors.border}`,
        }}
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p
              style={{ fontSize: t.fontSizes.sm, color: t.colors.muted }}
            >
              Preview
            </p>
            <h2
              className="mt-2"
              style={{
                fontSize: t.fontSizes["2xl"],
                fontWeight: t.fontWeights.bold,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Build something great.
            </h2>
            <p
              className="mt-3"
              style={{ fontSize: t.fontSizes.base, color: t.colors.muted }}
            >
              使用 {style.name} token 打造的範例元件。
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span
                style={{
                  background: t.colors.primary,
                  color: t.colors["primary-foreground"],
                  borderRadius: t.radii.md,
                  padding: `${t.spacing["2"]} ${t.spacing["4"]}`,
                  fontSize: t.fontSizes.sm,
                  fontWeight: t.fontWeights.medium,
                }}
              >
                Primary
              </span>
              <span
                style={{
                  border: `1px solid ${t.colors.border}`,
                  borderRadius: t.radii.md,
                  padding: `${t.spacing["2"]} ${t.spacing["4"]}`,
                  fontSize: t.fontSizes.sm,
                  fontWeight: t.fontWeights.medium,
                }}
              >
                Secondary
              </span>
            </div>
          </div>
          <div
            style={{
              background: t.colors["gray-100"],
              borderRadius: t.radii.lg,
              boxShadow: t.shadows.md,
              padding: t.spacing["5"],
              border: `1px solid ${t.colors.border}`,
            }}
          >
            <p style={{ fontWeight: t.fontWeights.semibold }}>Card</p>
            <p
              className="mt-1"
              style={{ fontSize: t.fontSizes.sm, color: t.colors.muted }}
            >
              radius-lg · shadow-md
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(["success", "warning", "error", "accent"] as const).map((k) => (
                <span
                  key={k}
                  style={{
                    color: t.colors[k],
                    border: `1px solid ${t.colors[k]}`,
                    borderRadius: t.radii.full,
                    padding: `2px ${t.spacing["3"]}`,
                    fontSize: t.fontSizes.xs,
                  }}
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 色票 */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold">Colors</h2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {Object.entries(t.colors).map(([name, value]) => (
            <li key={name}>
              <div
                className="h-14 rounded-lg border border-black/10 dark:border-white/10"
                style={{ background: value }}
              />
              <p className="mt-1.5 truncate text-xs font-medium">{name}</p>
              <p className="truncate font-mono text-[11px] text-zinc-500">
                {value}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold">程式碼</h2>
        <CodeViewer files={files} />
      </section>
    </>
  );
}
