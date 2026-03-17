const fs = require("fs/promises");
const path = require("path");

const WIN1252_MAP = {
  0x80: 0x20ac,
  0x82: 0x201a,
  0x83: 0x0192,
  0x84: 0x201e,
  0x85: 0x2026,
  0x86: 0x2020,
  0x87: 0x2021,
  0x88: 0x02c6,
  0x89: 0x2030,
  0x8a: 0x0160,
  0x8b: 0x2039,
  0x8c: 0x0152,
  0x8e: 0x017d,
  0x91: 0x2018,
  0x92: 0x2019,
  0x93: 0x201c,
  0x94: 0x201d,
  0x95: 0x2022,
  0x96: 0x2013,
  0x97: 0x2014,
  0x98: 0x02dc,
  0x99: 0x2122,
  0x9a: 0x0161,
  0x9b: 0x203a,
  0x9c: 0x0153,
  0x9e: 0x017e,
  0x9f: 0x0178,
};

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

function decodeUtf8WithWin1252Fallback(buffer) {
  let out = "";
  let changed = false;
  for (let i = 0; i < buffer.length; ) {
    const b1 = buffer[i];
    if (b1 <= 0x7f) {
      out += String.fromCharCode(b1);
      i += 1;
      continue;
    }

    // Invalid leading continuation byte.
    if (b1 >= 0x80 && b1 <= 0xbf) {
      const mapped = WIN1252_MAP[b1] ?? b1;
      out += String.fromCharCode(mapped);
      changed = true;
      i += 1;
      continue;
    }

    // 2-byte sequence
    if (b1 >= 0xc2 && b1 <= 0xdf) {
      const b2 = buffer[i + 1];
      if (b2 === undefined || b2 < 0x80 || b2 > 0xbf) {
        const mapped = WIN1252_MAP[b1] ?? b1;
        out += String.fromCharCode(mapped);
        changed = true;
        i += 1;
        continue;
      }
      const codePoint = ((b1 & 0x1f) << 6) | (b2 & 0x3f);
      out += String.fromCharCode(codePoint);
      i += 2;
      continue;
    }

    // 3-byte sequence
    if (b1 >= 0xe0 && b1 <= 0xef) {
      const b2 = buffer[i + 1];
      const b3 = buffer[i + 2];
      const validB2 =
        b2 !== undefined &&
        ((b1 === 0xe0 && b2 >= 0xa0 && b2 <= 0xbf) ||
          (b1 === 0xed && b2 >= 0x80 && b2 <= 0x9f) ||
          (b1 !== 0xe0 && b1 !== 0xed && b2 >= 0x80 && b2 <= 0xbf));
      const validB3 = b3 !== undefined && b3 >= 0x80 && b3 <= 0xbf;
      if (!validB2 || !validB3) {
        const mapped = WIN1252_MAP[b1] ?? b1;
        out += String.fromCharCode(mapped);
        changed = true;
        i += 1;
        continue;
      }
      const codePoint =
        ((b1 & 0x0f) << 12) | ((b2 & 0x3f) << 6) | (b3 & 0x3f);
      out += String.fromCharCode(codePoint);
      i += 3;
      continue;
    }

    // 4-byte sequence
    if (b1 >= 0xf0 && b1 <= 0xf4) {
      const b2 = buffer[i + 1];
      const b3 = buffer[i + 2];
      const b4 = buffer[i + 3];
      const validB2 =
        b2 !== undefined &&
        ((b1 === 0xf0 && b2 >= 0x90 && b2 <= 0xbf) ||
          (b1 === 0xf4 && b2 >= 0x80 && b2 <= 0x8f) ||
          (b1 !== 0xf0 && b1 !== 0xf4 && b2 >= 0x80 && b2 <= 0xbf));
      const validB3 = b3 !== undefined && b3 >= 0x80 && b3 <= 0xbf;
      const validB4 = b4 !== undefined && b4 >= 0x80 && b4 <= 0xbf;
      if (!validB2 || !validB3 || !validB4) {
        const mapped = WIN1252_MAP[b1] ?? b1;
        out += String.fromCharCode(mapped);
        changed = true;
        i += 1;
        continue;
      }
      let codePoint =
        ((b1 & 0x07) << 18) |
        ((b2 & 0x3f) << 12) |
        ((b3 & 0x3f) << 6) |
        (b4 & 0x3f);
      codePoint -= 0x10000;
      const high = 0xd800 + (codePoint >> 10);
      const low = 0xdc00 + (codePoint & 0x3ff);
      out += String.fromCharCode(high, low);
      i += 4;
      continue;
    }

    // Invalid leading byte (0xC0, 0xC1, 0xF5-0xFF)
    const mapped = WIN1252_MAP[b1] ?? b1;
    out += String.fromCharCode(mapped);
    changed = true;
    i += 1;
  }

  return { out, changed };
}

async function main() {
  const root = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve("app");
  const touched = [];

  for await (const filePath of walk(root)) {
    const buffer = await fs.readFile(filePath);
    const { out, changed } = decodeUtf8WithWin1252Fallback(buffer);
    if (!changed) continue;

    await fs.writeFile(filePath, out, "utf8");
    touched.push(filePath);
  }

  if (touched.length === 0) {
    console.log("No files updated. No invalid UTF-8 sequences found.");
  } else {
    console.log("Updated files:");
    for (const file of touched) {
      console.log(file);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
