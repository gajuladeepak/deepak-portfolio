import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Download,
  Mail,
  Activity,
  Boxes,
  Zap,
  Container,
  Cloud,
  GitBranch,
  Server,
  ShieldCheck,
} from "lucide-react";
import { TypingRotator } from "../components/TypingRotator";
import { Counter } from "../components/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deepak Gajula | AWS DevOps Engineer | Kubernetes | Terraform | Jenkins | Hyderabad" },
      {
        name: "description",
        content:
          "AWS DevOps Engineer designing reliable cloud platforms, scalable Kubernetes, and production-grade CI/CD.",
      },
      {
        property: "og:title",
        content: "Deepak — AWS DevOps Engineer",
      },
      {
        property: "og:description",
        content:
          "Cloud command center portfolio: AWS, Kubernetes, Terraform, and CI/CD engineered for reliability.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const METRICS = [
  { label: "Production Availability", value: 99.9, suffix: "%", icon: Activity, decimals: 1 },
  { label: "Microservices Managed", value: 25, suffix: "+", icon: Boxes, decimals: 0 },
  { label: "Faster Provisioning", value: 70, suffix: "%", icon: Zap, decimals: 0 },
  { label: "Image Size Reduction", value: 60, suffix: "%", icon: Container, decimals: 0 },
];

const PIPELINE = [
  { label: "Developer", icon: GitBranch },
  { label: "GitHub", icon: GitBranch },
  { label: "GitHub Webhook", icon: Zap },
  { label: "Jenkins", icon: Server },
  { label: "SonarQube", icon: ShieldCheck },
  { label: "Veracode", icon: ShieldCheck },
  { label: "Docker Build", icon: Container },
  { label: "Amazon ECR", icon: Cloud },
  { label: "Helm Deploy", icon: Server },
  { label: "Amazon EKS", icon: Boxes },
];

function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section className="relative pt-8 md:pt-16 pb-20">
        <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-mono text-muted-foreground mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-glow" />
          Available for AWS DevOps Engineer, AWS cloud Engineer, Kuberneted Engineer Roles • Hyderabad • Remote • Hybrid
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
          Hi, I'm <span className="text-gradient">Deepak Gajula</span>.
          <br />
          I engineer{" "}
          <TypingRotator
            className="text-gradient"
            words={[
              "AWS platforms",
              "Kubernetes clusters",
              "Terraform modules",
              "CI/CD pipelines",
              "DevSecOps",
              "Observability",
              "Platform Engineering",
            ]}
          />
        </h1>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          AWS DevOps Engineer building reliable cloud infrastructure, scalable
          Kubernetes platforms, and production-grade CI/CD pipelines — designed
          for uptime, automation, and speed.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple px-5 py-3 text-sm font-medium text-background hover:opacity-90 transition"
          >
            View Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
          </Link>
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 rounded-lg glass px-5 py-3 text-sm font-medium hover:border-neon-blue/50 hover:glow-blue transition-all"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </Link>
        </div>

        {/* Metric cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="group relative glass rounded-xl p-5 overflow-hidden hover:border-neon-blue/40 transition-colors"
            >
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-neon-blue/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  metric
                </span>
                <m.icon className="h-4 w-4 text-neon-blue" />
              </div>
              <div className="font-display text-3xl md:text-4xl font-semibold text-gradient">
                <Counter to={m.value} suffix={m.suffix} decimals={m.decimals} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{m.label}</div>
              <div className="mt-3 h-1 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full w-4/5 bg-gradient-to-r from-neon-blue to-neon-purple" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pipeline strip */}
      <section className="relative py-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-neon-blue mb-2">
              // deployment pipeline
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold">
              Ship code from commit to cluster
            </h2>
          </div>
          <span className="hidden md:inline text-xs font-mono text-muted-foreground">
            avg. lead time · 6m 42s
          </span>
        </div>
        <div className="glass-strong rounded-2xl p-6 overflow-hidden">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {PIPELINE.map((p, i) => (
              <div key={p.label} className="flex items-center gap-3 shrink-0">
                <div className="glass rounded-lg px-3 py-2 flex items-center gap-2 hover:border-neon-blue/40 transition-colors">
                  <p.icon className="h-4 w-4 text-neon-blue" />
                  <span className="text-sm font-mono">{p.label}</span>
                </div>
                {i < PIPELINE.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live dashboard widgets */}
      <section className="py-16">
        <p className="font-mono text-xs uppercase tracking-widest text-neon-purple mb-2">
          // control plane
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">
          Live cluster snapshot
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <DashCard
            title="Kubernetes"
            status="Healthy"
            stats={[
              ["Pods", "142 / 150"],
              ["Deployments", "38"],
              ["CPU", "47%"],
              ["Memory", "62%"],
            ]}
          />
          <DashCard
            title="CI/CD"
            status="Passing"
            stats={[
              ["Pipelines", "24"],
              ["Success rate", "98.4%"],
              ["Avg build", "3m 12s"],
              ["Deployments / day", "17"],
            ]}
          />
          <DashCard
            title="Observability"
            status="Nominal"
            stats={[
              ["p95 latency", "184 ms"],
              ["Error rate", "0.03%"],
              ["Alerts", "0"],
              ["SLO", "99.95%"],
            ]}
          />
        </div>
      </section>
    </div>
  );
}

function DashCard({
  title,
  status,
  stats,
}: {
  title: string;
  status: string;
  stats: [string, string][];
}) {
  return (
    <div className="glass rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold">{title}</h3>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 text-success text-xs px-2 py-0.5 font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-glow" />
          {status}
        </span>
      </div>
      <dl className="grid grid-cols-2 gap-3">
        {stats.map(([k, v]) => (
          <div key={k} className="glass rounded-lg p-3">
            <dt className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
              {k}
            </dt>
            <dd className="mt-1 font-display font-semibold text-lg tabular-nums">{v}</dd>
          </div>
        ))}
      </dl>
      {/* Sparkline */}
      <svg viewBox="0 0 200 40" className="mt-4 w-full h-10">
        <defs>
          <linearGradient id={`g-${title}`} x1="0" x2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <polyline
          fill="none"
          stroke={`url(#g-${title})`}
          strokeWidth="1.5"
          points="0,28 20,22 40,26 60,18 80,20 100,14 120,17 140,10 160,15 180,8 200,12"
        />
      </svg>
    </div>
  );
}
