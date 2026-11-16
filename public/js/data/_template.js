/**
 * ─────────────────────────────────────────────────────────────
 *  ENTRY TEMPLATE — not loaded by any page, just a copy source.
 * ─────────────────────────────────────────────────────────────
 *
 * Each entry lives in its own file, one per entry:
 *
 *     js/data/<collection>/<entry-id>.js        e.g. js/data/languages/vosarin.js
 *
 * To add a new entry: copy the object below into a NEW file named after the
 * entry's id, under the folder for its collection (create the folder if it
 * doesn't exist yet), and fill it in. Then add a <script> tag for it to the
 * pages (js/data/index.js sets up the empty arrays in advance).
 *
 * Every entry file, at its root, registers itself by pushing into the
 * collection's array on window.WORLD_DATA:
 *
 *     window.WORLD_DATA.<collectionKey>.push({
 *       ...the object below...
 *     });
 *
 * FIELD NOTES
 * id          Required. Lowercase, no spaces (e.g. "vosarin"). Used in the
 *             URL: entry.html?c=languages&id=vosarin. Must be unique
 *             within its own collection file.
 *
 * title       Required. The big heading — a name.
 *
 * subtitle    Optional. Short descriptor shown as a small label above the
 *             title, e.g. "Language of the Vosarai" or "Northern Kingdom".
 *             If left blank, the collection's singular name is used
 *             instead (e.g. "Language").
 *
 * summary     Optional. One or two sentences. Shows on the card in the
 *             collection list AND at the top of the entry page. Good
 *             place for the one-line "what is this" answer.
 *
 * tags        Optional array of short strings. Shown as little chips.
 *             Use these freely for anything you want to filter/scan by
 *             later — region, era, status, whatever.
 *
 * coverImage  Optional. Path to an image, e.g. "assets/images/vosarin.jpg".
 *             Drop image files into assets/images/ and reference them
 *             here. Leave the field out entirely if you don't have one —
 *             a placeholder is shown instead.
 *
 * sections    Required array. This is the actual body of the page — each
 *             section becomes a heading + a block of content, and headings
 *             automatically build the "On this page" sidebar nav.
 *
 *             Each section is: { heading: "...", markdown: `...` }
 *
 *             The `markdown` field accepts normal Markdown — the same
 *             kind you already write in your notes:
 *               - **bold**, *italics*
 *               - ## sub-headings inside a section
 *               - bullet lists and numbered lists
 *               - tables (see js/data/languages/vosarin.js for a real
 *                 example — the phonology charts)
 *               - `code` and fenced ``` code blocks for things like
 *                 interlinear gloss lines
 *               - > blockquotes for in-world quotations
 *
 *             Use backtick template strings (`...`) for markdown so you
 *             can write multiple lines without escaping quotes.
 */

const TEMPLATE_ENTRY = {
  id: "example-entry",
  title: "Example Entry",
  subtitle: "Short descriptor",
  summary: "One or two sentences describing what this is, shown on cards and at the top of the page.",
  tags: ["tag-one", "tag-two"],
  // coverImage: "assets/images/example.jpg",

  sections: [
    {
      heading: "Overview",
      markdown: `
Write your normal notes here. **Bold**, *italic*, and lists all work:

- first point
- second point

> "You can quote in-world text or characters like this."
      `
    },
    {
      heading: "Details",
      markdown: `
A second section becomes a second entry in the sidebar table of contents.
Add as many sections as you need — there's no limit.

| Column A | Column B |
|---|---|
| value | value |
      `
    }
  ]
};

// Not exported on purpose
