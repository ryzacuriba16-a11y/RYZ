import { motion } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion";

// No real screenshots exist for every project — for ones that don't have
// an `image` set yet, this generates a lightweight placeholder instead of
// a broken <img> or an invented stock photo: the project's initials over
// a hairline-bordered panel.
function PlaceholderVisual({ name }) {
  const initials = name
    .split(" ")
    .filter((w) => /[a-zA-Z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-surface">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)",
          color: "var(--color-fg)",
        }}
      />
      <span className="absolute inset-0 flex items-center justify-center font-display text-6xl font-semibold text-fg-faint">
        {initials}
      </span>
    </div>
  );
}

export default function ProjectCard({ project }) {
  const { name, description, tech, link, image } = project;
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={reducedMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group border border-border hover:border-border-strong transition-colors duration-200 flex flex-col"
    >
      {image ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-surface">
          <img
            src={image}
            alt={`${name} preview`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      ) : (
        {image ? (
  <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-surface">
    <img src={image} alt={`${name} preview`} className="absolute inset-0 h-full w-full object-cover" />
  </div>
) : (
  <PlaceholderVisual name={name} />
)}
      )}

      <div className="p-5 flex flex-col flex-1">
        <h4 className="font-display text-lg font-medium text-fg mb-1.5">{name}</h4>
        <p className="text-sm text-fg-muted leading-relaxed flex-1">{description}</p>

        {tech.length > 0 && (
          <ul className="flex flex-wrap gap-2 mt-4">
            {tech.map((t) => (
              <li
                key={t}
                className="font-mono text-[10px] uppercase tracking-[0.08em] px-2 py-1 border border-border text-fg-faint"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 pt-4 border-t border-border">
          {link ? (
            
              href={link}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-[0.1em] text-fg hover:text-fg-muted transition-colors"
            >
              View Project →
            </a>
          ) : (
            <span
              className="font-mono text-xs uppercase tracking-[0.1em] text-fg-faint cursor-not-allowed"
              title="Add a project link in src/data/content.js"
            >
              [Add project link]
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
