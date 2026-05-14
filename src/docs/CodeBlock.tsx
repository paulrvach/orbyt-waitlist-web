import { Copy01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { highlightCode } from "./highlighter";

interface CodeBlockProps {
  code: string;
  language?: string;
  isDark: boolean;
  className?: string;
}

export function CodeBlock({ code, language, isDark, className }: CodeBlockProps) {
  const [html, setHtml] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    highlightCode(code, language, isDark).then((result) => {
      if (!cancelled) {
        setHtml(result);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [code, language, isDark]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* noop */
    }
  };

  return (
    <div
      className={cn(
        "group relative my-6 overflow-hidden rounded-xl border border-border bg-muted",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-border bg-surface/40 px-4 py-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
          {language ?? "text"}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Copied" : "Copy code"}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-subtle transition-colors hover:bg-muted hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <HugeiconsIcon
            icon={copied ? Tick02Icon : Copy01Icon}
            size={14}
            strokeWidth={2}
            color="currentColor"
          />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      {html ? (
        <div
          className="shiki-host overflow-x-auto px-4 py-3 text-sm leading-relaxed [&_pre]:!bg-transparent [&_pre]:!m-0 [&_pre]:!p-0 [&_pre]:font-mono"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <pre className="overflow-x-auto px-4 py-3 font-mono text-sm leading-relaxed text-ink">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}
