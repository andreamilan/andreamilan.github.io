import type { ReactNode } from "react";
import { SiteShell } from "@/components/layout/site-shell";

export function SiteFrame({
  children
}: {
  children: ReactNode;
}) {
  return <SiteShell>{children}</SiteShell>;
}
