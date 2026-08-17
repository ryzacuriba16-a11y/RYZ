import { useState } from "react";
import { profile } from "../data/content";
import Section from "./Section";
import Button from "./Button";

const fieldClasses =
  "w-full bg-transparent border border-border-strong px-4 py-3 text-sm text-fg placeholder:text-fg-faint focus:outline-none focus:border-fg transition-colors";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sent

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // No backend is wired up yet — this intentionally does not send or
    // store anything. Swap this for a real request (or a service like
    // Formspree) once you have somewhere for submissions to go.
    setStatus("sent");
  }

  return (
    <Section id="contact" eyebrow="// Contact" title="Let's Build Something.">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <p className="text-fg-muted text-lg leading-relaxed mb-6">
            Reach out directly, or use the form — whichever's easier.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-lg md:text-xl text-fg hover:text-fg-muted transition-colors break-all"
          >
            {profile.email}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="eyebrow mb-2 block">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="email" className="eyebrow mb-2 block">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="message" className="eyebrow mb-2 block">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              className={`${fieldClasses} resize-none`}
            />
          </div>

          <Button type="submit" variant="filled" className="w-full sm:w-auto">
            Send Message
          </Button>

          {status === "sent" && (
            <p role="status" aria-live="polite" className="font-mono text-xs text-fg-muted pt-2">
              This form isn't connected to anything yet, so nothing was actually sent — email{" "}
              {profile.email} directly for now.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
