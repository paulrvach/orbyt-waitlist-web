/**
 * One-off sanity check: run with `bun scripts/check-docs-parse.ts`.
 * Re-implements just enough of parsePublicDocs.ts to validate against
 * the source spec without Vite's `?raw` import syntax.
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import yaml from "js-yaml";

const PAGE_DELIMITER_REGEX = /\r?\n<!-- PAGE -->\r?\n/;
const FRONTMATTER_BLOCK_REGEX = /(?:^|\n)---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/;

function extractFrontmatter(chunk: string): { frontmatter: string; body: string } {
  const match = FRONTMATTER_BLOCK_REGEX.exec(chunk);
  if (!match) return { frontmatter: "", body: chunk };
  const body = chunk.slice(match.index + match[0].length).replace(/^\r?\n+/, "");
  return { frontmatter: match[1] ?? "", body };
}

const source = readFileSync(
  resolve(import.meta.dirname, "../src/docs/public-docs.md"),
  "utf-8",
);

const chunks = source.split(PAGE_DELIMITER_REGEX);
const [globalChunk, ...pageChunks] = chunks;

const parsedGlobal = yaml.load(extractFrontmatter(globalChunk!).frontmatter) as {
  site: { brand: string };
  nav: { sidebar: Array<{ section: string; items: Array<{ slug: string }> }> };
};

const validSections = new Set(parsedGlobal.nav.sidebar.map((s) => s.section));
const pages = pageChunks
  .map((c) => c.trim())
  .filter(Boolean)
  .map((chunk, i) => {
    const { frontmatter } = extractFrontmatter(chunk);
    const parsed = yaml.load(frontmatter) as {
      slug: string;
      title: string;
      section: string;
    };
    if (!validSections.has(parsed.section)) {
      throw new Error(
        `Page #${i + 1} (${parsed.slug}) declares missing section: ${parsed.section}`,
      );
    }
    return parsed;
  });

console.log(`Brand: ${parsedGlobal.site.brand}`);
console.log(`Sections: ${parsedGlobal.nav.sidebar.length}`);
console.log(`Pages: ${pages.length}`);
console.log("--- Pages ---");
for (const page of pages) {
  console.log(`  [${page.section}] ${page.slug.padEnd(34)} ${page.title}`);
}

const slugSet = new Set(pages.map((p) => p.slug));
if (slugSet.size !== pages.length) {
  throw new Error("Duplicate slug detected");
}
console.log("\nAll slugs unique. Parser OK.");
