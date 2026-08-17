// Small shared button/link used by Hero, Projects, and Contact so every
// call-to-action in the site looks and behaves the same way.
//
// variant: "filled" (solid, high-emphasis) | "outline" (hairline border)
// Renders an <a> when `href` is passed, otherwise a <button>.
export default function Button({
  href,
  variant = "outline",
  children,
  className = "",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] transition-colors duration-200";
  const styles =
    variant === "filled"
      ? "bg-fg text-bg hover:bg-fg-muted"
      : "border border-border-strong text-fg hover:border-fg hover:bg-surface";

  const classes = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
