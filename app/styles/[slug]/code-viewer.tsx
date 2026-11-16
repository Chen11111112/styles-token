"use client";

import { useMemo, useState } from "react";
import { tokenize, tokenColors } from "@/lib/highlight";

type File = { id: string; label: string; filename: string; code: string };

export function CodeViewer({ files }: { files: File[] }) {
  const [active, setActive] = useState(files[0].id);
  const [copied, setCopied] = useState(false);
  const file = files.find((f) => f.id === active) ?? files[0];
  const tokens = useMemo(() => tokenize(file.code), [file.code]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(file.code);
    } catch {
      // 後備方案：舊瀏覽器或非安全環境
      const ta = document.createElement("textarea");
      ta.value = file.code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function download() {
    const blob = new Blob([file.code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-200">
      <div className="flex flex-wrap items-center gap-2 border-b border-zinc-800 px-3 py-2">
        <div role="tablist" className="flex gap-1">
          {files.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={f.id === active}
              onClick={() => {
                setActive(f.id);
                setCopied(false);
              }}
              className={`rounded-md px-3 py-1.5 text-sm transition ${
                f.id === active
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <span className="hidden font-mono text-xs text-zinc-500 sm:inline">
          {file.filename}
        </span>
        <div className="ml-auto flex gap-2">
          <button
            onClick={download}
            className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:bg-zinc-800"
          >
            下載
          </button>
          <button
            onClick={copy}
            className={`min-w-[88px] rounded-md px-3 py-1.5 text-sm font-medium transition ${
              copied
                ? "bg-emerald-500 text-black"
                : "bg-white text-black hover:bg-zinc-200"
            }`}
          >
            {copied ? "✓ 已複製" : "複製程式碼"}
          </button>
        </div>
      </div>
      <pre className="max-h-[70vh] overflow-auto p-5 font-mono text-[13px] leading-6">
        <code>
          {tokens.map((t, i) => (
            <span key={i} className={tokenColors[t.kind]}>
              {t.text}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
