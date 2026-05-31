// One-off image optimizer: resize + convert source photos to WebP for the web.
// Run from the project root: node scripts/optimize-images.mjs
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";

const src = "C:/Users/shaun/OneDrive/Desktop/neoverge-site/images";
const out = "C:/Users/shaun/Desktop/neoverge-site/public/images";
fs.mkdirSync(out, { recursive: true });

const jobs = [
  ["#12.png", "apex-team-studio.webp"],
  ["410A589999-2.jpg", "apex-team-gym.webp"],
  ["410A6679.png", "apex-team-bench.webp"],
];

for (const [s, d] of jobs) {
  const inPath = path.join(src, s);
  if (!fs.existsSync(inPath)) { console.log("MISSING", s); continue; }
  await sharp(inPath)
    .resize({ width: 2000, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(out, d));
  const kb = Math.round(fs.statSync(path.join(out, d)).size / 1024);
  console.log(`wrote ${d} (${kb} KB)`);
}
