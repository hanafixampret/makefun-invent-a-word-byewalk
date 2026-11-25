import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Byewalk (n.) — saying goodbye to someone, then realizing you're walking the same way.";

// Byewalk names the universally felt, unnamed moment after a farewell
// when both people discover they are headed the same direction.

function main(): void {
  if (ENTRY.length < 1 || ENTRY.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${ENTRY.length}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

main();
