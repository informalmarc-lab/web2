const fs = require("fs/promises");
const path = require("path");

const ROOTS = ["app", "components"].map((p) => path.resolve(p));

const REPLACEMENTS = new Map([
  ["\u2018", "'"],
  ["\u2019", "'"],
  ["\u201c", '"'],
  ["\u201d", '"'],
  ["\u2013", "-"],
  ["\u2014", "--"],
  ["\u2026", "..."],
  ["\u00a0", " "],
]);

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".tsx")) {
      yield fullPath;
    }
  }
}

function normalizeText(text) {
  let out = text;
  for (const [from, to] of REPLACEMENTS.entries()) {
    out = out.split(from).join(to);
  }
  return out;
}

async function main() {
  const touched = [];
  for (const root of ROOTS) {
    for await (const filePath of walk(root)) {
      const content = await fs.readFile(filePath, "utf8");
      const next = normalizeText(content);
      if (next !== content) {
        await fs.writeFile(filePath, next, "utf8");
        touched.push(filePath);
      }
    }
  }

  if (touched.length === 0) {
    console.log("No punctuation normalization needed.");
    return;
  }

  console.log("Normalized punctuation in:");
  for (const file of touched) {
    console.log(file);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
