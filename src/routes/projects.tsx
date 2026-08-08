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
  id: "eks-production",
  name: "Production Kubernetes Deployment on AWS EKS",
  tagline:
    "Managed production Kubernetes workloads on AWS EKS using Terraform, Helm and Jenkins CI/CD.",
  problem:
    "Applications required consistent deployments, scalable infrastructure and minimal manual intervention.",
  solution:
    "Provisioned AWS infrastructure using Terraform, containerized applications with Docker, deployed to Amazon EKS using Helm, and automated deployments through Jenkins CI/CD pipelines.",
  impact: [
    "Managed 25+ production microservices",
    "Reduced infrastructure provisioning time by 70%",
    "Improved deployment reliability by 30%",
  ],
  stack: ["AWS", "EKS", "Terraform", "Helm", "Docker", "Jenkins"],
  pipeline: [
    "Git",
    "GitHub",
    "Jenkins",
    "SonarQube",
    "Docker",
    "Amazon ECR",
    "Helm",
    "Amazon EKS",
  ],
  category: "Platform",
},
 {
  id: "cicd-automation",
  name: "CI/CD Pipeline Automation",
  tagline:
    "Designed reusable Jenkins pipelines for automated build, security scanning and Kubernetes deployment.",
  problem:
    "Manual deployments increased release time and deployment inconsistencies.",
  solution:
    "Implemented Jenkins Shared Libraries, integrated SonarQube and Veracode, built Docker images and deployed applications to Amazon EKS.",
  impact: [
    "Reduced manual deployment effort by 50%",
    "Standardized CI/CD pipelines",
    "Faster application delivery",
  ],
  stack: [
    "Jenkins",
    "Docker",
    "SonarQube",
    "Veracode",
    "Amazon ECR",
    "Helm",
  ],
  pipeline: [
    "Git",
    "Jenkins",
    "SonarQube",
    "Veracode",
    "Docker",
    "Amazon ECR",
    "Amazon EKS",
  ],
  category: "CI/CD",
},
{
  id: "monitoring",
  name: "Production Monitoring & Logging",
  tagline:
    "Implemented centralized monitoring, logging and alerting for Kubernetes workloads running on AWS EKS.",
  problem:
    "Limited visibility into application health and infrastructure performance.",
  solution:
    "Implemented Prometheus, Grafana dashboards and ELK Stack for monitoring, visualization and troubleshooting production workloads.",
  impact: [
    "Improved infrastructure visibility",
    "Reduced incident resolution time",
    "Centralized monitoring dashboards",
  ],
  stack: [
    "Prometheus",
    "Grafana",
    "ELK",
    "CloudWatch",
  ],
  pipeline: [
    "Applications",
    "Prometheus",
    "Grafana",
    "AlertManager",
    "ELK",
  ],
  category: "Observability",
},
{
  id: "terraform",
  name: "AWS Infrastructure Provisioning with Terraform",
  tagline:
    "Provisioned reusable AWS infrastructure using Terraform modules for production environments on AWS.",

  problem:
    "Manual infrastructure provisioning resulted in inconsistent environments, slower deployments and configuration drift.",

  solution:
    "Designed reusable Terraform modules to provision AWS infrastructure including VPC, IAM, EC2, EKS, ALB and networking resources with Infrastructure as Code best practices.",

  impact: [
    "Reduced provisioning time by 70%",
    "Reusable Terraform modules",
    "Eliminated configuration drift",
    "Consistent multi-environment deployments",
  ],

  stack: [
    "Terraform",
    "AWS",
    "Amazon EKS",
    "VPC",
    "IAM",
    "EC2",
    "ALB",
    "S3",
    "DynamoDB",
  ],

  pipeline: [
    "Terraform",
    "Plan",
    "Review",
    "Apply",
    "AWS",
  ],

  category: "Infrastructure",
},
{
  id: "devsecops",
  name: "DevSecOps Pipeline Integration",
  tagline:
    "Integrated automated code quality and vulnerability scanning into CI/CD pipelines.",
  problem:
    "Applications required automated quality gates before deployment.",
  solution:
    "Integrated SonarQube, Veracode and Amazon ECR image scanning into reusable Jenkins Shared Library pipelines to improve application security.",
  impact: [
    "Improved code quality",
    "Automated vulnerability scanning",
    "Reduced security risks",
  ],
  stack: [
    "SonarQube",
    "Veracode",
    "Amazon ECR",
    "Docker",
    "Jenkins",
  ],
  pipeline: [
    "Git",
    "Jenkins",
    "SonarQube",
    "Veracode",
    "Docker",
    "Amazon ECR",
    "Amazon EKS",
  ],
  category: "Security",
},
];

const FILTERS = ["All","AWS","CI/CD","Observability","Security"] as const;

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
        Production Projects & DevOps Case Studies
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Production projects built using AWS, Kubernetes, Terraform, Jenkins,
        Docker and DevSecOps practices across enterprise applications.
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
