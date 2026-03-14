import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="ambient-orb absolute left-[-8rem] top-[-4rem] h-[20rem] w-[20rem] rounded-full bg-[rgba(123,81,255,0.14)] blur-3xl" />
        <div className="ambient-orb absolute right-[-8rem] top-[12rem] h-[22rem] w-[22rem] rounded-full bg-[rgba(190,109,84,0.12)] blur-3xl [animation-delay:-6s]" />
        <div className="ambient-orb absolute bottom-[10rem] left-[16%] h-[18rem] w-[18rem] rounded-full bg-[rgba(72,92,165,0.12)] blur-3xl [animation-delay:-11s]" />
      </div>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
