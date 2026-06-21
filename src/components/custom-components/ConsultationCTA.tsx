import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

interface ConsultationCTAProps {
    title?: string;
    description?: string;
}

const ConsultationCTA: React.FC<ConsultationCTAProps> = ({
    title = "Ready to Study Abroad?",
    description = "Connect with Sri Lanka's top international education consultants. Since 2007, Study Abroad (Pvt) Ltd has helped thousands of students secure admissions and visa approvals for top global universities."
}) => {
    return (
        <div className="relative overflow-hidden rounded-3xl bg-brand-900 px-8 py-12 lg:px-12 lg:py-14">
            {/* subtle decorative glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-600/25 blur-3xl" aria-hidden="true" />
            <div className="relative max-w-2xl">
                <h3 className="font-display text-2xl font-semibold leading-tight text-white lg:text-3xl">
                    {title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-300">
                    {description}
                </p>
                <div className="mt-7 flex flex-wrap gap-4">
                    <Button href="/contact">Schedule a Free Consultation</Button>
                    <Link
                        href="/stories"
                        className="inline-flex h-11 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
                    >
                        Success Stories
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ConsultationCTA;
