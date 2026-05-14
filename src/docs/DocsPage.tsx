import { ArrowLeft01Icon, Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

import { MarkdownRenderer } from "./MarkdownRenderer";
import { OverviewHero } from "./OverviewHero";
import { Sidebar } from "./Sidebar";
import { TableOfContents } from "./TableOfContents";
import { getDocs } from "./parsePublicDocs";
import { DEFAULT_DOCS_PATH, DOCS_PATH_PREFIX } from "./route-utils";
import type { Page } from "./types";

interface DocsPageProps {
  path: string;
  isDark: boolean;
  onNavigate: (href: string) => void;
}

function slugFromPath(path: string): string {
  if (path === DOCS_PATH_PREFIX || path === `${DOCS_PATH_PREFIX}/`) {
    return "overview";
  }
  return path.slice(`${DOCS_PATH_PREFIX}/`.length);
}

function NotFound({ onNavigate }: { onNavigate: (href: string) => void }) {
  return (
    <div className="mx-auto max-w-md py-24 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-subtle">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
        We couldn't find that page.
      </h1>
      <p className="mt-3 text-sm text-subtle">
        The doc you're looking for may have moved or been renamed.
      </p>
      <button
        type="button"
        onClick={() => onNavigate(DEFAULT_DOCS_PATH)}
        className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <HugeiconsIcon
          icon={ArrowLeft01Icon}
          size={14}
          strokeWidth={2}
          color="currentColor"
        />
        Back to Overview
      </button>
    </div>
  );
}

interface DocsContentProps {
  page: Page;
  isDark: boolean;
  onNavigate: (href: string) => void;
}

function DocsContent({ page, isDark, onNavigate }: DocsContentProps) {
  const isOverview = page.slug === "overview";

  return (
    <article className="min-w-0">
      {!isOverview && (
        <header className="mb-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-subtle">
            {page.section}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">
            {page.title}
          </h1>
          {page.description && (
            <p className="mt-4 text-[16px] leading-relaxed text-subtle">
              {page.description}
            </p>
          )}
        </header>
      )}

      {isOverview && page.hero && (
        <OverviewHero
          hero={page.hero}
          buildPaths={page.build_paths}
          isDark={isDark}
          onNavigate={onNavigate}
        />
      )}

      <MarkdownRenderer body={page.body} isDark={isDark} onNavigate={onNavigate} />
    </article>
  );
}

export function DocsPage({ path, isDark, onNavigate }: DocsPageProps) {
  const { siteConfig, pageBySlug } = useMemo(() => getDocs(), []);
  const slug = slugFromPath(path);
  const page = pageBySlug.get(slug);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [path]);

  useEffect(() => {
    document.title = page ? `Orbyt Docs — ${page.title}` : "Orbyt Docs";
  }, [page]);

  if (!page) {
    return (
      <main className="mx-auto max-w-7xl px-6 pt-28 pb-24 sm:px-8 lg:px-12">
        <NotFound onNavigate={onNavigate} />
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 pt-24 pb-24 sm:px-8 lg:px-12">
      <div className="mb-6 lg:hidden">
        <button
          type="button"
          onClick={() => setIsMobileSidebarOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 font-mono text-[12px] uppercase tracking-wider text-subtle hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Open documentation menu"
        >
          <HugeiconsIcon
            icon={Menu01Icon}
            size={16}
            strokeWidth={2}
            color="currentColor"
          />
          Docs menu
        </button>
      </div>

      <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_200px]">
        <Sidebar
          sections={siteConfig.nav.sidebar}
          activeSlug={slug}
          onNavigate={onNavigate}
        />
        <DocsContent page={page} isDark={isDark} onNavigate={onNavigate} />
        <TableOfContents body={page.body} />
      </div>

      <AnimatePresence>
        {isMobileSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-surface/80 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          >
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="h-full w-[300px] max-w-[85vw] overflow-y-auto border-r border-border bg-surface p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-6 flex items-center justify-between">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-subtle">
                  Documentation
                </p>
                <button
                  type="button"
                  onClick={() => setIsMobileSidebarOpen(false)}
                  aria-label="Close menu"
                  className="rounded-md p-1 text-subtle hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <HugeiconsIcon
                    icon={Cancel01Icon}
                    size={20}
                    strokeWidth={2}
                    color="currentColor"
                  />
                </button>
              </div>
              <Sidebar
                sections={siteConfig.nav.sidebar}
                activeSlug={slug}
                onNavigate={onNavigate}
                variant="mobile"
              />
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
