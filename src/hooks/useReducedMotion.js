import { useEffect, useState } from "react";

// Tracks the user's OS-level "reduce motion" preference so components can
// skip animation instead of fighting it. Framer Motion animates via
// transform/opacity directly, so a CSS override alone isn't enough — we
// check this in JS and swap to instant/static variants when it's true.
export default function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const handleChange = (event) => setReduced(event.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return reduced;
}
