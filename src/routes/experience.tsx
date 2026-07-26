import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Briefcase, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Deepak · DevOps Career Timeline" },
      {
        name: "description",
        content:
          "Career timeline: roles, responsibilities, and measurable impact across cloud, platform and reliability engineering.",
      },
      { property: "og:title", content: "Experience — Deepak" },
      { property: "og:description", content: "Interactive DevOps career timeline." },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: Experience,
});

type Role = {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
  stack: string[];
  metrics: [string, string][];
};

const ROLES: Role[] = [
  {
    company: "Nimbus Cloud",
    role: "Senior DevOps Engineer",
    period: "2023 — Present",
    responsibilities: [
      "Own the internal developer platform on EKS",
      "Design multi-region infra with Terraform + Terragrunt",
      "Lead SRE practices, on-call runbooks and postmortems",
    ],
    achievements: [
      "Scaled platform from 10 → 25+ microservices",
      "Cut infra costs by 34% via right-sizing & Karpenter",
      "Introduced SLO-based alerting; MTTR ↓ 63%",
    ],
    stack: ["AWS", "EKS", "Terraform", "ArgoCD", "Prometheus", "Grafana"],
    metrics: [
      ["Uptime", "99.97%"],
      ["Deploys/day", "17"],
    ],
  },
  {
    company: "Vector Systems",
    role: "DevOps Engineer",
    period: "2021 — 2023",
    responsibilities: [
      "Migrated monolith to containerized services on ECS + EKS",
      "Built shared Jenkins library used by 15+ teams",
      "Implemented centralized logging with ELK",
    ],
    achievements: [
      "Reduced Docker image sizes by 60%",
      "Cut CI build times from 22m to 4m",
      "0-downtime migration for a 4M user product",
    ],
    stack: ["AWS", "ECS", "Jenkins", "Docker", "ELK", "Terraform"],
    metrics: [
      ["Build time", "-82%"],
      ["Images", "60% smaller"],
    ],
  },
  {
    company: "Bitline",
    role: "Cloud Engineer",
    period: "2019 — 2021",
    responsibilities: [
      "Automated AWS provisioning with Terraform",
      "Hardened IAM, VPC and security groups baselines",
      "On-call rotation and incident response",
    ],
    achievements: [
      "Automated 90% of previously manual provisioning",
      "Passed first SOC2 audit as lead engineer",
    ],
    stack: ["AWS", "Terraform", "Bash", "Python", "CloudWatch"],
    metrics: [
      ["Automation", "90%"],
      ["Incidents", "-45%"],
    ],
  },
];

function Experience() {
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-4xl px-4 pb-20">
      <p className="font-mono text-xs uppercase tracking-widest text-neon-blue mb-2">
        // career.log
      </p>
      <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
        5+ years engineering production platforms.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Roles I've held, systems I've shipped, and the numbers behind them.
      </p>

      <ol className="mt-12 relative border-l border-border ml-4 space-y-6">
        {ROLES.map((r, i) => {
          const isOpen = open === i;
          return (
            <li key={r.company} className="pl-8 relative">
              <span className="absolute -left-[13px] top-3 h-6 w-6 rounded-full bg-background border border-neon-blue/40 grid place-items-center glow-blue">
                <Briefcase className="h-3 w-3 text-neon-blue" />
              </span>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full text-left glass rounded-xl p-5 hover:border-neon-blue/40 transition-all"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      {r.role} ·{" "}
                      <span className="text-gradient">{r.company}</span>
                    </h3>
                    <p className="font-mono text-xs text-muted-foreground">
                      {r.period}
                    </p>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 text-muted-foreground transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                </div>

                {isOpen && (
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground mb-2">
                        Responsibilities
                      </p>
                      <ul className="space-y-1.5 text-sm">
                        {r.responsibilities.map((x) => (
                          <li key={x} className="flex gap-2">
                            <span className="text-neon-blue">▸</span>
                            {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground mb-2">
                        Achievements
                      </p>
                      <ul className="space-y-1.5 text-sm">
                        {r.achievements.map((x) => (
                          <li key={x} className="flex gap-2">
                            <span className="text-success">✓</span>
                            {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-2 flex flex-wrap gap-4 items-center pt-2 border-t border-border">
                      <div className="flex flex-wrap gap-1.5">
                        {r.stack.map((s) => (
                          <span
                            key={s}
                            className="px-2 py-1 rounded-md glass text-[11px] font-mono"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <div className="ml-auto flex gap-3">
                        {r.metrics.map(([k, v]) => (
                          <div key={k} className="text-right">
                            <div className="font-display font-semibold text-gradient">
                              {v}
                            </div>
                            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                              {k}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
