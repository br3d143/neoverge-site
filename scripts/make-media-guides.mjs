// Generates NeoVerge media-guide HTML files (one per world + parent brand).
// Each HTML is then rendered to PDF with `npx playwright pdf`.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = "C:/Users/shaun/Downloads/Neoverge Dream School";
const FONTS = "C:/Users/shaun/Desktop/neoverge-site/public/fonts";
const OUT = path.join(ROOT, "Media Guides");
fs.mkdirSync(OUT, { recursive: true });

const f = (p) => pathToFileURL(path.join(ROOT, p)).href;
const font = (file) => pathToFileURL(path.join(FONTS, file)).href;

const neutrals = [
  { name: "Off-White", hex: "#FAFAF7", rgb: "250, 250, 247", usage: "Page background. Never pure white for full pages.", border: true },
  { name: "White", hex: "#FFFFFF", rgb: "255, 255, 255", usage: "Cards and raised surfaces.", border: true },
  { name: "Ink", hex: "#1A1A1A", rgb: "26, 26, 26", usage: "Headlines and body text. Never pure black.", light: true },
  { name: "Gray", hex: "#6B6B66", rgb: "107, 107, 102", usage: "Secondary text.", light: true },
  { name: "Stone", hex: "#A8A8A2", rgb: "168, 168, 162", usage: "Captions and small hints.", light: true },
];

const sharedRules = {
  always: [
    "Use the original files from this folder, at their original proportions.",
    "Give the logo breathing room: clear space on every side at least the height of its emblem.",
    "Place logos on white, off-white, or the soft palette tint.",
    "Use the Text shade for colored words on light backgrounds. It is tuned to stay readable.",
    "Pair the palette with the shared neutrals for backgrounds and text.",
  ],
  never: [
    "Stretch, squash, rotate, or crop the logo.",
    "Recolor it, add shadows, outlines, glows, or other effects.",
    "Place it over busy photos or clashing colors.",
    "Retype the name in another font to imitate the wordmark.",
    "Shrink a full logo below roughly 120 pixels wide on screen or one inch in print. Use the emblem alone in small spaces instead.",
  ],
};

const guides = [
  {
    file: "NeoVerge Media Guide",
    name: "NeoVerge Dream School",
    eyebrowColor: "#1A1A1A",
    tint: "#F1F1ED",
    grades: "One campus · four worlds",
    tagline: "One Universe. Infinite Futures.",
    intro:
      "The official brand kit for the parent NeoVerge brand: logo files, exact color values, fonts, and ready-to-use copy. Each world has its own guide in this folder. Share these with press, printers, and partners so everything they make looks like us.",
    logos: [
      { src: "NeoVerge Dream School (2).png", name: "Primary lockup", desc: "The blended emblem above the NEOVERGE Dream School wordmark. Use this first." },
      { src: "Full Universe Full Color.png", name: "Full universe logo", desc: "The emblem flanked by all four world icons. For posters and brand-wide moments." },
      { src: "neoverge w circle.png", name: "Circle emblem", desc: "The icon alone. Profile pictures, app icons, small spaces." },
      { src: "NeoVerge Dream School Text.png", name: "Wordmark", desc: "Text only. For tight horizontal spaces where the emblem will not fit." },
      { src: "Full Universe Black Logo.png", name: "Universe logo · black", desc: "One-color version for documents, forms, and limited-color printing." },
      { src: "Neoverge Banner.png", name: "Banner", desc: "Wide banner art for headers, covers, and event backdrops." },
      { src: "All Neoverge Vector.svg", name: "Master vector (SVG)", desc: "Every official mark in one scalable file. Hand this to designers and printers." },
    ],
    paletteTitle: "World signature colors",
    paletteNote:
      "One family of neutrals is shared by everything, plus a signature color per world. Each world's guide in this folder lists its full five-shade palette. For print, give your printer the HEX code and ask them to match it.",
    palette: [
      { name: "NeoVerse Green", hex: "#199549", rgb: "25, 149, 73", usage: "NeoVerse · K–8 General Education.", light: true },
      { name: "Apex Teal", hex: "#5DA9B3", rgb: "93, 169, 179", usage: "Apex · Grades 6–12 + Post-Grad.", light: true },
      { name: "Pulse Orange", hex: "#EE8F27", rgb: "238, 143, 39", usage: "Pulse Collective · Performing Arts.", light: true },
      { name: "WorldWise Silver", hex: "#A9ABAE", rgb: "169, 171, 174", usage: "WorldWise · Hybrid Homeschool.", light: true },
      { name: "Roots Brown", hex: "#8C5F3D", rgb: "140, 95, 61", usage: "The roots in the emblem. A rare accent; use sparingly.", light: true },
    ],
    copy: {
      officialName: "NeoVerge Dream School",
      nameNote: "Never “Neoverge” mid-sentence: capital N, capital V.",
      serves: "K–12 across four worlds",
      tagline: "One Universe. Infinite Futures.",
      contact: ["info@neovergedreamschool.com", "(310) 817-0494", "La Puente, CA", "neovergedreamschool.com"],
      about:
        "NeoVerge Dream School is a visionary learning universe in La Puente, California, where passion meets purpose. One campus holds four distinct worlds: NeoVerse for K–8 general education, Apex for student-athletes, Pulse Collective for young performers, and WorldWise for hybrid homeschool families. Every world pairs rigorous academics with the passions that drive its students, igniting curiosity, empowering leaders, and shaping the future one student at a time.",
      aboutLabel: "About paragraph · copy and paste",
      mission:
        "NeoVerge Dream School is a La Puente, California private school where four worlds, general education, athletics, performing arts, and hybrid homeschool, share one campus and one promise: education built around each child's passion.",
      missionLabel: "Short version · one sentence",
    },
    photography: null,
    photoNotes: [],
  },
  {
    file: "NeoVerse Media Guide",
    name: "NeoVerse",
    eyebrowColor: "#168340",
    tint: "#E8F4ED",
    grades: "K–8 General Education",
    tagline: "Grounded in purpose. Growing with power.",
    intro:
      "Everything you need to represent NeoVerse correctly: official logo files, exact color values, fonts, and ready-to-use copy. If it is not in this guide, please ask before improvising.",
    logos: [
      { src: "Neoverse/NeoVerse combo logo.png", name: "Primary logo · green", desc: "The full NeoVerse wordmark with the sprout emblem. Use this first." },
      { src: "Neoverse/NeoVerse combo logo black.png", name: "Wordmark · black", desc: "One-color version for documents, forms, and anywhere color printing is limited." },
    ],
    paletteTitle: "NeoVerse palette",
    paletteNote:
      "NeoVerse Green is the signature color; every other value below is an approved shade of it. For print, give your printer the HEX code and ask them to match it. Never eyedrop colors from photos or screenshots.",
    palette: [
      { name: "NeoVerse Green", hex: "#199549", rgb: "25, 149, 73", usage: "The signature color. Logo, buttons, key accents.", light: true },
      { name: "Deep Green", hex: "#0F562A", rgb: "15, 86, 42", usage: "Dark fills, hover states, headlines on green-washed backgrounds.", light: true },
      { name: "Light Green", hex: "#7AC295", rgb: "122, 194, 149", usage: "Decorative shapes and secondary accents." },
      { name: "Soft Green", hex: "#E8F4ED", rgb: "232, 244, 237", usage: "Section backgrounds and cards.", border: true },
      { name: "Text Green", hex: "#168340", rgb: "22, 131, 64", usage: "Green text on white or off-white. Passes WCAG AA contrast.", light: true },
    ],
    copy: {
      officialName: "NeoVerse",
      nameNote: "A world of NeoVerge Dream School.",
      serves: "K–8 General Education",
      tagline: "Grounded in purpose. Growing with power.",
      contact: ["info@neovergedreamschool.com", "neovergedreamschool.com/worlds/neoverse", "@neoverseearth on Instagram"],
      about:
        "Where curiosity takes root and intellect flourishes. NeoVerse is the K–8 general education world of NeoVerge Dream School, offering rigorous academics and rich enrichment, from garden science and project-based learning to languages, music, and wellness.",
      aboutLabel: "About paragraph · copy and paste",
      mission:
        "To nurture rooted, resilient learners through strong academics, integrated enrichment, and compassionate community.",
      missionLabel: "Mission",
    },
    photography:
      "NeoVerse photos feel grounded and hands-on: gardens, classrooms mid-project, and kids discovering things outdoors.",
    photoNotes: [
      "Natural daylight, warm and soft. Avoid harsh flash.",
      "Hands in the dirt, science tables, easels, real classroom moments.",
      "Greenery in frame whenever possible. It echoes the palette.",
      "Candid over posed. Curiosity should read on faces.",
    ],
  },
  {
    file: "Apex Media Guide",
    name: "Apex Inner System Athletics",
    eyebrowColor: "#447B83",
    tint: "#EFF6F7",
    grades: "Grades 6–12 + Post-Grad",
    tagline: "Flow with focus. Train with heart.",
    intro:
      "Everything you need to represent Apex correctly: official logo files, exact color values, fonts, and ready-to-use copy. If it is not in this guide, please ask before improvising.",
    logos: [
      { src: "Apex International Sports Academy (AISA)/apex combo logo.png", name: "Primary logo · stacked", desc: "APEX with the wave emblem and Inner System Athletics line. Use this first." },
      { src: "Apex International Sports Academy (AISA)/apex logo w APEX inner system athletics.png", name: "Horizontal lockup", desc: "Wave emblem beside the name. Best for wide spaces like banners and letterheads." },
      { src: "Apex International Sports Academy (AISA)/Apex Logo.png", name: "Wave emblem · circle", desc: "The icon alone. Profile pictures, app icons, small spaces." },
      { src: "Apex International Sports Academy (AISA)/Iconnobackground (1).png", name: "Wave · open", desc: "The wave without the circle. Watermarks and decorative use." },
      { src: "Apex International Sports Academy (AISA)/AISA plus text.png", name: "AISA lockup", desc: "Circle emblem with the AISA initials. Merch and shorthand uses." },
      { src: "Apex International Sports Academy (AISA)/Wave AISA.png", name: "AISA · open wave", desc: "Open wave with the AISA initials. Compact shorthand version." },
    ],
    paletteTitle: "Apex palette",
    paletteNote:
      "Apex Teal is the signature color; every other value below is an approved shade of it. For print, give your printer the HEX code and ask them to match it. Never eyedrop colors from photos or screenshots.",
    palette: [
      { name: "Apex Teal", hex: "#5DA9B3", rgb: "93, 169, 179", usage: "The signature color. Logo, buttons, key accents.", light: true },
      { name: "Deep Teal", hex: "#366268", rgb: "54, 98, 104", usage: "Dark fills, hover states, headlines on teal-washed backgrounds.", light: true },
      { name: "Light Teal", hex: "#A1CDD3", rgb: "161, 205, 211", usage: "Decorative shapes and secondary accents." },
      { name: "Soft Teal", hex: "#EFF6F7", rgb: "239, 246, 247", usage: "Section backgrounds and cards.", border: true },
      { name: "Text Teal", hex: "#447B83", rgb: "68, 123, 131", usage: "Teal text on white or off-white. Passes WCAG AA contrast.", light: true },
    ],
    copy: {
      officialName: "Apex Inner System Athletics",
      nameNote: "A world of NeoVerge Dream School. “Apex” is fine after first mention.",
      serves: "Grades 6–12 + Post-Grad",
      tagline: "Flow with focus. Train with heart.",
      contact: ["apex@neovergedreamschool.com", "neovergedreamschool.com/worlds/apex", "@apexinnersystemathletics on Instagram"],
      about:
        "Where grit meets greatness. Apex is the athletic-academic world of NeoVerge Dream School, developing mentally strong, academically focused student-athletes through elite sports training, mindset coaching, and NCAA-aligned academics.",
      aboutLabel: "About paragraph · copy and paste",
      mission:
        "To build mentally tough, academically driven, and athletically elite student-athletes who lead with character on and off the court.",
      missionLabel: "Mission",
    },
    photography:
      "Apex photos move: live game action, training reps, focused faces. Real effort over staged poses.",
    photoNotes: [
      "Gym and court settings with honest, athletic light.",
      "Catch peak action: the layup, the rep, the huddle.",
      "Show the classroom side too. Apex is school plus sport.",
      "Teal accents in gear or background tie photos to the brand.",
    ],
  },
  {
    file: "Pulse Collective Media Guide",
    name: "Pulse Collective",
    eyebrowColor: "#A4631B",
    tint: "#FDF4E9",
    grades: "Performing Arts · K–12",
    tagline: "Ignite your spark. Move with meaning.",
    intro:
      "Everything you need to represent Pulse correctly: official logo files, exact color values, fonts, and ready-to-use copy. If it is not in this guide, please ask before improvising.",
    logos: [
      { src: "Pulse Collective/pulse color txt.png", name: "Primary logo · stacked", desc: "PULSE COLLECTIVE with the flame emblem. Use this first." },
      { src: "Pulse Collective/pulse Subschool Logo.png", name: "Flame emblem · circle", desc: "The icon alone. Profile pictures, app icons, small spaces." },
    ],
    paletteTitle: "Pulse palette",
    paletteNote:
      "Pulse Orange is the signature color; every other value below is an approved shade of it. For print, give your printer the HEX code and ask them to match it. Never eyedrop colors from photos or screenshots.",
    palette: [
      { name: "Pulse Orange", hex: "#EE8F27", rgb: "238, 143, 39", usage: "The signature color. Logo, buttons, key accents.", light: true },
      { name: "Deep Amber", hex: "#8A5317", rgb: "138, 83, 23", usage: "Dark fills, hover states, headlines on orange-washed backgrounds.", light: true },
      { name: "Light Orange", hex: "#F5BE82", rgb: "245, 190, 130", usage: "Decorative shapes and secondary accents." },
      { name: "Soft Cream", hex: "#FDF4E9", rgb: "253, 244, 233", usage: "Section backgrounds and cards.", border: true },
      { name: "Text Amber", hex: "#A4631B", rgb: "164, 99, 27", usage: "Orange text on white or off-white. Passes WCAG AA contrast.", light: true },
    ],
    copy: {
      officialName: "Pulse Collective",
      nameNote: "A world of NeoVerge Dream School. “Pulse” is fine after first mention.",
      serves: "Performing Arts · K–12",
      tagline: "Ignite your spark. Move with meaning.",
      contact: ["info@neovergedreamschool.com", "neovergedreamschool.com/worlds/pulse", "@pulsecollectivefire on Instagram"],
      about:
        "Where passion takes center stage. Pulse Collective is the performing-arts world of NeoVerge Dream School, a bold track where young artists shine in dance, musical theatre, and acting, all while receiving personalized academic support.",
      aboutLabel: "About paragraph · copy and paste",
      mission:
        "To cultivate young artists who express boldly, train passionately, and perform with heart while receiving rigorous, personalized academic instruction.",
      missionLabel: "Mission",
    },
    photography:
      "Pulse photos perform: stage light, motion blur in the right places, expression front and center.",
    photoNotes: [
      "Stage and studio settings, warm directional light.",
      "Capture mid-movement: leaps, turns, the held note.",
      "Costumes and stage wear welcome. Energy over formality.",
      "Warm tones photograph best against the orange palette.",
    ],
  },
  {
    file: "WorldWise Media Guide",
    name: "WorldWise Hybrid Academy",
    eyebrowColor: "#717375",
    tint: "#F6F7F7",
    grades: "K–12 Hybrid Homeschool",
    tagline: "Freedom to learn. Space to soar.",
    intro:
      "Everything you need to represent WorldWise correctly: official logo files, exact color values, fonts, and ready-to-use copy. If it is not in this guide, please ask before improvising.",
    logos: [
      { src: "WorldWise/worldwise color txt.png", name: "Primary logo · stacked", desc: "WORLDWISE with the wind emblem. Use this first." },
      { src: "WorldWise/worlwise w txt black.png", name: "Stacked logo · black", desc: "One-color version for documents, forms, and anywhere color printing is limited." },
      { src: "WorldWise/worldwise.png", name: "Wind emblem · circle", desc: "The icon alone. Profile pictures, app icons, small spaces." },
    ],
    paletteTitle: "WorldWise palette",
    paletteNote:
      "WorldWise Silver is the signature color; every other value below is an approved shade of it. For print, give your printer the HEX code and ask them to match it. Never eyedrop colors from photos or screenshots.",
    palette: [
      { name: "WorldWise Silver", hex: "#A9ABAE", rgb: "169, 171, 174", usage: "The signature color. Logo, buttons, key accents.", light: true },
      { name: "Deep Slate", hex: "#626365", rgb: "98, 99, 101", usage: "Dark fills, hover states, headlines on silver-washed backgrounds.", light: true },
      { name: "Light Silver", hex: "#CDCED0", rgb: "205, 206, 208", usage: "Decorative shapes and secondary accents." },
      { name: "Soft Silver", hex: "#F6F7F7", rgb: "246, 247, 247", usage: "Section backgrounds and cards.", border: true },
      { name: "Text Slate", hex: "#717375", rgb: "113, 115, 117", usage: "Slate text on white or off-white. Passes WCAG AA contrast.", light: true },
    ],
    copy: {
      officialName: "WorldWise Hybrid Academy",
      nameNote: "A world of NeoVerge Dream School. “WorldWise” is fine after first mention.",
      serves: "K–12 Hybrid Homeschool",
      tagline: "Freedom to learn. Space to soar.",
      contact: ["info@neovergedreamschool.com", "neovergedreamschool.com/worlds/worldwise", "@worldwiseair on Instagram"],
      about:
        "For learners who chart their own course. WorldWise is the hybrid homeschool world of NeoVerge Dream School, blending the flexibility of homeschooling with the community of in-person learning through collaborative drop-off days, global studies, and hands-on exploration.",
      aboutLabel: "About paragraph · copy and paste",
      mission:
        "To empower homeschoolers and independent learners with flexible structure, social connection, and meaningful enrichment.",
      missionLabel: "Mission",
    },
    photography:
      "WorldWise photos breathe: open spaces, small groups, field trips, learning that happens everywhere.",
    photoNotes: [
      "Bright, airy light. Outdoors and open rooms over tight interiors.",
      "Small collaborative groups, mixed ages, parents welcome in frame.",
      "Maps, globes, travel, and nature props reinforce the global theme.",
      "Keep compositions uncluttered. White space is part of the look.",
    ],
  },
];

const css = `
@font-face { font-family: "Space Grotesk"; font-weight: 400; src: url("${font("space-grotesk-400.woff2")}") format("woff2"); }
@font-face { font-family: "Space Grotesk"; font-weight: 500; src: url("${font("space-grotesk-500.woff2")}") format("woff2"); }
@font-face { font-family: "Space Grotesk"; font-weight: 700; src: url("${font("space-grotesk-700.woff2")}") format("woff2"); }
@font-face { font-family: "Geist"; font-weight: 400; src: url("${font("geist-400.woff2")}") format("woff2"); }
@font-face { font-family: "Geist"; font-weight: 500; src: url("${font("geist-500.woff2")}") format("woff2"); }
@font-face { font-family: "Geist"; font-weight: 600; src: url("${font("geist-600.woff2")}") format("woff2"); }
@font-face { font-family: "Geist"; font-weight: 700; src: url("${font("geist-700.woff2")}") format("woff2"); }

* { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
@page { size: letter; margin: 0.55in; }
html, body { margin: 0; padding: 0; }
body { font-family: "Geist", Arial, sans-serif; font-size: 10pt; line-height: 1.55; color: #1A1A1A; background: #fff; }
h1, h2, h3 { font-family: "Space Grotesk", Arial, sans-serif; font-weight: 500; line-height: 1.15; margin: 0; }
p { margin: 0; }

.band { border-radius: 16px; padding: 34px 36px; margin-bottom: 26px; }
.eyebrow { font-size: 7.5pt; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; }
.band h1 { font-size: 27pt; letter-spacing: -0.02em; margin-top: 10px; }
.band .intro { margin-top: 12px; font-size: 10.5pt; color: #444; max-width: 600px; }
.band .meta { margin-top: 12px; font-size: 8.5pt; color: #6B6B66; letter-spacing: 0.02em; }

section { margin-top: 20px; }
section h2 { font-size: 16pt; letter-spacing: -0.01em; margin-top: 4px; }
.section-note { margin-top: 6px; max-width: 620px; color: #6B6B66; }
.sub { font-size: 7.5pt; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #A8A8A2; margin-top: 18px; }

.grid { display: grid; gap: 10px; margin-top: 12px; }
.cols-2 { grid-template-columns: repeat(2, 1fr); }
.cols-3 { grid-template-columns: repeat(3, 1fr); }
.cols-5 { grid-template-columns: repeat(5, 1fr); }

.card { border: 1px solid rgba(26,26,26,0.12); border-radius: 12px; overflow: hidden; background: #fff; break-inside: avoid; }
.logo-card .img { height: 118px; display: flex; align-items: center; justify-content: center; padding: 16px; background: #FAFAF7; border-bottom: 1px solid rgba(26,26,26,0.08); }
.logo-card img { max-height: 100%; max-width: 100%; object-fit: contain; }
.logo-card .body { padding: 10px 12px 12px; }
.logo-card .name { font-family: "Space Grotesk"; font-weight: 500; font-size: 10pt; }
.logo-card .desc { color: #6B6B66; font-size: 8.5pt; margin-top: 2px; }
.logo-card .file { font-size: 7.5pt; color: #A8A8A2; margin-top: 6px; word-break: break-all; }
.logo-card .file b { color: #6B6B66; font-weight: 600; }

.swatch .chip { height: 56px; display: flex; align-items: flex-end; padding: 6px 8px; }
.swatch .chip span { font-size: 7.5pt; letter-spacing: 0.02em; }
.swatch .body { padding: 8px 10px 10px; }
.swatch .name { font-weight: 600; font-size: 8.5pt; }
.swatch .rgb { font-size: 7.5pt; color: #A8A8A2; }
.swatch .usage { font-size: 7.5pt; color: #6B6B66; margin-top: 4px; }

.type-card { padding: 18px 20px; }
.type-card .specimen { font-size: 21pt; margin-top: 8px; }
.type-card .alphabet { font-size: 11pt; margin-top: 6px; }
.type-card .desc { color: #6B6B66; font-size: 8.5pt; margin-top: 8px; }

.copy-grid { display: grid; grid-template-columns: 200px 1fr; gap: 12px; margin-top: 12px; }
.copy-facts > div { margin-bottom: 14px; }
.copy-facts .v { font-size: 10pt; margin-top: 2px; }
.copy-facts .n { font-size: 8pt; color: #A8A8A2; }
.copy-block { padding: 12px 18px; margin-bottom: 8px; }
.copy-block .text { font-size: 10.5pt; margin-top: 8px; }

.rules { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 12px; }
.rules .card { padding: 12px 18px; }
.rules h3 { font-size: 11.5pt; margin-bottom: 8px; }
.rules ul { margin: 0; padding-left: 16px; color: #6B6B66; }
.rules li { margin-bottom: 4px; }

.photo-notes { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 8px; }
.photo-notes .card { padding: 7px 12px; color: #6B6B66; font-size: 8pt; }

footer { margin-top: 14px; padding-top: 10px; border-top: 1px solid rgba(26,26,26,0.12); display: flex; justify-content: space-between; font-size: 8pt; color: #A8A8A2; break-inside: avoid; }
`;

const swatch = (c, h = 56) => `
  <div class="card swatch">
    <div class="chip" style="background:${c.hex}; height:${h}px; ${c.border ? "border-bottom:1px solid rgba(26,26,26,0.08);" : ""}">
      <span style="color:${c.light ? "rgba(255,255,255,0.92)" : "rgba(26,26,26,0.65)"}">${c.hex}</span>
    </div>
    <div class="body">
      <p class="name">${c.name}</p>
      <p class="rgb">RGB ${c.rgb}</p>
      <p class="usage">${c.usage}</p>
    </div>
  </div>`;

function page(g) {
  const logoCols = g.logos.length <= 3 ? "cols-2" : "cols-3";
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${g.name} Media Guide</title><style>${css}</style></head>
<body>

<header class="band" style="background:${g.tint}">
  <p class="eyebrow" style="color:${g.eyebrowColor}">NeoVerge Dream School · Media Guide</p>
  <h1>${g.name}</h1>
  <p class="intro">${g.intro}</p>
  <p class="meta">${g.grades} &nbsp;·&nbsp; “${g.tagline}”</p>
</header>

<section>
  <p class="eyebrow" style="color:${g.eyebrowColor}">01 · Logos</p>
  <h2>Official logo files</h2>
  <p class="section-note">These are the only approved logo files. They are high-resolution with transparent backgrounds, ready for print and screen. Each card lists where the file lives inside the “Neoverge Dream School” folder.</p>
  <div class="grid ${logoCols}">
    ${g.logos.map((l) => `
    <div class="card logo-card">
      <div class="img"><img src="${f(l.src)}" alt="${l.name}"></div>
      <div class="body">
        <p class="name">${l.name}</p>
        <p class="desc">${l.desc}</p>
        <p class="file"><b>File:</b> ${l.src.replaceAll("/", " / ")}</p>
      </div>
    </div>`).join("")}
  </div>
</section>

<section>
  <p class="eyebrow" style="color:${g.eyebrowColor}">02 · Colors</p>
  <h2>Color palette</h2>
  <p class="section-note">${g.paletteNote}</p>
  <p class="sub">${g.paletteTitle}</p>
  <div class="grid cols-5">${g.palette.map((c) => swatch(c)).join("")}</div>
  <p class="sub">Shared neutrals · used by every world</p>
  <div class="grid cols-5">${neutrals.map((c) => swatch(c, 40)).join("")}</div>
</section>

<section>
  <p class="eyebrow" style="color:${g.eyebrowColor}">03 · Typography</p>
  <h2>Fonts</h2>
  <div class="grid cols-2">
    <div class="card type-card">
      <p class="sub" style="margin-top:0">Headlines</p>
      <p class="specimen" style="font-family:'Space Grotesk'">Space Grotesk</p>
      <p class="alphabet" style="font-family:'Space Grotesk'">ABCDEFGHIJKLM abcdefghijklm 0123456789</p>
      <p class="desc">Used for every headline and title, usually in the Medium (500) weight. Free from Google Fonts: fonts.google.com/specimen/Space+Grotesk</p>
    </div>
    <div class="card type-card">
      <p class="sub" style="margin-top:0">Body text</p>
      <p class="specimen" style="font-family:'Geist'">Geist</p>
      <p class="alphabet" style="font-family:'Geist'">ABCDEFGHIJKLM abcdefghijklm 0123456789</p>
      <p class="desc">Used for paragraphs, captions, and buttons, usually Regular (400) and Semibold (600). Free from Vercel: vercel.com/font</p>
    </div>
  </div>
  <p class="section-note" style="margin-top:10px">If neither font is available (for example in a shared document), Arial is the approved stand-in. Never substitute decorative or script fonts.</p>
</section>

<section style="break-before: page;">
  <p class="eyebrow" style="color:${g.eyebrowColor}">04 · Copy</p>
  <h2>Name, tagline &amp; boilerplate</h2>
  <div class="copy-grid">
    <div class="copy-facts">
      <div><p class="sub" style="margin-top:0">Official name</p><p class="v" style="font-family:'Space Grotesk'">${g.copy.officialName}</p><p class="n">${g.copy.nameNote}</p></div>
      <div><p class="sub" style="margin-top:0">Serves</p><p class="v">${g.copy.serves}</p></div>
      <div><p class="sub" style="margin-top:0">Tagline</p><p class="v">“${g.copy.tagline}”</p></div>
      <div><p class="sub" style="margin-top:0">Contact</p>${g.copy.contact.map((c) => `<p class="v" style="font-size:9pt">${c}</p>`).join("")}</div>
    </div>
    <div>
      <div class="card copy-block"><p class="sub" style="margin-top:0">${g.copy.aboutLabel}</p><p class="text">${g.copy.about}</p></div>
      <div class="card copy-block"><p class="sub" style="margin-top:0">${g.copy.missionLabel}</p><p class="text">${g.copy.mission}</p></div>
    </div>
  </div>
</section>

<section>
  <p class="eyebrow" style="color:${g.eyebrowColor}">05 · Rules</p>
  <h2>Using the brand</h2>
  <div class="rules">
    <div class="card"><h3>Always</h3><ul>${sharedRules.always.map((r) => `<li>${r}</li>`).join("")}</ul></div>
    <div class="card"><h3>Never</h3><ul>${sharedRules.never.map((r) => `<li>${r}</li>`).join("")}</ul></div>
  </div>
  ${g.photography ? `
  <p class="section-note" style="margin-top:14px">${g.photography} Quick guidance for shoots and submitted photos:</p>
  <div class="photo-notes">${g.photoNotes.map((n) => `<div class="card">${n}</div>`).join("")}</div>` : ""}
</section>

<footer>
  <span>${g.copy.officialName} · Media Guide</span>
  <span>June 2026 · questions: ${g.copy.contact[0]}</span>
</footer>

</body></html>`;
}

for (const g of guides) {
  const out = path.join(OUT, g.file + ".html");
  fs.writeFileSync(out, page(g), "utf8");
  console.log("wrote", out);
}
