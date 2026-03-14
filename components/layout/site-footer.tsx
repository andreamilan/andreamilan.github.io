import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(235,230,221,0.08)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.4fr_0.6fr] lg:px-10">
        <div className="space-y-3">
          <p className="font-display text-2xl tracking-[-0.04em] text-[var(--text-strong)]">
            Andrea Milan
          </p>
          <p className="max-w-xl text-sm leading-7 text-[var(--text-soft)]">
            I work across product leadership, marketplace thinking, and better
            consumer experiences.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 lg:justify-end">
          <Link
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--text-soft)] transition duration-300 hover:text-[var(--text-strong)]"
          >
            LinkedIn
          </Link>
          <Link
            href={siteConfig.social.medium}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--text-soft)] transition duration-300 hover:text-[var(--text-strong)]"
          >
            Medium
          </Link>
        </div>
      </div>
    </footer>
  );
}
