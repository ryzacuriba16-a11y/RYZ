import { experience } from "../data/content";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="// Experience" title="Where I've Worked">
      <ol className="space-y-0">
        {experience.map((job, i) => (
          <li
            key={job.org}
            className={`grid md:grid-cols-[140px_1fr] gap-4 md:gap-10 py-8 ${
              i !== 0 ? "border-t border-border" : ""
            }`}
          >
            <div className="font-mono text-xs uppercase tracking-[0.1em] text-fg-faint">
              {job.period}
            </div>

            <div>
              <h3 className="font-display text-xl md:text-2xl font-medium text-fg">
                {job.role}
              </h3>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-fg-muted mt-1 mb-4">
                {job.org}
              </p>

              {job.bullets.length > 0 && (
                <ul className="space-y-2">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-fg-muted">
                      <span className="text-fg-faint select-none">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
