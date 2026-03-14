"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";

const sectionIds = siteConfig.navigation.map((item) => item.href.replace("#", ""));

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("intro");
  const reduceMotion = useReducedMotion();

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

  return (
    <header className="sticky top-0 z-40 bg-[rgba(16,14,24,0.52)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-3 sm:px-8 lg:px-10">
        <Link href="#intro" className="inline-flex flex-col">
          <span className="text-sm font-medium tracking-[0.02em] text-[var(--text-strong)]">
            Andrea Milan
          </span>
          <span className="text-[11px] text-[var(--text-faint)]">
            Product leadership
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {siteConfig.navigation.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative inline-flex px-3 py-2 text-[13px] text-[var(--text-faint)] transition duration-300 hover:text-[var(--text-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
                  >
                    <span
                      className={
                        isActive ? "text-[var(--text-strong)]" : undefined
                      }
                    >
                      {item.label}
                    </span>
                    {isActive ? (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-x-3 bottom-[2px] h-px bg-[rgba(246,241,232,0.7)]"
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 380, damping: 34 }
                        }
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hidden text-[13px] text-[var(--text-faint)] transition duration-300 hover:text-[var(--text-strong)] md:inline-flex"
        >
          LinkedIn
        </Link>
      </div>

      <nav aria-label="Mobile" className="md:hidden">
        <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-5 pb-3 text-[13px] sm:px-8">
          {siteConfig.navigation.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap transition duration-300 ${
                  isActive
                    ? "text-[var(--text-strong)]"
                    : "text-[var(--text-faint)] hover:text-[var(--text-strong)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
