"use client";

import { useState } from "react";
import {
  surfaceStyles,
  type ColorSet,
  type StyleTokens,
  type ThemeName,
} from "@/lib/styles";

const themeLabel: Record<ThemeName, string> = { light: "淺色", dark: "深色" };
const statusKeys = ["success", "warning", "error", "accent"];

type Props = {
  name: string;
  themes: ThemeName[];
  tokens: StyleTokens;
};

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
}

export function StyleShowcase({ name, themes, tokens: t }: Props) {
  const [theme, setTheme] = useState<ThemeName>(themes[0]);
  const [copied, setCopied] = useState<string | null>(null);
  const c: ColorSet = t.colors[theme]!;
  const fx = surfaceStyles(c, t.effects?.[theme] ?? {}, t.shadows.md);

  async function copySwatch(key: string, value: string) {
    await copyText(value);
    setCopied(key);
    setTimeout(() => setCopied((k) => (k === key ? null : k)), 1500);
  }

  return (
    <>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        {themes.length > 1 ? (
          <div
            role="tablist"
            aria-label="主題"
            className="inline-flex rounded-lg border border-zinc-200 p-1 dark:border-zinc-800"
          >
            {themes.map((th) => (
              <button
                key={th}
                role="tab"
                aria-selected={th === theme}
                onClick={() => setTheme(th)}
                className={`rounded-md px-3 py-1 text-sm transition ${
                  th === theme
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {th === "light" ? "☀︎ " : "☾ "}
                {themeLabel[th]}
              </button>
            ))}
          </div>
        ) : (
          <span className="rounded-md border border-zinc-200 px-2.5 py-1 text-xs text-zinc-500 dark:border-zinc-800">
            僅提供{themeLabel[themes[0]]}主題
          </span>
        )}
      </div>

      {/* 預覽 */}
      <section
        className="mb-10 rounded-xl p-6 transition-colors sm:p-8"
        style={{
          ...fx.page,
          color: c.foreground,
          fontFamily: t.fonts.sans,
        }}
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p style={{ fontSize: t.fontSizes.sm, color: c.muted }}>Preview</p>
            <h2
              className="mt-2"
              style={{
                fontFamily: t.fonts.display ?? t.fonts.sans,
                fontSize: t.fontSizes["2xl"],
                fontWeight: t.fontWeights.bold,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                textShadow: fx.headingShadow,
              }}
            >
              Build something great.
            </h2>
            <p
              className="mt-3"
              style={{ fontSize: t.fontSizes.base, color: c.muted }}
            >
              使用 {name} token 打造的範例元件。
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span
                style={{
                  background: c.primary,
                  color: c["primary-foreground"],
                  border: `${fx.borderWidth} solid ${t.effects?.[theme]?.["border-width"] ? c.border : c.primary}`,
                  boxShadow: t.effects?.[theme]?.["border-width"] ? t.shadows.sm : undefined,
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
                  border: `${fx.borderWidth} solid ${c.border}`,
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
              ...fx.card,
              borderRadius: t.radii.lg,
              padding: t.spacing["5"],
            }}
          >
            <p style={{ fontWeight: t.fontWeights.semibold }}>Card</p>
            <p
              className="mt-1"
              style={{ fontSize: t.fontSizes.sm, color: c.muted }}
            >
              surface · radius-lg · shadow-md
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {statusKeys
                .filter((k) => c[k])
                .map((k) => (
                  <span
                    key={k}
                    className="inline-flex items-center gap-1.5"
                    style={{
                      border: `1px solid ${c.border}`,
                      borderRadius: t.radii.full,
                      padding: `2px ${t.spacing["3"]}`,
                      fontSize: t.fontSizes.xs,
                    }}
                  >
                    <span
                      className="size-2 rounded-full"
                      style={{ background: c[k] }}
                    />
                    {k}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* 色票：點擊複製色碼 */}
      <section className="mb-10">
        <div className="mb-4 flex items-baseline justify-between gap-4">
          <h2 className="text-lg font-semibold">
            Colors
            <span className="ml-2 text-sm font-normal text-zinc-500">
              {themeLabel[theme]}
            </span>
          </h2>
          <p className="text-xs text-zinc-500">點擊色票即可複製色碼</p>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {Object.entries(c).map(([key, value]) => (
            <li key={key}>
              <button
                type="button"
                onClick={() => copySwatch(key, value)}
                title={`複製 ${value}`}
                aria-label={`複製 ${key} 色碼 ${value}`}
                className="group block w-full text-left"
              >
                <div
                  className="relative flex h-14 items-center justify-center rounded-lg border border-black/10 transition group-hover:scale-[1.03] group-hover:shadow-md group-active:scale-95 dark:border-white/10"
                  style={{ background: value }}
                >
                  <span
                    className={`rounded-md bg-black/70 px-2 py-0.5 text-[11px] font-medium text-white transition ${
                      copied === key
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {copied === key ? "✓ 已複製" : "複製"}
                  </span>
                </div>
                <p className="mt-1.5 truncate text-xs font-medium">{key}</p>
                <p className="truncate font-mono text-[11px] text-zinc-500">
                  {value}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
