import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Finally \u2014 a shutdown I can't talk my way out of.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
