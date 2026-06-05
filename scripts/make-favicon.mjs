// One-off: build the favicon set from the NeoVerge circle emblem.
// Trims transparent edges, centers on a square canvas, exports PNG sizes,
// and writes a favicon.ico (ICO container with an embedded 32px PNG).
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const SRC = "public/brand/neoverge-circle.png";

// Trim transparent border so the circle fills the canvas edge-to-edge,
// then add a hair of padding so the ring never touches the tab edge.
const trimmed = await sharp(SRC).trim().toBuffer();
const meta = await sharp(trimmed).metadata();
const side = Math.max(meta.width, meta.height);
const pad = Math.round(side * 0.03);
const square = await sharp(trimmed)
  .resize(side + pad * 2, side + pad * 2, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

async function out(size, file, opts = {}) {
  let img = sharp(square).resize(size, size);
  if (opts.flatten) img = img.flatten({ background: "#ffffff" });
  const buf = await img.png().toBuffer();
  if (file) writeFileSync(file, buf);
  return buf;
}

await out(96, "public/favicon.png");
await out(192, "public/icon-192.png");
await out(180, "public/apple-touch-icon.png", { flatten: true }); // iOS dislikes alpha

// favicon.ico — ICO directory wrapping a single 32x32 PNG (supported everywhere modern)
const png32 = await out(32, null);
const header = Buffer.alloc(6 + 16);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // count
header.writeUInt8(32, 6); // width
header.writeUInt8(32, 7); // height
header.writeUInt8(0, 8); // palette
header.writeUInt8(0, 9); // reserved
header.writeUInt16LE(1, 10); // planes
header.writeUInt16LE(32, 12); // bpp
header.writeUInt32LE(png32.length, 14); // size
header.writeUInt32LE(22, 18); // offset
writeFileSync("public/favicon.ico", Buffer.concat([header, png32]));

console.log("favicon set written: favicon.png 96, icon-192.png, apple-touch-icon.png 180 (white bg), favicon.ico 32");
