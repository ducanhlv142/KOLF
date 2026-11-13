
import Link from "next/link";
import { cacheLife } from "next/cache";


async function getCurrentYear() {
  "use cache";
  cacheLife("hours");

  return new Date().getFullYear();
}

export default async function Footer() {
  const currentYear = await getCurrentYear();

  return (
    <footer className="border-t border-surface-border/50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight"
            >
              KOLF<span className="text-primary">.</span>
            </Link>

            <p className="mt-3 text-sm leading-7 text-muted">
              Một người. Nhiều thế giới.
              Và những câu chuyện vẫn đang được viết tiếp.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Điều hướng cuối trang">
            <div className="flex flex-wrap gap-6 text-sm text-muted">
              <Link href="/#intro" className="hover:text-primary">
                Trang chủ
              </Link>

              <Link href="/#about" className="hover:text-primary">
                Giới thiệu
              </Link>

              <Link href="/#journey" className="hover:text-primary">
                Hành trình
              </Link>

              <a
                href="https://github.com/ducanhlv142"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                GitHub
              </a>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-surface-border/50 pt-6 text-xs text-muted">
          <p>
            © {currentYear} KOLF. All rights reserved.
          </p>
          <p>Made with curiosity & a little purple 💜</p>
        </div>
      </div>
    </footer>
  );
}
