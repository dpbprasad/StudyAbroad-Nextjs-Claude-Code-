import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
// import { NewsletterSignup } from '../forms/NewsletterSignup'; // newsletter bar hidden for now
import { AccreditationSlider, type Accreditation } from '../ui/AccreditationSlider';
import { BUSINESS } from '../../lib/site';

/* Accreditation badges — data-driven so a backend can add more later.
   With 1 item it renders statically; 2+ auto-rotate with a swipe hint.
   Empty array → the Accredited column is hidden and the footer reflows. */
const accreditations: Accreditation[] = [
  { id: 'icef', type: 'icef', accountId: '7093' },
];

const LOGO_SRC = '/logo-light.svg';

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com', path: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z' },
  { label: 'Instagram', href: 'https://www.instagram.com', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  { label: 'TikTok', href: 'https://www.tiktok.com', path: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 11-5.77 0 2.89 2.89 0 012.89-2.89h1.15v-3.45H9.55a6.34 6.34 0 106.34 6.34V6.69z' },
  { label: 'YouTube', href: 'https://www.youtube.com', path: 'M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.52 3.545 12 3.545 12 3.545s-7.52 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.868.508 9.388.508 9.388.508s7.52 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11-.001-4.124 2.062 2.062 0 01.001 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
];

const companyLinks = [
  { label: 'About Us', href: '/aboutus' },
  { label: 'Services', href: '/services' },
  { label: 'Countries', href: '/country-details?country=overview' },
  { label: 'Success Stories', href: '/stories' },
];

const otherLinks = [
  { label: 'Resources', href: '/resources' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

const legalLinks = [
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

const linkClass = 'text-sm text-slate-300 transition-colors duration-200 hover:text-white';
const headingClass = 'mb-4 text-sm font-semibold uppercase tracking-wider text-white';

const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-slate-300">
      <Container>
        {/* Newsletter bar hidden for now — restore this block (and the
            NewsletterSignup import) when the newsletter is ready. */}

        {/* Mobile: 2-col grid (Company|Other, Legal|Get in touch pair up).
            md+: flex-wrap row layout. */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-16 sm:gap-x-8 md:flex md:flex-row md:flex-wrap md:justify-between md:gap-x-8 lg:gap-x-12">
          {/* Brand */}
          <div className="col-span-2 md:max-w-sm">
            <Link href="/" className="inline-block" aria-label="Study Abroad — home">
              <img src={LOGO_SRC} alt="Study Abroad (Pvt) Ltd" className="h-14 w-auto object-contain" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-300">
              Sri Lanka's trusted student visa &amp; university placement consultancy since 2007.
              <span className="mt-1 block">Global Minds. Global Futures.</span>
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-300 transition-colors duration-200 hover:bg-brand-600 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
            {accreditations.length > 0 && (
              <div className="mt-8">
                <AccreditationSlider items={accreditations} />
              </div>
            )}
          </div>

          {/* Company */}
          <div>
            <h3 className={headingClass}>Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other */}
          <div>
            <h3 className={headingClass}>Other</h3>
            <ul className="space-y-2.5">
              {otherLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className={headingClass}>Legal</h3>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={linkClass}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className={headingClass}>Get in touch</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href="https://maps.app.goo.gl/PLTg8veRcFbykqZe6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-white"
                >
                  {BUSINESS.address.street},<br />
                  {BUSINESS.address.locality}, {BUSINESS.address.countryName}
                </a>
              </li>
              <li>
                <a href={`tel:${BUSINESS.phone}`} className={linkClass}>{BUSINESS.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className={linkClass}>{BUSINESS.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container>
          <p className="py-5 text-center text-sm text-slate-400">
            © Study Abroad (Pvt) Ltd. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default SiteFooter;
