export interface SidebarItem {
  slug: string;
  label: string;
}

export interface SidebarSection {
  section: string;
  items: SidebarItem[];
}

export interface TopNavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface SiteConfig {
  brand: string;
  tagline: string;
  description: string;
  theme: "dark" | "light";
  accent: string;
  font: {
    sans: string;
    mono: string;
  };
  search: {
    placeholder: string;
    enabled: boolean;
  };
  cta: {
    label: string;
    href: string;
  };
  nav: {
    top: TopNavItem[];
    sidebar: SidebarSection[];
  };
}

export interface CTA {
  label: string;
  href: string;
}

export interface HeroCodeSample {
  language: string;
  content: string;
}

export interface HeroCard {
  title: string;
  body: string;
  primary?: CTA;
  secondary?: CTA;
  code?: HeroCodeSample;
}

export interface HeroCallout {
  title: string;
  body: string;
  cta?: CTA;
}

export interface PageHero {
  eyebrow?: string;
  heading: string;
  card?: HeroCard;
  callout?: HeroCallout;
}

export interface BuildPath {
  title: string;
  body: string;
  href: string;
}

export interface Page {
  slug: string;
  title: string;
  section: string;
  description?: string;
  hero?: PageHero;
  build_paths?: BuildPath[];
  toc_hint?: string[];
  body: string;
}

export interface DocsManifest {
  siteConfig: SiteConfig;
  pages: Page[];
  pageBySlug: Map<string, Page>;
}
