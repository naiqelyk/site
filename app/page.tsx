import Footer from "@/components/Footer";

export default function About() {
  return (
    <div>
      <section className="mb-12">
        <h1 className="text-2xl font-semibold mb-6 font-[family-name:var(--font-serif)]">
          Hey, I&apos;m Kyle
        </h1>
        <div className="space-y-4 text-[15px] leading-relaxed text-[var(--color-text)]">
          <p>
            I&apos;m a software engineer based in San Francisco. Currently, I&apos;m
            building something new at a stealth startup.
          </p>
          <p>
            Previously, I worked at{" "}
            <a href="#">Company</a> where I helped scale the
            engineering team and shipped products used by millions of people.
          </p>
          <p>
            Before that, I studied Computer Science at{" "}
            <a href="#">University</a>.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-4">
          Interests
        </h2>
        <div className="space-y-4 text-[15px] leading-relaxed">
          <p>
            Outside of work, I enjoy reading, writing, and exploring new
            restaurants. Some books I&apos;ve enjoyed recently include{" "}
            <em>The Remains of the Day</em> by Kazuo Ishiguro and{" "}
            <em>Stoner</em> by John Williams.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
