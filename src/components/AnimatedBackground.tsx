import { useEffect, useRef } from "react";

/**
 * Animated background: grid + floating particles + gradient orbs + subtle mouse parallax.
 * Canvas-based for performance; respects reduced motion.
 */
export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      c: string;
    }[] = [];

    const COLORS = ["#38bdf8", "#a78bfa", "#22d3ee"];

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      particles.length = 0;
      const count = Math.min(70, Math.floor((width * height) / 22000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.6 + 0.4,
          c: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const p of particles) {
        ctx.fillStyle = p.c;
        ctx.globalAlpha = 0.7;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (!prefersReduced) raf = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const onResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", onResize);

    const onMouse = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      parallaxRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    if (!prefersReduced) window.addEventListener("mousemove", onMouse);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-background" />
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      {/* Parallax orbs */}
      <div ref={parallaxRef} className="absolute inset-0 transition-transform duration-300 ease-out">
        <div className="absolute top-[-10%] left-[10%] h-[500px] w-[500px] rounded-full bg-neon-blue/20 blur-[120px] animate-float-slow" />
        <div
          className="absolute bottom-[-10%] right-[5%] h-[520px] w-[520px] rounded-full bg-neon-purple/20 blur-[120px] animate-float-slow"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="absolute top-[40%] left-[45%] h-[300px] w-[300px] rounded-full bg-neon-cyan/10 blur-[100px] animate-float-slow"
          style={{ animationDelay: "-2s" }}
        />
      </div>
      {/* Canvas network */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,8,22,0.9)_100%)]" />
    </div>
  );
}
