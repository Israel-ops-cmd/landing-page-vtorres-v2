"use client";

import { useEffect } from "react";
import Lenis from "lenis";

function clamp(v: number) {
  return Math.min(1, Math.max(0, v));
}

// Controla a rolagem com inércia, as entradas ao aparecer na tela e as
// animações ligadas à posição da rolagem (data-progress).
export function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    root.classList.add("js");

    let lenis: Lenis | null = null;
    let raf = 0;
    if (!reduce) {
      lenis = new Lenis({ lerp: 0.1, anchors: { offset: -84 } });
      const loop = (t: number) => {
        lenis?.raf(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    const tracked = Array.from(document.querySelectorAll<HTMLElement>("[data-progress]"));
    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      for (const el of tracked) {
        const r = el.getBoundingClientRect();
        let p: number;
        if (el.dataset.progress === "pin") {
          p = clamp(-r.top / Math.max(1, r.height - vh));
        } else {
          // 0 quando o topo encosta no fim da tela, 1 quando o meio do bloco chega a 35% da tela
          p = clamp((vh - r.top) / (vh * 0.65 + r.height * 0.5));
        }
        el.style.setProperty("--p", p.toFixed(4));
        el.dispatchEvent(new CustomEvent("progress", { detail: p }));
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
