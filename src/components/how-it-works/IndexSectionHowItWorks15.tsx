import React from 'react';

interface IndexSectionHowItWorks15Props {
    tagline?: string;
}

const IndexSectionHowItWorks15: React.FC<IndexSectionHowItWorks15Props> = ({ tagline = "Our Services" }) => {
    return (
        <section className="relative py-20 lg:py-24 bg-transparent border-t border-b border-[#0FA3A3] overflow-hidden">
  <div className="container px-4 mx-auto">
    <div className="max-w-lg lg:max-w-2xl mx-auto mb-12 lg:mb-16 text-center">
      <span className="block mb-2 text-sm font-semibold text-[#0FA3A3] uppercase tracking-wider">{tagline}</span>
      <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl leading-tight font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-200">Outstanding Study Abroad &amp; Visa Services</h2>
    </div>
    
    <div className="flex flex-wrap">
      
      {/* Service 1 */}
      <div className="w-full md:w-1/2 lg:w-1/3 pt-0 pb-10 px-8 flex flex-col relative text-center">
        <h3 className="mb-4 text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-200">Academic &amp; Career Counseling</h3>
        <p className="text-slate-200 leading-relaxed text-sm flex-1">Identify your optimal academic pathway. We assess your background and guide you toward programs that align with your long-term career goals.</p>
        
        {/* Tablet Dividers (2-column grid) */}
        <div className="absolute right-0 top-8 bottom-8 w-px bg-[#0FA3A3] hidden md:block lg:hidden" />
        <div className="absolute bottom-0 left-8 right-8 h-px bg-[#0FA3A3] hidden md:block lg:hidden" />
        {/* Desktop Dividers (3-column grid) */}
        <div className="absolute right-0 top-8 bottom-8 w-px bg-[#0FA3A3] hidden lg:block" />
        <div className="absolute bottom-0 left-8 right-8 h-px bg-[#0FA3A3] hidden lg:block" />
      </div>

      {/* Service 2 */}
      <div className="w-full md:w-1/2 lg:w-1/3 pt-10 pb-10 md:pt-0 md:pb-10 px-8 flex flex-col relative text-center">
        <h3 className="mb-4 text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-200">University Matching &amp; Admissions</h3>
        <p className="text-slate-200 leading-relaxed text-sm flex-1">We manage the entire university admissions cycle, advocating on your behalf to secure prompt offer letters from accredited institutions.</p>
        
        {/* Tablet Dividers (2-column grid) */}
        <div className="absolute bottom-0 left-8 right-8 h-px bg-[#0FA3A3] hidden md:block lg:hidden" />
        {/* Desktop Dividers (3-column grid) */}
        <div className="absolute right-0 top-8 bottom-8 w-px bg-[#0FA3A3] hidden lg:block" />
        <div className="absolute bottom-0 left-8 right-8 h-px bg-[#0FA3A3] hidden lg:block" />
      </div>

      {/* Service 3 */}
      <div className="w-full md:w-1/2 lg:w-1/3 py-10 lg:pt-0 lg:pb-10 px-8 flex flex-col relative text-center">
        <h3 className="mb-4 text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-200">Immigration &amp; Visa Compliance</h3>
        <p className="text-slate-200 leading-relaxed text-sm flex-1">Receive step-by-step documentation audits. We ensure your financial portfolios and application files fully satisfy national embassy requirements.</p>
        
        {/* Tablet Dividers (2-column grid) */}
        <div className="absolute right-0 top-8 bottom-8 w-px bg-[#0FA3A3] hidden md:block lg:hidden" />
        <div className="absolute bottom-0 left-8 right-8 h-px bg-[#0FA3A3] hidden md:block lg:hidden" />
        {/* Desktop Dividers (3-column grid) */}
        <div className="absolute bottom-0 left-8 right-8 h-px bg-[#0FA3A3] hidden lg:block" />
      </div>

      {/* Service 4 */}
      <div className="w-full md:w-1/2 lg:w-1/3 py-10 px-8 flex flex-col relative text-center">
        <h3 className="mb-4 text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-200">Visa Interview Simulation</h3>
        <p className="text-slate-200 leading-relaxed text-sm flex-1">Build confidence through realistic mock interviews. We teach you how to respond to embassy queries professionally and transparently.</p>
        
        {/* Tablet Dividers (2-column grid) */}
        <div className="absolute bottom-0 left-8 right-8 h-px bg-[#0FA3A3] hidden md:block lg:hidden" />
        {/* Desktop Dividers (3-column grid) */}
        <div className="absolute right-0 top-8 bottom-8 w-px bg-[#0FA3A3] hidden lg:block" />
        <div className="absolute bottom-0 left-8 right-8 h-px bg-[#0FA3A3] hidden lg:block" />
      </div>

      {/* Service 5 */}
      <div className="w-full md:w-1/2 lg:w-1/3 py-10 px-8 flex flex-col relative text-center">
        <h3 className="mb-4 text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-200">Statement of Purpose (SOP) Guidance</h3>
        <p className="text-slate-200 leading-relaxed text-sm flex-1">Refine your personal statement. We advise on structure, tone, and formatting to present a compelling narrative to admissions committees.</p>
        
        {/* Tablet Dividers (2-column grid) */}
        <div className="absolute right-0 top-8 bottom-8 w-px bg-[#0FA3A3] hidden md:block lg:hidden" />
        <div className="absolute bottom-0 left-8 right-8 h-px bg-[#0FA3A3] hidden md:block lg:hidden" />
        {/* Desktop Dividers (3-column grid) */}
        <div className="absolute right-0 top-8 bottom-8 w-px bg-[#0FA3A3] hidden lg:block" />
        <div className="absolute bottom-0 left-8 right-8 h-px bg-[#0FA3A3] hidden lg:block" />
      </div>

      {/* Service 6 */}
      <div className="w-full md:w-1/2 lg:w-1/3 py-10 px-8 flex flex-col relative text-center">
        <h3 className="mb-4 text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-200">Financial &amp; Student Loan Guidance</h3>
        <p className="text-slate-200 leading-relaxed text-sm flex-1">Navigate funding structures with ease. We assist in formatting proof of funds and coordinating with leading local banks for student loan arrangements.</p>
        
        {/* Tablet Dividers (2-column grid) */}
        <div className="absolute bottom-0 left-8 right-8 h-px bg-[#0FA3A3] hidden md:block lg:hidden" />
        {/* Desktop Dividers (3-column grid) */}
        <div className="absolute bottom-0 left-8 right-8 h-px bg-[#0FA3A3] hidden lg:block" />
      </div>

      {/* Service 7 */}
      <div className="w-full md:w-1/2 lg:w-1/3 py-10 lg:pt-10 lg:pb-0 px-8 flex flex-col relative text-center">
        <h3 className="mb-4 text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-200">Accommodation &amp; Arrival Coordination</h3>
        <p className="text-slate-200 leading-relaxed text-sm flex-1">Settle into your new environment seamlessly. We assist in finding safe housing close to campus and coordinate airport pickup support.</p>
        
        {/* Tablet Dividers (2-column grid) */}
        <div className="absolute right-0 top-8 bottom-8 w-px bg-[#0FA3A3] hidden md:block lg:hidden" />
        <div className="absolute bottom-0 left-8 right-8 h-px bg-[#0FA3A3] hidden md:block lg:hidden" />
        {/* Desktop Dividers (3-column grid) */}
        <div className="absolute right-0 top-8 bottom-8 w-px bg-[#0FA3A3] hidden lg:block" />
      </div>

      {/* Service 8 */}
      <div className="w-full md:w-1/2 lg:w-1/3 py-10 lg:pt-10 lg:pb-0 px-8 flex flex-col relative text-center">
        <h3 className="mb-4 text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-200">Travel &amp; Student Airfare Support</h3>
        <p className="text-slate-200 leading-relaxed text-sm flex-1">Ensure a hassle-free departure. We coordinate travel dates and advise on student luggage allowances and optimal airfares.</p>
        
        {/* Tablet Dividers (2-column grid) */}
        <div className="absolute bottom-0 left-8 right-8 h-px bg-[#0FA3A3] hidden md:block lg:hidden" />
        {/* Desktop Dividers (3-column grid) */}
        <div className="absolute right-0 top-8 bottom-8 w-px bg-[#0FA3A3] hidden lg:block" />
      </div>

      {/* Service 9 */}
      <div className="w-full md:w-1/2 lg:w-1/3 pt-10 pb-0 px-8 flex flex-col relative text-center">
        <h3 className="mb-4 text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-200">Pre-Departure Orientation Seminars</h3>
        <p className="text-slate-200 leading-relaxed text-sm flex-1">Attend critical orientation briefings covering student work rights, local lifestyle details, banking setups, and cultural adaptions.</p>
        
        {/* Tablet Dividers (2-column grid) (no borders since 9 is last) */}
        {/* Desktop Dividers (3-column grid) (no borders since 9 is last) */}
      </div>

    </div>
  </div>
</section>
    );
};

export default IndexSectionHowItWorks15;