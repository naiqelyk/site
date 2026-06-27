import { notFound } from "next/navigation";
import Link from "next/link";
import { marked } from "marked";
import Footer from "@/components/Footer";
import { getWritingPost, getAllWritingSlugs } from "@/lib/writing";

export async function generateStaticParams() {
  const slugs = getAllWritingSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function WritingPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getWritingPost(slug);

  if (!post) notFound();

  const html = marked(post.content);

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/writing"
          className="text-sm text-[var(--color-text-muted)] no-underline hover:text-[var(--color-text)]"
        >
          ← Writing
        </Link>
      </div>

      <header className="mb-10">
        <h1 className="text-2xl font-semibold mb-2 font-[family-name:var(--font-serif)]">
          {post.title}
        </h1>
        <p className="text-sm text-[var(--color-text-muted)]">{post.date}</p>
      </header>

      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <Footer />
    </div>
  );
}
