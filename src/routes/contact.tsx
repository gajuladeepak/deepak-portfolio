import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  Clock,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Download,
  Github,
  Linkedin,
  Quote,
  Rocket,
  User,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Deepak Gajula · AWS DevOps Engineer" },
      {
        name: "description",
        content:
          "Reach out to Deepak Gajula for AWS DevOps, Platform Engineering, Cloud Infrastructure and SRE roles — email, LinkedIn, GitHub or resume.",
      },
      { property: "og:title", content: "Contact — Deepak Gajula" },
      {
        property: "og:description",
        content:
          "Open to AWS DevOps, Platform Engineering and SRE opportunities. Usually replies within 24 hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const EMAIL = "deepakgajula15@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/gajula-deepak/";
const GITHUB = "https://github.com/gajuladeepak";

type Row = {
  icon: typeof Mail;
  label: string;
  value: string;
  tone: string;
  href?: string;
  badge?: string;
};

const rows: Row[] = [
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    tone: "text-neon-blue",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    tone: "text-neon-purple",
  },
  {
    icon: Clock,
    label: "Notice Period",
    value: "30 Days (Negotiable)",
    tone: "text-success",
  },
  {
    icon: CalendarDays,
    label: "Experience",
    value: "4+ Years",
    tone: "text-warning",
  },
  {
    icon: CheckCircle2,
    label: "Availability",
    value: "Available for Interviews",
    tone: "text-success",
    badge: "Open",
  },
];

const snapshot = [
  "AWS Cloud (EC2, VPC, IAM, S3, EKS)",
  "Helm & Kubernetes Deployments",
  "Kubernetes (Amazon EKS)",
  "DevSecOps & Security Scanning",
  "Terraform (Infrastructure as Code)",
  "Monitoring (Prometheus, Grafana, ELK)",
  "CI/CD with Jenkins & GitHub Actions",
  "Linux, Shell Scripting & Automation",
  "Docker & Containerization",
  "Microservices & High Availability",
];

const actions = [
  {
    icon: Download,
    title: "Download Resume",
    subtitle: "ATS Optimized Resume (PDF)",
    href: "/resume/Deepak_Gajula_AWS_DevOps_Engineer.pdf",
    external: false,
    download: true,
    ring: "hover:border-neon-blue/60 hover:shadow-[0_0_28px_rgba(59,130,246,0.18)]",
    chip: "bg-neon-blue/12 text-neon-blue",
  },
  {
    icon: Github,
    title: "View GitHub",
    subtitle: "Check out my projects",
    href: GITHUB,
    external: true,
    ring: "hover:border-neon-purple/60 hover:shadow-[0_0_28px_rgba(168,85,247,0.18)]",
    chip: "bg-neon-purple/12 text-neon-purple",
  },
  {
    icon: Linkedin,
    title: "View LinkedIn Profile",
    subtitle: "Connect with me on LinkedIn",
    href: LINKEDIN,
    external: true,
    ring: "hover:border-neon-blue/60 hover:shadow-[0_0_28px_rgba(59,130,246,0.18)]",
    chip: "bg-neon-blue/12 text-neon-blue",
  },
  {
    icon: Mail,
    title: "Send Email",
    subtitle: "Reach out via email",
    href: `mailto:${EMAIL}`,
    external: false,
    ring: "hover:border-success/60 hover:shadow-[0_0_28px_rgba(34,197,94,0.18)]",
    chip: "bg-success/12 text-success",
  },
];

function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 animate-fade-in">
      <header className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-neon-blue mb-3">
          // CONTACT
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
          Let&apos;s build something{" "}
          <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            reliable.
          </span>
        </h1>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          I&apos;m open to AWS DevOps, Platform Engineering, Cloud Infrastructure
          and Site Reliability Engineering opportunities.
          <br className="hidden sm:block" />
          Feel free to reach out via email or LinkedIn.
        </p>
      </header>

      <div className="mt-12 grid items-start gap-6 lg:grid-cols-[45fr_55fr]">
        {/* Left card */}
        <section
          aria-labelledby="get-in-touch"
          className="rounded-2xl border border-border glass-strong p-6 sm:p-7 h-full"
        >
          <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
            <div className="h-11 w-11 shrink-0 rounded-full bg-neon-blue/15 grid place-items-center">
              <User className="h-5 w-5 text-neon-blue" />
            </div>
            <div className="min-w-0">
              <h2 id="get-in-touch" className="font-display text-xl font-semibold">
                Get in touch
              </h2>
              <p className="text-sm text-muted-foreground">
                Here&apos;s how you can reach me.
              </p>
            </div>
          </div>

          <ul className="mt-6 divide-y divide-border rounded-xl border border-border/60">
            {rows.map(({ icon: Icon, label, value, tone, badge, href }) => {
              const Tag: any = href ? "a" : "div";
              return (
                <li key={label}>
                  <Tag
                    {...(href ? { href, "aria-label": `${label}: ${value}` } : {})}
                    className={`group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-3 py-4 transition-all duration-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue/60 ${href
                        ? "hover:-translate-y-0.5 hover:border-neon-blue/50 hover:bg-white/[0.03] active:translate-y-0 cursor-pointer"
                        : ""
                      }`}
                  >
                    <span className="h-10 w-10 shrink-0 rounded-lg glass grid place-items-center transition-shadow duration-300 group-hover:glow-blue">
                      <Icon className={`h-4 w-4 ${tone}`} />
                    </span>
                    <span className="min-w-0">
                      <span className={`block text-xs font-medium ${tone}`}>
                        {label}
                      </span>
                      <span className="block truncate text-sm text-foreground group-hover:text-neon-blue transition-colors">
                        {value}
                      </span>
                    </span>
                    {badge ? (
                      <span className="shrink-0 rounded-md bg-success/12 px-2.5 py-1 text-xs font-medium text-success">
                        {badge}
                      </span>
                    ) : (
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-neon-blue" />
                    )}
                  </Tag>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex items-center gap-3 border-t border-border pt-5 text-sm text-muted-foreground">
            <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
            <p>
              I usually reply{" "}
              <span className="text-neon-blue">within 24 hours.</span>
            </p>
          </div>
        </section>

        {/* Right card */}
        <section
          aria-labelledby="snapshot"
          className="rounded-2xl border border-border glass-strong p-6 sm:p-7 h-full"
        >
          <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
            <div className="h-11 w-11 shrink-0 rounded-full bg-neon-purple/15 grid place-items-center">
              <User className="h-5 w-5 text-neon-purple" />
            </div>
            <div className="min-w-0">
              <h2 id="snapshot" className="font-display text-xl font-semibold">
                Professional Snapshot
              </h2>
              <p className="text-sm text-muted-foreground">
                What I bring to the table.
              </p>
            </div>
          </div>

          <ul className="mt-6 grid sm:grid-cols-2 sm:gap-x-8">
            {snapshot.map((s) => (
              <li
                key={s}
                className="flex items-center gap-3 border-b border-border/60 py-3 text-sm"
              >
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-neon-blue/80"
                  aria-hidden="true"
                />
                <span className="min-w-0">{s}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {actions.map(({ icon: Icon, title, subtitle, href, external, ring, chip }) => (
              <a
                key={title}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                aria-label={`${title} — ${subtitle}`}
                className={`group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-border glass p-4 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue/60 ${ring}`}
              >
                <span
                  className={`h-10 w-10 shrink-0 rounded-lg grid place-items-center ${chip}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold">
                    {title}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {subtitle}
                  </span>
                </span>
                <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom banner */}
      <aside className="mt-6 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border glass-strong px-6 py-8">
        <Quote className="h-7 w-7 shrink-0 text-neon-blue/70" aria-hidden="true" />
        <p className="min-w-0 text-sm sm:text-base text-foreground/90">
          Let&apos;s connect and build scalable, reliable and secure cloud
          platforms together.
        </p>
        <Rocket
          className="h-8 w-8 shrink-0 text-neon-purple/80"
          aria-hidden="true"
        />
      </aside>
    </div>
  );
}
