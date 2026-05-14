export const DOCS_PATH_PREFIX = "/docs";
export const DEFAULT_DOCS_PATH = "/docs/overview";
export const HOME_PATH = "/";
export const DOWNLOAD_PATH = "/download";

export type RouteName = "home" | "download" | "docs";

export function routeOf(path: string): RouteName {
  if (path === DOWNLOAD_PATH) return "download";
  if (path === DOCS_PATH_PREFIX || path.startsWith(`${DOCS_PATH_PREFIX}/`)) {
    return "docs";
  }
  return "home";
}

export function isInternalAppPath(href: string): boolean {
  if (href === HOME_PATH || href === DOWNLOAD_PATH) return true;
  return href === DOCS_PATH_PREFIX || href.startsWith(`${DOCS_PATH_PREFIX}/`);
}

export function normalizePath(path: string): string {
  if (path === DOWNLOAD_PATH) return DOWNLOAD_PATH;
  if (routeOf(path) === "docs") {
    try {
      const resolved = new URL(path, "http://internal.invalid").pathname;
      if (resolved === DOCS_PATH_PREFIX || resolved === `${DOCS_PATH_PREFIX}/`) {
        return DEFAULT_DOCS_PATH;
      }
      return routeOf(resolved) === "docs" ? resolved : DEFAULT_DOCS_PATH;
    } catch {
      return DEFAULT_DOCS_PATH;
    }
  }
  return HOME_PATH;
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
