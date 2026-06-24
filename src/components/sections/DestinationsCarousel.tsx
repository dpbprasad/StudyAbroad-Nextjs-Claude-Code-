"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Section } from '../ui/Section';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

interface Destination {
  country: string;
  image: string;
  description: string;
}

const destinationsData: Destination[] = [
  {
    country: "NEW ZEALAND",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    description: "Combine cutting-edge research, hands-on learning, and a welcoming cultural environment in one of the safest nations."
  },
  {
    country: "CANADA",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    description: "Benefit from world-class co-op education systems, diverse communities, and robust post-study work opportunities."
  },
  {
    country: "UNITED KINGDOM",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80",
    description: "Step into historical academic excellence with fast-tracked undergraduate and postgraduate programs built for global markets."
  },
  {
    country: "UNITED STATES",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    description: "Access unmatched campus research facilities, specialized degree majors, and global industrial networking hubs."
  },
  {
    country: "AUSTRALIA",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80",
    description: "Experience innovation-driven degrees, vibrant student cities, and extensive post-graduation career pathways."
  },
  {
    country: "GERMANY",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    description: "Avail world-class public university education, strong engineering ties, and minimal tuition structures."
  },
  {
    country: "NETHERLANDS",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    description: "Learn at high-ranking universities renowned for research excellence, entrepreneurship, and English-taught programs."
  },
  {
    country: "SWEDEN",
    image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800&q=80",
    description: "Focus on sustainability, creative problem-solving, and a lifestyle that balances academic and personal growth."
  }
];

const controlBtn =
  'flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-colors duration-200 hover:border-brand-600 hover:bg-brand-50 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2';

const countrySlug = (country: string) =>
  country.toLowerCase().replace('united states', 'usa').replace(/\s+/g, '-');

const DestinationsCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(4);
    const [visibleCards, setVisibleCards] = useState(4);
    const [mounted, setMounted] = useState(false);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    useEffect(() => {
        setMounted(true);
        const handleResize = () => {
            let cards = 4;
            if (window.innerWidth >= 1024) cards = 4;
            else if (window.innerWidth >= 768) cards = 2;
            else cards = 1;
            setVisibleCards(cards);
            setCurrentIndex(cards);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const extendedData = [
        ...destinationsData.slice(-visibleCards),
        ...destinationsData,
        ...destinationsData.slice(0, visibleCards)
    ];

    const handleNext = () => {
        if (!transitionEnabled) return;
        setCurrentIndex((prev) => prev + 1);
    };

    const handlePrev = () => {
        if (!transitionEnabled) return;
        setCurrentIndex((prev) => prev - 1);
    };

    // Seamless circular loop jump
    useEffect(() => {
        if (!mounted) return;
        if (currentIndex >= destinationsData.length + visibleCards) {
            const timer = setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(visibleCards);
            }, 500);
            return () => clearTimeout(timer);
        }
        if (currentIndex <= 0) {
            const timer = setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(destinationsData.length);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, visibleCards, mounted]);

    // Restore transition after jump
    useEffect(() => {
        if (!transitionEnabled) {
            const timer = setTimeout(() => setTransitionEnabled(true), 50);
            return () => clearTimeout(timer);
        }
    }, [transitionEnabled]);

    const renderCard = (dest: Destination, idx: number, withLink: boolean) => (
        <div key={idx} className="w-full flex-shrink-0 px-4 md:w-1/2 lg:w-1/4">
            <div className="group relative mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl shadow-card-md transition duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card-lg">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent" />
                <div className="h-[380px] overflow-hidden">
                    <img
                        className="h-full w-full object-cover transition duration-700 ease-smooth group-hover:scale-110"
                        src={dest.image}
                        alt={`${dest.country} study destination`}
                    />
                </div>
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-5">
                    <h3 className="mb-1 text-xl font-semibold uppercase tracking-tight text-white md:text-2xl">
                        {dest.country}
                    </h3>
                    <p className="mb-4 line-clamp-4 h-24 text-sm leading-relaxed text-slate-200">
                        {dest.description}
                    </p>
                    {withLink && (
                        <Link
                            className="inline-flex items-center text-sm font-semibold text-white transition-colors duration-200 hover:text-brand-300"
                            href={{ pathname: '/country-details', query: { country: countrySlug(dest.country) } }}
                        >
                            Explore Destination
                            <svg className="ml-1.5 h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <Section bg="white">
            {/* Header */}
            <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:mb-12">
                <Reveal className="max-w-xl">
                    <Eyebrow>Top Study Destinations</Eyebrow>
                    <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                        Country of Your Choice
                    </h2>
                </Reveal>
                <div className="flex items-center gap-3">
                    <Button href="/country-details?country=overview" variant="secondary">
                        All countries
                    </Button>
                    <button onClick={handlePrev} className={controlBtn} aria-label="Previous destination">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button onClick={handleNext} className={controlBtn} aria-label="Next destination">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Track */}
            <div className="-mx-4 overflow-hidden py-4">
                {mounted ? (
                    <div
                        className={`flex ${transitionEnabled ? 'transition-transform duration-500 ease-in-out' : 'transition-none'}`}
                        style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                    >
                        {extendedData.map((dest, idx) => renderCard(dest, idx, true))}
                    </div>
                ) : (
                    <div className="flex">
                        {destinationsData.slice(0, 4).map((dest, idx) => renderCard(dest, idx, false))}
                    </div>
                )}
            </div>
        </Section>
    );
};

export default DestinationsCarousel;
