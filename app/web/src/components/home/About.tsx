
const chapters = [
  {
    number: "01",
    title: "Thế giới riêng",
    description:
      "Những bộ phim, trò chơi, sở thích và điều khiến mình tò mò.",
  },
  {
    number: "02",
    title: "Những hành trình",
    description:
    "Hà Lan, Đức, Bỉ, Trung Quốc và những trải nghiệm muốn lưu giữ.",
  },
  {
    number: "03",
    title: "Những điều đang xây dựng",
    description:
      "Các ý tưởng, sản phẩm và dự án mình đang phát triển.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-t border-surface-border/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-primary">
            BEYOND THE INTRODUCTION
          </p>

          <h2
            id="about-heading"
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Không chỉ là
            <span className="text-primary"> những dòng code.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            KOLF là nơi mình lưu giữ những câu chuyện,
            những điều yêu thích và các dấu mốc trong
            hành trình sống.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {chapters.map((chapter) => (
            <article
              key={chapter.number}
              className="rounded-2xl border border-surface-border bg-surface p-7 transition-colors duration-300 hover:border-primary/60"
            >
              <span className="text-sm font-medium text-primary">
                {chapter.number}
              </span>

              <h3 className="mt-8 text-xl font-semibold">
                {chapter.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                {chapter.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
