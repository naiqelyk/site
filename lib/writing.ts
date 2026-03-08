import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  date: string;
  title: string;
  slug: string;
}

export interface PostSection {
  category: string;
  posts: Post[];
}

const CATEGORY_ORDER = ["Recent", "Annual Reviews", "Essays"];

const MONTH_MAP: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

function parseDate(dateStr: string): number {
  const [mon, year] = dateStr.split(" ");
  return new Date(Number(year), MONTH_MAP[mon] ?? 0).getTime();
}

export function getWritingPosts(): PostSection[] {
  const dir = path.join(process.cwd(), "content/writing");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const grouped: Record<string, Post[]> = {};

  for (const file of files) {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(raw);

    const categories: string[] = Array.isArray(data.category)
      ? data.category
      : [data.category];

    for (const cat of categories) {
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push({
        title: data.title,
        date: data.date,
        slug: data.slug,
      });
    }
  }

  return CATEGORY_ORDER.filter((cat) => grouped[cat]).map((cat) => ({
    category: cat,
    posts: grouped[cat].sort((a, b) => parseDate(b.date) - parseDate(a.date)),
  }));
}
