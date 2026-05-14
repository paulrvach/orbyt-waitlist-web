import { ArrowRight01Icon, InformationCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { isInternalAppPath } from "./route-utils";

interface CalloutProps {
  title?: string;
  body: ReactNode;
  cta?: { label: string; href: string };
  onCtaClick?: (href: string) => void;
  variant?: "info" | "warn";
  className?: string;
}

export function Callout({
  title,
  body,
  cta,
  onCtaClick,
  variant = "info",
  className,
}: CalloutProps) {
  const accentClass =
    variant === "warn"
      ? "before:bg-diff-removed"
      : "before:bg-accent";

  return (
    <div
      className={cn(
        "relative my-6 overflow-hidden rounded-xl border border-border bg-muted/60 p-5 pl-6",
        "before:absolute before:left-0 before:top-0 before:h-full before:w-1",
        accentClass,
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <HugeiconsIcon
          icon={InformationCircleIcon}
          size={20}
          strokeWidth={1.75}
          color="currentColor"
          className="mt-0.5 shrink-0 text-accent"
        />
        <div className="min-w-0 flex-1">
          {title && (
            <p className="mb-1 text-sm font-semibold text-ink">{title}</p>
          )}
          <div className="text-sm text-subtle">{body}</div>
          {cta && (
            <a
              href={cta.href}
              onClick={(event) => {
                if (onCtaClick && isInternalAppPath(cta.href)) {
                  event.preventDefault();
                  onCtaClick(cta.href);
                }
              }}
              className="mt-3 inline-flex items-center gap-1 font-mono text-[12px] uppercase tracking-wider text-accent transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              {cta.label}
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={14}
                strokeWidth={2}
                color="currentColor"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
