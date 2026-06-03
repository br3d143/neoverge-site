// Dev check: list any photo used on more than one built page (logos excluded).
import fs from "node:fs";
import path from "node:path";

function walk(d) {
  let r = [];
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) r = r.concat(walk(p));
    else if (f.name.endsWith(".html")) r.push(p);
  }
  return r;
}

const usage = {};
for (const f of walk("dist")) {
  if (f.includes("style-guide")) continue; // internal design reference
  const html = fs.readFileSync(f, "utf8");
  const re = /\/images\/[a-z0-9/_.-]+\.webp/gi;
  const seen = new Set();
  let m;
  while ((m = re.exec(html))) seen.add(m[0]);
  const page = f.split(path.sep).join("/").replace("dist", "").replace("/index.html", "") || "/";
  for (const img of seen) (usage[img] = usage[img] || []).push(page);
}

let dups = 0;
for (const [img, pages] of Object.entries(usage).sort()) {
  if (pages.length > 1) {
    dups++;
    console.log("REUSED:", img, "->", pages.join(", "));
  }
}
console.log(dups === 0 ? "NO DUPLICATES — every photo is used on exactly one page" : dups + " duplicates found");
