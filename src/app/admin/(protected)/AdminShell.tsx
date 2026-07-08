"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { logout } from '../../../lib/actions/auth';
import { CONTENT_SECTIONS, contentHref } from '../../../lib/admin-nav';

/* ---- icons ---- */
const Ico = {
  dash: <path d="M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z" />,
  leads: <><path d="M3 7h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M3 7l3-4h12l3 4M8 12h8" /></>,
  subs: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  content: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></>,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M17 8.5a2.6 2.6 0 0 0 0-1M18.4 20c0-2.2-1-3.9-2.6-4.8" /></>,
  account: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></>,
  logout: <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><path d="M16 17l5-5-5-5M21 12H9" /></>,
};
const Icon = ({ d, className = 'h-[18px] w-[18px]' }: { d: React.ReactNode; className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">{d}</svg>
);

type Props = { name: string; email: string; role: 'admin' | 'editor'; children: React.ReactNode };

const PAGE_TITLES: Record<string, string> = {
  '/admin': 'Dashboard',
  '/admin/leads': 'Leads',
  '/admin/subscribers': 'Subscribers',
  '/admin/content': 'Content',
  '/admin/users': 'Staff accounts',
  '/admin/account': 'Your account',
};

export function AdminShell({ name, email, role, children }: Props) {
  const pathname = usePathname();
  const [drawer, setDrawer] = useState(false);
  const onContent = pathname.startsWith('/admin/content');
  const [contentOpen, setContentOpen] = useState(onContent);
  const showSub = contentOpen || onContent;

  const isActive = (href: string) => (href === '/admin' ? pathname === '/admin' : pathname.startsWith(href));

  const navBase = 'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors';
  const navOn = 'bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-[0_8px_18px_-8px_rgba(30,58,138,.6)]';
  const navOff = 'text-slate-600 hover:bg-slate-100 hover:text-slate-900';

  const initials = name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase() || 'A';

  // Breadcrumb tail
  const contentSlug = onContent ? pathname.split('/')[3] : undefined;
  const contentLabel = CONTENT_SECTIONS.find((s) => s.slug === contentSlug)?.label;
  const title = PAGE_TITLES[pathname] ?? (onContent ? 'Content' : 'Admin');

  const Item = ({ href, icon, label, badge }: { href: string; icon: React.ReactNode; label: string; badge?: string }) => (
    <Link href={href} onClick={() => setDrawer(false)} aria-current={isActive(href) ? 'page' : undefined}
      className={`${navBase} ${isActive(href) ? navOn : navOff}`}>
      <Icon d={icon} />
      <span>{label}</span>
      {badge && <span className={`ml-auto rounded-full px-2 py-0.5 text-[11px] font-bold ${isActive(href) ? 'bg-white/20 text-white' : 'bg-brand-50 text-brand-700'}`}>{badge}</span>}
    </Link>
  );

  return (
    <div className="min-h-screen bg-[#eef1fb]">
      <div className="lg:grid lg:grid-cols-[260px_1fr]">
        {/* Backdrop (mobile) */}
        {drawer && <div onClick={() => setDrawer(false)} className="fixed inset-0 z-30 bg-slate-900/40 lg:hidden" aria-hidden />}

        {/* Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:static lg:h-screen lg:translate-x-0 ${drawer ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
            <img src="/logo.svg" alt="Study Abroad" className="h-9 w-auto object-contain" />
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-4">
            <p className="px-3 pb-1 pt-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">Main</p>
            <nav className="flex flex-col gap-1">
              <Item href="/admin" icon={Ico.dash} label="Dashboard" />
              <Item href="/admin/leads" icon={Ico.leads} label="Leads" />
              <Item href="/admin/subscribers" icon={Ico.subs} label="Subscribers" />
            </nav>

            <p className="px-3 pb-1 pt-5 text-[11px] font-bold uppercase tracking-wider text-slate-400">Manage</p>
            <nav className="flex flex-col gap-1">
              {/* Content — expandable */}
              <button type="button" onClick={() => setContentOpen((o) => !o)}
                className={`${navBase} ${onContent ? 'bg-slate-100 text-slate-900' : navOff} w-full`}>
                <Icon d={Ico.content} />
                <span>Content</span>
                <svg className={`ml-auto h-4 w-4 text-slate-400 transition-transform ${showSub ? 'rotate-90' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M9 6l6 6-6 6" /></svg>
              </button>
              {showSub && (
                <div className="mb-1 ml-4 flex flex-col gap-0.5 border-l border-slate-200 pl-3">
                  {CONTENT_SECTIONS.map((s) => {
                    const href = contentHref(s.slug);
                    const active = pathname === href;
                    return (
                      <Link key={s.slug} href={href} onClick={() => setDrawer(false)} aria-current={active ? 'page' : undefined}
                        className={`flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] transition-colors ${active ? 'font-semibold text-brand-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'}`}>
                        <span className={`h-1.5 w-1.5 flex-none rounded-full ${active ? 'bg-brand-600' : 'bg-slate-300'}`} />
                        <span className="truncate">{s.label}</span>
                        {!s.ready && <span className="ml-auto rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-400">soon</span>}
                      </Link>
                    );
                  })}
                </div>
              )}

              {role === 'admin' && <Item href="/admin/users" icon={Ico.users} label="Users" />}
            </nav>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-100 p-3">
            <Link href="/admin/account" onClick={() => setDrawer(false)} className={`${navBase} ${isActive('/admin/account') ? navOn : navOff} mb-1`}>
              <Icon d={Ico.account} />
              <span>Your account</span>
            </Link>
            <form action={logout}>
              <button type="submit" className={`${navBase} ${navOff} w-full`}>
                <Icon d={Ico.logout} />
                <span>Log out</span>
              </button>
            </form>
            <div className="mt-2 flex items-center gap-2.5 rounded-xl bg-slate-50 px-3 py-2.5">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-800 text-xs font-bold text-white">{initials}</span>
              <span className="min-w-0">
                <span className="block truncate text-[13px] font-semibold text-slate-800">{name}</span>
                <span className="block truncate text-[11px] capitalize text-slate-400">{role}</span>
              </span>
            </div>
          </div>
        </aside>

        {/* Content column */}
        <div className="min-w-0">
          <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/85 backdrop-blur">
            <div className="flex items-center gap-3 px-5 py-3.5 sm:px-7">
              <button type="button" onClick={() => setDrawer(true)} aria-label="Open menu" className="-ml-1 inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-slate-400">Home</span>
                <span className="text-slate-300">›</span>
                <span className="font-semibold text-slate-800">{title}</span>
                {contentLabel && (<><span className="text-slate-300">›</span><span className="font-semibold text-slate-800">{contentLabel}</span></>)}
              </div>
              <div className="ml-auto flex items-center gap-2.5">
                <span className="hidden text-right sm:block">
                  <span className="block text-[13px] font-semibold leading-tight text-slate-800">{name}</span>
                  <span className="block text-[11px] leading-tight text-slate-400">{email}</span>
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-800 text-xs font-bold text-white">{initials}</span>
              </div>
            </div>
          </header>

          <main className="mx-auto max-w-6xl px-5 py-7 sm:px-7">{children}</main>
        </div>
      </div>
    </div>
  );
}
