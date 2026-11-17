import {
  colorsOf,
  effectsOf,
  themesOf,
  type ColorSet,
  type StyleDefinition,
  type ThemeName,
} from "./styles";

type Entries = [string, string | number][];

function varLines(prefix: string, entries: Entries) {
  return entries.map(([k, v]) => `$${prefix}-${k}: ${v};`).join("\n");
}

function mapRefs(name: string, plural: string, entries: Entries) {
  const lines = entries.map(([k]) => `  "${k}": $${name}-${k},`);
  return `$${plural}: (\n${lines.join("\n")}\n);`;
}

/** 值本身含有最外層逗號（多層漸層、多重陰影）時，在 Sass map 中需加括號 */
function hasTopLevelComma(v: string) {
  let depth = 0;
  for (const ch of v) {
    if (ch === "(") depth++;
    else if (ch === ")") depth--;
    else if (ch === "," && depth === 0) return true;
  }
  return false;
}

function mapValues(plural: string, colors: ColorSet) {
  const lines = Object.entries(colors).map(
    ([k, v]) => `  "${k}": ${hasTopLevelComma(v) ? `(${v})` : v},`
  );
  return `$${plural}: (\n${lines.join("\n")}\n);`;
}

function themeComment(style: StyleDefinition) {
  const themes = themesOf(style);
  return themes.length === 2
    ? "提供淺色與深色：預設跟隨系統，也可在 <html> 加上 data-theme=\"light\" / \"dark\" 強制切換。"
    : `僅提供${themes[0] === "dark" ? "深色" : "淺色"}主題（官方未提供另一組）。`;
}

/** 依主題組合輸出 CSS 選擇器區塊 */
function themeBlocks(
  style: StyleDefinition,
  body: (theme: ThemeName) => string,
  extraRoot: string
) {
  const themes = themesOf(style);
  const [first, second] = themes;
  const blocks = [
    `:root {\n  color-scheme: ${first};\n${body(first)}\n${extraRoot}\n}`,
  ];
  if (second) {
    const media = second === "dark" ? "dark" : "light";
    blocks.push(
      `@media (prefers-color-scheme: ${media}) {\n  :root:not([data-theme="${first}"]) {\n    color-scheme: ${second};\n${indent(body(second))}\n  }\n}`,
      `[data-theme="${second}"] {\n  color-scheme: ${second};\n${body(second)}\n}`,
      `[data-theme="${first}"] {\n  color-scheme: ${first};\n${body(first)}\n}`
    );
  }
  return blocks.join("\n\n");
}

function fxVal(style: StyleDefinition, key: string, ifSet: string, otherwise: string) {
  return effectsOf(style)[key] ? ifSet : otherwise;
}

function indent(s: string) {
  return s
    .split("\n")
    .map((l) => (l ? "  " + l : l))
    .join("\n");
}

export function toScss(style: StyleDefinition): string {
  const t = style.tokens;
  const themes = themesOf(style);
  const keys = Object.keys(colorsOf(style));
  const sizes = Object.entries(t.fontSizes);
  const weights = Object.entries(t.fontWeights);
  const radii = Object.entries(t.radii);
  const spacing = Object.entries(t.spacing);
  const shadows = Object.entries(t.shadows);

  const hasFx = themes.some((th) => Object.keys(effectsOf(style, th)).length);
  const colorMaps = themes
    .map((th) => `// ${th === "light" ? "Light" : "Dark"}\n${mapValues(`colors-${th}`, colorsOf(style, th))}`)
    .join("\n\n");
  const effectMaps = hasFx
    ? `\n\n// ---------- Effects ----------\n${themes
        .map((th) => mapValues(`effects-${th}`, effectsOf(style, th)))
        .join("\n\n")}\n\n// $effect-* 同樣指向 CSS 變數\n${Object.keys(effectsOf(style))
        .map((k) => `$effect-${k}: var(--effect-${k});`)
        .join("\n")}`
    : "";

  const root = themeBlocks(
    style,
    (th) =>
      `  @include theme-colors($colors-${th});` +
      (hasFx ? `\n  @include theme-effects($effects-${th});` : ""),
    `  @each $name, $value in $font-sizes {
    --font-size-#{$name}: #{$value};
  }
  @each $name, $value in $radii {
    --radius-#{$name}: #{$value};
  }
  @each $name, $value in $spaces {
    --space-#{$name}: #{$value};
  }
  @each $name, $value in $shadows {
    --shadow-#{$name}: #{$value};
  }
  --font-sans: #{$font-sans};
  --font-mono: #{$font-mono};${t.fonts.display ? "\n  --font-display: #{$font-display};" : ""}`
  );

  return `// =============================================
// ${style.name} Style Tokens — _tokens.scss
// ${style.tagline}
// ${themeComment(style)}
// =============================================

@use "sass:map";

// ---------- Colors ----------
${colorMaps}

// $color-* 指向 CSS 變數，切換主題時會自動跟著變
${keys.map((k) => `$color-${k}: var(--color-${k});`).join("\n")}${effectMaps}

// ---------- Typography ----------
$font-sans: ${t.fonts.sans};
$font-mono: ${t.fonts.mono};${t.fonts.display ? `\n$font-display: ${t.fonts.display};` : ""}

${varLines("font-size", sizes)}

${varLines("font-weight", weights)}

// ---------- Radius ----------
${varLines("radius", radii)}

// ---------- Spacing ----------
${varLines("space", spacing)}

// ---------- Shadows ----------
${varLines("shadow", shadows)}

// ---------- Motion ----------
$duration: ${t.motion.duration};
$easing: ${t.motion.easing};

// ---------- Maps ----------
${mapRefs("font-size", "font-sizes", sizes)}

${mapRefs("radius", "radii", radii)}

${mapRefs("space", "spaces", spacing)}

${mapRefs("shadow", "shadows", shadows)}

// ---------- Helpers ----------
// color("primary") → var(--color-primary)，會跟著主題切換
@function color($name) {
  @return var(--color-#{$name});
}

// color-raw("primary") → 實際色碼，可搭配 Sass 色彩函式使用
${
  themes.length === 2
    ? `@function color-raw($name, $theme: ${themes[0]}) {
  @if $theme == dark {
    @return map.get($colors-dark, $name);
  }
  @return map.get($colors-light, $name);
}`
    : `@function color-raw($name) {
  @return map.get($colors-${themes[0]}, $name);
}`
}

@function space($step) {
  @return map.get($spaces, $step);
}

@mixin theme-colors($colors) {
  @each $name, $value in $colors {
    --color-#{$name}: #{$value};
  }
}${
    hasFx
      ? `

@mixin theme-effects($effects) {
  @each $name, $value in $effects {
    --effect-#{$name}: #{$value};
  }
}`
      : ""
  }

// ---------- CSS Custom Properties ----------
${root}

// ---------- Mixins ----------
@mixin button-primary {
  display: inline-flex;
  align-items: center;
  gap: $space-2;
  padding: $space-2 $space-4;
  font-family: $font-sans;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  color: $color-primary-foreground;
  background: $color-primary;
  border: 0;
  border-radius: $radius-md;
  transition: opacity $duration $easing;

  &:hover {
    opacity: 0.85;
  }
}

@mixin card {
  padding: $space-5;
  background: $color-surface;
  border: ${fxVal(style, "border-width", "$effect-border-width", "1px")} solid $color-border;
  border-radius: $radius-lg;
  box-shadow: ${fxVal(style, "card-shadow", "$effect-card-shadow", "$shadow-sm")};${
    effectsOf(style)["surface-backdrop"]
      ? "\n  backdrop-filter: $effect-surface-backdrop;\n  -webkit-backdrop-filter: $effect-surface-backdrop;"
      : ""
  }
}
`;
}

export function toCss(style: StyleDefinition): string {
  const t = style.tokens;
  const block = (prefix: string, obj: Record<string, string | number>) =>
    Object.entries(obj)
      .map(([k, v]) => `  --${prefix}-${k}: ${v};`)
      .join("\n");

  const root = themeBlocks(
    style,
    (th) => {
      const fx = effectsOf(style, th);
      return (
        block("color", colorsOf(style, th)) +
        (Object.keys(fx).length ? "\n" + block("effect", fx) : "")
      );
    },
    `
  /* Typography */
  --font-sans: ${t.fonts.sans};
  --font-mono: ${t.fonts.mono};${t.fonts.display ? `\n  --font-display: ${t.fonts.display};` : ""}
${block("font-size", t.fontSizes)}
${block("font-weight", t.fontWeights)}

  /* Radius */
${block("radius", t.radii)}

  /* Spacing */
${block("space", t.spacing)}

  /* Shadows */
${block("shadow", t.shadows)}

  /* Motion */
  --duration: ${t.motion.duration};
  --easing: ${t.motion.easing};`
  );

  return `/* ${style.name} Style Tokens — tokens.css
   ${themeComment(style)} */

${root}
`;
}

export function toJson(style: StyleDefinition): string {
  return (
    JSON.stringify(
      { name: style.name, defaultTheme: style.defaultTheme, ...style.tokens },
      null,
      2
    ) + "\n"
  );
}
