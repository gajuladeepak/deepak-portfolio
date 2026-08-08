import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Linkedin, Github, CalendarClock, Send, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Deepak · AWS DevOps Engineer" },
      {
        name: "description",
        content:
          "Get in touch about DevOps, platform engineering, and SRE work — email, LinkedIn, GitHub or Calendly.",
      },
      { property: "og:title", content: "Contact — Deepak" },
      {
        property: "og:description",
        content: "Send a message, book time, or grab the resume.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-5xl px-4 pb-20">
      <p className="font-mono text-xs uppercase tracking-widest text-neon-blue mb-2">
        // /contact
      </p>
      <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
        Let's build something reliable.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Roles, consulting, or an interesting infrastructure problem — send a
        note, I usually reply within a day.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-5">
        <aside className="md:col-span-2 space-y-3">
          {[
            { icon: Mail, label: "Email", value: "deepakgajula15@gmai.com", href: "mailto:deepakgajula15@gmail.com" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/gajula-deepak/", href: "https://www.linkedin.com/in/gajula-deepak/" },
            { icon: Github, label: "GitHub", value: "github.com/gajuladeepak", href: "https://github.com/gajuladeepak" },
            { icon: CalendarClock, label: "Availability", value: "Available for Interviews" },
            { icon: MapPin, label: "Location", value: "Hyderabad · India" },
          ].map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="group flex items-center gap-4 rounded-2xl border border-border glass p-5 transition-all duration-300 hover:-translate-y-1 hover:border-neon-blue/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.12)]"
            >
              <div className="h-9 w-9 rounded-lg glass grid place-items-center group-hover:glow-blue transition">
                <Icon className="h-4 w-4 text-neon-blue" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {label}
                </p>
                <p className="text-sm">{value}</p>
              </div>
            </a>
          ))}
        </aside>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="md:col-span-3 rounded-2xl border border-border glass-strong p-8 shadow-lg"
        >
          {sent ? (
            <div className="min-h-[300px] grid place-items-center text-center">
              <div>
                <div className="mx-auto h-12 w-12 rounded-full bg-success/15 grid place-items-center glow-blue">
                  <Check className="h-6 w-6 text-success" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">
                  Thank you! Your message has been received.
                </h3>
                <p className="mt-1 text-sm text-muted-foreground font-mono">
                  200 OK · we'll be in touch shortly
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Ada Lovelace" required />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
              </div>
              <Field label="Subject" name="subject" placeholder="Platform engineering role at ..." />
              <div>
                <Label>Message</Label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about the problem you're solving..."
                  className="w-full glass rounded-lg px-4 py-3 text-sm outline-none focus:border-neon-blue/60 resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple px-5 py-2.5 text-sm text-background"
              >
                <Send className="h-4 w-4" /> Send message
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[10px] uppercase tracking-widest font-mono text-muted-foreground mb-1.5">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm transition-all duration-300 outline-none focus:border-neon-blue/60 focus:shadow-[0_0_18px_rgba(59,130,246,0.18)]"
      />
    </div>
  );
}
