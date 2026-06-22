import React from 'react';
import ConsultationCTA from './ConsultationCTA';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

interface ServiceItem {
    id: string;
    title: string;
    desc: string;
    icon: React.ReactNode;
    features: string[];
}

const servicesData: ServiceItem[] = [
    {
        id: "counseling",
        title: "Academic & Career Counseling",
        desc: "Identify your optimal academic pathway. We assess your background and guide you toward programs that align with your long-term career goals.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        features: ["Course & Career Sourcing", "Direct Academic Assessment", "Pathway Matching"]
    },
    {
        id: "matching",
        title: "University Matching & Admissions",
        desc: "We manage the entire university admissions cycle, advocating on your behalf to secure prompt offer letters from accredited institutions.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        features: ["Partner Institution Network", "Fast-track Offers Sourcing", "Direct Application Processing"]
    },
    {
        id: "visa-compliance",
        title: "Immigration & Visa Compliance",
        desc: "Receive step-by-step documentation audits. We ensure your financial portfolios and application files fully satisfy national embassy requirements.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        features: ["100% Director-Led Audits", "Financial Portfolio Review", "Sponsor Documentation Prep"]
    },
    {
        id: "interview",
        title: "Visa Interview Simulation",
        desc: "Build confidence through realistic mock interviews. We teach you how to respond to embassy queries professionally and transparently.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        features: ["One-on-One Mock Scenarios", "Common Embassy Q&A Prep", "Feedback & Confidence Coaching"]
    },
    {
        id: "sop",
        title: "Statement of Purpose Guidance",
        desc: "Refine your personal statement. We advise on structure, tone, and formatting to present a compelling narrative to admissions committees.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
        features: ["Structure & Flow Advising", "Academic Narrative Tuning", "Grammar & Formatting Audits"]
    },
    {
        id: "financial",
        title: "Financial & Student Loan Guidance",
        desc: "Navigate funding structures with ease. We assist in formatting proof of funds and coordinating with leading local banks for student loan arrangements.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        features: ["Proof of Funds Verification", "Local Bank Coordination", "Sponsorship Formatting"]
    },
    {
        id: "accommodation",
        title: "Accommodation & Arrival Support",
        desc: "Settle into your new environment seamlessly. We assist in finding safe housing close to campus and coordinate airport pickup support.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
        features: ["On-Campus Dorm Placement", "Private Student Housing Sourcing", "Airport Pickup Coordination"]
    },
    {
        id: "travel",
        title: "Travel & Student Airfare Support",
        desc: "Ensure a hassle-free departure. We coordinate travel dates and advise on student luggage allowances and optimal airfares.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
        ),
        features: ["Student Luggage Allowance Guides", "Optimal Airfare Sourcing", "Travel Group Coordination"]
    },
    {
        id: "orientation",
        title: "Pre-Departure Orientation Seminars",
        desc: "Attend critical orientation briefings covering student work rights, local lifestyle details, banking setups, and cultural adaptions.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        features: ["Work Rights & Tax Briefings", "SIM Card & Local Banking Setups", "Cultural Adjustment Guides"]
    }
];

const ServicesSectionCustomComponents: React.FC = () => {
    return (
        <Section bg="white">
            {/* Intro */}
            <div className="mx-auto mb-14 max-w-4xl text-center lg:mb-16">
                <h2 className="font-display text-2xl font-medium leading-snug tracking-tight text-slate-900 md:text-3xl">
                    Comprehensive, end-to-end support
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                    Study Abroad (Pvt) Ltd guides students with a focus on compliance and student well-being. Since 2007,
                    we have supported students through every milestone of their academic transition.
                </p>
            </div>

            {/* Service cards */}
            <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {servicesData.map((service) => (
                    <Card key={service.id}>
                        <div id={service.id} className="flex h-full items-start gap-4">
                            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-105">
                                {React.isValidElement(service.icon)
                                    ? React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: 'h-6 w-6' })
                                    : service.icon}
                            </span>
                            <div className="flex h-full flex-1 flex-col">
                                <h3 className="mb-2 text-lg font-semibold text-slate-900 transition-colors group-hover:text-brand-700">
                                    {service.title}
                                </h3>
                                <p className="text-[15px] leading-relaxed text-slate-600">{service.desc}</p>
                                <div className="mt-auto border-t border-slate-200 pt-4">
                                    <ul className="space-y-1.5">
                                        {service.features.map((feat, idx) => (
                                            <li key={idx} className="flex items-center text-[13px] font-medium text-slate-600">
                                                <svg className="mr-2 h-3.5 w-3.5 flex-shrink-0 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <ConsultationCTA />
        </Section>
    );
};

export default ServicesSectionCustomComponents;
