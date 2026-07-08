"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/leads', label: 'Leads' },
  { href: '/admin/subscribers', label: 'Subscribers' },
  { href: '/admin/content', label: 'Content' },
];

export function AdminNav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === '/admin' ? pathname === '/admin' : pathname.startsWith(href);

  return (
    <nav className="flex items-center gap-1">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          aria-current={isActive(l.href) ? 'page' : undefined}
          className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
            isActive(l.href)
              ? 'bg-brand-50 text-brand-700'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
