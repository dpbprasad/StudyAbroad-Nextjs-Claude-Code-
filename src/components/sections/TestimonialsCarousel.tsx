"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Section } from '../ui/Section';
import { Eyebrow } from '../ui/Eyebrow';
import { Reveal } from '../ui/Reveal';
import { testimonials } from '../../lib/testimonials';

const controlBtn =
  'flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-colors duration-200 hover:border-brand-600 hover:bg-brand-50 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2';

const Stars: React.FC<{ count?: number; className?: string }> = ({ count = 5, className = '' }) => (
  <div className={`flex gap-0.5 ${className}`} aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className={`h-4 w-4 ${i < count ? 'text-gold-400' : 'text-slate-300'}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79L1.58 7.62l5.82-.85L10 1.5z" />
      </svg>
    ))}
  </div>
);

const TestimonialsCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () =>
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    const handleNext = () =>
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

    return (
        <Section bg="white">
            <Reveal className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
                <Eyebrow className="justify-center">Success Stories</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                    What our students say
                </h2>
            </Reveal>

            <div className="flex items-center gap-4 lg:gap-6">
                <button onClick={handlePrev} className={controlBtn} aria-label="Previous testimonial">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="w-full overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {testimonials.map((t, idx) => (
                            <div
                                key={idx}
                                className="w-full flex-shrink-0 px-1"
                                aria-hidden={idx !== currentIndex}
                                inert={idx !== currentIndex ? true : undefined}
                            >
                                <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-[2fr_3fr] lg:gap-14">
                                    {/* 1:1 student image */}
                                    <div className="mx-auto w-full max-w-xs lg:max-w-none">
                                        <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-card-lg">
                                            <img src={t.image} alt={t.name} className="h-full w-full object-cover" />
                                        </div>
                                    </div>

                                    {/* Quote + student */}
                                    <div className="text-center lg:text-left">
                                        <blockquote className="line-clamp-6 text-lg leading-relaxed text-slate-700 md:text-xl">
                                            {t.text}
                                        </blockquote>
                                        {t.text.length > 300 && (
                                            <Link
                                                href="/stories"
                                                className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                                            >
                                                Read more
                                                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        )}
                                        <Stars className="mt-6 justify-center lg:justify-start" />
                                        <div className="mt-4">
                                            <p className="text-xl font-semibold text-slate-900">{t.name}</p>
                                            <p className="text-sm font-medium text-brand-600">{t.program}</p>
                                            {t.university && <p className="text-sm text-slate-600">{t.university}</p>}
                                            <p className="mt-0.5 text-xs text-slate-500">{[t.country, t.year].filter(Boolean).join(' • ')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={handleNext} className={controlBtn} aria-label="Next testimonial">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </Section>
    );
};

export default TestimonialsCarousel;
