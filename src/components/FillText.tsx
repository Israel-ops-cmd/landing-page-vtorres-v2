"use client";

import { useEffect, useRef } from "react";

// Palavras acendem conforme a rolagem passa por elas.
export function FillText({ text, as: Tag = "p", className = "" }: { text: string; as?: "p" | "h2"; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLSpanElement>("span"));
    const onProgress = (e: Event) => {
      const p = (e as CustomEvent<number>).detail;
      const lit = p * (spans.length + 3);
      spans.forEach((s, i) => {
        const d = lit - i;
        s.style.opacity = String(Math.min(1, Math.max(0.16, d / 3)));
      });
    };
    el.addEventListener("progress", onProgress);
    return () => el.removeEventListener("progress", onProgress);
  }, []);

  return (
    <Tag ref={ref as never} className={`fill-text ${className}`} data-progress="view">
      {words.map((w, i) => (
        <span key={i}>{w} </span>
      ))}
    </Tag>
  );
}
