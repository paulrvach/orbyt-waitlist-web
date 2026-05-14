import { LinkSquare02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ReactNode } from "react";
import { Children, isValidElement } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";

import { CodeBlock } from "./CodeBlock";
import { slugify } from "./route-utils";

interface MarkdownRendererProps {
  body: string;
  isDark: boolean;
  onNavigate: (href: string) => void;
}

// Permit only safe URL schemes for external links in markdown content.
const SAFE_PROTOCOL_REGEX = /^(?:https?|mailto|tel):/i;

function isSafeHref(href: string): boolean {
  const trimmed = href.trimStart();
  if (trimmed === "") return false;
  if (trimmed.startsWith("#") || trimmed.startsWith("/")) return true;
  return SAFE_PROTOCOL_REGEX.test(trimmed);
}

function getNodeText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(getNodeText).join("");
  }
  if (isValidElement(node) && node.props) {
    const props = node.props as { children?: ReactNode };
    return getNodeText(props.children);
  }
  return "";
}

function extractCodeFromPre(node: ReactNode): {
  code: string;
  language?: string;
} {
  const child = Children.toArray(node).find(
    (c): c is React.ReactElement<{ className?: string; children?: ReactNode }> =>
      isValidElement(c) && (c as React.ReactElement).type === "code",
  );
  if (!child) {
    return { code: getNodeText(node) };
  }
  const className = child.props.className ?? "";
  const langMatch = /language-([\w-]+)/.exec(className);
  const codeText = getNodeText(child.props.children).replace(/\n$/, "");
  return { code: codeText, language: langMatch?.[1] };
}

export function MarkdownRenderer({
  body,
  isDark,
  onNavigate,
}: MarkdownRendererProps) {
  return (
    <div className="docs-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mt-10 mb-4 text-3xl font-semibold tracking-tight text-ink">
              {children}
            </h1>
          ),
          h2: ({ children }) => {
            const id = slugify(getNodeText(children));
            return (
              <h2
                id={id}
                className="group mt-12 mb-4 scroll-mt-28 text-2xl font-semibold tracking-tight text-ink"
              >
                <a href={`#${id}`} className="no-underline">
                  {children}
                  <span className="ml-2 text-subtle opacity-0 transition-opacity group-hover:opacity-100">
                    #
                  </span>
                </a>
              </h2>
            );
          },
          h3: ({ children }) => {
            const id = slugify(getNodeText(children));
            return (
              <h3
                id={id}
                className="group mt-8 mb-3 scroll-mt-28 text-lg font-semibold text-ink"
              >
                <a href={`#${id}`} className="no-underline">
                  {children}
                  <span className="ml-2 text-subtle opacity-0 transition-opacity group-hover:opacity-100">
                    #
                  </span>
                </a>
              </h3>
            );
          },
          p: ({ children }) => (
            <p className="my-4 text-[15px] leading-7 text-ink/85">{children}</p>
          ),
          a: ({ href, children, ...rest }) => {
            const rawTarget = href ?? "";
            if (!isSafeHref(rawTarget)) {
              return <>{children}</>;
            }
            const target = rawTarget.trimStart();
            if (target.startsWith("/docs")) {
              return (
                <a
                  href={target}
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate(target);
                  }}
                  className="text-accent underline-offset-4 hover:underline"
                  {...rest}
                >
                  {children}
                </a>
              );
            }
            if (target.startsWith("#") || target.startsWith("/")) {
              return (
                <a
                  href={target}
                  className="text-accent underline-offset-4 hover:underline"
                  {...rest}
                >
                  {children}
                </a>
              );
            }
            return (
              <a
                href={target}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-0.5 text-accent underline-offset-4 hover:underline"
                {...rest}
              >
                {children}
                <HugeiconsIcon
                  icon={LinkSquare02Icon}
                  size={12}
                  strokeWidth={2}
                  color="currentColor"
                  className="inline opacity-70"
                />
              </a>
            );
          },
          ul: ({ children }) => (
            <ul className="my-4 list-disc space-y-1.5 pl-6 text-[15px] leading-7 text-ink/85 marker:text-subtle">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 list-decimal space-y-1.5 pl-6 text-[15px] leading-7 text-ink/85 marker:text-subtle">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="pl-1">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="my-5 border-l-2 border-accent bg-muted/50 px-4 py-3 text-[15px] italic text-subtle">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-10 border-t border-border" />,
          strong: ({ children }) => (
            <strong className="font-semibold text-ink">{children}</strong>
          ),
          code: ({ className, children, ...rest }) => {
            const codeClass = className ?? "";
            const isBlock = /language-/.test(codeClass);
            if (isBlock) {
              return (
                <code className={codeClass} {...rest}>
                  {children}
                </code>
              );
            }
            return (
              <code
                className={cn(
                  "rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[13px] text-ink",
                  className,
                )}
                {...rest}
              >
                {children}
              </code>
            );
          },
          pre: ({ children }) => {
            const { code, language } = extractCodeFromPre(children);
            return <CodeBlock code={code} language={language} isDark={isDark} />;
          },
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto rounded-xl border border-border">
              <table className="w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-muted">{children}</thead>
          ),
          tr: ({ children }) => (
            <tr className="border-b border-border last:border-b-0">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-2.5 text-left font-mono text-[11px] uppercase tracking-wider text-subtle">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2.5 align-top text-[14px] text-ink/85">
              {children}
            </td>
          ),
        }}
      >
        {body}
      </ReactMarkdown>
    </div>
  );
}
