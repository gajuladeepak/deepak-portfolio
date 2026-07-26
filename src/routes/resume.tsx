import { createFileRoute } from "@tanstack/react-router";
import { Download, Printer, Copy, Linkedin, Github, Mail, Check } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Deepak · AWS DevOps Engineer" },
      {
        name: "description",
        content:
          "Interactive resume for Deepak — download PDF, print, or explore the printable version online.",
      },
      { property: "og:title", content: "Resume — Deepak" },
      { property: "og:description", content: "AWS DevOps Engineer résumé." },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: Resume,
});

function Resume() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText("hello@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <div className="mx-auto max-w-4xl px-4 pb-20">
      <p className="font-mono text-xs uppercase tracking-widest text-neon-blue mb-2">
        // resume.pdf
      </p>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
          The résumé, in one page.
        </h1>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple px-4 py-2.5 text-sm text-background"
        >
          <Download className="h-4 w-4" /> Download PDF
        </a>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-lg glass px-4 py-2.5 text-sm"
        >
          <Printer className="h-4 w-4" /> Print
        </button>
        <button
          onClick={copy}
          className="inline-flex items-center gap-2 rounded-lg glass px-4 py-2.5 text-sm"
        >
          {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied" : "Copy email"}
        </button>
        <a href="https://linkedin.com" className="inline-flex items-center gap-2 rounded-lg glass px-4 py-2.5 text-sm">
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
        <a href="https://github.com" className="inline-flex items-center gap-2 rounded-lg glass px-4 py-2.5 text-sm">
          <Github className="h-4 w-4" /> GitHub
        </a>
      </div>

      <article className="mt-10 glass-strong rounded-2xl p-8 md:p-10">
        <header className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-6">
          <div>
            <h2 className="font-display text-2xl font-semibold">Deepak</h2>
            <p className="text-muted-foreground text-sm">
              AWS DevOps Engineer · Platform & SRE
            </p>
          </div>
          <div className="text-sm text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" /> hello@example.com
            </div>
            <div>Remote · EU / IN</div>
          </div>
        </header>

        <section className="mt-6">
          <h3 className="font-display font-semibold mb-2">Summary</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            5+ years designing and operating cloud platforms on AWS and
            Kubernetes. Deep expertise in Terraform, CI/CD, observability and
            DevSecOps. Track record of shipping self-service platforms that
            move teams faster while raising reliability.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="font-display font-semibold mb-3">Experience</h3>
          <div className="space-y-4 text-sm">
            <Item
              company="Nimbus Cloud"
              role="Senior DevOps Engineer"
              period="2023 — Present"
              bullets={[
                "Own EKS-based internal platform serving 25+ services.",
                "Cut infra spend 34% via Karpenter and rightsizing.",
                "SLO-based alerting reduced MTTR by 63%.",
              ]}
            />
            <Item
              company="Vector Systems"
              role="DevOps Engineer"
              period="2021 — 2023"
              bullets={[
                "Migrated monolith to containers on ECS/EKS with 0 downtime.",
                "Built shared Jenkins library for 15+ teams.",
                "Reduced Docker image sizes 60%; CI 22m → 4m.",
              ]}
            />
            <Item
              company="Bitline"
              role="Cloud Engineer"
              period="2019 — 2021"
              bullets={[
                "Automated 90% of AWS provisioning with Terraform.",
                "Lead engineer on first successful SOC2 audit.",
              ]}
            />
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="font-display font-semibold mb-2">Core stack</h3>
            <p className="text-sm text-muted-foreground">
              AWS · EKS · Terraform · Helm · Docker · Jenkins · GitHub Actions ·
              Prometheus · Grafana · ELK · Python · Bash · Linux · ArgoCD ·
              Istio · Vault.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-2">Certifications</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>· AWS Certified Solutions Architect – Associate</li>
              <li>· AWS Certified DevOps Engineer – Professional</li>
              <li>· Certified Kubernetes Administrator (CKA)</li>
              <li>· HashiCorp Terraform Associate</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
}

function Item({
  company,
  role,
  period,
  bullets,
}: {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between">
        <p>
          <span className="font-semibold">{role}</span> · {company}
        </p>
        <span className="font-mono text-xs text-muted-foreground">{period}</span>
      </div>
      <ul className="mt-1 ml-4 list-disc text-muted-foreground space-y-0.5 marker:text-neon-blue">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
