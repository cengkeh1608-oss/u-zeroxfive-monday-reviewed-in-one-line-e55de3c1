import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = process.argv[2] ?? join(__dirname, "output");
mkdirSync(outDir, { recursive: true });

// One-line review of Monday: a single contrast — the fresh start Monday
// promised vs the 47-email thread it delivered — with the concrete detail
// ("titled 'quick question'") doing the whole joke in the last two words.
//
// Why this line won over the runner-up (D12: alarm → spreadsheet → printer,
// 23/25): D12 is a three-beat list, each beat landing but none carrying the
// line; D17 is one turn in one sentence, and the 47-email count plus the
// quoted subject line are the detail a coworker repeats the next morning.
const entry = "Monday promised a fresh start and delivered a 47-email thread titled 'quick question'.";
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
