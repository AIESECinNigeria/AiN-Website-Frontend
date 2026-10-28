"use client";

import type { ReactNode } from "react";

/**
 * Renders the shared page chrome (navbar + footer) around every routed page.
 * Navbar/Footer are passed in as rendered nodes so they stay server components.
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
  return (
    <>
      {navbar}
      <main className="flex-1">{children}</main>
      {footer}
    </>
  );
}
