"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Section } from '../ui/Section';
import { Eyebrow } from '../ui/Eyebrow';
import { Reveal } from '../ui/Reveal';

import { articles, type Article } from '../../lib/articles';
import { useSwipe } from '../../lib/useSwipe';

const controlBtn =
    'flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-colors duration-200 hover:border-brand-600 hover:bg-brand-50 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2';

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
    <Link
        href={`/resources-details?article=${article.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-card-md"
    >
        <div className="aspect-[16/9] overflow-hidden">
            <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover transition duration-500 ease-smooth group-hover:scale-105"
            />
        </div>
        <div className="flex flex-1 flex-col p-6">
            <span className="text-xs font-medium text-slate-500">{article.date}</span>
            <h3 className="mt-2 text-xl font-semibold text-slate-900 transition-colors group-hover:text-brand-700">
                {article.title}
            </h3>
            <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-slate-600">{article.desc}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </span>
        </div>
    </Link>
);

const RecentArticles: React.FC = () => {
    const [visibleCards, setVisibleCards] = useState(2);
    const [mounted, setMounted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(2);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    useEffect(() => {
        setMounted(true);
        const handleResize = () => {
            const cards = window.innerWidth >= 768 ? 2 : 1;
            setVisibleCards(cards);
            setCurrentIndex(cards);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Carousel only when there are more articles than fit (e.g. backend grows the list)
    const isCarousel = mounted && articles.length > visibleCards;

    const extendedData = [
        ...articles.slice(-visibleCards),
        ...articles,
        ...articles.slice(0, visibleCards),
    ];

    const handleNext = () => transitionEnabled && setCurrentIndex((p) => p + 1);
    const handlePrev = () => transitionEnabled && setCurrentIndex((p) => p - 1);

    const swipe = useSwipe(handleNext, handlePrev);

    // Seamless circular boundary jump
    useEffect(() => {
        if (!isCarousel) return;
        if (currentIndex >= articles.length + visibleCards) {
            const t = setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(visibleCards);
            }, 500);
            return () => clearTimeout(t);
        }
        if (currentIndex <= 0) {
            const t = setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(articles.length);
            }, 500);
            return () => clearTimeout(t);
        }
    }, [currentIndex, visibleCards, isCarousel]);

    useEffect(() => {
        if (!transitionEnabled) {
            const t = setTimeout(() => setTransitionEnabled(true), 50);
            return () => clearTimeout(t);
        }
    }, [transitionEnabled]);

    return (
        <Section bg="white">
            {/* Header */}
            <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:mb-12">
                <Reveal className="max-w-xl">
                    <Eyebrow>Recent Articles</Eyebrow>
                    <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                        Useful Tips &amp; Resources
                    </h2>
                </Reveal>
                {/* Arrows are a desktop/tablet affordance; on mobile users swipe + use dots. */}
                {isCarousel && (
                    <div className="hidden items-center gap-3 md:flex">
                        <button onClick={handlePrev} className={controlBtn} aria-label="Previous article">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button onClick={handleNext} className={controlBtn} aria-label="Next article">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            {/* Carousel (when list overflows) or static grid */}
            {isCarousel ? (
                <div className="-mx-4 select-none overflow-hidden py-1" {...swipe}>
                    <div
                        className={`flex ${transitionEnabled ? 'transition-transform duration-500 ease-in-out' : 'transition-none'}`}
                        style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                    >
                        {extendedData.map((article, idx) => {
                            const visible = idx >= currentIndex && idx < currentIndex + visibleCards;
                            return (
                                <div
                                    key={idx}
                                    className="w-full flex-shrink-0 px-4 md:w-1/2"
                                    aria-hidden={!visible}
                                    inert={!visible ? true : undefined}
                                >
                                    <ArticleCard article={article} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    {articles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            )}

            {/* Dynamic sliding dots (mobile only, when the list overflows): active
                centered + wider, neighbours shrink and fade; strip slides to keep
                the active centred. Matches the Destinations carousel. */}
            {isCarousel && (() => {
                const len = articles.length;
                const active = ((currentIndex - visibleCards) % len + len) % len;
                const SLOT = 18;
                const VIEW = SLOT * 5;
                const total = SLOT * len;
                const shift = Math.max(Math.min(0, VIEW - total), Math.min(0, VIEW / 2 - (active * SLOT + SLOT / 2)));
                return (
                    <div className="mt-2 flex justify-center md:hidden">
                        <div className="overflow-hidden" style={{ width: Math.min(VIEW, total) }}>
                            <div
                                className="flex transition-transform duration-300 ease-out"
                                style={{ transform: `translateX(${shift}px)` }}
                            >
                                {articles.map((_, i) => {
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
                                            onClick={() => setCurrentIndex(i + visibleCards)}
                                            aria-label={`Go to article ${i + 1}`}
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

            {/* "See all" text link — replaces the old pill button. */}
            <div className="mt-10 flex justify-center">
                <Link
                    href="/resources"
                    className="group inline-flex items-center gap-2 text-base font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                    View all articles
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>
        </Section>
    );
};

export default RecentArticles;
