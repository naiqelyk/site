import Footer from "@/components/Footer";

export default function About() {
  return (
    <div>
      <section className="mb-12">
        <h1 className="text-2xl font-semibold mb-6 font-[family-name:var(--font-serif)]">
          Hey, I&apos;m Kyle 👋
        </h1>
        <div className="space-y-4 text-[15px] leading-relaxed text-[var(--color-text)]">
          <p>
            I&apos;m a software engineer based in New York.
          </p>
          <p>
            Currently, I work at{" "}
            <a href="https://www.meta.com/">Meta</a> on a Wearables Infra team -- I primarily focus on AI native tooling and orchestration enabling teams to rebuild everyday workflows. 
            Previously, I worked on product teams in Instagram Ads and Facebook Creator Monetization.
          </p>
          <p>
            Before that, I studied Applied Math - Computer Science at{" "}
            <a href="https://www.brown.edu/">Brown University</a>.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-4">
          Interests
        </h2>
        <div className="space-y-4 text-[15px] leading-relaxed">
          <p>
            Outside of work, I enjoy poker + other strategy games, running and lifting, watching NBA, and traveling to new places.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
