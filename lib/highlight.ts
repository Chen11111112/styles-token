export type Token = { text: string; kind: string };

// 輕量的 SCSS / CSS / JSON 語法上色（不依賴任何套件）
const rules: [string, RegExp][] = [
  ["comment", /^(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/],
  ["string", /^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/],
  ["at", /^@[\w-]+/],
  ["variable", /^(\$[\w-]+|--[\w-]+)/],
  ["color", /^#[0-9a-fA-F]{3,8}\b/],
  ["number", /^-?\d*\.?\d+(px|ms|rem|em|%)?/],
  ["interp", /^#\{|^\}/],
  ["word", /^[\w-]+/],
  ["punct", /^[:;,(){}[\]&.]/],
  ["space", /^\s+/],
];

export function tokenize(code: string): Token[] {
  const out: Token[] = [];
  let rest = code;
  while (rest.length) {
    let matched = false;
    for (const [kind, re] of rules) {
      const m = rest.match(re);
      if (m && m[0].length) {
        out.push({ text: m[0], kind });
        rest = rest.slice(m[0].length);
        matched = true;
        break;
      }
    }
    if (!matched) {
      out.push({ text: rest[0], kind: "plain" });
      rest = rest.slice(1);
    }
  }
  return out;
}

export const tokenColors: Record<string, string> = {
  comment: "text-zinc-500 italic",
  string: "text-emerald-400",
  at: "text-pink-400",
  variable: "text-sky-300",
  color: "text-amber-300",
  number: "text-orange-300",
  interp: "text-pink-400",
  word: "text-zinc-200",
  punct: "text-zinc-500",
};
