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
          Resume & Professional Profile
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
              AWS DevOps Engineer · 4+ Years Experience
            </p>
          </div>
          <div className="text-sm text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" /> deepakgajula15@gmail.com
            </div>
            <div>Hyderabad · India</div>
          </div>
        </header>

        <section className="mt-6">
          <h3 className="font-display font-semibold mb-2">Summary</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            AWS DevOps Engineer with 4+ years of experience designing,
            automating and maintaining cloud infrastructure on AWS.

            Experienced in Kubernetes (Amazon EKS), Terraform, Docker,
            Helm, Jenkins, Linux, Monitoring and DevSecOps.

            Skilled in building CI/CD pipelines, Infrastructure as Code,
            containerized deployments and production support for
            enterprise microservices.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="font-display font-semibold mb-3">
            Professional Highlights
          </h3>

          <ul className="grid md:grid-cols-2 gap-2 text-sm marker:text-neon-blue list-disc ml-5">

            <li>4+ Years AWS DevOps Experience</li>

            <li>Managed 25+ Production Microservices</li>

            <li>Reduced Infrastructure Provisioning Time by 70%</li>

            <li>Reduced Manual Deployment Effort by 50%</li>

            <li>99.9% Production Availability</li>

            <li>Production Kubernetes (Amazon EKS)</li>

          </ul>

        </section>

        <section className="mt-6">
          <h3 className="font-display font-semibold mb-3">Experience</h3>
          <div className="space-y-4 text-sm">
            <Item
              company="Cognizant"
              role="Associate (AWS DevOps Engineer)"
              period="Mar 2026 — Present"
              bullets={[
                "Managed 25+ production microservices on Amazon EKS.",
                "Provisioned AWS infrastructure using Terraform modules.",
                "Automated CI/CD pipelines using Jenkins Shared Libraries.",
              ]}
            />
            <Item
              company="Cognizant"
              role="Programmer Analyst"
              period="Oct 2023 — Mar 2026"
              bullets={[
                "Built reusable Jenkins Shared Libraries.",
                "Containerized applications using Docker.",
                "Managed Kubernetes deployments using Helm.",
              ]}
            />
            <Item
              company="Cognizant"
              role="Programmer Analyst Trainee"
              period="Oct 2022 — Oct 2023"
              bullets={[
                "Provisioned AWS infrastructure using Terraform.",
                "Automated Linux server configuration using Ansible.",
                "Developed Shell scripts for infrastructure automation.",
              ]}
            />
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="font-display font-semibold mb-2">Core stack</h3>
            <p className="text-sm text-muted-foreground">
              AWS · Amazon EKS · Terraform · Docker · Helm · Jenkins ·
              Jenkins Shared Libraries · Amazon ECR · SonarQube ·
              Veracode · Prometheus · Grafana · ELK · Linux ·
              Shell Scripting · Python · Ansible
            </p>
          </div>
        </section>
        
        <section className="mt-8 border-t border-border pt-6">
          <h3 className="font-display font-semibold mb-4">
            Key Achievements
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <div className="glass rounded-xl p-4 text-center">
              <h4 className="text-2xl font-bold text-neon-blue">25+</h4>
              <p className="mt-1 text-xs text-muted-foreground">
                Production Microservices
              </p>
            </div>

            <div className="glass rounded-xl p-4 text-center">
              <h4 className="text-2xl font-bold text-neon-blue">70%</h4>
              <p className="mt-1 text-xs text-muted-foreground">
                Faster Infrastructure Provisioning
              </p>
            </div>

            <div className="glass rounded-xl p-4 text-center">
              <h4 className="text-2xl font-bold text-neon-blue">50%</h4>
              <p className="mt-1 text-xs text-muted-foreground">
                Reduced Manual Deployment Effort
              </p>
            </div>

            <div className="glass rounded-xl p-4 text-center">
              <h4 className="text-2xl font-bold text-neon-blue">99.9%</h4>
              <p className="mt-1 text-xs text-muted-foreground">
                Production Availability
              </p>
            </div>

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
