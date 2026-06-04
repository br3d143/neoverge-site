// One-off: pull embedded images out of the staff-card PDFs.
// Pass 1 found no raw JPEGs, so the images are FlateDecode (zlib) streams.
// Parse each /Subtype /Image object, inflate it, and rebuild a PNG via sharp.
import { readFileSync, mkdirSync, readdirSync } from "node:fs";
import { join, basename } from "node:path";
import { inflateSync } from "node:zlib";
import sharp from "sharp";

const srcDir = "C:/Users/shaun/OneDrive/Desktop/neoverge-site/Staff Cards";
const outDir = "C:/Users/shaun/Desktop/neoverge-site/tmp-staff";
mkdirSync(outDir, { recursive: true });

for (const file of readdirSync(srcDir).filter((f) => f.toLowerCase().endsWith(".pdf"))) {
  const buf = readFileSync(join(srcDir, file));
  const slug = basename(file, ".pdf").replace(/[^a-z0-9]+/gi, "-").toLowerCase();
  const text = buf.toString("latin1");
  let n = 0;

  // Find every image XObject dictionary followed by its stream
  const re = /<<([^>]*?\/Subtype\s*\/Image[^>]*?)>>\s*stream\r?\n/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const dict = m[1];
    const width = +(dict.match(/\/Width\s+(\d+)/)?.[1] ?? 0);
    const height = +(dict.match(/\/Height\s+(\d+)/)?.[1] ?? 0);
    const bpc = +(dict.match(/\/BitsPerComponent\s+(\d+)/)?.[1] ?? 8);
    const filter = dict.match(/\/Filter\s*\/?(\w+)/)?.[1] ?? "none";
    const cs = dict.match(/\/ColorSpace\s*\/?(\w+)/)?.[1] ?? "?";
    const len = +(dict.match(/\/Length\s+(\d+)/)?.[1] ?? 0);
    const streamStart = m.index + m[0].length;
    if (width * height < 40_000) continue; // skip icons/thumbnails

    console.log(`${file}: image ${n} ${width}x${height} bpc=${bpc} filter=${filter} cs=${cs} len=${len}`);
    try {
      const raw = buf.subarray(streamStart, len ? streamStart + len : text.indexOf("endstream", streamStart));
      if (filter === "FlateDecode") {
        const px = inflateSync(raw);
        const chans = Math.round(px.length / (width * height));
        if (![1, 3, 4].includes(chans)) { console.log(`  -> odd channel count ${chans}, skipping`); continue; }
        await sharp(px, { raw: { width, height, channels: chans } })
          .png()
          .toFile(join(outDir, `${slug}-${n}.png`));
        console.log(`  -> saved ${slug}-${n}.png (${chans} ch)`);
      } else if (filter === "DCTDecode") {
        await sharp(raw).png().toFile(join(outDir, `${slug}-${n}.png`));
        console.log(`  -> saved ${slug}-${n}.png (jpeg)`);
      } else {
        console.log(`  -> unsupported filter ${filter}`);
      }
    } catch (e) {
      console.log(`  -> failed: ${e.message}`);
    }
    n++;
  }
  if (n === 0) console.log(`${file}: no large images found`);
}
