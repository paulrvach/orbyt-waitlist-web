import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Card, CardContent } from "@/components/ui/card";

import { Callout } from "./Callout";
import { CodeBlock } from "./CodeBlock";
import { isInternalAppPath } from "./route-utils";
import type { BuildPath, PageHero } from "./types";

interface OverviewHeroProps {
  hero: PageHero;
  buildPaths?: BuildPath[];
  isDark: boolean;
  onNavigate: (href: string) => void;
}

function CTAButton({
  label,
  href,
  variant,
  onNavigate,
}: {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  onNavigate: (href: string) => void;
}) {
  const base =
    "inline-flex items-center justify-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface";
  const styles =
    variant === "primary"
      ? "bg-accent text-white shadow-sm hover:opacity-90"
      : "border border-border bg-surface text-ink hover:bg-muted";

  return (
    <a
      href={href}
      onClick={(event) => {
        if (isInternalAppPath(href)) {
          event.preventDefault();
          onNavigate(href);
        }
      }}
      className={`${base} ${styles}`}
    >
      {label}
      <HugeiconsIcon
        icon={ArrowRight01Icon}
        size={14}
        strokeWidth={2}
        color="currentColor"
      />
    </a>
  );
}

export function OverviewHero({
  hero,
  buildPaths,
  isDark,
  onNavigate,
}: OverviewHeroProps) {
  return (
    <section className="mb-12">
      {hero.eyebrow && (
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-subtle">
          {hero.eyebrow}
        </p>
      )}
      <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
        {hero.heading}
      </h1>

      {hero.card && (
        <Card className="mt-8 overflow-hidden">
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div>
                <p className="mb-2 text-xl font-semibold text-ink">
                  {hero.card.title}
                </p>
                <p className="text-[15px] leading-relaxed text-subtle">
                  {hero.card.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {hero.card.primary && (
                    <CTAButton
                      label={hero.card.primary.label}
                      href={hero.card.primary.href}
                      variant="primary"
                      onNavigate={onNavigate}
                    />
                  )}
                  {hero.card.secondary && (
                    <CTAButton
                      label={hero.card.secondary.label}
                      href={hero.card.secondary.href}
                      variant="secondary"
                      onNavigate={onNavigate}
                    />
                  )}
                </div>
              </div>
              {hero.card.code && (
                <CodeBlock
                  code={hero.card.code.content.trimEnd()}
                  language={hero.card.code.language}
                  isDark={isDark}
                  className="my-0"
                />
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {hero.callout && (
        <Callout
          title={hero.callout.title}
          body={hero.callout.body}
          cta={hero.callout.cta}
          onCtaClick={onNavigate}
          className="mt-6"
        />
      )}

      {buildPaths && buildPaths.length > 0 && (
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {buildPaths.map((path) => (
            <a
              key={path.href}
              href={path.href}
              onClick={(event) => {
                if (isInternalAppPath(path.href)) {
                  event.preventDefault();
                  onNavigate(path.href);
                }
              }}
              className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/70 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold text-ink">{path.title}</p>
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={16}
                  strokeWidth={2}
                  color="currentColor"
                  className="text-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-subtle">
                {path.body}
              </p>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
