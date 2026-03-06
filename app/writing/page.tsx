import Link from "next/link";
import Footer from "@/components/Footer";

interface Post {
  date: string;
  title: string;
  slug: string;
}

interface PostSection {
  category: string;
  posts: Post[];
}

const sections: PostSection[] = [
  {
    category: "Recent",
    posts: [
      { date: "Mar 2025", title: "Building in public", slug: "#" },
      { date: "Jan 2025", title: "Goals for 2025", slug: "#" },
      { date: "Dec 2024", title: "Year in review: 2024", slug: "#" },
    ],
  },
  {
    category: "Annual Reviews",
    posts: [
      { date: "Dec 2024", title: "Year in review: 2024", slug: "#" },
      { date: "Dec 2023", title: "Year in review: 2023", slug: "#" },
      { date: "Dec 2022", title: "Year in review: 2022", slug: "#" },
    ],
  },
  {
    category: "Essays",
    posts: [
      { date: "Nov 2024", title: "On craft and caring about your work", slug: "#" },
      { date: "Aug 2024", title: "Lessons from scaling a team", slug: "#" },
      { date: "May 2024", title: "Why I write", slug: "#" },
      { date: "Feb 2024", title: "The case for reading fiction", slug: "#" },
      { date: "Oct 2023", title: "Things I believe about software", slug: "#" },
      { date: "Jun 2023", title: "On making decisions", slug: "#" },
    ],
  },
];

export default function Writing() {
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
