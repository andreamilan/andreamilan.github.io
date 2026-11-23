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
        <div className="ambient-orb absolute left-[-10rem] top-[-6rem] h-[20rem] w-[20rem] rounded-full bg-[rgba(123,81,255,0.11)] blur-3xl" />
        <div className="ambient-orb absolute right-[-9rem] top-[10rem] h-[18rem] w-[18rem] rounded-full bg-[rgba(190,109,84,0.08)] blur-3xl [animation-delay:-7s]" />
        <div className="ambient-orb absolute bottom-[12rem] left-[14%] h-[16rem] w-[16rem] rounded-full bg-[rgba(72,92,165,0.08)] blur-3xl [animation-delay:-12s]" />
      </div>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
