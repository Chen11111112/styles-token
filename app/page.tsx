import Link from "next/link";
import { styles } from "@/lib/styles";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      description: site.description,
      inLanguage: "zh-Hant",
      author: { "@type": "Person", name: site.author.name, url: site.author.url },
    },
    {
      "@type": "ItemList",
      name: "Design token 風格列表",
      itemListElement: [
        ...styles.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${s.name} 風格 Design Tokens`,
          url: `${site.url}/styles/${s.slug}`,
        })),
        {
          "@type": "ListItem",
          position: styles.length + 1,
          name: "Reset CSS",
          url: `${site.url}/reset`,
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-16 sm:px-6 sm:py-24">
      <JsonLd data={jsonLd} />
      <header className="mb-14 max-w-2xl">
        <p className="mb-3 font-mono text-sm text-zinc-500">styles-token</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          複製任何風格的 Design Tokens
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          選擇一種風格，查看完整的 SCSS / CSS / JSON token 程式碼，一鍵複製到你的專案。
        </p>
      </header>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {styles.map((style) => {
          const c = style.tokens.colors;
          return (
            <li key={style.slug}>
              <Link
                href={`/styles/${style.slug}`}
                className="group block overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600"
              >
                <div
                  className="flex h-36 flex-col justify-between p-5"
                  style={{
                    background: c.background,
                    color: c.foreground,
                    fontFamily: style.tokens.fonts.sans,
                    borderBottom: `1px solid ${c.border}`,
                  }}
                >
                  <span className="text-2xl font-semibold tracking-tight">
                    Aa
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className="px-3 py-1.5 text-xs font-medium"
                      style={{
                        background: c.primary,
                        color: c["primary-foreground"],
                        borderRadius: style.tokens.radii.md,
                      }}
                    >
                      Button
                    </span>
                    <div className="ml-auto flex">
                      {["primary", "accent", "success", "warning", "error"].map(
                        (k) => (
                          <span
                            key={k}
                            className="-ml-1.5 size-5 rounded-full ring-2"
                            style={
                              {
                                background: c[k],
                                "--tw-ring-color": c.background,
                              } as React.CSSProperties
                            }
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <h2 className="font-semibold">{style.name} 風格</h2>
                    <p className="mt-1 text-sm text-zinc-500">
                      {style.tagline}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="text-zinc-400 transition group-hover:translate-x-1 group-hover:text-zinc-900 dark:group-hover:text-zinc-100"
                  >
                    →
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            href="/reset"
            className="group block overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600"
          >
            <div className="flex h-36 flex-col justify-between border-b border-dashed border-zinc-300 bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(120,120,120,0.08)_8px,rgba(120,120,120,0.08)_9px)] p-5 font-mono dark:border-zinc-700">
              <span className="text-sm text-zinc-500">
                margin: 0;
                <br />
                padding: 0;
                <br />
                border: 0;
              </span>
              <span className="self-start rounded-md border border-zinc-300 px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
                reset.css
              </span>
            </div>
            <div className="flex items-center justify-between p-5">
              <div>
                <h2 className="font-semibold">Reset CSS</h2>
                <p className="mt-1 text-sm text-zinc-500">
                  重置瀏覽器預設樣式
                </p>
              </div>
              <span
                aria-hidden
                className="text-zinc-400 transition group-hover:translate-x-1 group-hover:text-zinc-900 dark:group-hover:text-zinc-100"
              >
                →
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </main>
  );
}
