import React from 'react';
import Link from 'next/link';

const IndexSectionHeaders3: React.FC = () => {
    return (
        <section data-from-ai="false" className="relative flex items-center min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-6rem)] py-10 bg-brand-950 bg-cover bg-bottom bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
  {/* Scrim for legible text over the photo:
      (1) a light overall brand tint for baseline contrast, and
      (2) a stronger radial boost concentrated behind the centered text,
      fading toward the edges so the image stays relatively clean there. */}
  <div className="absolute inset-0 bg-black/20" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_65%_at_50%_50%,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.22)_50%,transparent_80%)]" />
  <div className="container px-4 mx-auto relative z-10 w-full">
    <div>
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mb-10 mx-auto text-center">
          <div className="mb-6 animate-fade-up">
            <span className="text-sm text-[#22D3EE] font-semibold tracking-wider">EST.2007 | GLOBAL MINDS. GLOBAL FUTURES</span>
          </div>
          <h1 className="mb-6 animate-fade-up text-4xl md:text-5xl lg:text-6xl font-medium leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-200 [text-shadow:0_2px_20px_rgba(2,6,23,0.35)]" style={{ animationDelay: '120ms' }}>Your gateway to world-class education</h1>
          <p className="mb-10 animate-fade-up text-lg leading-relaxed text-slate-200 [text-shadow:0_1px_12px_rgba(2,6,23,0.45)]" style={{ animationDelay: '220ms' }}>Your Trusted Partner for International Education, Admissions, Recruitment, Placements, and Global Opportunities.</p>
          <div className="relative flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '320ms' }}>
            <Link className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 rounded-full transition-all duration-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950" href="/contact">
              Free Consultation
              <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white border-[1.5px] border-[#22D3EE] hover:border-[#22D3EE] hover:bg-[#22D3EE]/10 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950" href="/stories">
              Success Stories
            </Link>
          </div>
        </div>
        <div className="animate-fade-up" style={{ animationDelay: '420ms' }}>
          <button className="block mx-auto w-16 h-16 p-3 rounded-full border-[1.5px] border-[#22D3EE] hover:bg-[#22D3EE]/10 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto text-[#22D3EE] transition-colors duration-200" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </button>
          <span className="block text-center mt-3 text-sm font-medium text-slate-200">Meet Our Director</span>
        </div>
      </div>
    </div>
  </div>
</section>


    );
};

export default IndexSectionHeaders3;
