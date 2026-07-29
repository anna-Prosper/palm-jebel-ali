#!/usr/bin/env node
// Prints the next N pending backlog items (those whose content file does not
// exist yet), as JSON. Used by the page-factory run to pick deterministically.
//   node scripts/pending.mjs [N]   (default N=5)

import { existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const N = Number(process.argv[2] || 5);

const backlog = JSON.parse(readFileSync(join(ROOT, "scripts", "content-backlog.json"), "utf8"));
const items = backlog.items || [];

const pending = items.filter((it) => !existsSync(join(ROOT, "lib", "content", `${it.file}.ts`)));
const built = items.length - pending.length;

const next = pending.slice(0, N);

console.log(
  JSON.stringify(
    {
      totalBacklog: items.length,
      built,
      pending: pending.length,
      picking: next.length,
      exhausted: pending.length === 0,
      next,
    },
    null,
    2,
  ),
);
