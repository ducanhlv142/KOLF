
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | KOLF Studio",
  description: "Khu vực quản trị KOLF.",
  robots: {
    index: false,
    follow: false,
  },
};

const features = [
  {
    title: "Media Library",
    description: "Quản lý hình ảnh, video và album cá nhân.",
  },
  {
    title: "Stories",
    description: "Quản lý các câu chuyện và hành trình.",
  },
  {
    title: "AI Workspace",
    description: "Phân tích tư liệu và hỗ trợ sáng tạo nội dung.",
  },
];

export default function StudioPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <p className="text-xs font-semibold tracking-[0.3em] text-primary">
        YOUR CREATIVE SPACE
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight">
        Welcome to <span className="text-primary">KOLF Studio.</span>
      </h1>

      <p className="mt-4 max-w-2xl leading-7 text-muted">
        Không gian để quản lý ký ức, câu chuyện và những
        điều tạo nên thế giới riêng của mình.
      </p>

      <section aria-labelledby="workspace-heading" className="mt-12">
        <h2
          id="workspace-heading"
          className="text-xl font-semibold"
        >
          Workspace
        </h2>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-surface-border bg-surface p-6"
            >
              <h3 className="text-lg font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                {feature.description}
              </p>

              <span className="mt-8 inline-block text-xs text-primary">
                Planned feature
              </span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
