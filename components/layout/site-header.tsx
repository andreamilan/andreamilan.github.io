"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const atBottom = () => window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
    const onScroll = () => {
      if (atBottom()) setActiveSection("connect");
    };
    const observer = new IntersectionObserver((entries) => {
      if (atBottom()) {
        setActiveSection("connect");
        return;
      }
      for (const entry of entries) {
        if (entry.isIntersecting) setActiveSection(entry.target.id === "intro" ? "overview" : entry.target.id);
      }
    }, { rootMargin: "-10% 0px -70% 0px", threshold: 0 });
    for (const id of ["intro", ...siteConfig.navigation.map(item => item.href.slice(1))]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container-shell header-inner">
        <Link href="#intro" className="site-name" onClick={() => setMenuOpen(false)}>Andrea Milan</Link>
        <button ref={menuButtonRef} className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="section-navigation" onClick={() => setMenuOpen(open => !open)}>
          {menuOpen ? "Close" : "Browse"}
        </button>
        <nav id="section-navigation" aria-label="Section navigation" className={`section-navigation${menuOpen ? " is-open" : ""}`}>
          {siteConfig.navigation.map(item => (
            <Link key={item.href} href={item.href} className={activeSection === item.href.slice(1) ? "is-active" : undefined} aria-current={activeSection === item.href.slice(1) ? "location" : undefined} onClick={() => {
              setMenuOpen(false);
              setActiveSection(item.href.slice(1));
              if (menuOpen) menuButtonRef.current?.focus();
            }}>{item.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
