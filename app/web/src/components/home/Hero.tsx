
export default function Hero() {
  return (
    <section
      id="intro"
      className="relative isolate overflow-hidden"
    >
      <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
        
        {/* Left: Introduction */}
        <div className="relative z-10">
          <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-primary">
            WELCOME TO MY UNIVERSE
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Xin chào,
            <br />
            t là <span className="text-primary">Kolf.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
            Một người. Nhiều thế giới. Và những câu
            chuyện vẫn đang được viết tiếp.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Life", "Stories", "Experiences"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-surface-border bg-surface px-4 py-2 text-xs text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Visual */}
        <div
          className="relative mx-auto aspect-square w-full max-w-[460px]"
          aria-hidden="true"
        >
          {/* Glow */}
          <div className="absolute inset-[8%] rounded-full bg-primary/20 blur-[90px]" />

          {/* Orbits */}
          <div className="absolute inset-[6%] rotate-[-24deg] rounded-full border border-primary/30" />
          <div className="absolute inset-[14%] rotate-[32deg] rounded-full border border-primary/20" />

          {/* Planet */}
          <div className="kolf-planet absolute inset-[22%] rounded-full" />

          {/* Star */}
          <div className="absolute right-[15%] top-[20%] size-2 rounded-full bg-primary-hover shadow-[0_0_24px_rgba(167,139,250,0.9)]" />
        </div>
      </div>
    </section>
  );
}
