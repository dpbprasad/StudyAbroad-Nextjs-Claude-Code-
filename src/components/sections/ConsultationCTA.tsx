import React from 'react';
import { Button } from '../ui/Button';

interface ConsultationCTAProps {
    title?: string;
    description?: string;
}

const ConsultationCTA: React.FC<ConsultationCTAProps> = ({
    title = "Ready to start your journey?",
    description = "From choosing the right university to securing your visa and settling in abroad, we handle every step — so you can focus on your future with confidence.",
}) => {
    return (
        <div className="rounded-3xl bg-brand-50 px-6 py-14 text-center ring-1 ring-brand-100 sm:px-10 lg:py-16">
            <div className="mx-auto max-w-2xl">
                <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
                    {title}
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                    {description}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button href="/contact">Book a Free Consultation</Button>
                    <Button href="/stories" variant="secondary">Success Stories</Button>
                </div>
            </div>
        </div>
    );
};

export default ConsultationCTA;
