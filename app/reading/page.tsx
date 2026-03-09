import Footer from "@/components/Footer";

interface Book {
  title: string;
  author: string;
  url?: string;
}

interface BookSection {
  year: string;
  books: Book[];
}

const booksByYear: BookSection[] = [
  {
    year: "2026",
    books: [
      { title: "Ikigai: The Japanese Secret to a Long and Happy Life", author: "Hector Garcia, Francesc Miralles" },
      { title: "Things in Nature Merely Grow", author: "Yiyun Li" },
    ],
  },
];

export default function Reading() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2 font-[family-name:var(--font-serif)]">
        Reading
      </h1>
      <p className="text-sm text-[var(--color-text-muted)] mb-10">
        Books I&apos;ve read, roughly organized by year.
      </p>

      <div className="space-y-10">
        {booksByYear.map((section) => (
          <section key={section.year}>
            <h2 className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-4">
              {section.year}
            </h2>
            <ul className="space-y-3">
              {section.books.map((book) => (
                <li key={book.title} className="text-[15px]">
                  <span className="font-medium">{book.title}</span>
                  <span className="text-[var(--color-text-muted)]">
                    {" "}&mdash; {book.author}
                  </span>
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
