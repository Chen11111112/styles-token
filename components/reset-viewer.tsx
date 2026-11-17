"use client";

import { useState } from "react";
import { CodeViewer } from "@/components/code-viewer";

type Variant = {
  id: string;
  label: string;
  note: string;
  slug: string;
  code: string;
};

export function ResetViewer({ variants }: { variants: Variant[] }) {
  const [active, setActive] = useState(variants[0].id);
  const v = variants.find((x) => x.id === active) ?? variants[0];

  return (
    <>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div
          role="tablist"
          aria-label="Reset 版本"
          className="inline-flex rounded-lg border border-zinc-200 p-1 dark:border-zinc-800"
        >
          {variants.map((x) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={x.id === active}
              onClick={() => setActive(x.id)}
              className={`rounded-md px-3 py-1 text-sm transition ${
                x.id === active
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              {x.label}
            </button>
          ))}
        </div>
        <span className="text-sm text-zinc-500">{v.note}</span>
      </div>
      <CodeViewer
        key={v.id}
        files={[
          { id: "css", label: "CSS", filename: `${v.slug}.css`, code: v.code },
          { id: "scss", label: "SCSS", filename: `_${v.slug}.scss`, code: v.code },
        ]}
      />
    </>
  );
}
