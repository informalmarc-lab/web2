const fs = require("fs/promises");
const path = require("path");

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

function buildLineStarts(buffer) {
  const starts = [0];
  for (let i = 0; i < buffer.length; i += 1) {
    if (buffer[i] === 0x0a) {
      starts.push(i + 1);
    }
  }
  return starts;
}

function lineNumberForIndex(lineStarts, index) {
  let low = 0;
  let high = lineStarts.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (lineStarts[mid] <= index) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high + 1; // 1-based
}

function hexBytes(buffer, start, count = 4) {
  const slice = buffer.slice(start, Math.min(buffer.length, start + count));
  return Array.from(slice, (b) => b.toString(16).padStart(2, "0")).join(" ");
}

function findInvalidUtf8(buffer) {
  const invalid = [];
  let i = 0;
  while (i < buffer.length) {
    const b1 = buffer[i];
    if (b1 <= 0x7f) {
      i += 1;
      continue;
    }

    // Continuation byte without a leading byte.
    if (b1 >= 0x80 && b1 <= 0xbf) {
      invalid.push({ index: i });
      i += 1;
      continue;
    }

    if (b1 >= 0xc2 && b1 <= 0xdf) {
      const b2 = buffer[i + 1];
      if (b2 === undefined || b2 < 0x80 || b2 > 0xbf) {
        invalid.push({ index: i });
        i += 1;
        continue;
      }
      i += 2;
      continue;
    }

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
        invalid.push({ index: i });
        i += 1;
        continue;
      }
      i += 3;
      continue;
    }

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
        invalid.push({ index: i });
        i += 1;
        continue;
      }
      i += 4;
      continue;
    }

    // Invalid leading byte (0xC0, 0xC1, 0xF5-0xFF)
    invalid.push({ index: i });
    i += 1;
  }

  return invalid;
}

async function main() {
  const root = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve("app");
  let found = false;

  for await (const filePath of walk(root)) {
    const buffer = await fs.readFile(filePath);
    const invalid = findInvalidUtf8(buffer);
    if (invalid.length === 0) continue;

    found = true;
    const lineStarts = buildLineStarts(buffer);
    for (const item of invalid) {
      const line = lineNumberForIndex(lineStarts, item.index);
      const bytes = hexBytes(buffer, item.index, 4);
      console.log(`${filePath}:${line} invalid UTF-8 bytes: ${bytes}`);
    }
  }

  if (!found) {
    console.log("No invalid UTF-8 sequences found in .tsx files under app.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
