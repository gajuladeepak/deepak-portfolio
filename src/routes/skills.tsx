import { createFileRoute } from "@tanstack/react-router";
import {
  Cloud,
  Boxes,
  Container,
  GitBranch,
  Activity,
  ShieldCheck,
  Terminal,
  Network,
} from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Deepak · Cloud, Kubernetes, IaC, CI/CD" },
      {
        name: "description",
        content:
          "Deep expertise across AWS, Kubernetes, Terraform, Docker, CI/CD, monitoring and DevSecOps.",
      },
      { property: "og:title", content: "Skills — Deepak" },
      {
        property: "og:description",
        content: "Interactive skill matrix across the DevOps stack.",
      },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: Skills,
});

type Skill = { name: string; level: number; years: string; note?: string };
type Category = { title: string; icon: any; accent: string; skills: Skill[] };

const CATEGORIES: Category[] = [
  {
    title: "Cloud",
    icon: Cloud,
    accent: "from-neon-blue to-neon-cyan",
    skills: [
      { name: "AWS", level: 95, years: "5y", note: "EKS · EC2 · Lambda · IAM · RDS · S3" },
      { name: "Multi-region HA", level: 88, years: "4y" },
      { name: "Cost optimization", level: 82, years: "3y" },
    ],
  },
  {
    title: "Infrastructure as Code",
    icon: Boxes,
    accent: "from-neon-purple to-neon-blue",
    skills: [
      { name: "Terraform", level: 94, years: "5y", note: "modules · workspaces · TFC" },
      { name: "Terragrunt", level: 82, years: "3y" },
      { name: "Pulumi", level: 60, years: "1y" },
    ],
  },
  {
    title: "Containers & K8s",
    icon: Container,
    accent: "from-neon-cyan to-neon-purple",
    skills: [
      { name: "Kubernetes / EKS", level: 92, years: "4y" },
      { name: "Helm", level: 90, years: "4y" },
      { name: "Docker", level: 95, years: "5y" },
      { name: "ArgoCD", level: 85, years: "3y" },
    ],
  },
  {
    title: "CI / CD",
    icon: GitBranch,
    accent: "from-neon-blue to-neon-purple",
    skills: [
      { name: "GitHub Actions", level: 92, years: "4y" },
      { name: "Jenkins", level: 90, years: "5y" },
      { name: "GitLab CI", level: 80, years: "3y" },
    ],
  },
  {
    title: "Observability",
    icon: Activity,
    accent: "from-neon-purple to-neon-cyan",
    skills: [
      { name: "Prometheus", level: 88, years: "4y" },
      { name: "Grafana", level: 90, years: "4y" },
      { name: "ELK / OpenSearch", level: 82, years: "3y" },
      { name: "OpenTelemetry", level: 78, years: "2y" },
    ],
  },
  {
    title: "Security",
    icon: ShieldCheck,
    accent: "from-neon-blue to-neon-cyan",
    skills: [
      { name: "IAM / SCPs", level: 90, years: "4y" },
      { name: "Secrets Manager / Vault", level: 85, years: "3y" },
      { name: "SonarQube · Veracode", level: 80, years: "3y" },
      { name: "OPA / Kyverno", level: 75, years: "2y" },
    ],
  },
  {
    title: "Programming & Scripting",
    icon: Terminal,
    accent: "from-neon-cyan to-neon-blue",
    skills: [
      { name: "Python", level: 85, years: "5y" },
      { name: "Bash", level: 92, years: "5y" },
      { name: "Go", level: 65, years: "1y" },
    ],
  },
  {
    title: "Networking & Linux",
    icon: Network,
    accent: "from-neon-purple to-neon-blue",
    skills: [
      { name: "Linux", level: 92, years: "5y" },
      { name: "VPC · Route53 · CloudFront", level: 88, years: "4y" },
      { name: "Istio / Service Mesh", level: 72, years: "2y" },
    ],
  },
];

function Skills() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20">
      <p className="font-mono text-xs uppercase tracking-widest text-neon-blue mb-2">
        // capabilities
      </p>
      <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
        The stack behind the platform.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        A pragmatic toolkit tuned for reliability and developer velocity. Every
        item here has shipped to production, been on-called, and paid the rent.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.title}
            className="group relative glass rounded-xl p-5 hover:border-neon-blue/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`h-9 w-9 rounded-lg bg-gradient-to-br ${cat.accent} grid place-items-center text-background`}
              >
                <cat.icon className="h-4 w-4" />
              </div>
              <h3 className="font-display font-semibold">{cat.title}</h3>
            </div>
            <ul className="space-y-3">
              {cat.skills.map((s) => (
                <li key={s.name}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm">{s.name}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {s.years} · {s.level}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-1 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${cat.accent}`}
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                  {s.note && (
                    <p className="mt-1 text-[11px] font-mono text-muted-foreground">
                      {s.note}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
