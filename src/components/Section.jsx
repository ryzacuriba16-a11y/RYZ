import { motion } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion";

// Shared section shell: hairline top border, consistent spacing, an
// optional "// eyebrow" label + heading, and a gentle fade-in as it
// scrolls into view. Used by About / Skills / Experience / Projects /
// Certificate / Contact so spacing and motion stay consistent everywhere —
// change it once here instead of in six different files.
export default function Section({ id, eyebrow, title, children, className = "" }) {
  const reducedMotion = useReducedMotion();

  const fade = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6, ease: "easeOut" },
      };

  return (
    <section id={id} className={`border-t border-border ${className}`}>
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
        <motion.div {...fade}>
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          {title && (
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-fg mb-12 md:mb-16">
              {title}
            </h2>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
