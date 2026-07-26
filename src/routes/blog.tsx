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
    slug: "eks-karpenter-cost",
    title: "Cutting EKS costs 40% with Karpenter without sacrificing SLOs",
    date: "2026-06-14",
    tags: ["AWS", "Kubernetes", "SRE"],
    excerpt:
      "How we replaced managed node groups with Karpenter across 3 regions and kept a 99.95% SLO.",
  },
  {
    slug: "terraform-modules-that-scale",
    title: "Terraform modules that survive a team of 40",
    date: "2026-04-02",
    tags: ["Terraform", "Cloud"],
    excerpt:
      "Interface-first modules, ownership boundaries, and the patterns that keep IaC clean at scale.",
  },
  {
    slug: "slo-alerting",
    title: "From CPU alerts to SLO alerts (and why it changed everything)",
    date: "2026-02-11",
    tags: ["SRE", "Observability"],
    excerpt:
      "Alerting on user-visible symptoms cut our pager noise 4x and made on-call sustainable again.",
  },
  {
    slug: "supply-chain",
    title: "Signing images, SBOMs, and admission policies in 200 lines",
    date: "2025-12-08",
    tags: ["DevOps", "Security"],
    excerpt:
      "Cosign + Trivy + OPA is the minimum viable software supply chain — here's the whole recipe.",
  },
  {
    slug: "docker-images-slim",
    title: "Docker images: a 60% size reduction playbook",
    date: "2025-10-22",
    tags: ["Docker", "CI/CD"],
    excerpt:
      "Multi-stage builds, distroless, and cache tricks that actually move the needle in real repos.",
  },
];

const TAGS = ["All", "AWS", "Kubernetes", "Terraform", "Docker", "CI/CD", "SRE", "Observability", "Security"];

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
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition ${
                tag === t
                  ? "bg-gradient-to-r from-neon-blue to-neon-purple text-background"
                  : "glass text-muted-foreground hover:text-foreground"
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
              href="#"
              className="group block glass rounded-xl p-5 hover:border-neon-blue/40 transition-all"
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
                  <h2 className="font-display font-semibold text-lg group-hover:text-gradient transition-all">
                    {p.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {p.excerpt}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-neon-blue group-hover:translate-x-0.5 transition" />
              </div>
            </a>
          </li>
        ))}
        {list.length === 0 && (
          <p className="text-sm text-muted-foreground font-mono">
            no posts match this query.
          </p>
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
