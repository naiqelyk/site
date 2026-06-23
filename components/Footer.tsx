export default function Footer() {
  return (
    <footer className="mt-20 pt-8 border-t border-[var(--color-border)]">
      <div className="flex gap-4 text-sm text-[var(--color-text-muted)]">
        <a
          href="https://www.linkedin.com/in/kyle-qian/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <span className="text-[var(--color-border)]">/</span>
        <a href="mailto:kyleqian1@gmail.com">Email</a>
      </div>
    </footer>
  );
}
