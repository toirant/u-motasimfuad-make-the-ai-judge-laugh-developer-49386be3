// Make the AI Judge Laugh: Developer Excuses
// Writes one funny single-line developer excuse for broken production code
// to /output/entry.txt (OUTPUT_DIR env var overrides the directory).
// Plain `node main.ts`, no dependencies, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "Production isn't broken — the deploy just promoted the branch I swore I deleted, and honestly it's the most reliable thing we've shipped all quarter.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
