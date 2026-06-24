"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

interface Article {
    id: string;
    date: string;
    title: string;
    desc: string;
    image: string;
    category: string;
}

const articlesData: Article[] = [
    {
        id: "accommodation",
        date: "11 Jun 2026",
        title: "Accommodation Support",
        desc: "Discover safe, affordable, and conveniently located student housing with Study Abroad (Pvt) Ltd. Our accommodation services connect you with trusted partners and university housing to ensure a comfortable transition.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxfHx0ZWNofGVufDB8fHx8MTc0ODkzNjgyOHww&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Accommodation"
    },
    {
        id: "life-abroad",
        date: "10 Jun 2026",
        title: "Life Abroad",
        desc: "Embrace the adventure of study abroad. Learn how to handle daily responsibilities, overcome culture shock, build international friendships, and navigate university orientations to feel right at home.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwyfHx0ZWNofGVufDB8fHx8MTc0ODkzNjgyOHww&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Life Abroad"
    }
];

const months: { [key: string]: number } = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
};
const parseDate = (dStr: string) => {
    const [day, mon, year] = dStr.split(' ');
    return new Date(parseInt(year), months[mon], parseInt(day)).getTime();
};

const ResourcesSectionBlog3: React.FC = () => {
    const [visibleCount, setVisibleCount] = useState(6);
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const categories = ['All', 'Accommodation', 'Life Abroad'];

    const filteredArticles = activeCategory === 'All'
        ? articlesData
        : articlesData.filter((a) => a.category === activeCategory);

    const sortedArticles = [...filteredArticles].sort((a, b) => {
        const timeA = parseDate(a.date);
        const timeB = parseDate(b.date);
        return sortOrder === 'newest' ? timeB - timeA : timeA - timeB;
    });

    return (
        <Section bg="white">
            {/* Filter + sort */}
            <div className="mb-10 flex flex-col justify-between gap-6 border-b border-slate-200 pb-6 lg:flex-row lg:items-center">
                <div className="flex flex-1 flex-wrap gap-2.5">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
                            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors duration-200 ${
                                activeCategory === cat
                                    ? 'border-brand-600 bg-brand-600 text-white'
                                    : 'border-slate-300 text-slate-600 hover:border-brand-600 hover:text-brand-700'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="relative shrink-0">
                    <button
                        onClick={() => setIsDropdownOpen((o) => !o)}
                        className="flex w-36 items-center justify-between rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-600 transition-colors hover:border-brand-600 hover:text-brand-700"
                    >
                        <span>Sort: {sortOrder === 'newest' ? 'Newest' : 'Oldest'}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {isDropdownOpen && (
                        <>
                            <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)} />
                            <div className="absolute right-0 z-20 mt-2 w-40 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card-lg">
                                {(['newest', 'oldest'] as const).map((order) => (
                                    <button
                                        key={order}
                                        onClick={() => { setSortOrder(order); setIsDropdownOpen(false); }}
                                        className="block w-full px-4 py-2.5 text-left text-xs text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand-700"
                                    >
                                        {order === 'newest' ? 'Newest First' : 'Oldest First'}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Article grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {sortedArticles.slice(0, visibleCount).map((article, i) => (
                    <Reveal key={article.id} delay={i * 70} className="h-full">
                    <Link
                        href={`/resources-details?article=${article.id}`}
                        className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-200 transition duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card-md"
                    >
                        <div className="aspect-[16/9] overflow-hidden">
                            <img src={article.image} alt={article.title} className="h-full w-full object-cover transition duration-500 ease-smooth group-hover:scale-105" />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <div className="mb-2 flex items-center justify-between gap-2">
                                <span className="text-xs font-medium text-slate-500">{article.date}</span>
                                <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand-700">
                                    {article.category}
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 transition-colors group-hover:text-brand-700">{article.title}</h3>
                            <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-slate-600">{article.desc}</p>
                            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                                Read more
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </div>
                    </Link>
                    </Reveal>
                ))}
            </div>

            {visibleCount < sortedArticles.length && (
                <div className="mt-12 text-center">
                    <Button onClick={() => setVisibleCount((p) => p + 3)} variant="secondary">Load More</Button>
                </div>
            )}
        </Section>
    );
};

export default ResourcesSectionBlog3;
