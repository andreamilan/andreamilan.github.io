import Link from "next/link";
import { SiteFrame } from "@/components/layout/site-frame";
import { HeroIntro } from "@/components/ui/hero-intro";
import { HeroPortrait } from "@/components/ui/hero-portrait";
import { Reveal } from "@/components/ui/reveal";
import {
  education,
  introLead,
  principles,
  professionalIntroduction,
  timeline
} from "@/content/profile";
import { siteConfig } from "@/content/site";

const currentRole = timeline[0];
const supportingRoles = timeline.slice(1);

export default function HomePage() {
  return (
    <SiteFrame>
      <section
        id="intro"
        className="container-shell pb-14 pt-14 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-18"
      >
        <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:gap-8">
          <HeroIntro>
            <div className="max-w-3xl">
              <p className="text-sm text-[var(--text-faint)]">
                Andrea Milan · Head of Product at TheFork
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[0.95] tracking-[-0.055em] text-[var(--text-strong)] sm:text-[3.7rem] lg:text-[4.35rem]">
                I believe in products that get clearer as they grow.
              </h1>
              <p className="reading-measure mt-5 text-[15px] leading-7 text-[var(--text-soft)] sm:text-lg sm:leading-8">
                {introLead}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-[rgba(246,241,232,0.16)] bg-[rgba(246,241,232,0.08)] px-5 py-3 text-sm font-semibold text-[var(--text-strong)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(246,241,232,0.24)] hover:bg-[rgba(246,241,232,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
                >
                  Connect on LinkedIn
                </Link>
                <Link
                  href={siteConfig.social.medium}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive-link text-sm text-[var(--text-soft)] transition duration-300 hover:text-[var(--text-strong)]"
                >
                  Medium
                </Link>
              </div>
            </div>
          </HeroIntro>

          <Reveal delay={0.08}>
            <div className="lg:pl-6">
              <HeroPortrait />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-4xl">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--text-strong)] sm:text-3xl">
              Intro
            </h2>
          </Reveal>
          <Reveal delay={0.03}>
            <div className="mt-4 border-t border-[var(--line)]" />
          </Reveal>
          <div className="mt-6 space-y-5">
            {professionalIntroduction.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.06}>
                <p className="reading-measure-wide text-base leading-8 text-[var(--text-soft)] sm:text-[1.05rem] sm:leading-8">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="container-shell section-space">
        <div className="max-w-5xl">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--text-strong)] sm:text-3xl">
              Experience
            </h2>
          </Reveal>
          <Reveal delay={0.03}>
            <div className="mt-4 border-t border-[var(--line)]" />
          </Reveal>
          <div className="mt-8 space-y-10">
            <Reveal>
              <article className="grid gap-4 lg:grid-cols-[0.22fr_0.78fr]">
                <div className="space-y-1">
                  <p className="text-sm text-[var(--text-faint)]">
                    {currentRole.period}
                  </p>
                  <p className="text-sm text-[var(--text-faint)]">
                    {currentRole.location}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-[2rem] tracking-[-0.04em] text-[var(--text-strong)] sm:text-[2.3rem]">
                    {currentRole.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold tracking-[0.01em] text-[var(--accent)]">
                    {currentRole.company}
                  </p>
                  <p className="reading-measure mt-4 text-[15px] leading-7 text-[var(--text-soft)] sm:text-[1rem] sm:leading-8">
                    {currentRole.summary}
                  </p>
                  {currentRole.details ? (
                    <div className="mt-4 space-y-2">
                      {currentRole.details.map((detail) => (
                        <p
                          key={detail}
                          className="reading-measure text-sm leading-6 text-[var(--text-faint)] sm:text-[15px] sm:leading-7"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <div className="space-y-6">
                  {supportingRoles.map((entry) => (
                    <article
                      key={`${entry.company}-${entry.title}`}
                      className="grid gap-3 lg:grid-cols-[0.22fr_0.78fr]"
                    >
                      <div className="space-y-1">
                        <p className="text-xs text-[var(--text-faint)] sm:text-sm">
                          {entry.period}
                        </p>
                        <p className="text-xs text-[var(--text-faint)] sm:text-sm">
                          {entry.location}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold tracking-[-0.02em] text-[var(--text-strong)] sm:text-[1.05rem]">
                          {entry.title}
                        </h3>
                        <p className="mt-1 text-sm font-semibold tracking-[0.01em] text-[var(--accent)]">
                          {entry.company}
                        </p>
                        <p className="reading-measure mt-2 text-sm leading-6 text-[var(--text-soft)]">
                          {entry.summary}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="education" className="container-shell pb-20 sm:pb-24 lg:pb-32">
        <div className="max-w-5xl">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--text-strong)] sm:text-3xl">
              Education
            </h2>
          </Reveal>
          <Reveal delay={0.03}>
            <div className="mt-4 border-t border-[var(--line)]" />
          </Reveal>
          <div className="mt-6 space-y-3">
            {education.map((item, index) => (
              <Reveal key={`${item.school}-${item.degree}`} delay={index * 0.05}>
                <article className="grid gap-3 lg:grid-cols-[0.22fr_0.78fr]">
                  <div className="space-y-1">
                    <p className="text-xs text-[var(--text-faint)] sm:text-sm">
                      {item.period}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-[-0.02em] text-[var(--text-strong)] sm:text-[1.05rem]">
                      {item.school}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-faint)]">
                      {item.degree}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="principles" className="container-shell section-space">
        <div className="max-w-5xl">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--text-strong)] sm:text-3xl">
              How I think
            </h2>
          </Reveal>
          <Reveal delay={0.03}>
            <div className="mt-4 border-t border-[var(--line)]" />
          </Reveal>
          <div className="mt-8 space-y-7">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="max-w-3xl space-y-2">
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--text-strong)] sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="reading-measure text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="connect" className="container-shell pb-20 pt-20 sm:pb-24 lg:pb-32">
        <Reveal>
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--text-strong)] sm:text-3xl">
              Connect
            </h2>
            <div className="mt-4 border-t border-[var(--line)]" />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="max-w-4xl pt-8">
            <h2 className="reading-measure font-display text-3xl leading-[0.98] tracking-[-0.05em] text-[var(--text-strong)] sm:text-4xl">
              The best place to reach me is LinkedIn.
            </h2>
            <p className="reading-measure mt-4 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
              Medium is there if you want a little more context first.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Link
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-[rgba(246,241,232,0.16)] bg-[rgba(246,241,232,0.08)] px-5 py-3 text-sm font-semibold text-[var(--text-strong)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(246,241,232,0.24)] hover:bg-[rgba(246,241,232,0.12)]"
              >
                Connect on LinkedIn
              </Link>
              <Link
                href={siteConfig.social.medium}
                target="_blank"
                rel="noreferrer"
                className="interactive-link text-sm text-[var(--text-soft)] transition duration-300 hover:text-[var(--text-strong)]"
              >
                Visit Medium
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteFrame>
  );
}
