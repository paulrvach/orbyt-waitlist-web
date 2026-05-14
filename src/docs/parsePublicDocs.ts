import yaml from "js-yaml";

import publicDocsRaw from "./public-docs.md?raw";

import type {
  DocsManifest,
  Page,
  SiteConfig,
} from "./types";

const PAGE_DELIMITER_REGEX = /\r?\n<!-- PAGE -->\r?\n/;
const FRONTMATTER_BLOCK_REGEX = /(?:^|\n)---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/;

function extractFrontmatter(chunk: string): { frontmatter: string; body: string } {
  const match = FRONTMATTER_BLOCK_REGEX.exec(chunk);
  if (!match) {
    return { frontmatter: "", body: chunk };
  }
  const frontmatter = match[1] ?? "";
  const body = chunk.slice(match.index + match[0].length).replace(/^\r?\n+/, "");
  return { frontmatter, body };
}

let memoizedManifest: DocsManifest | null = null;

export function getDocs(): DocsManifest {
  if (memoizedManifest) {
    return memoizedManifest;
  }

  const chunks = publicDocsRaw.split(PAGE_DELIMITER_REGEX);

  const [globalChunk, ...pageChunks] = chunks;
  if (!globalChunk) {
    throw new Error("public-docs.md is missing the global config block");
  }

  const globalFrontmatter = extractFrontmatter(globalChunk).frontmatter;
  const parsedGlobal = yaml.load(globalFrontmatter, {
    schema: yaml.CORE_SCHEMA,
  }) as
    | { site?: Omit<SiteConfig, "nav">; nav?: SiteConfig["nav"] }
    | undefined;

  if (!parsedGlobal || !parsedGlobal.site || !parsedGlobal.nav) {
    throw new Error("public-docs.md global config is missing `site` or `nav` keys");
  }

  const siteConfig: SiteConfig = {
    ...parsedGlobal.site,
    nav: parsedGlobal.nav,
  };

  const validSections = new Set(siteConfig.nav.sidebar.map((s) => s.section));

  const pages: Page[] = pageChunks
    .map((chunk) => chunk.trim())
    .filter((chunk) => chunk.length > 0)
    .map((chunk, index) => {
      const { frontmatter, body } = extractFrontmatter(chunk);
      if (!frontmatter) {
        throw new Error(`Page chunk #${index + 1} is missing frontmatter`);
      }

      const parsed = yaml.load(frontmatter, {
        schema: yaml.CORE_SCHEMA,
      }) as Partial<Page> | undefined;
      if (!parsed || !parsed.slug || !parsed.title || !parsed.section) {
        throw new Error(
          `Page chunk #${index + 1} is missing required slug/title/section`,
        );
      }

      if (!validSections.has(parsed.section)) {
        throw new Error(
          `Page "${parsed.slug}" declares section "${parsed.section}" which is not in nav.sidebar`,
        );
      }

      return {
        slug: parsed.slug,
        title: parsed.title,
        section: parsed.section,
        description: parsed.description,
        hero: parsed.hero,
        build_paths: parsed.build_paths,
        toc_hint: parsed.toc_hint,
        body,
      };
    });

  const seenSlugs = new Set<string>();
  for (const page of pages) {
    if (seenSlugs.has(page.slug)) {
      throw new Error(`Duplicate page slug detected: ${page.slug}`);
    }
    seenSlugs.add(page.slug);
  }

  const pageBySlug = new Map<string, Page>();
  for (const page of pages) {
    pageBySlug.set(page.slug, page);
  }

  memoizedManifest = { siteConfig, pages, pageBySlug };
  return memoizedManifest;
}
