import { useEffect, useState } from "react";

export function TypingRotator({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const speed = deleting ? 50 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next.length === 0) {
          setDeleting(false);
          setI((n) => n + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[2px] h-[0.9em] align-middle -mb-0.5 ml-0.5 bg-neon-blue animate-blink" />
    </span>
  );
}
