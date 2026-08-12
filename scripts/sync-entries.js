#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, "js", "data");
const PAGES = ["index.html", "entry.html", "collection.html"];

const MARK_START = "<!-- ENTRY-SCRIPTS:BEGIN -->";
const MARK_END = "<!-- ENTRY-SCRIPTS:END -->";

const ENTRY_SCRIPT_RE = /<script src="js\/data\/(?!index\.js\/?")[^"]+"><\/script>/;

function collectEntryFiles(dir) {
  const files = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      files.push(...collectEntryFiles(full));
    } else if (name.endsWith(".js") && !name.startsWith("_") && name !== "index.js") {
      files.push(full);
    }
  }
  return files.sort();
}

function scriptTag(filePath) {
  const rel = path.relative(ROOT, filePath).split(path.sep).join("/");
  return `<script src="${rel}"></script>`;
}

function buildBlockLines(entryFiles) {
  return [MARK_START, ...entryFiles.map(scriptTag), MARK_END];
}

function replaceBlock(lines, blockLines, page) {
  const startIdx = lines.findIndex(l => l.includes(MARK_START));
  const endIdx = lines.findIndex(l => l.includes(MARK_END));

  if (startIdx !== -1 && endIdx !== -1) {
    if (endIdx < startIdx) {
      throw new Error(`Markers out of order in ${page}`);
    }
    lines.splice(startIdx, endIdx - startIdx + 1, ...blockLines);
    return true;
  }

  if (startIdx !== -1 || endIdx !== -1) {
    throw new Error(`Only one marker found in ${page}`);
  }

  const idxJs = lines.findIndex(l =>
    l.trim() === '<script src="js/data/index.js"></script>'
  );
  if (idxJs === -1) {
    throw new Error(
      `Could not find the js/data/index.js script tag in ${page} to place markers`
    );
  }

  let j = idxJs + 1;
  while (j < lines.length && lines[j].trim().match(ENTRY_SCRIPT_RE)) {
    j++;
  }
  lines.splice(idxJs + 1, j - (idxJs + 1), ...blockLines);
  return false;
}

let changed = 0;
let created = 0;

const entryFiles = collectEntryFiles(DATA_DIR);
const blockLines = buildBlockLines(entryFiles);

console.log(`Found ${entryFiles.length} entry file(s):`);
for (const file of entryFiles) {
  console.log(`  ${path.relative(ROOT, file)}`);
}
console.log();

for (const page of PAGES) {
  const pagePath = path.join(ROOT, page);
  if (!fs.existsSync(pagePath)) {
    console.log(`SKIP ${page} (does not exist)`);
    continue;
  }

  const original = fs.readFileSync(pagePath, "utf8");
  const lines = original.split("\n");
  const markersFound = replaceBlock(lines, blockLines, page);
  const updated = lines.join("\n");

  if (updated === original) {
    console.log(`OK    ${page} (already in sync)`);
    continue;
  }

  fs.writeFileSync(pagePath, updated);
  changed++;
  if (!markersFound) created++;
  console.log(`${markersFound ? "UPD " : "NEW "} ${page}`);
}

console.log();
console.log(`Done. Updated ${changed} page(s), added markers to ${created} of them.`);