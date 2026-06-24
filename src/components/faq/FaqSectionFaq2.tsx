"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';

const faqLink = 'font-semibold text-brand-600 underline-offset-2 hover:underline';

const InlineCTA = ({ href, label }: { href: string; label: string }) => (
    <p className="mt-4">
        <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700">
            {label}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </Link>
    </p>
);

interface FaqItem {
    question: string;
    answer: React.ReactNode;
}

interface FaqCategories {
    [key: string]: FaqItem[];
}

const answerList = (items: React.ReactNode[]) => (
    <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-brand-400">
        {items.map((it, i) => (
            <li key={i}>{it}</li>
        ))}
    </ul>
);

const intakeRows: [string, string][] = [
    ['Australia', 'February (major), July (secondary), November (limited programs)'],
    ['Canada', 'September (Fall – major), January (Winter), May (Spring/Summer)'],
    ['New Zealand', 'February, July, September/November (selected programs)'],
    ['United Kingdom (UK)', 'September/October (major), January/February (limited), May (selected programs)'],
    ['United States (USA)', 'August/September (Fall – major), January (Spring), May/June (Summer – limited)'],
    ['Germany', 'October (Winter – major), April (Summer)'],
    ['Netherlands', 'September (major), February (limited)'],
    ['Sweden', 'August/September (Autumn – major), January (Spring)'],
    ['France', 'September/October (major), January/February (limited)'],
];

const faqData: FaqCategories = {
    General: [
        {
            question: "How long has Study Abroad (Pvt) Ltd been helping students study abroad?",
            answer: (
                <div className="space-y-3">
                    <p>Study Abroad (Pvt) Ltd is proud to be a trusted leader in the overseas education industry, with nearly 20 years of experience helping students pursue international education opportunities. Established in 2007, the company has built a strong reputation in student recruitment for leading foreign universities and colleges worldwide.</p>
                    <p>The foundation of Study Abroad is backed by the extensive experience of its Founder, who has been actively involved in the foreign education sector since 2000. Over the years, we have successfully guided thousands of students through university admissions, student visa applications, scholarship opportunities, and higher education pathways in countries such as Australia, the United Kingdom, Canada, New Zealand, Europe, and other popular study destinations.</p>
                    <p>With decades of industry expertise, Study Abroad continues to provide reliable, professional, and personalized guidance to students seeking quality higher education opportunities overseas.</p>
                </div>
            ),
        },
        {
            question: "What is Study Abroad (Pvt) Ltd?",
            answer: "Study Abroad (Pvt) Ltd is a trusted overseas education and higher education consultancy that helps students achieve their study abroad goals. We provide expert guidance on university admissions, application processing, student visas, documentation, and support before departure and after arrival.",
        },
        {
            question: "Which countries can I study in through Study Abroad (Pvt) Ltd?",
            answer: (
                <div>
                    <p>Study Abroad (Pvt) Ltd connects students with leading universities and higher education institutions in Australia, Canada, New Zealand, the United Kingdom (UK), the United States (USA), Germany, the Netherlands, Sweden, and France — helping them achieve their international education and study abroad goals.</p>
                    <InlineCTA href="/country-details?country=overview" label="Explore our destinations" />
                </div>
            ),
        },
        {
            question: "What services does Study Abroad (Pvt) Ltd provide for students seeking higher education abroad?",
            answer: (
                <div>
                    <p>Study Abroad (Pvt) Ltd offers comprehensive support for students pursuing higher education and international education opportunities overseas, including:</p>
                    {answerList([
                        'Personalized Student Counselling',
                        'Course and University Selection with a technical evaluation of your background',
                        'Admission Documentation Support',
                        'Visa Documentation Assistance',
                        'Professional SOP Writing',
                        'University Applications and Admissions',
                        'Student Visa Preparation and Submission',
                        'Admission and Visa Interview Preparation',
                        'Pre-Departure Briefing',
                        'Post-Arrival Support',
                        'Accommodation and Travel Support',
                        'Student Insurance Assistance',
                        'Career Guidance',
                    ])}
                    <p className="mt-3">Whether you plan to study in Australia, Canada, the UK, New Zealand, Germany, Europe, or other popular destinations, Study Abroad (Pvt) Ltd is committed to supporting you throughout your overseas education journey.</p>
                    <InlineCTA href="/services" label="View all our services" />
                </div>
            ),
        },
    ],
    Admissions: [
        {
            question: "How do I start my study abroad application process?",
            answer: (
                <div>
                    <p>Getting started with your higher education journey abroad is simple. Follow these steps:</p>
                    {answerList([
                        <>Complete our <Link href="/contact" className={faqLink}>online contact form</Link> to begin your study abroad journey.</>,
                        <>Schedule a <Link href="/contact" className={faqLink}>free consultation</Link> with one of our experienced education counsellors.</>,
                        'Submit your academic documents for a profile evaluation and eligibility assessment.',
                        'Choose your course and university with expert guidance based on your academic background, career goals, and preferred study destination.',
                        'Proceed with university admission and student visa applications with comprehensive support from our team at every stage.',
                    ])}
                    <p className="mt-3">Our consultants will guide you throughout the entire process — from selecting the right university to securing your student visa and preparing for departure.</p>
                    <InlineCTA href="/contact" label="Start your application" />
                </div>
            ),
        },
        {
            question: "What are the available intakes for studying abroad?",
            answer: (
                <div>
                    <p>The main university intakes vary by country and institution. Below is a general guide to the most common intakes for international students:</p>
                    <div className="mt-4 overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="border-b border-slate-200 text-left">
                                    <th className="py-2 pr-4 font-semibold text-slate-900">Country</th>
                                    <th className="py-2 font-semibold text-slate-900">Main Intakes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {intakeRows.map(([country, intakes]) => (
                                    <tr key={country} className="border-b border-slate-100 align-top">
                                        <td className="whitespace-nowrap py-2 pr-4 font-medium text-slate-700">{country}</td>
                                        <td className="py-2 text-slate-600">{intakes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4">We recommend applying as early as possible to allow sufficient time for university admissions, student visa processing, accommodation arrangements, and travel planning. Our consultants will help you choose the most suitable intake based on your qualifications, course availability, and study abroad goals.</p>
                </div>
            ),
        },
    ],
    "Student Visas": [
        {
            question: "What visa support does Study Abroad (Pvt) Ltd provide for students planning to study abroad?",
            answer: (
                <div>
                    <p>Study Abroad (Pvt) Ltd provides comprehensive student visa support for overseas studies, including visa documentation guidance, application preparation, document verification, and visa submission assistance. We also offer personalized visa interview preparation, mock interviews, and expert advice to help students confidently navigate the visa process and improve their chances of a successful visa outcome.</p>
                    <InlineCTA href="/contact" label="Talk to a visa counsellor" />
                </div>
            ),
        },
        {
            question: "What documents do I need for a student visa application, and how does Study Abroad (Pvt) Ltd help?",
            answer: (
                <div>
                    <p>The documents required for a student visa application vary depending on your study destination and individual circumstances. Commonly required documents include:</p>
                    {answerList([
                        'University or college offer/admission letter',
                        'Academic transcripts and certificates',
                        'Valid passport',
                        'Birth certificate',
                        'Financial statements or proof of funds',
                        'English language test results (if applicable)',
                        'Other country-specific supporting documents',
                    ])}
                    <p className="mt-3">Our experienced visa consultants provide a personalized document checklist based on your chosen country and profile. We guide you through the entire documentation process, review all documents for accuracy and completeness, assist with preparing financial evidence, and help complete visa application forms correctly — and we provide visa interview preparation to help maximize your chances of a successful outcome.</p>
                    <InlineCTA href="/contact" label="Request your document checklist" />
                </div>
            ),
        },
    ],
};

const FaqSectionFaq2: React.FC = () => {
    const categories = Object.keys(faqData);
    const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setOpenIndex(null);
    };

    const toggleAccordion = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <Section bg="white" className="min-h-[60vh]">
            {/* Category filter */}
            <Reveal className="mx-auto mb-10 flex max-w-3xl flex-wrap justify-center gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
                            activeCategory === cat
                                ? 'border-brand-600 bg-brand-600 text-white'
                                : 'border-slate-300 bg-white text-slate-600 hover:border-brand-600 hover:text-brand-700'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </Reveal>

            {/* Accordion */}
            <Reveal>
            <ul className="mx-auto max-w-3xl space-y-3">
                {faqData[activeCategory].map((item, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                        <li key={idx} className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors hover:border-slate-300">
                            <button
                                onClick={() => toggleAccordion(idx)}
                                aria-expanded={isOpen}
                                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                            >
                                <span className={`text-base font-semibold transition-colors md:text-lg ${isOpen ? 'text-brand-700' : 'text-slate-900'}`}>
                                    {item.question}
                                </span>
                                <span className={`inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                                    isOpen ? 'rotate-180 border-brand-300 bg-brand-50 text-brand-600' : 'border-slate-200 text-slate-400'
                                }`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="px-5 pb-5 text-[15px] leading-relaxed text-slate-600 md:text-base">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            </Reveal>
        </Section>
    );
};

export default FaqSectionFaq2;
