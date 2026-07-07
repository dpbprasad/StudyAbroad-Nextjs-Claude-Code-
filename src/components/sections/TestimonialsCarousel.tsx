"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Section } from '../ui/Section';
import { Eyebrow } from '../ui/Eyebrow';
import { Reveal } from '../ui/Reveal';
import { testimonials } from '../../lib/testimonials';
import { useSwipe } from '../../lib/useSwipe';

const controlBtn =
  'flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-colors duration-200 hover:border-brand-600 hover:bg-brand-50 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2';

const TestimonialsCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () =>
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    const handleNext = () =>
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

    const swipe = useSwipe(handleNext, handlePrev);

    return (
        <Section bg="white">
            <Reveal className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
                <Eyebrow className="justify-center">Success Stories</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                    What our students say
                </h2>
            </Reveal>

            <div className="flex items-center gap-4 lg:gap-6">
                <button onClick={handlePrev} className={`${controlBtn} hidden md:flex`} aria-label="Previous testimonial">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="w-full select-none overflow-hidden" {...swipe}>
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {testimonials.map((t, idx) => (
                            <div
                                key={idx}
                                className="w-full flex-shrink-0 px-1"
                                aria-hidden={idx !== currentIndex}
                                inert={idx !== currentIndex ? true : undefined}
                            >
                                <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-[2fr_3fr] lg:gap-14">
                                    {/* 1:1 student image — smaller on mobile (~220px) */}
                                    <div className="mx-auto w-full max-w-[220px] lg:max-w-none">
                                        <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-[0_2px_16px_rgba(15,23,42,0.08)]">
                                            <img src={t.image} alt={t.name} className="h-full w-full object-cover" />
                                        </div>
                                    </div>

                                    {/* Quote + student */}
                                    <div className="text-center lg:text-left">
                                        <blockquote className="line-clamp-[8] text-base leading-relaxed text-slate-700 md:line-clamp-[10] md:text-lg">
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
                                        {/* Program, university and star rating are intentionally
                                            not shown here (client preference). The fields remain in
                                            the data — they still render on the Stories page cards. */}
                                        <div className="mt-6">
                                            <p className="text-xl font-semibold text-slate-900">{t.name}</p>
                                            <p className="mt-0.5 text-xs text-slate-500">{[t.country, t.year].filter(Boolean).join(' • ')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={handleNext} className={`${controlBtn} hidden md:flex`} aria-label="Next testimonial">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Dynamic sliding dots (mobile only): active centered + wider,
                neighbours shrink and fade; strip slides to keep the active
                centred. Matches the Destinations / Recent Articles carousels. */}
            {(() => {
                const len = testimonials.length;
                const active = currentIndex;
                const SLOT = 18;
                const VIEW = SLOT * 5;
                const total = SLOT * len;
                const shift = Math.max(Math.min(0, VIEW - total), Math.min(0, VIEW / 2 - (active * SLOT + SLOT / 2)));
                return (
                    <div className="mt-8 flex justify-center md:hidden">
                        <div className="overflow-hidden" style={{ width: Math.min(VIEW, total) }}>
                            <div
                                className="flex transition-transform duration-300 ease-out"
                                style={{ transform: `translateX(${shift}px)` }}
                            >
                                {testimonials.map((_, i) => {
                                    const d = Math.abs(i - active);
                                    const isActive = i === active;
                                    const dot = isActive
                                        ? 'h-1.5 w-4 bg-brand-600'
                                        : d === 1
                                        ? 'h-1.5 w-1.5 bg-slate-400'
                                        : d === 2
                                        ? 'h-1 w-1 bg-slate-300'
                                        : 'h-1 w-1 bg-slate-300 opacity-40';
                                    return (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentIndex(i)}
                                            aria-label={`Go to testimonial ${i + 1}`}
                                            aria-current={isActive ? 'true' : undefined}
                                            className="flex h-6 shrink-0 items-center justify-center"
                                            style={{ width: SLOT }}
                                        >
                                            <span className={`rounded-full transition-all duration-300 ${dot}`} />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            })()}
        </Section>
    );
};

export default TestimonialsCarousel;
