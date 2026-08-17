import { profile, socials } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p className="font-mono text-xs text-fg-faint">
          © {year} {profile.name}
        </p>

        {socials.length > 0 && (
          <ul className="flex flex-wrap gap-6">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.1em] text-fg-muted hover:text-fg transition-colors"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-[0.1em] text-fg-muted hover:text-fg transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
