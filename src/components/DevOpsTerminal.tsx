import { useEffect, useRef, useState } from "react";
import { TerminalIcon, X, Minus } from "lucide-react";

type Line = { kind: "in" | "out" | "sys"; text: string };

const HELP = `Available commands:
  help        Show this list
  whoami      Print operator identity
  about       Short bio
  skills      Technical stack
  projects    Notable projects
  experience  Career timeline
  aws         AWS services in use
  kubernetes  K8s stack
  terraform   IaC stack
  docker      Container stack
  jenkins     CI/CD stack
  contact     Get in touch
  resume      Download resume
  clear       Clear screen`;

function respond(cmd: string): string {
  const c = cmd.trim().toLowerCase();
  if (!c) return "";
  switch (c) {
    case "help":
      return HELP;
    case "whoami":
      return "deepak · AWS DevOps Engineer · SRE mindset · production-first";
    case "about":
      return "Cloud & platform engineer building resilient, observable, and automated systems on AWS + Kubernetes.";
    case "skills":
      return "AWS · EKS · Terraform · Helm · Docker · Jenkins · GitHub Actions · Prometheus · Grafana · ELK · Python · Bash · Linux";
    case "projects":
      return "→ multi-region-eks-platform\n→ zero-downtime-cicd\n→ observability-stack\n→ secure-secrets-pipeline\nType `open projects` in the URL /projects for details.";
    case "experience":
      return "5+ years shipping cloud infra. See /experience for the full timeline.";
    case "aws":
      return "EKS · EC2 · S3 · Lambda · IAM · CloudWatch · RDS · Route53 · CloudFront · SNS · SQS · ECR · Secrets Manager";
    case "kubernetes":
    case "k8s":
      return "EKS · Helm · Kustomize · ArgoCD · HPA/VPA · Karpenter · Istio · CoreDNS";
    case "terraform":
      return "Modular Terraform · remote S3 backend · workspaces · Terragrunt · policy-as-code with OPA";
    case "docker":
      return "Multi-stage builds · distroless · rootless · image size reduced by 60% via layer caching";
    case "jenkins":
      return "Declarative pipelines · shared libraries · agents on EKS · SonarQube + Veracode gates";
    case "contact":
      return "email: hello@example.com · linkedin: /in/deepak · github: /deepak";
    case "resume":
      return "→ open /resume to download PDF";
    case "clear":
      return "__clear__";
    default:
      return `command not found: ${cmd} — type 'help'`;
  }
}

export function DevOpsTerminal() {
  const [open, setOpen] = useState(false);
  const [min, setMin] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Line[]>([
    { kind: "sys", text: "Welcome to devops.sh · type `help` to get started" },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 1e6 });
  }, [history, open, min]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "`") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = input;
    setInput("");
    const out = respond(value);
    if (out === "__clear__") {
      setHistory([]);
      return;
    }
    setHistory((h) => [
      ...h,
      { kind: "in", text: value },
      ...(out ? [{ kind: "out" as const, text: out }] : []),
    ]);
  };

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
          setMin(false);
          setTimeout(() => inputRef.current?.focus(), 50);
        }}
        aria-label="Open terminal"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full glass-strong px-4 py-2.5 text-sm font-mono hover:glow-blue hover:border-neon-blue/50 transition-all"
      >
        <TerminalIcon className="h-4 w-4 text-neon-blue" />
        <span className="hidden sm:inline text-muted-foreground">$ open terminal</span>
        <kbd className="hidden md:inline text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-border">
          ⌘`
        </kbd>
      </button>

      {open && (
        <div
          className={`fixed z-50 bottom-5 right-5 w-[min(560px,95vw)] ${
            min ? "h-11" : "h-[420px]"
          } glass-strong rounded-xl shadow-elegant overflow-hidden flex flex-col transition-all`}
        >
          <div className="flex items-center gap-2 px-3 py-2 border-b border-border">
            <div className="flex gap-1.5">
              <button
                onClick={() => setOpen(false)}
                className="h-3 w-3 rounded-full bg-destructive/80"
                aria-label="Close terminal"
              />
              <button
                onClick={() => setMin((m) => !m)}
                className="h-3 w-3 rounded-full bg-warning/80"
                aria-label="Minimize"
              />
              <span className="h-3 w-3 rounded-full bg-success/80" />
            </div>
            <span className="font-mono text-xs text-muted-foreground ml-2">
              devops@aws:~/portfolio · zsh
            </span>
            <div className="ml-auto flex items-center gap-1">
              <button onClick={() => setMin((m) => !m)} className="p-1 hover:bg-white/5 rounded">
                <Minus className="h-3.5 w-3.5" />
              </button>
              <button onClick={() => setOpen(false)} className="p-1 hover:bg-white/5 rounded">
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {!min && (
            <>
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 font-mono text-xs leading-relaxed">
                {history.map((l, i) => (
                  <div key={i} className="whitespace-pre-wrap">
                    {l.kind === "in" && (
                      <>
                        <span className="text-neon-blue">➜</span>{" "}
                        <span className="text-neon-purple">~</span>{" "}
                        <span className="text-foreground">{l.text}</span>
                      </>
                    )}
                    {l.kind === "out" && <span className="text-muted-foreground">{l.text}</span>}
                    {l.kind === "sys" && <span className="text-success">{l.text}</span>}
                  </div>
                ))}
              </div>
              <form onSubmit={submit} className="flex items-center gap-2 px-3 py-2 border-t border-border">
                <span className="font-mono text-xs text-neon-blue">➜</span>
                <span className="font-mono text-xs text-neon-purple">~</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none font-mono text-xs text-foreground placeholder:text-muted-foreground"
                  placeholder="type a command · try `help`"
                  autoFocus
                />
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
