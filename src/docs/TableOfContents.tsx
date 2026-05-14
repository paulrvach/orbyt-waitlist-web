import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

import { slugify } from "./route-utils";

interface TocEntry {
  id: string;
  text: string;
  depth: 2 | 3;
}

interface TableOfContentsProps {
  body: string;
}

function extractHeadings(body: string): TocEntry[] {
  const lines = body.split("\n");
  const out: TocEntry[] = [];
  let inFence = false;

  for (const rawLine of lines) {
    const trimmed = rawLine.trim();
    if (trimmed.startsWith("```") || trimmed.startsWith("~~~")) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^(#{2,3})\s+(.+?)\s*$/.exec(rawLine);
    if (!match) continue;
    const depth = match[1].length as 2 | 3;
    const text = match[2].replace(/[`*_]/g, "");
    out.push({ id: slugify(text), text, depth });
  }
  return out;
}

export function TableOfContents({ body }: TableOfContentsProps) {
  const entries = useMemo(() => extractHeadings(body), [body]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (entries.length === 0) return;

    const elements = entries
      .map((entry) => document.getElementById(entry.id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (observed) => {
        const visible = observed
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.target.getBoundingClientRect().top -
              b.target.getBoundingClientRect().top,
          );
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -65% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [entries]);

  if (entries.length === 0) return null;

  return (
    <nav
      aria-label="On this page"
      className="hidden xl:block xl:sticky xl:top-24 xl:max-h-[calc(100vh-7rem)] xl:overflow-y-auto"
    >
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
        On this page
      </p>
      <ul className="space-y-1.5">
        {entries.map((entry) => (
          <li key={entry.id} className={entry.depth === 3 ? "pl-3" : ""}>
            <a
              href={`#${entry.id}`}
              className={cn(
                "block py-1 text-[13px] leading-snug transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                activeId === entry.id
                  ? "text-ink"
                  : "text-subtle hover:text-ink",
              )}
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
