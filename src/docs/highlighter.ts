import { createHighlighter, type Highlighter } from "shiki";

const SUPPORTED_LANGS = [
  "bash",
  "shell",
  "sh",
  "ts",
  "tsx",
  "typescript",
  "js",
  "jsx",
  "javascript",
  "json",
  "yaml",
  "md",
  "markdown",
  "text",
] as const;

const SUPPORTED_LANG_SET = new Set<string>(SUPPORTED_LANGS);

const DARK_THEME = "github-dark-dimmed";
const LIGHT_THEME = "github-light";

let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [DARK_THEME, LIGHT_THEME],
      langs: [
        "bash",
        "typescript",
        "tsx",
        "javascript",
        "jsx",
        "json",
        "yaml",
        "markdown",
      ],
    });
  }
  return highlighterPromise;
}

function resolveLang(lang: string | undefined): string {
  if (!lang) return "text";
  const lower = lang.toLowerCase();
  if (!SUPPORTED_LANG_SET.has(lower)) return "text";
  if (lower === "sh" || lower === "shell") return "bash";
  if (lower === "ts") return "typescript";
  if (lower === "js") return "javascript";
  if (lower === "md") return "markdown";
  return lower;
}

export async function highlightCode(
  code: string,
  lang: string | undefined,
  isDark: boolean,
): Promise<string> {
  const resolved = resolveLang(lang);
  if (resolved === "text") {
    const escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<pre class="shiki shiki-text"><code>${escaped}</code></pre>`;
  }

  try {
    const highlighter = await getHighlighter();
    return highlighter.codeToHtml(code, {
      lang: resolved,
      theme: isDark ? DARK_THEME : LIGHT_THEME,
    });
  } catch {
    const escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<pre class="shiki shiki-text"><code>${escaped}</code></pre>`;
  }
}
