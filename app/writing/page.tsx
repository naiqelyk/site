import Link from "next/link";
import Footer from "@/components/Footer";
import { getWritingPosts } from "@/lib/writing";

export default function Writing() {
  const sections = getWritingPosts();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2 font-[family-name:var(--font-serif)]">
        Writing
      </h1>
      <p className="text-sm text-[var(--color-text-muted)] mb-10">
        Essays and reflections on software, life, and everything in between.
      </p>

      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.category}>
            <h2 className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-4">
              {section.category}
            </h2>
            <ul className="space-y-3">
              {section.posts.map((post, i) => (
                <li key={`${post.slug}-${i}`} className="flex items-baseline gap-4 text-[15px]">
                  <span className="text-sm text-[var(--color-text-muted)] shrink-0 w-20">
                    {post.date}
                  </span>
                  <Link href={post.slug} className="font-medium">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <Footer />
    </div>
  );
}
