"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Section } from '../ui/Section';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

interface Article {
    id: string;
    date: string;
    title: string;
    desc: string;
    image: string;
}

const articlesData: Article[] = [
    {
        id: "accommodation",
        date: "11 Jun 2026",
        title: "Accommodation Support",
        desc: "Discover safe, affordable, and conveniently located student housing with Study Abroad (Pvt) Ltd. Our accommodation services connect you with trusted partners and university housing for a comfortable transition.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxfHx0ZWNofGVufDB8fHx8MTc0ODkzNjgyOHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        id: "life-abroad",
        date: "10 Jun 2026",
        title: "Life Abroad",
        desc: "Embrace the adventure of study abroad. Learn how to handle daily responsibilities, overcome culture shock, build international friendships, and navigate university orientations to feel right at home.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwyfHx0ZWNofGVufDB8fHx8MTc0ODkzNjgyOHww&ixlib=rb-4.1.0&q=80&w=1080"
    }
];

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
    const isCarousel = mounted && articlesData.length > visibleCards;

    const extendedData = [
        ...articlesData.slice(-visibleCards),
        ...articlesData,
        ...articlesData.slice(0, visibleCards),
    ];

    const handleNext = () => transitionEnabled && setCurrentIndex((p) => p + 1);
    const handlePrev = () => transitionEnabled && setCurrentIndex((p) => p - 1);

    // Seamless circular boundary jump
    useEffect(() => {
        if (!isCarousel) return;
        if (currentIndex >= articlesData.length + visibleCards) {
            const t = setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(visibleCards);
            }, 500);
            return () => clearTimeout(t);
        }
        if (currentIndex <= 0) {
            const t = setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(articlesData.length);
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
                <div className="flex items-center gap-3">
                    <Button href="/resources" variant="secondary">
                        All articles
                    </Button>
                    {isCarousel && (
                        <>
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
                        </>
                    )}
                </div>
            </div>

            {/* Carousel (when list overflows) or static grid */}
            {isCarousel ? (
                <div className="-mx-4 overflow-hidden py-1">
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
                    {articlesData.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            )}
        </Section>
    );
};

export default RecentArticles;
