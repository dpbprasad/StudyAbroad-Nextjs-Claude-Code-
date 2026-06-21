import React from 'react';

interface IndexSectionHowItWorks15Props {
    tagline?: string;
}

const servicesData = [
    {
        title: "Academic & Career Counseling",
        desc: "Identify your optimal academic pathway. We assess your background and guide you toward programs that align with your long-term career goals.",
        features: ["Course & Career Sourcing", "Direct Academic Assessment", "Pathway Matching"]
    },
    {
        title: "University Matching & Admissions",
        desc: "We manage the entire university admissions cycle, advocating on your behalf to secure prompt offer letters from accredited institutions.",
        features: ["Partner Institution Network", "Fast-track Offers Sourcing", "Direct Application Processing"]
    },
    {
        title: "Immigration & Visa Compliance",
        desc: "Receive step-by-step documentation audits. We ensure your financial portfolios and application files fully satisfy national embassy requirements.",
        features: ["100% Director-Led Audits", "Financial Portfolio Review", "Sponsor Documentation Prep"]
    },
    {
        title: "Visa Interview Simulation",
        desc: "Build confidence through realistic mock interviews. We teach you how to respond to embassy queries professionally and transparently.",
        features: ["One-on-One Mock Scenarios", "Common Embassy Q&A Prep", "Feedback & Confidence Coaching"]
    },
    {
        title: "Statement of Purpose Guidance",
        desc: "Refine your personal statement. We advise on structure, tone, and formatting to present a compelling narrative to admissions committees.",
        features: ["Structure & Flow Advising", "Academic Narrative Tuning", "Grammar & Formatting Audits"]
    },
    {
        title: "Financial & Student Loan Guidance",
        desc: "Navigate funding structures with ease. We assist in formatting proof of funds and coordinating with leading local banks for student loan arrangements.",
        features: ["Proof of Funds Verification", "Local Bank Coordination", "Sponsorship Formatting"]
    },
    {
        title: "Accommodation & Arrival Support",
        desc: "Settle into your new environment seamlessly. We assist in finding safe housing close to campus and coordinate airport pickup support.",
        features: ["On-Campus Dorm Placement", "Private Student Housing Sourcing", "Airport Pickup Coordination"]
    },
    {
        title: "Travel & Student Airfare Support",
        desc: "Ensure a hassle-free departure. We coordinate travel dates and advise on student luggage allowances and optimal airfares.",
        features: ["Student Luggage Allowance Guides", "Optimal Airfare Sourcing", "Travel Group Coordination"]
    },
    {
        title: "Pre-Departure Orientation Seminars",
        desc: "Attend critical orientation briefings covering student work rights, local lifestyle details, banking setups, and cultural adaptions.",
        features: ["Work Rights & Tax Briefings", "SIM Card & Local Banking Setups", "Cultural Adjustment Guides"]
    }
];

const IndexSectionHowItWorks15Test: React.FC<IndexSectionHowItWorks15Props> = ({ tagline = "test section" }) => {
    return (
        <section className="relative py-20 lg:py-24 bg-transparent border-t border-b border-[#0FA3A3] overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="max-w-lg lg:max-w-2xl mx-auto mb-12 lg:mb-16 text-center">
                    <span className="block mb-2 text-sm font-semibold text-[#0FA3A3] uppercase tracking-wider">{tagline}</span>
                    <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl leading-tight font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-200">Outstanding Study Abroad &amp; Visa Services</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {servicesData.map((service, index) => (
                        <div 
                            key={index}
                            className="group relative flex flex-col p-6 lg:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 bg-white/95 backdrop-blur-xl border border-white/60 shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:bg-white"
                        >
                            <div className="flex items-start w-full h-full">
                                {/* SVG Icon Badge */}
                                <div className="flex-shrink-0 mr-4 text-[#0FA3A3] mt-[3px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 48 48" fill="none">
                                        <path d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z" fill="currentColor" />
                                        <circle cx={24} cy={24} r="23.5" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </div>
                                
                                {/* Content */}
                                <div className="flex-1 text-left flex flex-col justify-between h-full">
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold text-[#0E2B5C] group-hover:text-[#0FA3A3] transition-all duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="leading-relaxed text-sm text-[#3E4D68] font-medium mb-4">
                                            {service.desc}
                                        </p>
                                    </div>
                                    
                                    {/* Sub-features checklist */}
                                    <div className="border-t border-[#0FA3A3]/10 pt-4 mt-auto">
                                        <ul className="space-y-1.5">
                                            {service.features.map((feat, idx) => (
                                                <li key={idx} className="flex items-center text-[12px] text-[#3E4D68] font-semibold">
                                                    <svg className="w-3.5 h-3.5 mr-2 text-[#0FA3A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndexSectionHowItWorks15Test;
