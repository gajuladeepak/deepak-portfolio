import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Deepak · Cloud & Platform Engineering" },
      {
        name: "description",
        content:
          "Selected engineering projects: multi-region EKS platforms, zero-downtime CI/CD, observability, and DevSecOps.",
      },
      { property: "og:title", content: "Projects — Deepak" },
      {
        property: "og:description",
        content:
          "Case studies with architecture, impact and stack for each system.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

type Project = {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  impact: string[];
  stack: string[];
  pipeline: string[];
  category: "Platform" | "CI/CD" | "Observability" | "Security";
};

const PROJECTS: Project[] = [
  {
    id: "eks-multi-region",
    name: "Multi-region EKS Platform",
    tagline: "A self-service Kubernetes platform across 3 AWS regions.",
    problem:
      "Teams needed isolated, compliant K8s environments with fast provisioning and no ops toil.",
    solution:
      "Modular Terraform blueprints, ArgoCD app-of-apps, Karpenter autoscaling, and a golden-path CLI for new services.",
    impact: [
      "70% faster environment provisioning",
      "99.95% platform SLO sustained for 12 months",
      "Onboarded 25+ microservices with zero SEV1",
    ],
    stack: ["AWS", "EKS", "Terraform", "ArgoCD", "Karpenter", "Helm", "Istio"],
    pipeline: ["Git", "Actions", "Terraform", "EKS", "ArgoCD", "Prometheus"],
    category: "Platform",
  },
  {
    id: "zero-downtime-cicd",
    name: "Zero-downtime CI/CD",
    tagline: "Blue/green + progressive delivery across 24 services.",
    problem:
      "Slow, risky releases. Every deploy required a maintenance window.",
    solution:
      "Standardized Jenkins shared library, canary via Argo Rollouts, automated smoke tests and SLO-based rollback.",
    impact: [
      "Deploys per day: 3 → 17",
      "Change failure rate: 12% → 2%",
      "Mean lead time: 3d → 6m 42s",
    ],
    stack: ["Jenkins", "GitHub Actions", "Argo Rollouts", "SonarQube", "ECR"],
    pipeline: ["Git", "Actions", "Jenkins", "Sonar", "ECR", "EKS", "Rollouts"],
    category: "CI/CD",
  },
  {
    id: "observability-stack",
    name: "Unified Observability Stack",
    tagline: "One pane of glass across 40+ services & 3 regions.",
    problem:
      "Fragmented logs and metrics across teams; incidents took hours to root-cause.",
    solution:
      "Prometheus + Thanos for long-term metrics, Loki for logs, OTel collectors, SLO dashboards and alert routing to on-call.",
    impact: [
      "MTTR reduced by 63%",
      "Alert noise cut by 4x with SLO-based paging",
      "Full trace/log/metric correlation",
    ],
    stack: ["Prometheus", "Thanos", "Grafana", "Loki", "OpenTelemetry"],
    pipeline: ["Apps", "OTel", "Prometheus", "Loki", "Grafana", "PagerDuty"],
    category: "Observability",
  },
  {
    id: "secure-secrets",
    name: "Secure Secrets & Supply Chain",
    tagline: "Shift-left security across every pipeline.",
    problem:
      "Secrets sprawl and unsigned images in production. Compliance audits were painful.",
    solution:
      "AWS Secrets Manager + External Secrets Operator, signed images (Cosign), SBOMs, and OPA policies at admission.",
    impact: [
      "0 secrets in code across 25+ repos",
      "100% images signed & scanned",
      "SOC2 audit closed with zero critical findings",
    ],
    stack: ["Secrets Manager", "External Secrets", "Cosign", "Trivy", "OPA"],
    pipeline: ["Git", "Actions", "Trivy", "Cosign", "ECR", "OPA", "EKS"],
    category: "Security",
  },
];

const FILTERS = ["All", "Platform", "CI/CD", "Observability", "Security"] as const;

function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [open, setOpen] = useState<string | null>(PROJECTS[0].id);

  const list = PROJECTS.filter((p) => filter === "All" || p.category === filter);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20">
      <p className="font-mono text-xs uppercase tracking-widest text-neon-blue mb-2">
        // /projects
      </p>
      <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
        Systems I've shipped to production.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Every project below has been on-called, load-tested, and measured
        against real SLOs. Expand a card for the full architecture story.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-full text-sm font-mono transition-all ${
              filter === f
                ? "bg-gradient-to-r from-neon-blue to-neon-purple text-background"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        {list.map((p) => (
          <article
            key={p.id}
            className="glass rounded-2xl overflow-hidden transition-all hover:border-neon-blue/40"
          >
            <button
              onClick={() => setOpen((o) => (o === p.id ? null : p.id))}
              className="w-full text-left p-6 flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neon-blue">
                    {p.category}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                  <span className="text-[10px] font-mono text-muted-foreground">
                    case-study
                  </span>
                </div>
                <h2 className="font-display text-xl md:text-2xl font-semibold">
                  {p.name}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 md:justify-end">
                {p.stack.slice(0, 5).map((s) => (
                  <span
                    key={s}
                    className="px-2 py-1 rounded-md glass text-[11px] font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <ArrowRight
                className={`h-5 w-5 shrink-0 transition-transform ${
                  open === p.id ? "rotate-90 text-neon-blue" : "text-muted-foreground"
                }`}
              />
            </button>

            {open === p.id && (
              <div className="border-t border-border p-6 grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <Block label="Problem" body={p.problem} />
                  <Block label="Solution" body={p.solution} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground mb-2">
                      Impact
                    </p>
                    <ul className="space-y-1.5 text-sm">
                      {p.impact.map((i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-success shrink-0" />
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground mb-2">
                      Architecture flow
                    </p>
                    <div className="glass-strong rounded-lg p-4">
                      <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                        {p.pipeline.map((step, i) => (
                          <span key={step} className="flex items-center gap-2">
                            <span className="px-2 py-1 rounded bg-white/5 border border-border">
                              {step}
                            </span>
                            {i < p.pipeline.length - 1 && (
                              <span className="text-neon-blue">→</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground mb-2">
                      Full stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span key={s} className="px-2 py-1 rounded-md glass text-[11px] font-mono">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground"
                    >
                      <Github className="h-3.5 w-3.5" /> repo
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> case study
                    </a>
                  </div>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground mb-1.5">
        {label}
      </p>
      <p className="text-sm text-foreground/90 leading-relaxed">{body}</p>
    </div>
  );
}
