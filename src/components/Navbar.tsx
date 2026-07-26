import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/resume", label: "Resume" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all ${
            scrolled
              ? "glass-strong shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]"
              : "border border-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple grid place-items-center overflow-hidden">
              <span className="font-mono text-[11px] font-bold text-background">DP</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-white/30 to-transparent" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-sm font-semibold">Deepak</span>
              <span className="font-mono text-[10px] text-muted-foreground">
                devops@aws:~$
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{
                  className: "text-foreground bg-white/5",
                }}
                inactiveProps={{
                  className: "text-muted-foreground hover:text-foreground",
                }}
                activeOptions={{ exact: item.to === "/" }}
                className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-muted-foreground">systems</span>
              <span className="text-success">online</span>
            </div>
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden h-9 w-9 grid place-items-center rounded-lg glass"
              aria-label="Toggle menu"
            >
              <span className="block h-0.5 w-4 bg-foreground shadow-[0_5px_0_0_currentColor,0_-5px_0_0_currentColor]" />
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-2 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
