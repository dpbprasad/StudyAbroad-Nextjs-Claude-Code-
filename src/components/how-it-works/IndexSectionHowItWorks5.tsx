interface IndexSectionHowItWorks5Props {
    tagline?: string;
}

const IndexSectionHowItWorks5: React.FC<IndexSectionHowItWorks5Props> = ({ tagline = "How It Works" }) => {
    return (
        <section className="py-20 lg:py-24 bg-transparent">
  <div className="container px-4 mx-auto">
    {/* Top Row: Centered Hero Content */}
    <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
      <span className="text-sm text-[#0FA3A3] font-semibold tracking-wider uppercase">{tagline}</span>
      <h2 className="mb-4 mt-4 text-3xl md:text-4xl lg:text-5xl leading-tight font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">Our Step-by-Step Consultation Process</h2>
    </div>
    {/* Bottom Row: Features Grid with Headings centered */}
    <div className="flex flex-wrap justify-center">
      {/* Row 1 / Col 1 */}
      <div className="w-full md:w-1/2 lg:w-1/3 py-8 md:pr-8 md:pl-0 lg:pr-8 lg:pl-0 border-b md:border-b lg:border-b-0 border-[#0FA3A3] flex justify-center relative">
        <div className="flex items-start max-w-xs w-full">
          <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 bg-[#0FA3A3] text-white rounded-full font-medium text-lg hover:bg-[#0d8f8f] transition-colors duration-200">1</span>
          <div className="px-4">
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">Free Consultation &amp; Profile Evaluation</h3>
            <p className="text-lg text-neutral-300 leading-relaxed">Understand student goals, budget, and eligibility</p>
          </div>
        </div>
        {/* Floating Vertical Line (gap at intersection) */}
        <div className="absolute right-0 top-8 bottom-8 w-px bg-[#0FA3A3] hidden md:block" />
        {/* Floating Horizontal Line (gap at intersection, desktop only) */}
        <div className="absolute bottom-0 left-8 right-8 h-px bg-[#0FA3A3] hidden lg:block" />
      </div>
      {/* Row 1 / Col 2 */}
      <div className="w-full md:w-1/2 lg:w-1/3 py-8 md:pl-8 md:pr-0 lg:pl-8 lg:pr-8 border-b md:border-b lg:border-b-0 border-[#0FA3A3] flex justify-center relative">
        <div className="flex items-start max-w-xs w-full">
          <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 bg-[#0FA3A3] text-white rounded-full font-medium text-lg hover:bg-[#0d8f8f] transition-colors duration-200">2</span>
          <div className="px-4">
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">Course &amp; University Selection</h3>
            <p className="text-lg text-neutral-300 leading-relaxed">Shortlist best-fit universities and countries</p>
          </div>
        </div>
        {/* Floating Vertical Line (gap at intersection, desktop only) */}
        <div className="absolute right-0 top-8 bottom-8 w-px bg-[#0FA3A3] hidden lg:block" />
        {/* Floating Horizontal Line (gap at intersection, desktop only) */}
        <div className="absolute bottom-0 left-8 right-8 h-px bg-[#0FA3A3] hidden lg:block" />
      </div>
      {/* Row 1 / Col 3 (on lg) | Row 2 / Col 1 (on md) */}
      <div className="w-full md:w-1/2 lg:w-1/3 py-8 md:pr-8 md:pl-0 lg:pl-8 lg:pr-0 border-b md:border-b lg:border-b-0 border-[#0FA3A3] flex justify-center relative">
        <div className="flex items-start max-w-xs w-full">
          <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 bg-[#0FA3A3] text-white rounded-full font-medium text-lg hover:bg-[#0d8f8f] transition-colors duration-200">3</span>
          <div className="px-4">
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">Application Preparation &amp; Submission</h3>
            <p className="text-lg text-neutral-300 leading-relaxed">Documents, SOP, and application handling</p>
          </div>
        </div>
        {/* Floating Vertical Line (gap at intersection, tablet only) */}
        <div className="absolute right-0 top-8 bottom-8 w-px bg-[#0FA3A3] hidden md:block lg:hidden" />
        {/* Floating Horizontal Line (gap at intersection, desktop only) */}
        <div className="absolute bottom-0 left-8 right-8 h-px bg-[#0FA3A3] hidden lg:block" />
      </div>

      {/* Row 2 / Col 1 (on lg) | Row 2 / Col 2 (on md) */}
      <div className="w-full md:w-1/2 lg:w-1/3 py-8 md:pl-8 md:pr-0 lg:pr-8 lg:pl-0 border-b md:border-b lg:border-b-0 border-[#0FA3A3] flex justify-center relative">
        <div className="flex items-start max-w-xs w-full">
          <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 bg-[#0FA3A3] text-white rounded-full font-medium text-lg hover:bg-[#0d8f8f] transition-colors duration-200">4</span>
          <div className="px-4">
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">Offer Letter &amp; Acceptance</h3>
            <p className="text-lg text-neutral-300 leading-relaxed">Receive offers and choose the best option</p>
          </div>
        </div>
        {/* Floating Vertical Line (gap at intersection, desktop only) */}
        <div className="absolute right-0 top-8 bottom-8 w-px bg-[#0FA3A3] hidden lg:block" />
      </div>
      {/* Row 2 / Col 2 (on lg) | Row 3 / Col 1 (on md) */}
      <div className="w-full md:w-1/2 lg:w-1/3 py-8 md:pr-8 md:pl-0 lg:pl-8 lg:pr-8 border-b md:border-b-0 border-[#0FA3A3] flex justify-center relative">
        <div className="flex items-start max-w-xs w-full">
          <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 bg-[#0FA3A3] text-white rounded-full font-medium text-lg hover:bg-[#0d8f8f] transition-colors duration-200">5</span>
          <div className="px-4">
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">Visa &amp; Financial Guidance</h3>
            <p className="text-lg text-neutral-300 leading-relaxed">Visa filing, funds, scholarships, compliance</p>
          </div>
        </div>
        {/* Floating Vertical Line (gap at intersection) */}
        <div className="absolute right-0 top-8 bottom-8 w-px bg-[#0FA3A3] hidden md:block" />
      </div>
      {/* Row 2 / Col 3 (on lg) | Row 3 / Col 2 (on md) */}
      <div className="w-full md:w-1/2 lg:w-1/3 py-8 md:pl-8 md:pr-0 lg:pl-8 lg:pr-0 border-b-0 md:border-b-0 border-[#0FA3A3] flex justify-center relative">
        <div className="flex items-start max-w-xs w-full">
          <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 bg-[#0FA3A3] text-white rounded-full font-medium text-lg hover:bg-[#0d8f8f] transition-colors duration-200">6</span>
          <div className="px-4">
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">Pre-Departure &amp; Travel Support</h3>
            <p className="text-lg text-neutral-300 leading-relaxed">Accommodation, travel, final briefings</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default IndexSectionHowItWorks5;