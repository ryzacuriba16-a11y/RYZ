import { about } from "../data/content";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="// About" title="About Me">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
        {/* Left rail label — echoes the "structure is information" idea
            without inventing a fake statistic to fill the space. */}
        <div className="hidden md:block">
          <p className="font-mono text-xs text-fg-faint uppercase tracking-[0.14em]">
            Rizal Technological
            <br />
            University
          </p>
        </div>

        <div className="space-y-6">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-lg md:text-xl leading-relaxed text-fg-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
