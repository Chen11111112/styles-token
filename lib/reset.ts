// Eric Meyer's Reset CSS v2.0 (public domain)
// http://meyerweb.com/eric/tools/css/reset/
export const meyerReset = `/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;

// Modern Reset：只修正不好用的瀏覽器預設值，保留合理的預設樣式
export const modernReset = `/* Modern CSS Reset
   只修正瀏覽器不好用的預設值，保留合理的預設（標題粗細、清單語意等）。
*/

/* 1. 寬高計算包含 padding 與 border */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* 2. 移除預設外距 */
* {
  margin: 0;
}

/* 3. 讓百分比高度可以運作 */
html,
body {
  height: 100%;
}

/* 4. 舒適的行高、較清晰的字體渲染 */
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* 5. 防止 iOS 橫向時自動放大字級 */
html {
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

/* 6. 圖片與媒體不會撐破版面 */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

/* 7. 表單元素繼承字體 */
input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

/* 8. 長字串自動換行，避免溢出 */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

/* 9. 標題換行更平均、段落避免孤字 */
h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}

p {
  text-wrap: pretty;
}

/* 10. 有 class 的清單移除符號（保留一般文章清單的語意與樣式） */
ul[class],
ol[class] {
  list-style: none;
  padding: 0;
}

/* 11. 按鈕顯示可點擊游標 */
button,
[role="button"] {
  cursor: pointer;
}

/* 12. 表格框線合併 */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* 13. 尊重「減少動態效果」的系統設定 */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
