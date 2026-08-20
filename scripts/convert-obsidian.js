#!/usr/bin/env node

// Converts the Obsidian vault at $VAULT_DIR

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const HOME = process.env.HOME || "";
const VAULT = process.env.VAULT_DIR || path.join(HOME, "obsidian", "worldbuilding");
const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, "js", "data");
const CONFIG_FILE = path.join(ROOT, "js", "config.js");
const INDEX_FILE = path.join(DATA_DIR, "index.js");

const COLLECTION_BY_FOLDER = {
  bestiary: "bestiary",
  continents: "continents",
  cosmologies: "cosmologies",
  history: "history",
  kingdoms: "kingdoms",
  languages: "languages",
  "magic-systems": "magic-systems",
  peoples: "peoples",
};

// md H1 title -> entry id. Existing entries keep their current id; the old
// "calendars" entry was renamed "Reckoning" in the vault, so it moves to
// history/reckoning.js.
const TITLE_TO_ID = {
  "Vaelkin": "vaelkin",
  "Medicinal Flora": "medicinal-flora",
  "The Dye-Flowers of the Vosarai": "vosarai-dyeflowers",
  "Kharsa, the Sunward March": "kharsa",
  "Kyre": "kyre",
  "Seabreeze": "seabreeze",
  "The Shattered Reach": "shattered-reach",
  "The Northern Wastes": "the-northern-wastes",
  "The Witchlands": "the-witchlands",
  "Vaelmourn, the Bonelands": "vaelmourn",
  "The Crown": "the-crown",
  "Reckoning": "reckoning",
  "Aurathil": "aurathil",
  "The Common Language": "common",
  "Vosarin": "vosarin",
  "Xazryn Boaawren": "xazryn",
  "Kyrite and Kinwork": "kyrite",
  "Marrowcraft": "marrowcraft",
  "The Waygates, and the Veil": "waygates",
  "Weaving": "weaving",
  "Windwork": "windwork",
  "The Driftfolk of the Shattered Reach": "driftfolk",
  "The Serevain": "serevain",
  "The Vosarai, Mouth of Flowers": "vosarai",
  "The Sundering": "the-sundering",
  "The Vhonic Magelords": "vhonic-magelords",
  "Split Soul": "split-soul",
  "The World": "the-world",
};

// Old id -> new id for entries that were renamed in the vault.
const RENAMES = { calendars: "reckoning" };

// When an existing JS section heading doesn't match any md heading by name,
// map it to the md heading it actually corresponds to.
const SECTION_ALIASES = {
  "shattered-reach": {
    "Before the Sundering": "Geological Background, Before",
  },
};

// Hand-written metadata for brand-new entries (the vault carries no
// summary/tags/subtitle, only body text).
const NEW_META = {
  vaelkin: {
    subtitle: "The Doctrine of the Dead God",
    summary:
      "Not a church or a single creed but the way the peoples of Vaelmourn belong to their dead god: the working conviction that Vaelkyr is not a myth explaining the continent so much as a still-present party to everything that happens on it. Doctrine kept unsettled on purpose — Wound, Lying-Down, and Emptying at once; Presence and Relic held together; the Choir deliberately weak — and made concrete in the Listening, ichor as sacrament, the Hollow, and the Serevain's Shroud and Climb.",
    tags: [
      "Vaelkin",
      "Vaelmourn",
      "Vaelkyr",
      "the Choir",
      "the Listening",
      "ichor",
      "the Hollow",
      "Presence doctrine",
      "Relic doctrine",
      "the Serevain",
      "the Shroud",
      "the Climb",
      "cosmology",
      "religion",
    ],
  },
  "the-sundering": {
    subtitle: "The Shattering of Vhonoris",
    summary:
      "The single most consequential night in the world's recorded history: the failed Binding that tore the continent of Vhonoris apart three generations ago, ending its mage-councils and the world's foremost seat of magical scholarship, and leaving behind the Shattered Reach, the Rohai, and a lesson every surviving magical tradition still measures itself against.",
    tags: [
      "the Sundering",
      "Vhonoris",
      "the Binding",
      "the Shattered Reach",
      "the Rohai",
      "Wild Water",
      "Weaving",
      "cataclysm",
    ],
  },
  "vhonic-magelords": {
    subtitle: "The Held of Old Vhonoris",
    summary:
      "The six rulers of pre-Sundering Vhonoris, one bound to each of the continent's great ley-convergences, who proposed and attempted the Binding that destroyed their civilization, and not one of whom saw it coming in time to matter.",
    tags: [
      "Vhonoris",
      "magelords",
      "the Held",
      "the Binding",
      "ley-convergences",
      "Closed Knot",
      "pre-Sundering",
    ],
  },
  "split-soul": {
    subtitle: "The Unlicensed Practice",
    summary:
      "Not a school, a coven-craft, or a licensed discipline but the scattered, secretive practice of cutting a portion of one's own soul free and spending it as fuel: wild, ungoverned, condemned by nearly every tradition in the world, and never quite stamped out.",
    tags: ["Split Soul", "the Rend", "Shards", "the Hollow", "Soulflow", "unlicensed", "forbidden"],
  },
  "the-world": {
    subtitle: "Overview & Index",
    summary:
      "A working index of everything documented so far: seven continents, the peoples and languages native to them, the magic traditions that set this setting apart, and the shared history that ties it together.",
    tags: ["index", "overview", "the world"],
  },
};

// ---------------------------------------------------------------------------
// Helpers

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

function collectMdFiles(dir) {
  const files = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (name.startsWith(".")) continue;
      files.push(...collectMdFiles(full));
    } else if (name.endsWith(".md")) {
      const rel = path.relative(VAULT, full);
      const parts = rel.split(path.sep);
      const folder = parts.length > 1 ? parts[0] : null;
      const basename = path.basename(full, ".md");
      files.push({ rel, folder, basename, raw: fs.readFileSync(full, "utf8") });
    }
  }
  return files.sort((a, b) => a.rel.localeCompare(b.rel));
}

function loadWorldData() {
  const sandbox = { window: {}, console };
  vm.createContext(sandbox);
  for (const file of [CONFIG_FILE, INDEX_FILE, ...collectEntryFiles(DATA_DIR)]) {
    const code = fs.readFileSync(file, "utf8");
    vm.runInContext(code, sandbox, { filename: file });
  }
  return {
    config: sandbox.window.WORLD_CONFIG,
    data: sandbox.window.WORLD_DATA || {},
  };
}

function normalize(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function matchNorm(s) {
  return normalize(String(s).replace(/^\s*\d+(\.\d+)?\.\s+/, ""));
}

// ---------------------------------------------------------------------------
// Wiki-links

const WIKI_RE = /\[\[([^\]]+)\]\]/g;

function convertWikiLinks(text, registry, plainOnly) {
  const parts = String(text).split(/(```[\s\S]*?```)/g);
  return parts
    .map((part) => {
      if (/^```/.test(part)) return part; // leave fenced code alone
      return part.replace(WIKI_RE, (m, inner) => {
        const unescaped = inner.replace(/\\\|/g, "|");
        const pieces = unescaped.split("|");
        const target = pieces[0].trim();
        const display = pieces.slice(1).join("|").trim() || target;
        const resolved = registry[normalize(target)];
        if (!resolved) return display;
        if (plainOnly) return display;
        return `[${display}](entry.html?c=${encodeURIComponent(resolved.collection)}&id=${encodeURIComponent(resolved.id)})`;
      });
    })
    .join("");
}

// ---------------------------------------------------------------------------
// Markdown parsing

function splitBlocks(lines) {
  const blocks = [];
  let cur = [];
  for (const line of lines) {
    if (/^\s*---\s*$/.test(line)) {
      if (cur.length) {
        blocks.push(cur);
        cur = [];
      }
    } else {
      cur.push(line);
    }
  }
  if (cur.length) blocks.push(cur);
  return blocks;
}

function parseMd(raw) {
  const lines = raw.split("\n");
  const title = lines[0].replace(/^#\s+/, "").trim();
  const blocks = splitBlocks(lines.slice(1));
  const sections = [];
  for (let i = 0; i < blocks.length; i++) {
    const blk = blocks[i];
    if (i === 0) {
      sections.push({ heading: null, content: blk.join("\n").trim() });
      continue;
    }
    let rawHeading = null;
    let start = -1;
    for (let j = 0; j < blk.length; j++) {
      const m = blk[j].match(/^#{1,6}\s+(.+?)\s*$/);
      if (m) {
        rawHeading = m[1].trim();
        start = j + 1;
        break;
      }
    }
    if (rawHeading === null) continue;
    sections.push({ heading: rawHeading, content: blk.slice(start).join("\n").trim() });
  }
  return { title, sections };
}

function cleanHeading(rawHeading, registry) {
  let t = String(rawHeading).replace(/^\s*\d+(\.\d+)?\.\s+/, "");
  t = convertWikiLinks(t, registry || {}, true);
  return t.trim();
}

// ---------------------------------------------------------------------------
// Section assembly

function isOverviewHeading(h) {
  return /^overview(\s+&.*)?$/i.test(h.trim());
}

function overviewExtra(h) {
  const m = h.trim().match(/^overview\s+&\s*(.+)$/i);
  return m ? m[1].trim() : "";
}

function isNumberedBlock(b) {
  return /^\s*\d/.test(b.raw || "");
}

// If every paragraph of a block starts with a **bold name** that matches one of
// the existing JS section headings, split the block into per-name sections.
// (Used for "Flower by Flower" in the dye-flowers entry.)
function maybeSplitIntoParagraphs(block, existingHeadings) {
  const jsNorms = new Set(existingHeadings.map((h) => matchNorm(h)));
  const paras = block.content.split(/\n\s*\n/);
  const split = [];
  for (const p of paras) {
    const m = p.match(/^\*\*(.+?)\*\*/);
    if (m && jsNorms.has(matchNorm(m[1]))) {
      split.push({ heading: m[1].trim(), content: p, virtual: true });
    } else {
      split.push({ heading: null, content: p, virtual: true });
    }
  }
  if (split.length && split.every((s) => s.heading)) return split;
  return null;
}

function findBlockForHeading(heading, blocks, entryId) {
  const normH = matchNorm(heading);
  const alias = (SECTION_ALIASES[entryId] || {})[heading];
  if (alias) {
    const b = blocks.find((x) => matchNorm(x.heading) === matchNorm(alias));
    if (b) return b;
  }
  return blocks.find((x) => matchNorm(x.heading) === normH) || null;
}

function buildSections(md, existingSections, entryId, registry) {
  // Clean md headings (strip numbering, resolve wiki-links to display text) so
  // they can be matched against existing site headings. The raw heading is kept
  // for numbered-section detection.
  const blocks = md.sections.map((b) => {
    const heading = b.heading === null ? null : cleanHeading(b.heading, registry);
    return { ...b, heading, raw: b.heading };
  });
  const intro = blocks[0] ? blocks[0].content : "";
  const rest = blocks.slice(1);
  const related = rest.find((b) => matchNorm(b.heading) === "related notes");
  const others = rest.filter((b) => b !== related);

  const firstNumbered = others.findIndex(isNumberedBlock);
  const leading = firstNumbered === -1 ? [] : others.slice(0, firstNumbered);
  const body = firstNumbered === -1 ? others : others.slice(firstNumbered);

  // New entries: Overview = intro + any leading (pre-numbered) block, then one
  // section per remaining block, then Related Notes.
  if (!existingSections || !existingSections.length) {
    const out = [];
    const overviewParts = [intro, ...leading.map((b) => b.content)].filter((c) => c && c.trim());
    if (overviewParts.length) out.push({ heading: "Overview", markdown: overviewParts.join("\n\n") });
    for (const b of body) {
      out.push({ heading: cleanHeading(b.heading, registry), markdown: b.content });
    }
    if (related) out.push({ heading: "Related Notes", markdown: related.content });
    return out;
  }

  // Existing entries: keep the current section headings, pull new body text
  // (with links) from the md, then append Related Notes. Any previous run's
  // generated "Related Notes" is ignored: it is always rebuilt from the md.
  const existingSections_ = existingSections.filter(
    (s) => !/^related notes$/i.test(String(s.heading).trim())
  );
  const existingHeadings = existingSections_.map((s) => s.heading);

  let working = body.slice();
  const expanded = new Set();
  for (const b of working.slice()) {
    const pieces = maybeSplitIntoParagraphs(b, existingHeadings);
    if (pieces) {
      expanded.add(b);
      working = working.filter((x) => x !== b).concat(pieces);
    }
  }

  const blockFor = new Map();
  const consumed = new Set();
  for (const sec of existingSections_) {
    if (isOverviewHeading(sec.heading)) continue;
    const block = findBlockForHeading(sec.heading, working, entryId);
    blockFor.set(sec, block);
    if (block) consumed.add(block);
  }

  const out = [];
  for (const sec of existingSections_) {
    if (isOverviewHeading(sec.heading)) {
      let content = intro;
      const extra = overviewExtra(sec.heading);
      if (extra) {
        const eb = findBlockForHeading(extra, leading.concat(working), entryId);
        if (eb) {
          content += "\n\n" + eb.content;
          consumed.add(eb);
        }
      }
      for (const lb of leading) {
        if (!consumed.has(lb)) {
          content += "\n\n" + lb.content;
          consumed.add(lb);
        }
      }
      content = content.trim();
      out.push({ heading: sec.heading, markdown: content });
      continue;
    }
    const block = blockFor.get(sec);
    if (block) {
      out.push({ heading: sec.heading, markdown: block.content });
    } else {
      // No matching md block: keep the existing body rather than lose content.
      out.push({ heading: sec.heading, markdown: (sec.markdown || "").trim() });
    }
  }

  // Any md section that had no JS home gets appended in original order.
  // Leading (pre-numbered) blocks belong to Overview and must never be appended
  // as standalone sections, or they would accumulate across runs.
  for (const b of body) {
    if (expanded.has(b)) continue;
    if (!consumed.has(b)) {
      out.push({ heading: cleanHeading(b.heading, registry), markdown: b.content });
    }
  }
  if (related) out.push({ heading: "Related Notes", markdown: related.content });

  return out;
}

// ---------------------------------------------------------------------------
// Rendering JS files

function q(v) {
  return JSON.stringify(v);
}

function jsTemplate(content) {
  return String(content)
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

function renderEntryFile(collection, entry, registry) {
  const lines = [];
  lines.push(`window.WORLD_DATA["${collection}"].push(`);
  lines.push(`{`);
  lines.push(`    id: ${q(entry.id)},`);
  lines.push(`    title: ${q(entry.title)},`);
  lines.push(`    subtitle: ${q(entry.subtitle)},`);
  lines.push(`    summary: ${q(entry.summary)},`);
  lines.push(`    tags: ${q(entry.tags)},`);
  if (entry.coverImage) lines.push(`    coverImage: ${q(entry.coverImage)},`);
  lines.push(``);
  lines.push(`    sections: [`);
  for (const s of entry.sections) {
    lines.push(`      {`);
    lines.push(`        heading: ${q(s.heading)},`);
    lines.push(`        markdown: \``);
    lines.push(jsTemplate(convertWikiLinks(s.markdown || "", registry)));
    lines.push(`        \``);
    lines.push(`      },`);
  }
  lines.push(`    ]`);
  lines.push(`  }`);
  lines.push(`);`);
  return lines.join("\n") + "\n";
}

// ---------------------------------------------------------------------------
// Main

function main() {
  if (!fs.existsSync(VAULT)) {
    console.error(`Vault not found at ${VAULT}. Set VAULT_DIR to point at it.`);
    process.exit(1);
  }

  const { config, data } = loadWorldData();
  const existing = {};
  for (const coll of config.collections || []) {
    for (const e of data[coll.key] || []) {
      existing[`${coll.key}/${e.id}`] = e;
    }
  }

  const mdFiles = collectMdFiles(VAULT).map((f) => ({ ...f, parsed: parseMd(f.raw) }));

  // Registry: every canonical md title + every existing entry title resolves to
  // {collection, id}.
  const registry = {};
  function register(title, collection, id) {
    const key = normalize(title);
    if (!registry[key]) registry[key] = { collection, id };
  }
  for (const info of mdFiles) {
    const id = TITLE_TO_ID[info.parsed.title];
    if (!id) {
      console.error(`No id mapping for title: ${info.parsed.title} (${info.rel})`);
      continue;
    }
    const collection = info.folder ? COLLECTION_BY_FOLDER[info.folder] : "world";
    register(info.parsed.title, collection, id);
  }
  for (const key of Object.keys(existing)) {
    const e = existing[key];
    const parts = key.split("/");
    register(e.title, parts[0], parts[1]);
  }
  // Make cleanHeading able to see the registry.
  globalThis.__REGISTRY = registry;

  let written = 0;
  let errors = 0;

  for (const info of mdFiles) {
    const title = info.parsed.title;
    const id = TITLE_TO_ID[title];
    if (!id) {
      errors++;
      continue;
    }
    const collection = info.folder ? COLLECTION_BY_FOLDER[info.folder] : "world";
    const existingKey = `${collection}/${id}`;
    let existingEntry = existing[existingKey] || null;
    if (!existingEntry) {
      // renamed entries (calendars -> reckoning)
      for (const [oldId, newId] of Object.entries(RENAMES)) {
        if (newId === id && existing[`${collection}/${oldId}`]) {
          existingEntry = existing[`${collection}/${oldId}`];
        }
      }
    }

    const sections = buildSections(info.parsed, existingEntry ? existingEntry.sections : null, id, registry);

    const entry = {
      id,
      title,
      subtitle: existingEntry ? existingEntry.subtitle : NEW_META[id].subtitle,
      summary: existingEntry ? existingEntry.summary : NEW_META[id].summary,
      tags: existingEntry ? existingEntry.tags : NEW_META[id].tags,
      coverImage: existingEntry ? existingEntry.coverImage : undefined,
      sections,
    };

    const outDir = path.join(DATA_DIR, collection);
    fs.mkdirSync(outDir, { recursive: true });
    const outFile = path.join(outDir, `${id}.js`);
    fs.writeFileSync(outFile, renderEntryFile(collection, entry, registry));
    written++;
    console.log(`WROTE ${path.relative(ROOT, outFile)}`);
  }

  // Remove the renamed old entry file and its stale preview page.
  for (const [oldId, newId] of Object.entries(RENAMES)) {
    const oldFile = path.join(DATA_DIR, "history", `${oldId}.js`);
    const oldPage = path.join(ROOT, "history", `${oldId}.html`);
    if (fs.existsSync(oldFile)) {
      fs.unlinkSync(oldFile);
      console.log(`REMOVED ${path.relative(ROOT, oldFile)}`);
    }
    if (fs.existsSync(oldPage)) {
      fs.unlinkSync(oldPage);
      console.log(`REMOVED ${path.relative(ROOT, oldPage)}`);
    }
  }

  console.log();
  console.log(`Done. Wrote ${written} entry file(s)${errors ? `, ${errors} error(s)` : ""}.`);
  console.log(`Next: run scripts/sync-entries.js then scripts/generate-og-pages.js`);
}

main();