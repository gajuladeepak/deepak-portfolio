import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Download,
  Briefcase,
  Clock3,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Deepak · AWS DevOps Engineer" },
      {
        name: "description",
        content:
          "Get in touch about DevOps, platform engineering, and SRE work — email, LinkedIn, GitHub or Calendly.",
      },
      { property: "og:title", content: "Contact — Deepak" },
      {
        property: "og:description",
        content: "Send a message, book time, or grab the resume.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {

  return (
    <div className="mx-auto max-w-5xl px-4 pb-20">
      <p className="font-mono text-xs uppercase tracking-widest text-neon-blue mb-2">
  // CONTACT
      </p>

      <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
        Let's build reliable
        <span className="text-gradient"> cloud platforms.</span>
      </h1>

      <p className="mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed">
        I'm open to AWS DevOps, Platform Engineering, Cloud Infrastructure
        and Site Reliability Engineering opportunities.

        <br />

        Feel free to reach out via Email or LinkedIn.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-5">
        <aside className="space-y-4">

          <Card
            icon={Mail}
            title="Email"
            value="deepakgajula15@gmail.com"
          />

          <Card
            icon={MapPin}
            title="Location"
            value="Hyderabad, India"
          />

          <Card
            icon={Briefcase}
            title="Experience"
            value="4+ Years"
          />

          <Card
            icon={Clock3}
            title="Notice Period"
            value="30 Days (Negotiable)"
          />

          <Card
            icon={CheckCircle2}
            title="Availability"
            value="Available for Interviews"
          />

        </aside>

        <div className="glass-strong rounded-2xl p-8 border border-neon-purple/30">

          <div className="flex items-center gap-3">

            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 grid place-items-center">

              <Briefcase className="h-6 w-6 text-neon-purple" />

            </div>

            <div>

              <h2 className="font-display text-2xl font-semibold">

                Professional Snapshot

              </h2>

              <p className="text-sm text-muted-foreground">

                What I bring to the table.

              </p>

            </div>

          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-5">

            {[
              "AWS (EC2, IAM, VPC, EKS, ALB, S3)",
              "Kubernetes (Amazon EKS)",
              "Terraform (Infrastructure as Code)",
              "Docker & Containerization",
              "CI/CD using Jenkins",
              "Helm & Kubernetes Deployments",
              "DevSecOps (SonarQube & Veracode)",
              "Prometheus, Grafana & ELK",
              "Linux & Shell Scripting",
              "Platform Engineering",
            ].map((skill) => (

              <div
                key={skill}
                className="flex items-center gap-3 border-b border-border pb-3"
              >

                <CheckCircle2 className="h-4 w-4 text-neon-purple shrink-0" />

                <span className="text-sm">

                  {skill}

                </span>

              </div>

            ))}

          </div>
        </div>
      </div>
      );
}

      function Label({children}: {children: React.ReactNode }) {
  return (
      <label className="block text-[10px] uppercase tracking-widest font-mono text-muted-foreground mb-1.5">
        {children}
      </label>
      );
}

      function Field({
        label,
        name,
        type = "text",
        placeholder,
        required,
}: {
        label: string;
      name: string;
      type?: string;
      placeholder?: string;
      required?: boolean;
}) {
  return (
      <div>
        <Label>{label}</Label>
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm transition-all duration-300 outline-none focus:border-neon-blue/60 focus:shadow-[0_0_18px_rgba(59,130,246,0.18)]"
        />
      </div>
      );
}
