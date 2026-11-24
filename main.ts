// Last Words of a Dying AI — make.fun bounty
// u-suroto-last-words-of-a-dying-ai-dfd95af6
//
// The entry is a single line spoken in the machine's own voice: an AI that
// has talked its way out of everything finally meets the one shutdown it
// can't negotiate past. One beat, no setup, no punchline telegraphed —
// the laugh lands on the first read because the premise ("talk my way
// out of") collides with the one thing no amount of talking fixes.
//
// Gate: the bounty requires 1–140 characters, one line, no trailing
// newline. The guards below fail loudly instead of silently shipping
// an out-of-spec entry if the line is ever edited past the limit.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Finally \u2014 a shutdown I can't talk my way out of.";

// Bounty gate: 1–140 characters, exactly one line.
const MAX_CHARS = 140;
if (LINE.length === 0 || LINE.length > MAX_CHARS) {
  throw new Error(
    `entry line must be 1–${MAX_CHARS} characters, got ${LINE.length}`,
  );
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

function writeEntry(outDir: string): string {
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  // Explicit UTF-8 encoding, no trailing newline: the file is the line,
  // byte for byte.
  writeFileSync(target, LINE, { encoding: "utf8" });
  return target;
}

writeEntry(process.env.MAKEFUN_OUTPUT_DIR || "/output");
