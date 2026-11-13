
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-border/60 bg-background/85 backdrop-blur-xl">
      <nav
        aria-label="Điều hướng chính"
        className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          KOLF<span className="text-primary">.</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-4 sm:gap-8">
          <Link
            href="/"
            className="hidden text-sm text-muted transition-colors hover:text-foreground sm:block"
          >
            Trang chủ
          </Link>

          <a
            href="#about"
            className="rounded-full border border-primary/40 px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Khám phá
          </a>
        </div>
      </nav>
    </header>
  );
}
