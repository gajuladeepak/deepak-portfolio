import { createFileRoute } from "@tanstack/react-router";
import { Target, Compass, Sparkles, GraduationCap, Rocket } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Deepak · AWS DevOps Engineer" },
      {
        name: "description",
        content:
          "The story, mission, and engineering mindset behind Deepak — a cloud & platform engineer focused on reliability and automation.",
      },
      { property: "og:title", content: "About Deepak — AWS DevOps Engineer" },
      {
        property: "og:description",
        content: "Career journey, mission, and current focus.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const JOURNEY = [
  {
    year: "2022",
    title: "Programmer Analyst Trainee",
    body: "Joined Cognizant and started working on AWS infrastructure, Linux administration, Shell scripting, Terraform, and Ansible while supporting the Pearson Education project.",
    icon: GraduationCap,
  },
  {
    year: "2023",
    title: "Programmer Analyst (DevOps Engineer)",
    body: "Transitioned into AWS DevOps, automating cloud infrastructure with Terraform, managing CI/CD pipelines, and supporting production deployments for enterprise applications.",
    icon: Compass,
  },
  {
    year: "2024",
    title: "Programmer Analyst (DevOps Engineer)",
    body: "Managed Docker containers, Amazon EKS clusters, Helm deployments, Jenkins Shared Library pipelines, and GitHub Actions while supporting 25+ production microservices.",
    icon: Sparkles,
  },
  {
    year: "2026",
    title: "Associate (DevOps Engineer)",
    body: "Promoted to Associate at Cognizant, managing production AWS platforms across multiple projects with a focus on reliability, automation, security, and platform scalability.",
    icon: Target,
  },
  {
    year: "Now",
    title: "Associate (DevOps Engineer)",
    body: "Managing production workloads on AWS EKS using Terraform, Docker, Kubernetes, Jenkins, Prometheus, Grafana, and DevSecOps practices to deliver secure and reliable cloud platforms.",
    icon: Rocket,
  },
];

function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-20">
      <p className="font-mono text-xs uppercase tracking-widest text-neon-blue mb-3">
        // about.md
      </p>
      <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
        AWS DevOps Engineer building secure, scalable cloud infrastructure.
      </h1>
      <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
       AWS DevOps Engineer with 4+ years of experience building and managing production workloads on AWS. Experienced in Kubernetes (Amazon EKS), Terraform, Jenkins, Docker, Linux, CI/CD automation, monitoring, and DevSecOps. Passionate about automating infrastructure, improving deployment reliability, and enabling scalable cloud platforms.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {[
          {
            k: "Mission",
            v: "Build reliable, secure and automated cloud platforms that enable faster and safer software delivery.",
          },
          {
            k: "Values",
            v: "Reliability, simplicity, automation, ownership.",
          },
          {
            k: "Focus",
            v: "AWS, Kubernetes, Terraform, CI/CD, DevSecOps.",
          },
        ].map((x) => (
          <div key={x.k} className="glass rounded-xl p-5">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
              {x.k}
            </p>
            <p className="mt-2 text-sm">{x.v}</p>
          </div>
        ))}
      </div>

      <section className="mt-20">
        <p className="font-mono text-xs uppercase tracking-widest text-neon-purple mb-2">
          // timeline
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">
          Career journey
        </h2>
        <ol className="relative border-l border-border ml-4 space-y-8">
          {JOURNEY.map((j) => (
            <li key={j.year} className="pl-8 relative">
              <span className="absolute -left-[13px] top-1 h-6 w-6 rounded-full bg-background border border-neon-blue/50 grid place-items-center glow-blue">
                <j.icon className="h-3 w-3 text-neon-blue" />
              </span>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-neon-blue">{j.year}</span>
                <h3 className="font-display font-semibold">{j.title}</h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{j.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
