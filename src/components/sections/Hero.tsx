import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
    return (
        <section className="relative flex items-center min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-6rem)] py-10 bg-brand-950 bg-cover bg-bottom bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
  {/* Soft, contained tint behind ONLY the centred content (headline, paragraph,
      buttons) — a very light black radial that feathers out to transparent, so
      the rest of the photo stays clean and it never looks like a box. */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_50%,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.15)_55%,transparent_80%)]" />
  <div className="container relative z-10 mx-auto w-full px-4">
    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
      {/* Eyebrow — glass pill, white text + blue accent dot for legibility */}
      <div className="mb-7 animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_2px_12px_rgba(2,6,23,0.35)] backdrop-blur-md sm:gap-2.5 sm:px-4 sm:text-[13px] sm:tracking-[0.14em]">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
          Est. 2007 · Global Minds. Global Futures
        </span>
      </div>

      <h1 className="mb-6 max-w-2xl animate-fade-up text-balance bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-4xl font-semibold leading-[1.1] tracking-tight text-transparent [text-shadow:0_2px_20px_rgba(2,6,23,0.35)] md:text-5xl lg:text-6xl" style={{ animationDelay: '150ms' }}>
        Your Gateway to World-Class Education
      </h1>

      <p className="mx-auto mb-10 max-w-xl animate-fade-up text-pretty text-base leading-relaxed text-slate-100 [text-shadow:0_1px_2px_rgba(0,0,0,0.5),0_2px_22px_rgba(0,0,0,0.6)] md:text-lg" style={{ animationDelay: '300ms' }}>
        Your trusted partner for international education, admissions, recruitment, placements, and global opportunities.
      </p>

      <div className="flex w-full flex-col items-center justify-center gap-3 animate-fade-up sm:w-auto sm:flex-row sm:gap-4" style={{ animationDelay: '450ms' }}>
        <Link className="group relative inline-flex w-full max-w-[16rem] items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-500 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950 sm:w-auto sm:max-w-none" href="/contact">
          Free Consultation
          <svg className="ml-1 h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link className="relative inline-flex w-full max-w-[16rem] items-center justify-center rounded-full border-[1.5px] border-brand-400 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950 sm:w-auto sm:max-w-none" href="/stories">
          Success Stories
        </Link>
      </div>
    </div>
  </div>
</section>


    );
};

export default Hero;
