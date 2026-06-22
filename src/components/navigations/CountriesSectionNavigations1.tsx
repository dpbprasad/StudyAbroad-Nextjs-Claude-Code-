"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

const LOGO_SRC =
  'https://static.shuffle.dev/uploads/files/8f/8fabfe5ac9e980e7956b71c583d5c06bd3f4cc88/logo-Copy.svg';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/aboutus' },
  { label: 'Services', href: '/services' },
  { label: 'Countries', href: '/country-details?country=overview' },
  { label: 'Stories', href: '/stories' },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQ', href: '/faq' },
];

const CountriesSectionNavigations1: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false); // slid up out of view
  const [scrolled, setScrolled] = useState(false); // past the top → add shadow
  const pathname = usePathname();

  const isActive = (href: string) => {
    const path = href.split('?')[0];
    return path === '/' ? pathname === '/' : pathname.startsWith(path);
  };

  /**
   * Smart sticky ("headroom") header — the standard pattern:
   * always shown near the top, hides on scroll-down, reveals on scroll-up.
   * rAF-throttled with a small delta so it never reacts to scroll jitter.
   */
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const PIN_ZONE = 80; // always visible while within this distance of the top
    const DELTA = 6; // ignore sub-pixel / trackpad jitter

    const update = () => {
      const y = Math.max(0, window.scrollY);
      setScrolled(y > 8);

      if (y <= PIN_ZONE) {
        setHidden(false); // near the top → always pinned
      } else if (Math.abs(y - lastY) > DELTA) {
        setHidden(y > lastY); // scrolling down → hide, up → reveal
      }

      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on Escape + lock body scroll while the drawer is open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsMobileMenuOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-md transition-transform duration-300 ${
          hidden && !isMobileMenuOpen ? '-translate-y-full' : 'translate-y-0'
        } ${scrolled ? 'shadow-card' : ''}`}
      >
        <Container>
          <nav className="flex h-20 items-center justify-between lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex h-full items-center" aria-label="Study Abroad — home">
              <img src={LOGO_SRC} alt="Study Abroad (Pvt) Ltd" className="h-11 w-auto object-contain lg:h-[68px]" />
            </Link>

            {/* Desktop links */}
            <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    className={`relative text-base font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-brand-600 after:transition-transform after:duration-200 hover:text-brand-700 hover:after:scale-x-100 ${
                      isActive(link.href)
                        ? 'text-brand-700 after:scale-x-100'
                        : 'text-slate-700 after:scale-x-0'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button href="/contact">
                Contact Us
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-800 transition-colors hover:bg-slate-100 lg:hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile drawer — sibling of <header> so the header's transform
          never affects this fixed overlay. */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden ${isMobileMenuOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-slate-900/50 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <nav
          className={`absolute bottom-0 left-0 top-0 flex h-full w-5/6 max-w-sm flex-col overflow-y-auto bg-white px-6 py-6 shadow-card-lg transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="mb-10 flex items-center justify-between">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img src={LOGO_SRC} alt="Study Abroad (Pvt) Ltd" className="h-9 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-800 transition-colors hover:bg-slate-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  onClick={() => setIsMobileMenuOpen(false)}
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-brand-700'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8">
            <Button href="/contact" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Button>
            <div className="mt-6 flex justify-center border-t border-slate-200 pt-6">
              <img src="/images/icef-badge.png" alt="ICEF Accredited Agency" className="h-12 w-auto object-contain" />
            </div>
            <p className="mt-6 text-center text-sm text-slate-400">© 2026 All rights reserved.</p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default CountriesSectionNavigations1;
