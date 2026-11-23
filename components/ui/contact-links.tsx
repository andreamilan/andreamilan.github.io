import Link from "next/link";
import { LinkedinLogo, MediumLogo } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/content/site";

export function ContactLinks() {
  return (
    <div className="contact-links">
      <Link href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="cta-primary">
        <LinkedinLogo weight="fill" size={24} aria-hidden="true" />
        Connect on LinkedIn
      </Link>
      <Link href={siteConfig.social.medium} target="_blank" rel="noreferrer" className="cta-secondary">
        <MediumLogo weight="fill" size={24} aria-hidden="true" />
        Visit Medium
      </Link>
    </div>
  );
}
