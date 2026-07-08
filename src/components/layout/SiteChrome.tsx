"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import ConsentManager from '../ConsentManager';

/**
 * Wraps the public site with its header/footer/cookie-consent, but renders the
 * /admin dashboard bare (it has its own layout). Header/footer are passed in as
 * already-rendered nodes so this client component can host server components.
 */
export function SiteChrome({
  header,
  footer,
  children,
}: {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return <>{children}</>;

  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
      <ConsentManager />
    </>
  );
}

export default SiteChrome;
