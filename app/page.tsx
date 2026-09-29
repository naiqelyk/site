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
            I&apos;m a software engineer based in NYC. I'm currently exploring something new...
          </p>
          <p>
            Previously, I worked on scaling Wearables infrastructure and solving growth problems across Instagram Ads at{" "}
            <a href="https://www.meta.com/">Meta</a>.
          </p>
          <p>
            Before that, I studied Applied Math - Computer Science at{" "}
            <a href="https://www.brown.edu/">Brown University</a>.
          </p>
          <p>
            I'm especially interested in the spaces of leveraging AI for developer productivity, trading + market making, and healthcare technology.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-4">
          Interests
        </h2>
        <div className="space-y-4 text-[15px] leading-relaxed">
          <p>Outside of work, I'm highly interested in:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>poker</li>
            <li>crypto</li>
            <li>running/lifting</li>
            <li>NBA</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
