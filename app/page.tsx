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
        className="container-shell pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
      >
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <HeroIntro>
            <div className="max-w-3xl">
              <p className="section-label">Andrea Milan · Head of Product at TheFork</p>
              <h1 className="mt-6 max-w-3xl font-display text-[2.85rem] leading-[0.92] tracking-[-0.06em] text-[var(--text-strong)] sm:text-[4.3rem] lg:text-[5.15rem]">
                I believe in products that get clearer as they grow.
              </h1>
              <p className="reading-measure mt-6 text-[15px] leading-7 text-[var(--text-soft)] sm:text-[1.05rem] sm:leading-8">
                {introLead}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-[rgba(246,241,232,0.14)] bg-[rgba(246,241,232,0.08)] px-5 py-3 text-sm font-semibold text-[var(--text-strong)] shadow-[0_16px_40px_rgba(0,0,0,0.14)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(246,241,232,0.24)] hover:bg-[rgba(246,241,232,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
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

              <div className="mt-10 max-w-xl border-t border-[rgba(246,241,232,0.08)] pt-5">
                <p className="text-sm leading-7 text-[var(--text-faint)]">
                  I work across consumer product, marketplaces, and product
                  organisations that need sharper judgment, clearer priorities,
                  and stronger execution.
                </p>
              </div>
            </div>
          </HeroIntro>

          <Reveal delay={0.08}>
            <div className="relative lg:pl-8">
              <div className="pointer-events-none absolute inset-x-[14%] top-[8%] h-[70%] rounded-full bg-[rgba(118,82,255,0.1)] blur-3xl" />
              <HeroPortrait />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell pb-18 sm:pb-24">
        <div className="max-w-4xl">
          <Reveal>
            <p className="section-label">Intro</p>
          </Reveal>
          <Reveal delay={0.03}>
            <div className="section-rule" />
          </Reveal>
          <div className="mt-7 space-y-5">
            {professionalIntroduction.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.05}>
                <p className="reading-measure-wide text-base leading-8 text-[var(--text-soft)] sm:text-[1.08rem] sm:leading-9">
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
            <p className="section-label">Experience</p>
          </Reveal>
          <Reveal delay={0.03}>
            <div className="section-rule" />
          </Reveal>

          <div className="mt-10 space-y-12">
            <Reveal>
              <article className="grid gap-6 rounded-[2rem] border border-[rgba(246,241,232,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:p-8 lg:grid-cols-[0.24fr_0.76fr]">
                <div className="space-y-2">
                  <p className="section-label">{currentRole.period}</p>
                  <p className="text-sm text-[var(--text-faint)]">
                    {currentRole.location}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-[0.08em] text-[var(--accent)] uppercase">
                    {currentRole.company}
                  </p>
                  <h2 className="mt-3 font-display text-[2rem] leading-[0.98] tracking-[-0.05em] text-[var(--text-strong)] sm:text-[2.6rem]">
                    {currentRole.title}
                  </h2>
                  <p className="reading-measure mt-5 text-[15px] leading-7 text-[var(--text-soft)] sm:text-[1rem] sm:leading-8">
                    {currentRole.summary}
                  </p>
                  {currentRole.details ? (
                    <div className="mt-6 grid gap-3 sm:gap-4">
                      {currentRole.details.map((detail) => (
                        <p
                          key={detail}
                          className="reading-measure text-sm leading-7 text-[var(--text-faint)] sm:text-[15px]"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-[1.75rem] border border-[rgba(246,241,232,0.06)] bg-[rgba(255,255,255,0.02)] px-5 py-4 sm:px-7 sm:py-5">
                <div className="space-y-1 pb-5">
                  <p className="section-label">Previous roles</p>
                  <p className="text-sm text-[var(--text-faint)]">
                    Compact by design, but complete.
                  </p>
                </div>
                <div className="divide-y divide-[rgba(246,241,232,0.06)]">
                  {supportingRoles.map((entry) => (
                    <article
                      key={`${entry.company}-${entry.title}`}
                      className="grid gap-2 py-4 sm:gap-3 lg:grid-cols-[0.22fr_0.28fr_0.5fr]"
                    >
                      <div className="space-y-1">
                        <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-faint)]">
                          {entry.period}
                        </p>
                        <p className="text-xs text-[var(--text-faint)] sm:text-sm">
                          {entry.location}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-[0.98rem] font-semibold tracking-[-0.02em] text-[var(--text-strong)]">
                          {entry.title}
                        </h3>
                        <p className="mt-1 text-sm text-[rgba(219,200,173,0.86)]">
                          {entry.company}
                        </p>
                      </div>
                      <p className="reading-measure text-sm leading-6 text-[var(--text-soft)]">
                        {entry.summary}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="education" className="container-shell pb-20 sm:pb-24 lg:pb-28">
        <div className="max-w-4xl">
          <Reveal>
            <p className="section-label">Education</p>
          </Reveal>
          <Reveal delay={0.03}>
            <div className="section-rule" />
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-7 rounded-[1.75rem] border border-[rgba(246,241,232,0.06)] bg-[rgba(255,255,255,0.02)] px-5 py-3 sm:px-7 sm:py-4">
              <div className="divide-y divide-[rgba(246,241,232,0.06)]">
                {education.map((item) => (
                  <article
                    key={`${item.school}-${item.degree}`}
                    className="grid gap-2 py-4 lg:grid-cols-[0.24fr_0.76fr]"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-faint)]">
                      {item.period}
                    </p>
                    <div>
                      <h3 className="text-[0.98rem] font-semibold tracking-[-0.02em] text-[var(--text-strong)]">
                        {item.school}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[var(--text-soft)]">
                        {item.degree}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="principles" className="container-shell section-space">
        <div className="max-w-4xl">
          <Reveal>
            <p className="section-label">How I think</p>
          </Reveal>
          <Reveal delay={0.03}>
            <div className="section-rule" />
          </Reveal>

          <div className="mt-10 space-y-10">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.07}>
                <article className="grid gap-3 border-t border-[rgba(246,241,232,0.06)] pt-6 sm:grid-cols-[3.5rem_1fr] sm:gap-5">
                  <p className="font-display text-[1.8rem] leading-none tracking-[-0.05em] text-[rgba(246,241,232,0.34)] sm:text-[2.1rem]">
                    0{index + 1}
                  </p>
                  <div className="max-w-2xl">
                    <h3 className="font-display text-[1.75rem] leading-[1] tracking-[-0.045em] text-[var(--text-strong)] sm:text-[2.2rem]">
                      {item.title}
                    </h3>
                    <p className="reading-measure mt-3 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                      {item.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="connect" className="container-shell pb-20 pt-18 sm:pb-24 lg:pb-32">
        <Reveal>
          <div className="max-w-4xl">
            <p className="section-label">Connect</p>
            <div className="section-rule" />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="max-w-4xl pt-8">
            <h2 className="reading-measure font-display text-[2.25rem] leading-[0.96] tracking-[-0.055em] text-[var(--text-strong)] sm:text-[3.4rem]">
              The best place to reach me is LinkedIn.
            </h2>
            <p className="reading-measure mt-4 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
              Medium is there if you want a little more context first.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-[rgba(246,241,232,0.14)] bg-[rgba(246,241,232,0.08)] px-5 py-3 text-sm font-semibold text-[var(--text-strong)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(246,241,232,0.24)] hover:bg-[rgba(246,241,232,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
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
