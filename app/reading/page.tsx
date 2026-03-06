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
    year: "2025",
    books: [
      { title: "Intermezzo", author: "Sally Rooney" },
      { title: "The Remains of the Day", author: "Kazuo Ishiguro" },
      { title: "Stoner", author: "John Williams" },
      { title: "Dept. of Speculation", author: "Jenny Offill" },
    ],
  },
  {
    year: "2024",
    books: [
      { title: "Tomorrow, and Tomorrow, and Tomorrow", author: "Gabrielle Zevin" },
      { title: "The Three-Body Problem", author: "Cixin Liu" },
      { title: "Klara and the Sun", author: "Kazuo Ishiguro" },
      { title: "Sapiens", author: "Yuval Noah Harari" },
      { title: "Meditations", author: "Marcus Aurelius" },
    ],
  },
  {
    year: "2023",
    books: [
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
      { title: "Atomic Habits", author: "James Clear" },
      { title: "Project Hail Mary", author: "Andy Weir" },
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
