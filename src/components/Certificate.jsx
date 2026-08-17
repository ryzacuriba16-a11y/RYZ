import { certificates } from "../data/content";
import Section from "./Section";

export default function Certificate() {
  return (
    <Section id="certificate" eyebrow="// Certification" title="Certificates">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.name}
            className="border border-border p-6 hover:border-border-strong transition-colors"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-faint mb-3">
              {cert.date}
            </p>
            <h3 className="font-display text-lg font-medium text-fg mb-2 leading-snug">
              {cert.name}
            </h3>
            <p className="text-sm text-fg-muted">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
