# Color Tokens — Corrected (Session 2)

> This supersedes **Section 4.2** of `neoverge-design-brief.md`. The original brief listed
> *approximate* element colors and asked that the exact values be eyedropped from the official
> logo. This file records the corrected, locked values. The canonical implementation lives in
> `src/styles/global.css` (`@theme`).

## How these were derived

The exact base hues were read directly from the official vector logo
(`All Neoverge Vector.svg`), which stores precise hex values as text — more accurate than
eyedropping a PNG. Each element's hex appears several times in the SVG as a tight cluster; the
representative value below was chosen from each cluster.

Tints (very-light / light / dark) are **not** present in the logo, so they were derived from the
corrected base by mixing toward white/black (very-light = 90% white, light = 42% white,
dark = 42% black) for a consistent, accessible ramp.

## Base palette (unchanged)

| Token | Hex |
|---|---|
| Background | `#FAFAF7` |
| Surface | `#FFFFFF` |
| Foreground | `#1A1A1A` |
| Muted | `#6B6B66` |
| Subtle | `#A8A8A2` |
| Border | `rgba(26,26,26,0.08)` |
| Border strong | `rgba(26,26,26,0.16)` |

## Element accents — corrected

| Element | Brief (approx) | **Base (corrected)** | Very-light | Light | Dark | Accent (text-safe) |
|---|---|---|---|---|---|---|
| Earth · NeoVerse | ~~#2BA84A~~ | **#199549** | #E8F4ED | #7AC295 | #0F562A | #168340 |
| Water · Apex | ~~#5BAEC2~~ | **#5DA9B3** | #EFF6F7 | #A1CDD3 | #366268 | #447B83 |
| Fire · Pulse | ~~#F39B2A~~ | **#EE8F27** | #FDF4E9 | #F5BE82 | #8A5317 | #A4631B |
| Air · WorldWise | ~~#9B9B9B~~ | **#A9ABAE** | #F6F7F7 | #CDCED0 | #626365 | #717375 |
| Roots · accent | ~~#8B5A3C~~ | **#8C5F3D** | #F4EFEC | #BCA28E | #513723 | #8C5F3D |

The **accent (text-safe)** column is each base darkened just enough to pass WCAG AA (≥4.5:1)
at any text size. Element-toned headings, eyebrows, and links use it so brand color never
costs us contrast.

## Accessibility note (contrast vs #FAFAF7 background)

The vibrant **base** colors are intended for accents and fills (per the brief's usage rules),
not for small body text. For text, use the **dark** shade — all five pass WCAG AA (4.5:1+):

| Element | Base contrast | Dark contrast |
|---|---|---|
| Earth | 3.69 | 8.42 |
| Water | 2.58 | 6.47 |
| Fire | 2.34 | 6.03 |
| Air | 2.20 | 5.75 |
| Roots | 5.26 | 10.46 |

Component convention: `Heading`, `Eyebrow`, and `Link` element tones all use the
**accent (text-safe)** shade (≥4.5:1). The vibrant **base** is for fills/underlines/dots;
button fills use the **dark** shade with white text.
