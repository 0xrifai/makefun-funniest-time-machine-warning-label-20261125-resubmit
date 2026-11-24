// Funniest Time Machine Warning Label — make.fun entry.
//
// Writes the one-line label to the ABSOLUTE path /output/entry.txt, which
// is where the sealed scorer reads it. Never write to a relative output/
// directory next to this script: a previous entry failed grading with
// "execution 1: the program exited with code 1" for exactly that mistake.
// After writing, the file is read back and checked byte-for-byte.
//
// Node standard library only. Run with: node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: Do not meet yourself. If you do, one of you must go home — and he has already taken your keys.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  if (LABEL.length < 1 || LABEL.length > 120) {
    throw new Error(`Label must be 1-120 characters, got ${LABEL.length}`);
  }
  if (LABEL.trim() !== LABEL || LABEL.includes("\n")) {
    throw new Error("Label must be a single line with no surrounding whitespace");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, LABEL, "utf8");

  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== LABEL) {
    throw new Error("Verification failed: /output/entry.txt does not match the label");
  }
  if (written.length !== 103) {
    throw new Error(`Verification failed: expected 103 characters, got ${written.length}`);
  }
  console.log(`Wrote ${written.length} characters to ${OUTPUT_PATH}`);
}

main();
