import { cn } from "@/lib/utils";

import type { SidebarSection } from "./types";

interface SidebarProps {
  sections: SidebarSection[];
  activeSlug: string;
  onNavigate: (href: string) => void;
  variant?: "desktop" | "mobile";
}

export function Sidebar({
  sections,
  activeSlug,
  onNavigate,
  variant = "desktop",
}: SidebarProps) {
  return (
    <nav
      aria-label="Documentation sections"
      className={cn(
        variant === "desktop"
          ? "hidden lg:block lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto"
          : "block",
      )}
    >
      <ul className="space-y-8 pr-2">
        {sections.map((section) => (
          <li key={section.section}>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
              {section.section}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const href = `/docs/${item.slug}`;
                const isActive = item.slug === activeSlug;
                return (
                  <li key={item.slug}>
                    <a
                      href={href}
                      onClick={(event) => {
                        event.preventDefault();
                        onNavigate(href);
                      }}
                      className={cn(
                        "block rounded-md border-l-2 py-1.5 pl-3 text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                        isActive
                          ? "border-accent text-ink"
                          : "border-transparent text-subtle hover:border-border hover:text-ink",
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
