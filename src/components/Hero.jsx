import { motion } from "framer-motion";
import { profile } from "../data/content";
import Button from "./Button";
import useReducedMotion from "../hooks/useReducedMotion";

export default function Hero() {
  const reducedMotion = useReducedMotion();

  // When reduced motion is on, content just appears — no slide/fade.
  const rise = (delay = 0) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: "easeOut" },
        };

  const nameParts = profile.name.toUpperCase().split(" ");
  const firstLine = nameParts.slice(0, -1).join(" ");
  const lastLine = nameParts[nameParts.length - 1];

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24 pb-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.p {...rise(0)} className="eyebrow mb-6 flex items-center gap-1">
          {profile.headline}
          <span className="blinking-cursor text-fg">▍</span>
        </motion.p>

        <motion.h1
          {...rise(0.08)}
          className="font-display font-semibold leading-[0.95] text-fg text-[clamp(2.75rem,10vw,7rem)]"
        >
          {firstLine}
          <br />
          {lastLine}
        </motion.h1>

        <motion.p
          {...rise(0.18)}
          className="mt-8 max-w-xl text-base md:text-lg text-fg-muted"
        >
          {profile.intro}
        </motion.p>

        <motion.div {...rise(0.26)} className="mt-10 flex flex-wrap gap-4">
          <Button href="#projects" variant="filled">
            View Projects
          </Button>
          <Button href="#about" variant="outline">
            About Me
          </Button>
          <Button href={profile.cvPath} variant="outline" download>
            Download CV
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        {...(reducedMotion
          ? {}
          : {
              animate: { y: [0, 6, 0] },
              transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
            })}
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-fg-faint hover:text-fg-muted transition-colors"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <span className="h-8 w-px bg-current" />
      </motion.a>
    </section>
  );
}
