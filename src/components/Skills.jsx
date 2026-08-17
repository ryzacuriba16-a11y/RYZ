import { skills } from "../data/content";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="// Skills" title="What I Work With">
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-fg-faint mb-4 pb-3 border-b border-border">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-mono text-xs px-3 py-1.5 border border-border-strong text-fg-muted hover:text-fg hover:border-fg transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
