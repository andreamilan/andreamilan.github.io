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
        className="container-shell pb-20 pt-24 sm:pb-24 sm:pt-28 lg:pb-28 lg:pt-32"
      >
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
          <HeroIntro>
            <div className="max-w-[40rem] pt-0 lg:pt-3">
              <p className="section-label">Andrea Milan · Head of Product at TheFork</p>
              <h1 className="display-copy mt-5 max-w-3xl text-[2.85rem] leading-[0.92] sm:mt-6 sm:text-[4.3rem] lg:text-[5.15rem]">
                I build products and teams that get stronger as they scale.
              </h1>
              <p className="body-copy mt-6 max-w-[39rem]">
                {introLead}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-primary shadow-[0_16px_40px_rgba(0,0,0,0.14)]"
                >
                  Connect on LinkedIn
                </Link>
                <Link
                  href={siteConfig.social.medium}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive-link cta-secondary"
                >
                  Visit Medium
                </Link>
              </div>
            </div>
          </HeroIntro>

          <Reveal delay={0.08}>
            <div className="relative mx-auto w-full max-w-[28rem] lg:max-w-[30rem] lg:pl-6">
              <div className="pointer-events-none absolute inset-x-[16%] top-[10%] h-[68%] rounded-full bg-[rgba(118,82,255,0.1)] blur-3xl" />
              <HeroPortrait />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell pb-20 sm:pb-24 lg:pb-28">
        <div className="max-w-5xl">
          <Reveal>
            <h2 className="section-title">
              Overview
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
                  <p className="meta-copy sm:hidden">
                    {currentRole.period} · {currentRole.location}
                  </p>
                  <p className="meta-copy hidden sm:block">{currentRole.period}</p>
                  <p className="meta-detail hidden sm:block">
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
              <div className="soft-card px-5 py-5 sm:px-7 sm:py-6">
                <div className="pb-6">
                  <p className="section-label">Previous roles</p>
                </div>
                <div className="divide-y divide-[rgba(246,241,232,0.05)]">
                  {supportingRoles.map((entry) => (
                    <article
                      key={`${entry.company}-${entry.title}`}
                      className="grid gap-3 py-5 first:pt-0 last:pb-0 sm:gap-4 lg:grid-cols-[0.2fr_0.3fr_0.5fr]"
                    >
                      <div className="space-y-1.5">
                        <p className="meta-copy sm:hidden">
                          {entry.period} · {entry.location}
                        </p>
                        <p className="meta-copy hidden sm:block">
                          {entry.period}
                        </p>
                        <p className="meta-detail hidden sm:block">
                          {entry.location}
                        </p>
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="text-[1rem] font-semibold tracking-[-0.02em] text-[var(--text-strong)]">
                          {entry.title}
                        </h3>
                        <p className="accent-copy">
                          {entry.company}
                        </p>
                      </div>
                      <p className="supporting-copy max-w-none lg:max-w-[27rem]">
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
            <div className="mt-6 rounded-[1.5rem] border border-[rgba(246,241,232,0.05)] bg-[rgba(255,255,255,0.015)] px-5 py-2 sm:px-7 sm:py-3">
              <div className="divide-y divide-[rgba(246,241,232,0.045)]">
                {education.map((item) => (
                  <article
                    key={`${item.school}-${item.degree}`}
                    className="grid gap-2 py-3.5 lg:grid-cols-[0.24fr_0.76fr]"
                  >
                    <div className="space-y-1">
                      <p className="meta-copy sm:hidden">
                        {item.period} · {item.location}
                      </p>
                      <p className="meta-copy hidden sm:block">{item.period}</p>
                      <p className="meta-detail hidden sm:block">{item.location}</p>
                    </div>
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

          <div className="mt-10 space-y-8">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.07}>
                <article className="soft-card grid gap-3 px-5 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:px-6">
                  <p className="display-copy pt-0.5 text-[1.35rem] leading-none text-[rgba(246,241,232,0.24)] sm:text-[1.55rem]">
                    0{index + 1}
                  </p>
                  <div>
                    <h3 className="display-copy text-[1.55rem] leading-[1.02] sm:text-[1.95rem]">
                      {item.title}
                    </h3>
                    <p className="supporting-copy mt-3 max-w-[46rem] leading-8 sm:text-[1rem]">
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
            <h2 className="display-copy max-w-[48rem] text-[2.25rem] leading-[0.96] sm:text-[3.2rem]">
              The best place to reach me is LinkedIn.
            </h2>
            <p className="body-copy mt-4 max-w-[42rem]">
              You can find more of my perspective on Medium.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="cta-primary"
              >
                Connect on LinkedIn
              </Link>
              <Link
                href={siteConfig.social.medium}
                target="_blank"
                rel="noreferrer"
                className="interactive-link cta-secondary"
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
