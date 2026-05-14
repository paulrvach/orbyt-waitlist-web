import { Component, type ErrorInfo, type ReactNode } from "react";

interface DocsErrorBoundaryProps {
  children: ReactNode;
  onNavigate: (path: string) => void;
}

interface DocsErrorBoundaryState {
  error: Error | null;
}

export class DocsErrorBoundary extends Component<
  DocsErrorBoundaryProps,
  DocsErrorBoundaryState
> {
  state: DocsErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): DocsErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.error("[DocsPage] render error", error, info.componentStack);
    }
  }

  render() {
    if (this.state.error) {
      return (
        <main className="mx-auto max-w-3xl px-6 pt-28 pb-24 sm:px-8 lg:px-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-subtle">
            Error
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
            We hit a snag rendering the docs.
          </h1>
          <p className="mt-3 text-sm text-subtle">
            Please return to the homepage and try again. If the problem
            persists, the docs source may be malformed.
          </p>
          <button
            type="button"
            onClick={() => this.props.onNavigate("/")}
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Back to homepage
          </button>
        </main>
      );
    }
    return this.props.children;
  }
}
