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
      {
        name: "AWS",
        level: 95,
        years: "4+ y",
        note: "EKS · EC2 · IAM · VPC · ALB · ECR · Route53 · S3",
      },
      {
        name: "Infrastructure Provisioning",
        level: 90,
        years: "4 y",
      },
      {
        name: "Production Support",
        level: 92,
        years: "4 y",
      },
    ],
  },
  {
    title: "Infrastructure as Code",
    icon: Boxes,
    accent: "from-neon-purple to-neon-blue",
    skills: [
      {
        name: "Terraform",
        level: 95,
        years: "4+ y",
        note: "Modules · Remote State · Workspaces",
      },
      {
        name: "Ansible",
        level: 88,
        years: "2 y",
      },
      {
        name: "Shell Automation",
        level: 90,
        years: "4 y",
      },
    ],
  },
  {
    title: "Containers & K8s",
    icon: Container,
    accent: "from-neon-cyan to-neon-purple",
    skills: [
      {
        name: "Amazon EKS",
        level: 94,
        years: "3+ y",
      },
      {
        name: "Docker",
        level: 95,
        years: "4+ y",
      },
      {
        name: "Helm",
        level: 90,
        years: "3 y",
      },
      {
        name: "Kubernetes",
        level: 94,
        years: "3+ y",
      },
    ],
  },
  {
    title: "CI / CD",
    icon: GitBranch,
    accent: "from-neon-blue to-neon-purple",
    skills: [
      {
        name: "Jenkins",
        level: 96,
        years: "4+ y",
      },
      {
        name: "Jenkins Shared Libraries",
        level: 92,
        years: "3 y",
      },
      {
        name: "Git",
        level: 90,
        years: "4 y",
      },
    ],
  },
  {
    title: "Observability",
    icon: Activity,
    accent: "from-neon-purple to-neon-cyan",
    skills: [
      {
        name: "Prometheus",
        level: 90,
        years: "3 y",
      },
      {
        name: "Grafana",
        level: 90,
        years: "3 y",
      },
      {
        name: "ELK Stack",
        level: 85,
        years: "2 y",
      },
    ],
  },
  {
    title: "Security",
    icon: ShieldCheck,
    accent: "from-neon-blue to-neon-cyan",
    skills: [
      {
        name: "IAM",
        level: 92,
        years: "4 y",
      },
      {
        name: "SonarQube",
        level: 90,
        years: "3 y",
      },
      {
        name: "Veracode",
        level: 88,
        years: "3 y",
      },
      {
        name: "Amazon ECR Image Scanning",
        level: 86,
        years: "2 y",
      },
    ],
  },
  {
    title: "Programming & Scripting",
    icon: Terminal,
    accent: "from-neon-cyan to-neon-blue",
    skills: [
      {
        name: "Python",
        level: 86,
        years: "2 y",
      },
      {
        name: "Shell Scripting",
        level: 92,
        years: "4 y",
      },
      {
        name: "Linux Automation",
        level: 90,
        years: "4 y",
      },
    ],
  },
  {
    title: "Networking & Linux",
    icon: Network,
    accent: "from-neon-purple to-neon-blue",
    skills: [
      {
        name: "Linux",
        level: 92,
        years: "4 y",
      },
      {
        name: "VPC",
        level: 90,
        years: "4 y",
      },
      {
        name: "Route53",
        level: 86,
        years: "3 y",
      },
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
        AWS DevOps & Cloud Engineering Skills
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        <p className="mt-4 max-w-3xl text-muted-foreground leading-8">
          Hands-on experience across AWS, Kubernetes, Terraform, Docker, Jenkins,
          Linux, Monitoring and DevSecOps gained while building and supporting
          production enterprise applications.
        </p>
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
