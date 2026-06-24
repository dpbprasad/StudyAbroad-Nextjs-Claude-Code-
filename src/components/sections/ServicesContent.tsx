import React from 'react';
import ConsultationCTA from './ConsultationCTA';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';

interface ServiceItem {
    id: string;
    title: string;
    desc: string;
    icon: React.ReactNode;
    features: string[];
}

const assessmentIncludes = [
    'Academic profile review',
    'Career goal evaluation',
    'Financial readiness check',
    'Destination and visa suitability screening',
];

const servicesData: ServiceItem[] = [
    {
        id: "counseling",
        title: "Academic & Career Counseling",
        desc: "We help students identify suitable academic pathways based on their qualifications, strengths, interests, and future career direction.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        features: ["Course guidance", "Academic pathway matching", "Career-focused study planning"]
    },
    {
        id: "matching",
        title: "University Matching & Admissions",
        desc: "We support students in selecting suitable institutions and managing the university application process with accuracy and care.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        features: ["Partner institution options", "Application preparation", "Offer letter follow-up"]
    },
    {
        id: "visa-compliance",
        title: "Immigration & Visa Guidance",
        desc: "We guide students through visa documentation requirements with a structured, compliance-focused approach.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        features: ["Document checklist guidance", "Financial document review", "Sponsor document preparation"]
    },
    {
        id: "interview",
        title: "Visa Interview Preparation",
        desc: "We help students prepare for embassy or visa-related interviews through practical guidance and confidence-building sessions.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        features: ["One-to-one mock interviews", "Common question preparation", "Professional response coaching"]
    },
    {
        id: "sop",
        title: "Statement of Purpose Guidance",
        desc: "We support students in preparing clear, structured, and relevant personal statements for admissions and visa purposes where required.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
        features: ["Structure and flow guidance", "Academic and career narrative support", "Grammar and formatting review"]
    },
    {
        id: "financial",
        title: "Financial & Student Loan Guidance",
        desc: "We assist students and families in understanding proof of funds requirements and preparing financial documents in line with destination and institution expectations.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        features: ["Proof of funds guidance", "Sponsorship document formatting", "Student loan coordination support"]
    },
    {
        id: "accommodation",
        title: "Accommodation & Arrival Support",
        desc: "We help students prepare for a smoother transition by providing guidance on accommodation options and arrival arrangements.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
        features: ["Student housing guidance", "Campus and private accommodation options", "Airport pickup coordination support"]
    },
    {
        id: "travel",
        title: "Travel & Student Airfare Support",
        desc: "We provide practical travel guidance to help students plan their departure with confidence.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
        ),
        features: ["Travel date coordination", "Student airfare guidance", "Luggage allowance information"]
    },
    {
        id: "orientation",
        title: "Pre-Departure Orientation",
        desc: "We prepare students for life abroad through essential guidance on study expectations, lifestyle, culture, and settling into a new country.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        features: ["Cultural orientation", "Banking and SIM setup guidance", "Student life and settlement preparation"]
    }
];

const Check = () => (
    <svg className="mr-2 h-3.5 w-3.5 flex-shrink-0 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
);

const ServicesContent: React.FC = () => {
    return (
        <Section bg="white">
            {/* Intro */}
            <Reveal className="mx-auto mb-12 max-w-5xl text-center lg:mb-14">
                <h2 className="font-display text-2xl font-medium leading-snug tracking-tight text-slate-900 md:text-3xl">
                    Comprehensive End-to-End Study Abroad Support
                </h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-slate-600">
                    <p>
                        At Study Abroad (Pvt) Ltd, every successful student journey begins with the right assessment. Before
                        onboarding, we provide a fully free in-house student assessment to evaluate academic background,
                        financial readiness, career goals, destination suitability, and visa compliance potential.
                    </p>
                    <p>
                        This careful assessment process, guided by our experience and expertise since 2007, helps us recommend
                        realistic study pathways and identify students who are well-prepared for international education. As a
                        result, our students are placed on suitable academic tracks, and our visa outcomes remain consistently
                        strong through proper guidance, documentation, and compliance-focused preparation.
                    </p>
                </div>
            </Reveal>

            {/* Featured: free in-house assessment */}
            <Reveal className="mb-12 overflow-hidden rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100 sm:p-8 lg:mb-14 lg:p-10">
                <span className="inline-flex items-center rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    Free
                </span>
                <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                    <div className="lg:max-w-md">
                        <h3 className="text-2xl font-semibold text-slate-900">In-House Student Assessment</h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                            We assess each student before onboarding to ensure the chosen study pathway is practical,
                            suitable, and aligned with their academic profile, financial capacity, and long-term goals.
                        </p>
                    </div>
                    <ul className="grid flex-1 gap-3 sm:grid-cols-2">
                        {assessmentIncludes.map((item) => (
                            <li key={item} className="flex items-center rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                                <Check />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </Reveal>

            {/* Service cards */}
            <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {servicesData.map((service, i) => (
                    <Reveal key={service.id} delay={i * 60} className="h-full">
                    <Card className="h-full">
                        <div id={service.id} className="flex h-full items-start gap-4">
                            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-transform duration-300 ease-smooth group-hover:scale-105">
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
                                                <Check />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Card>
                    </Reveal>
                ))}
            </div>

            <ConsultationCTA />
        </Section>
    );
};

export default ServicesContent;
