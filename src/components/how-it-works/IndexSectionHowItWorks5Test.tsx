import React from 'react';
import { Section } from '../ui/Section';
import { Eyebrow } from '../ui/Eyebrow';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';

interface IndexSectionHowItWorks5Props {
    tagline?: string;
}

const stepsData = [
    {
        num: 1,
        title: "Free Consultation & Profile Evaluation",
        desc: "We begin by understanding your academic goals, financial budget, and admission eligibility."
    },
    {
        num: 2,
        title: "Course & University Selection",
        desc: "We shortlist the best-fit universities and destination countries for your profile."
    },
    {
        num: 3,
        title: "Preparation & Submission",
        desc: "We manage your application submission, document checklists, and Statement of Purpose (SOP) styling."
    },
    {
        num: 4,
        title: "Offer Letter & Acceptance",
        desc: "We secure your university offer letters and help you select the absolute best academic option."
    },
    {
        num: 5,
        title: "Visa & Financial Guidance",
        desc: "We guide you through the student visa filing, financial proof audits, and embassy compliance."
    },
    {
        num: 6,
        title: "Pre-Departure & Travel Support",
        desc: "We coordinate local student accommodation, travel logistics, and final orientation briefings."
    }
];

const IndexSectionHowItWorks5Test: React.FC<IndexSectionHowItWorks5Props> = ({ tagline = "How It Works" }) => {
    return (
        <Section bg="white">
            <Reveal className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
                <Eyebrow className="justify-center">{tagline}</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                    Our Step-by-Step Consultation Process
                </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {stepsData.map((step, i) => (
                    <Reveal key={step.num} delay={i * 70} className="h-full">
                    <Card className="h-full">
                        <div className="flex items-start gap-4">
                            <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-base font-semibold text-white transition-transform duration-200 group-hover:scale-110">
                                {step.num}
                            </div>
                            <div>
                                <h3 className="mb-1.5 text-lg font-semibold text-slate-900 transition-colors group-hover:text-brand-700">
                                    {step.title}
                                </h3>
                                <p className="text-[15px] leading-relaxed text-slate-600">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    </Card>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
};

export default IndexSectionHowItWorks5Test;
