"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

export type Work = { title: string; place: string; text: string; image: StaticImageData; alt: string };

// Galeria horizontal: no computador a seção fica presa e a rolagem para baixo
// move as obras para o lado. No celular vira um carrossel de arrastar.
export function Gallery({ works, children }: { works: Work[]; children: React.ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    const desktop = window.matchMedia("(min-width: 901px) and (prefers-reduced-motion: no-preference)");

    const measure = () => {
      if (!desktop.matches) {
        section.style.height = "";
        section.style.removeProperty("--dist");
        return;
      }
      const dist = Math.max(0, track.scrollWidth - window.innerWidth);
      section.style.setProperty("--dist", `${dist}px`);
      section.style.height = `${window.innerHeight + dist}px`;
    };
    measure();
    window.addEventListener("resize", measure);
    desktop.addEventListener("change", measure);
    return () => {
      window.removeEventListener("resize", measure);
      desktop.removeEventListener("change", measure);
    };
  }, []);

  return (
    <section id="obras" ref={sectionRef} className="section works" data-progress="pin">
      <div className="works-intro-mobile">{children}</div>
      <div className="works-sticky">
        <div className="works-track" ref={trackRef}>
          <div className="works-intro">{children}</div>
          {works.map((w, i) => (
            <figure key={w.title} className={`work-card work-${i + 1}`}>
              <div className="work-media">
                <Image src={w.image} alt={w.alt} sizes="(max-width: 900px) 82vw, 40vw" placeholder="blur" />
              </div>
              <figcaption>
                <strong>{w.title}</strong>
                {w.place && <span className="work-place">{w.place}</span>}
                <span className="work-text">{w.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="works-progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}
