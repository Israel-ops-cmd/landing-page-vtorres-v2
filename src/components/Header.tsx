"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.webp";
import { DEFAULT_MESSAGE, whatsappLink } from "@/lib/site";

const links = [
  { href: "#obras", label: "Obras" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Por que a V Torres" },
  { href: "#clientes", label: "Clientes" },
  { href: "#onde-estamos", label: "Onde estamos" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      document.body.classList.toggle("past-hero", window.scrollY > window.innerHeight * 0.75);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((s): s is Element => Boolean(s));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));

    // Esconde o botão fixo de WhatsApp quando a chamada final ou o rodapé,
    // que já têm o próprio botão, estão na tela.
    const ctaZones = document.querySelectorAll(".final-copy, .footer");
    const visibleZones = new Set<Element>();
    const ctaIo = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visibleZones.add(e.target);
        else visibleZones.delete(e.target);
      }
      document.body.classList.toggle("cta-visible", visibleZones.size > 0);
    });
    ctaZones.forEach((z) => ctaIo.observe(z));

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 900 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      io.disconnect();
      ctaIo.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-row">
        <a href="#inicio" className="logo-mark" aria-label="V Torres, voltar ao início">
          <Image src={logo} alt="" width={52} height={52} priority />
        </a>

        <nav className="nav-pill" aria-label="Menu principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={active === l.href ? "is-active" : ""}>
              {l.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href={whatsappLink(DEFAULT_MESSAGE)} target="_blank" rel="noopener noreferrer">
          Pedir orçamento
        </a>

        <button
          type="button"
          className={`burger${open ? " is-open" : ""}`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="menu-overlay" hidden={!open} onClick={() => setOpen(false)} />
      <nav id="mobile-menu" className="mobile-menu" hidden={!open} aria-label="Menu">
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            style={{ animationDelay: `${0.04 * i + 0.06}s` }}
            className={active === l.href ? "is-active" : ""}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a
          className="mobile-cta"
          href={whatsappLink(DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Pedir orçamento no WhatsApp
        </a>
      </nav>
    </header>
  );
}
