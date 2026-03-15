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
              <h1 className="display-copy mt-6 max-w-3xl text-[2.85rem] leading-[0.92] sm:text-[4.3rem] lg:text-[5.15rem]">
                I build products and teams that get stronger as they scale.
              </h1>
              <p className="body-copy reading-measure mt-6">
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
                  className="interactive-link supporting-copy transition duration-300 hover:text-[var(--text-strong)]"
                >
                  Visit Medium
                </Link>
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

      <section className="container-shell pb-20 sm:pb-24 lg:pb-28">
        <div className="max-w-5xl">
          <Reveal>
            <h2 className="section-title">
              About Me
            </h2>
          </Reveal>
          <Reveal delay={0.03}>
            <div className="section-rule" />
          </Reveal>
          <div className="mt-7 space-y-5">
            {professionalIntroduction.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.05}>
                <p className="body-copy max-w-none">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="container-shell pb-20 sm:pb-24 lg:pb-28"
      >
        <div className="max-w-5xl">
          <Reveal>
            <h2 className="section-title">
              Experience
            </h2>
          </Reveal>
          <Reveal delay={0.03}>
            <div className="section-rule" />
          </Reveal>

          <div className="mt-10 space-y-12">
            <Reveal>
              <article className="grid gap-6 rounded-[2rem] border border-[rgba(246,241,232,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:p-8 lg:grid-cols-[0.24fr_0.76fr]">
                <div className="space-y-2">
                  <p className="meta-copy">{currentRole.period}</p>
                  <p className="meta-detail">
                    {currentRole.location}
                  </p>
                </div>
                <div>
                  <p className="accent-copy">
                    {currentRole.company}
                  </p>
                  <h3 className="display-copy mt-3 text-[2rem] leading-[0.98] sm:text-[2.6rem]">
                    {currentRole.title}
                  </h3>
                  <p className="body-copy reading-measure mt-5">
                    {currentRole.summary}
                  </p>
                  {currentRole.details ? (
                    <div className="mt-6 grid gap-3 sm:gap-4">
                      {currentRole.details.map((detail) => (
                        <p
                          key={detail}
                          className="meta-detail reading-measure leading-7"
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
                <div className="pb-5">
                  <p className="section-label">Previous roles</p>
                </div>
                <div className="divide-y divide-[rgba(246,241,232,0.06)]">
                  {supportingRoles.map((entry) => (
                    <article
                      key={`${entry.company}-${entry.title}`}
                      className="grid gap-2 py-4 sm:gap-3 lg:grid-cols-[0.22fr_0.28fr_0.5fr]"
                    >
                      <div className="space-y-1">
                        <p className="meta-copy">
                          {entry.period}
                        </p>
                        <p className="meta-detail">
                          {entry.location}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-[1rem] font-semibold tracking-[-0.02em] text-[var(--text-strong)]">
                          {entry.title}
                        </h3>
                        <p className="accent-copy mt-1">
                          {entry.company}
                        </p>
                      </div>
                      <p className="supporting-copy reading-measure">
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

      <section
        id="education"
        className="container-shell pb-20 sm:pb-24 lg:pb-28"
      >
        <div className="max-w-5xl">
          <Reveal>
            <h2 className="section-title">
              Education
            </h2>
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
                    <p className="meta-copy">
                      {item.period}
                    </p>
                    <div>
                      <h3 className="text-[1rem] font-semibold tracking-[-0.02em] text-[var(--text-strong)]">
                        {item.school}
                      </h3>
                      <p className="supporting-copy mt-1 leading-6">
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

      <section
        id="principles"
        className="container-shell pb-20 sm:pb-24 lg:pb-28"
      >
        <div className="max-w-5xl">
          <Reveal>
            <h2 className="section-title">
              Principles
            </h2>
          </Reveal>
          <Reveal delay={0.03}>
            <div className="section-rule" />
          </Reveal>

          <div className="mt-10 space-y-10">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.07}>
                <article className="grid gap-3 border-t border-[rgba(246,241,232,0.06)] pt-6 sm:grid-cols-[3.5rem_1fr] sm:gap-5">
                  <p className="display-copy text-[1.8rem] leading-none text-[rgba(246,241,232,0.34)] sm:text-[2.1rem]">
                    0{index + 1}
                  </p>
                  <div>
                    <h3 className="display-copy text-[1.75rem] leading-[1] sm:text-[2.2rem]">
                      {item.title}
                    </h3>
                    <p className="body-copy max-w-none mt-3">
                      {item.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="connect"
        className="container-shell pb-20 sm:pb-24 lg:pb-28"
      >
        <Reveal>
          <div className="max-w-5xl">
            <h2 className="section-title">
              Get in touch
            </h2>
            <div className="section-rule" />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="max-w-5xl pt-8">
            <h2 className="display-copy max-w-none text-[2.25rem] leading-[0.96] sm:text-[3.4rem]">
              The best place to reach me is LinkedIn.
            </h2>
            <p className="body-copy max-w-none mt-4">
              You can find more of my perspective on Medium.
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
                className="interactive-link supporting-copy transition duration-300 hover:text-[var(--text-strong)]"
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
