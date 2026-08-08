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
    company: "Cognizant",
    role: "Associate (AWS DevOps Engineer)",
    period: "Mar 2026 — Present",
    responsibilities: [
      "Managed production Kubernetes workloads on Amazon EKS.",
      "Automated infrastructure provisioning using Terraform.",
      "Maintained reusable Jenkins Shared Library pipelines.",
    ],
    achievements: [
      "Managed 25+ production microservices.",
      "Improved deployment reliability by 30%.",
      "Reduced infrastructure provisioning time by 70%.",
    ],
    stack: [
      "AWS",
      "EKS",
      "Terraform",
      "Helm",
      "Docker",
      "Jenkins",
      "SonarQube",
      "Veracode",
    ],
    metrics: [
      ["Microservices", "25+"],
      ["Provisioning", "-70%"],
    ],
  },

  {
    company: "Cognizant",
    role: "Programmer Analyst",
    period: "Oct 2023 — Mar 2026",
    responsibilities: [
      "Designed CI/CD pipelines using Jenkins.",
      "Containerized applications using Docker.",
      "Implemented Helm-based deployments on Amazon EKS.",
    ],
    achievements: [
      "Reduced manual deployment effort by 50%.",
      "Built reusable Jenkins Shared Libraries.",
      "Reduced Docker image sizes by 60%.",
    ],
    stack: [
      "AWS",
      "Docker",
      "Jenkins",
      "Terraform",
      "Helm",
      "Amazon ECR",
    ],
    metrics: [
      ["Automation", "50%"],
      ["Docker", "-60%"],
    ],
  },

  {
    company: "Cognizant",
    role: "Programmer Analyst Trainee",
    period: "Oct 2022 — Oct 2023",
    responsibilities: [
      "Provisioned AWS infrastructure using Terraform.",
      "Worked on Linux administration and Shell scripting.",
      "Automated configuration management using Ansible.",
    ],
    achievements: [
      "Built Infrastructure as Code modules.",
      "Improved provisioning consistency.",
      "Automated repetitive deployment tasks.",
    ],
    stack: [
      "AWS",
      "Terraform",
      "Linux",
      "Shell",
      "Python",
      "Ansible",
    ],
    metrics: [
      ["IaC", "100%"],
      ["Automation", "↑"],
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
        4+ Years Delivering Production AWS DevOps Solutions.
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
                <Briefcase className="h-4 w-4 text-neon-blue" />
              </span>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full text-left glass rounded-xl p-6 hover:border-neon-blue/40 transition-all duration-300""
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
                  className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-90" : ""
                    }`}
                />
              </div>

              {isOpen && (
                <div className="mt-6 grid gap-6 md:grid-cols-2 animate-in fade-in duration-300">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground mb-2">
                      Responsibilities
                    </p>
                    <ul className="space-y-3 text-[15px] leading-7">
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
                    <ul className="space-y-3 text-[15px] leading-7">
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
    </div >
  );
}
