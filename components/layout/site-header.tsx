"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { siteConfig } from "@/content/site";

const sectionIds = siteConfig.navigation.map((item) => item.href.replace("#", ""));

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("intro");
  const [showProgressNav, setShowProgressNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const activeItem = useMemo(
    () =>
      siteConfig.navigation.find(
        (item) => item.href.replace("#", "") === activeSection
      ) ?? siteConfig.navigation[0],
    [activeSection]
  );

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-28% 0px -48% 0px",
        threshold: [0.2, 0.45, 0.7]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowProgressNav(window.scrollY > 180);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!showProgressNav) {
      setMenuOpen(false);
    }
  }, [showProgressNav]);

  return (
    <>
      <header className="pointer-events-none absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 pb-4 pt-5 sm:px-8 sm:pt-7 lg:px-10">
          <Link href="#intro" className="pointer-events-auto inline-flex flex-col">
            <span className="text-sm font-medium tracking-[0.08em] text-[var(--text-strong)] uppercase">
              Andrea Milan
            </span>
            <span className="mt-1 text-[11px] text-[var(--text-faint)]">
              Product Leader
            </span>
          </Link>

          <div className="pointer-events-auto flex items-center gap-3">
            <span className="hidden text-[12px] text-[var(--text-faint)] sm:inline">
              Milan, Italy
            </span>
            <Link
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-[rgba(246,241,232,0.12)] bg-[rgba(246,241,232,0.06)] px-4 py-2 text-[12px] font-medium text-[var(--text-strong)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(246,241,232,0.22)] hover:bg-[rgba(246,241,232,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {showProgressNav ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            exit={reduceMotion ? {} : { opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-4 z-50 px-4 sm:top-5"
          >
            <div className="mx-auto max-w-fit">
              <div className="rounded-full border border-[rgba(246,241,232,0.12)] bg-[rgba(17,15,25,0.72)] px-3 py-2 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Link
                    href={activeItem.href}
                    className="rounded-full px-3 py-2 text-[12px] font-medium text-[var(--text-strong)] transition duration-300 hover:bg-[rgba(255,255,255,0.05)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
                  >
                    {activeItem.label}
                  </Link>
                  <span className="h-1 w-1 rounded-full bg-[rgba(246,241,232,0.24)]" />
                  <button
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                    className="rounded-full px-3 py-2 text-[12px] text-[var(--text-soft)] transition duration-300 hover:bg-[rgba(255,255,255,0.05)] hover:text-[var(--text-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
                    aria-expanded={menuOpen}
                    aria-controls="section-menu"
                  >
                    Browse
                  </button>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {menuOpen ? (
                <motion.nav
                  id="section-menu"
                  aria-label="Section navigation"
                  initial={reduceMotion ? false : { opacity: 0, y: -10, scale: 0.98 }}
                  animate={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
                  exit={reduceMotion ? {} : { opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="mx-auto mt-3 max-w-md rounded-[1.75rem] border border-[rgba(246,241,232,0.1)] bg-[rgba(17,15,25,0.82)] p-3 shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl"
                >
                  <div className="grid gap-1 sm:grid-cols-2">
                    {siteConfig.navigation.map((item) => {
                      const isActive = activeSection === item.href.replace("#", "");

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className={`rounded-[1.1rem] px-4 py-3 text-sm transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] ${
                            isActive
                              ? "bg-[rgba(255,255,255,0.06)] text-[var(--text-strong)]"
                              : "text-[var(--text-soft)] hover:bg-[rgba(255,255,255,0.04)] hover:text-[var(--text-strong)]"
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </motion.nav>
              ) : null}
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="sr-only" aria-live="polite">
        Current section: {activeItem.label}
      </div>
    </>
  );
}
