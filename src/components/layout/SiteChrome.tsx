"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * Renders the shared page chrome (navbar + footer) around the routed page.
 *
 * The blog article pages (`/blog/<slug>`) are shown without the global navbar
 * to match the design — the listing page (`/blog`) and every other route keep
 * it. Navbar/Footer are passed in as rendered nodes so they stay server
 * components; this wrapper only decides whether the navbar is shown.
 */
export default function SiteChrome({
  navbar,
  footer,
  children,
}: {
  navbar: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname() ?? "";
  const hideNavbar = /^\/blog\/.+/.test(pathname);

  return (
    <>
      {!hideNavbar && navbar}
      <main className="flex-1">{children}</main>
      {footer}
    </>
  );
}
