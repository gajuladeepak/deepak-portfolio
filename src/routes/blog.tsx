import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Deepak · AWS, Kubernetes, SRE notes" },
      {
        name: "description",
        content:
          "Technical writing on AWS, Kubernetes, Terraform, Docker, CI/CD, SRE and platform engineering.",
      },
      { property: "og:title", content: "Blog — Deepak" },
      {
        property: "og:description",
        content: "DevOps deep dives, patterns and postmortems.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const POSTS = [
  {
    slug: "deploying-25-microservices-on-amazon-eks",
    title: "Deploying 25+ Microservices on Amazon EKS",
    date: "Coming Soon",
    readTime: "8 min read",
    status: "Coming Soon",
    featured: true,
    tags: ["AWS", "Kubernetes", "EKS"],
    excerpt:
      "Learn how production microservices were deployed and managed on Amazon EKS using Helm, Kubernetes, Jenkins, and Docker.",
  },
  {
    slug: "terraform-infrastructure-automation",
    title: "Provisioning AWS Infrastructure Using Terraform Modules",
    date: "Coming Soon",
    readTime: "7 min read",
    status: "Coming Soon",
    featured: false,
    tags: ["AWS", "Terraform", "IaC"],
    excerpt:
      "A practical guide to building reusable Terraform modules that reduced infrastructure provisioning time by 70%.",
  },
  {
    slug: "kubernetes-monitoring-prometheus-grafana",
    title: "Monitoring Kubernetes Clusters with Prometheus & Grafana",
    date: "Coming Soon",
    readTime: "6 min read",
    status: "Coming Soon",
    featured: false,
    tags: ["Monitoring", "Prometheus", "Grafana"],
    excerpt:
      "How Kubernetes workloads were monitored using Prometheus, Grafana, and production-ready alerting dashboards.",
  },
  {
    slug: "jenkins-sonarqube-veracode",
    title: "Integrating SonarQube & Veracode into Jenkins Pipelines",
    date: "Coming Soon",
    readTime: "7 min read",
    status: "Coming Soon",
    featured: false,
    tags: ["Jenkins", "DevSecOps", "CI/CD"],
    excerpt:
      "Automating code quality and security scanning with SonarQube and Veracode in Jenkins CI/CD pipelines.",
  },
  {
    slug: "docker-multistage-builds",
    title: "Building Optimized Docker Images with Multi-stage Builds",
    date: "Coming Soon",
    readTime: "5 min read",
    status: "Coming Soon",
    featured: false,
    tags: ["Docker", "Containers", "CI/CD"],
    excerpt:
      "Building lightweight Docker images using multi-stage builds to improve deployment speed and reduce image size.",
  },
];

const TAGS = [
  "All",
  "AWS",
  "Terraform",
  "Kubernetes",
  "Docker",
  "Jenkins",
  "CI/CD",
  "Monitoring",
  "DevSecOps",
];

function Blog() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("All");

  const list = useMemo(
    () =>
      POSTS.filter(
        (p) =>
          (tag === "All" || p.tags.includes(tag as any)) &&
          (q === "" || (p.title + p.excerpt).toLowerCase().includes(q.toLowerCase())),
      ),
    [q, tag],
  );

  return (
    <div className="mx-auto max-w-5xl px-4 pb-20">
      <p className="font-mono text-xs uppercase tracking-widest text-neon-blue mb-2">
        // journal
      </p>
      <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
        Notes from the control plane.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Deep dives, patterns and postmortems from real production systems.
      </p>

      <div className="mt-8 flex flex-col md:flex-row gap-3">
        <div className="flex items-center gap-2 glass rounded-lg px-3 py-2 flex-1">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="search posts…"
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {TAGS.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition ${tag === t
                ? "bg-gradient-to-r from-neon-blue to-neon-purple text-background"
                : "glass text-muted-foreground hover:border-neon-blue/40 hover:text-white"
                }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <ul className="mt-8 space-y-3">
        {list.map((p) => (
          <li key={p.slug}>
            <a
              href={`/blog/${p.slug}`}
              aria-label={`Read ${p.title}`}
              className="group block glass rounded-2xl p-6 border border-border hover:border-neon-blue/50 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.12)] transition-all duration-300"
            >
              <div className="flex items-baseline justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {p.date}
                    </span>
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] font-mono text-neon-blue"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-display text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-neon-blue">
                    {p.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {p.excerpt}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-neon-blue group-hover:translate-x-1" />
              </div>
            </a>
          </li>
        ))}
        {list.length === 0 && (
          <div className="rounded-xl border border-dashed border-border py-12 text-center">
            <p className="font-mono text-sm text-muted-foreground">
              No posts found.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Try another keyword or category.
            </p>
          </div>
        )}
      </ul>

      <section className="mt-14 glass-strong rounded-2xl p-8 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-neon-purple">
          // newsletter
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold">
          One good DevOps note, every other week.
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Real lessons from production. No spam, ever.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            placeholder="you@company.com"
            className="flex-1 glass rounded-lg px-4 py-2.5 text-sm outline-none focus:border-neon-blue/60"
          />
          <button className="rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple px-5 py-2.5 text-sm text-background">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
