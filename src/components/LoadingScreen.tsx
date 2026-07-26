import { useEffect, useState } from "react";

const STEPS = [
  "Initializing Cloud Platform",
  "Loading AWS Services",
  "Connecting Kubernetes Cluster",
  "Loading Terraform State",
  "Validating CI/CD Pipelines",
  "Bringing Production Systems Online",
];

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("boot")) {
      setVisible(false);
      return;
    }
    let p = 0;
    const t = setInterval(() => {
      p += Math.random() * 8 + 4;
      if (p >= 100) {
        p = 100;
        setProgress(100);
        clearInterval(t);
        setTimeout(() => {
          setVisible(false);
          sessionStorage.setItem("boot", "1");
        }, 500);
        return;
      }
      setProgress(p);
      setStep(Math.min(STEPS.length - 1, Math.floor((p / 100) * STEPS.length)));
    }, 220);
    return () => clearInterval(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500">
      <div className="grid-bg absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-40" />

      <div className="relative w-[min(560px,90vw)] glass-strong rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          </div>
          <span className="font-mono text-[11px] text-muted-foreground ml-2">
            devops@aws:~/portfolio $ ./boot.sh
          </span>
        </div>

        <div className="font-mono text-sm space-y-1.5 min-h-[10rem]">
          {STEPS.map((s, i) => (
            <div
              key={s}
              className={`flex items-center gap-2 transition-opacity duration-300 ${
                i > step ? "opacity-30" : "opacity-100"
              }`}
            >
              <span className={i < step ? "text-success" : i === step ? "text-neon-blue" : "text-muted-foreground"}>
                {i < step ? "✓" : i === step ? "▸" : "○"}
              </span>
              <span className="text-muted-foreground">{s}</span>
              {i < step && <span className="text-success text-xs ml-auto">OK</span>}
              {i === step && (
                <span className="text-neon-blue text-xs ml-auto animate-pulse">…</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="flex justify-between font-mono text-xs text-muted-foreground mb-2">
            <span>booting</span>
            <span>{Math.floor(progress)}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-neon-blue to-neon-purple transition-[width] duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
