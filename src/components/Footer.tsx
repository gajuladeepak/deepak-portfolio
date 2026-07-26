import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, FileDown, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple grid place-items-center font-mono text-[11px] font-bold text-background">
                DP
              </div>
              <span className="font-display font-semibold">Deepak · AWS DevOps</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Building reliable cloud infrastructure, scalable Kubernetes
              platforms, and production-grade CI/CD pipelines.
            </p>
            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse-glow" />
              All systems operational · uptime 99.99%
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {["Projects", "Experience", "Skills", "Blog", "Contact"].map((l) => (
                <li key={l}>
                  <Link
                    to={`/${l.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                { icon: Twitter, label: "X", href: "https://x.com" },
                { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
                { icon: FileDown, label: "Resume", href: "/resume" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-9 w-9 grid place-items-center rounded-lg glass hover:glow-blue hover:border-neon-blue/40 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground font-mono">
          <span>© {new Date().getFullYear()} Deepak. Built with ❤ using modern web tech.</span>
          <span>v1.0.0 · region: us-east-1 · commit: a1b2c3d</span>
        </div>
      </div>
    </footer>
  );
}
