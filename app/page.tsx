import type { ReactNode } from "react";
import { SiteFrame } from "@/components/layout/site-frame";
import { CareerTimeline, EducationTimeline } from "@/components/ui/career-timeline";
import { ContactLinks } from "@/components/ui/contact-links";
import { HeroIntro } from "@/components/ui/hero-intro";
import { HeroPortrait } from "@/components/ui/hero-portrait";
import { Reveal } from "@/components/ui/reveal";
import { education, introLead, principles, professionalIntroduction, timeline } from "@/content/profile";

function EditorialSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="editorial-section container-shell" aria-labelledby={`${id}-heading`}>
      <Reveal><div className="section-heading"><h2 id={`${id}-heading`}>{title}</h2></div></Reveal>
      {children}
    </section>
  );
}

export default function HomePage() {
  return (
    <SiteFrame>
      <section id="intro" className="hero-section container-shell" aria-labelledby="hero-heading">
        <div className="hero-grid">
          <HeroIntro>
            <p className="section-label">Andrea Milan · Head of Product at TheFork</p>
            <h1 id="hero-heading" className="hero-heading"><span className="hero-line">I build products</span>{" "}<span className="hero-line">and teams that get</span>{" "}<span className="hero-line"><span className="hero-emphasis">stronger</span> as they</span>{" "}<span className="hero-line">scale.</span></h1>
            <p className="body-copy hero-description">{introLead}</p>
            <ContactLinks />
          </HeroIntro>
          <HeroPortrait />
        </div>
      </section>

      <EditorialSection id="overview" title="Overview">
        <div className="overview-copy">
          {professionalIntroduction.map((paragraph, index) => <Reveal key={paragraph} delay={index * 0.04}><p className="body-copy">{paragraph}</p></Reveal>)}
        </div>
      </EditorialSection>

      <EditorialSection id="experience" title="Experience">
        <CareerTimeline entries={timeline} />
      </EditorialSection>

      <EditorialSection id="education" title="Education">
        <EducationTimeline entries={education} />
      </EditorialSection>

      <EditorialSection id="principles" title="Principles">
        <div className="principles-list">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="principle-row"><span className="principle-number" aria-hidden="true">0{index + 1}</span><div><h3 className="principle-title">{item.title}</h3><p className="body-copy">{item.body}</p></div></article>
            </Reveal>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection id="connect" title="Get in touch">
        <Reveal><div className="connect-content"><h3>The best place to reach me is LinkedIn.</h3><p className="body-copy">I share more of my perspective on Medium.</p><ContactLinks /></div></Reveal>
      </EditorialSection>
    </SiteFrame>
  );
}
