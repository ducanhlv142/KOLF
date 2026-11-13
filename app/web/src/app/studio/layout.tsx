
import Link from "next/link";
import type { ReactNode } from "react";

interface StudioLayoutProps {
  children: ReactNode;
}

export default function StudioLayout({
  children,
}: StudioLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground md:grid md:grid-cols-[240px_minmax(0,1fr)]">
      {/* Sidebar */}
      <aside className="hidden border-r border-surface-border bg-surface p-6 md:flex md:flex-col">
        <Link
          href="/studio"
          className="text-2xl font-bold tracking-tight"
        >
          KOLF<span className="text-primary">.</span>
          <span className="ml-2 text-xs font-normal text-muted">
            Studio
          </span>
        </Link>

        <nav aria-label="Điều hướng Studio" className="mt-12">
          <Link
            href="/studio"
            aria-current="page"
            className="block rounded-xl bg-primary/15 px-4 py-3 text-sm font-medium text-primary"
          >
            Dashboard
          </Link>

          <p className="mt-8 px-4 text-xs uppercase tracking-widest text-muted">
            Coming soon
          </p>

          <div className="mt-3 space-y-2 px-4 text-sm text-muted">
            <p>Media Library</p>
            <p>Stories</p>
            <p>AI Workspace</p>
            <p>Settings</p>
          </div>
        </nav>

        <Link
          href="/"
          className="mt-auto pt-8 text-sm text-muted transition-colors hover:text-primary"
        >
          ← Về website
        </Link>
      </aside>

      {/* Main Area */}
      <div className="min-w-0">
        <header className="flex h-[72px] items-center justify-between border-b border-surface-border px-6">
          <span className="font-medium">KOLF Studio</span>

          <Link
            href="/"
            className="text-sm text-muted hover:text-primary md:hidden"
          >
            Về website
          </Link>

          <span className="hidden text-xs text-muted md:block">
            Development Preview
          </span>
        </header>

        {children}
      </div>
    </div>
  );
}
