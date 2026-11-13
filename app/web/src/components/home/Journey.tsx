
const journeys = [
  {
    id: "netherlands",
    number: "01",
    country: "Hà Lan",
    code: "NL",
    title: "Một góc trời châu Âu",
    description:
      "Hành trình công việc, những nơi đã ghé qua và những khoảnh khắc đáng nhớ.",
    background:
      "linear-gradient(135deg, #504a8e, #181329)",
  },
  {
    id: "germany",
    number: "02",
    country: "Đức",
    code: "DE",
    title: "Những dấu chân mới",
    description:
      "Một chương hành trình đang chờ được kể lại qua những hình ảnh và kỷ niệm.",
    background:
      "linear-gradient(135deg, #654b85, #21172f)",
  },
  {
    id: "belgium",
    number: "03",
    country: "Bỉ",
    code: "BE",
    title: "Những góc phố và ký ức",
    description:
      "Những khung hình, địa điểm và câu chuyện sẽ được bổ sung từ trải nghiệm thực tế.",
    background:
      "linear-gradient(135deg, #806078, #24172d)",
  },
  {
    id: "china",
    number: "04",
    country: "Trung Quốc",
    code: "CN",
    title: "Một chương ký ức",
    description:
      "Những trải nghiệm và câu chuyện sẽ được ghi lại từ tư liệu thực tế.",
    background:
      "linear-gradient(135deg, #794367, #211329)",
  },
];


export default function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="scroll-mt-20 border-t border-surface-border/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-primary">
            THE JOURNEY
          </p>

          <h2
            id="journey-heading"
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Những nơi đã đi qua.
            <span className="text-primary">
              {" "}Những điều ở lại.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Ba chương nhỏ trong một hành trình vẫn đang
            được viết tiếp.
          </p>
        </div>

        {/* Journey Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {journeys.map((journey) => (
            <article
              key={journey.id}
              className="overflow-hidden rounded-2xl border border-surface-border bg-surface"
            >
              {/* Visual Placeholder */}
              <div
                className="relative flex aspect-[4/3] items-center justify-center overflow-hidden"
                style={{ background: journey.background }}
                aria-hidden="true"
              >
                <div className="absolute -right-12 -bottom-16 size-56 rounded-full border border-white/20" />

                <span className="text-7xl font-bold tracking-tight text-white/30">
                  {journey.code}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-medium tracking-widest text-primary">
                    CHAPTER {journey.number}
                  </span>

                  <span className="text-xs text-muted">
                    {journey.country}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {journey.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {journey.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
