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
    year: "2019",
    title: "Started with Linux & Bash",
    body: "Fell in love with automation. Wrote way too many shell scripts.",
    icon: GraduationCap,
  },
  {
    year: "2020",
    title: "Cloud engineer at scale",
    body: "First AWS production workloads. Learned that observability is not optional.",
    icon: Compass,
  },
  {
    year: "2022",
    title: "Kubernetes & Platform",
    body: "Built internal developer platforms on EKS with Helm, ArgoCD and Terraform.",
    icon: Sparkles,
  },
  {
    year: "2024",
    title: "DevSecOps focus",
    body: "Shift-left security, policy-as-code, and supply-chain hardening.",
    icon: Target,
  },
  {
    year: "Now",
    title: "Platform engineering",
    body: "Turning ops into product — golden paths, self-service, and reliability by default.",
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
        Engineer who treats infrastructure as a product.
      </h1>
      <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
        I design cloud platforms the way great teams design software — with
        clean interfaces, tests, observability, and boring, repeatable
        deployments. My work sits at the intersection of AWS, Kubernetes, and
        developer experience.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {[
          {
            k: "Mission",
            v: "Make production a place developers want to ship to.",
          },
          {
            k: "Values",
            v: "Reliability, simplicity, automation, ownership.",
          },
          {
            k: "Focus",
            v: "Platform engineering, SRE, DevSecOps.",
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
