"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import ConsultationCTA from './ConsultationCTA';
import { Section } from '../ui/Section';
import { PageHeader } from '../ui/PageHeader';

interface Article {
    id: string;
    title: string;
    tagline: string;
    category: string;
    date: string;
    image: string;
    excerpt: string;
}

const articlesData: Article[] = [
    {
        id: "accommodation",
        title: "Accommodation Support",
        tagline: "Why Students Choose Our Accommodation Service",
        category: "Accommodation",
        date: "11 Jun 2026",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1080",
        excerpt: "How we help you understand and compare accommodation options in your study destination.",
    },
    {
        id: "life-abroad",
        title: "Life Abroad",
        tagline: "Feeling Lost? How to Make it Work",
        category: "Life Abroad",
        date: "10 Jun 2026",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1080",
        excerpt: "Preparing students for independent living, culture, budgeting, wellbeing, and more.",
    },
];

const accommodationParagraphs = [
    "A safe and suitable place to stay is one of the most important concerns for students and parents when planning overseas education. At Study Abroad, we support students by helping them understand and explore accommodation options available in their chosen study destination.",
    "Some universities and colleges we work with provide their own accommodation options or recommend approved student housing. Where institutional accommodation is available, we guide students on how to review the options, understand the application process, check deadlines, and plan early.",
    "In addition, Study Abroad also connects students with selected third-party accommodation providers who offer paid accommodation services in certain destinations. These providers may offer options such as student residences, shared accommodation, homestays, temporary arrival stays, or private rental support, depending on the country and availability.",
    "Our role is to act as a mediator and support point between the student and the accommodation provider. We help students and parents understand available options, compare basic factors such as location, cost, facilities, travel distance, payment terms, and booking requirements, and communicate with the provider where needed.",
];
const accommodationDisclaimer =
    "Accommodation services offered by third-party providers are paid services, and all fees, terms, availability, refund conditions, and final confirmation are determined by the respective provider. Study Abroad does not own or operate accommodation facilities, but we assist students with guidance, coordination, and referrals so they can make informed decisions before arrival.";
const accommodationClosing =
    "With early planning and the right guidance, students can begin their international education journey with greater confidence, comfort, and peace of mind.";

const lifeAbroadIntro = [
    "Studying overseas is a life-changing experience. It is not only about selecting the right course or receiving a university offer, but also about learning how to live independently, adjust to a new culture, manage daily responsibilities, and make confident decisions in a new environment.",
    "At Study Abroad, we help students and families understand what life abroad may look like before departure. Our guidance covers practical areas such as arrival preparation, accommodation, budgeting, student wellbeing, cultural adjustment, part-time work awareness, academic expectations, and staying connected with family.",
    "We believe that a well-prepared student is more likely to settle smoothly, focus on studies, and make responsible choices while living overseas. Through our pre-departure guidance, students are encouraged to plan early, understand their responsibilities, follow visa and institution rules, and approach their international education journey with realistic expectations.",
    "For parents, this guidance provides reassurance that their child is not only preparing for education overseas, but also for independent living, personal safety, emotional readiness, and a smoother transition into a new country.",
    "At Study Abroad, our support continues beyond admission guidance by helping students prepare for the real experience of studying, living, and growing abroad.",
];
const lifeAbroadGuides: { title: string; desc: string }[] = [
    { title: "Arrival and Settlement", desc: "We guide students on how to prepare for their first few days abroad, including airport arrival, local transport, SIM cards, opening a bank account, campus registration, emergency contacts, and settling into their accommodation." },
    { title: "Accommodation and Safety", desc: "Students are guided to understand available accommodation options, distance from campus, rental expectations, house rules, deposits, and basic safety practices. We encourage students to keep parents informed and make responsible choices from the beginning." },
    { title: "Cost of Living and Budgeting", desc: "Living abroad requires careful financial planning. We help students and families understand key cost areas such as rent, food, transport, utilities, phone expenses, insurance, and personal spending, while encouraging responsible budgeting before departure." },
    { title: "Part-Time Work Awareness", desc: "Students may be eligible to work part-time depending on the visa rules of their chosen destination. We help students understand work-hour conditions, realistic expectations, and the importance of balancing employment with academic performance." },
    { title: "Student Wellbeing", desc: "Adjusting to a new country can take time. We encourage students to recognise homesickness, build healthy routines, make friends, use university support services, and seek help early when needed." },
    { title: "Cultural Adjustment", desc: "Students are guided to understand local culture, classroom expectations, communication styles, laws, social norms, time management, and the responsibilities that come with independent living." },
    { title: "Academic Life", desc: "We help students understand the importance of attendance, assignments, deadlines, academic honesty, group work, communication with lecturers, and using institution support services when required." },
    { title: "Pre-Departure Preparation", desc: "Before students travel, Study Abroad provides pre-departure guidance to help them prepare essential documents, understand what to pack, plan first-week priorities, and approach life abroad with confidence and responsibility." },
];

const h2Class = "font-display text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl";

const AccommodationBody = () => (
    <div className="space-y-6 text-[15px] leading-relaxed text-slate-600 md:text-base">
        <h2 className={h2Class}>Guidance Through Trusted Provider Connections</h2>
        {accommodationParagraphs.map((p, i) => <p key={i}>{p}</p>)}
        <div className="rounded-xl border-l-4 border-brand-300 bg-slate-50 p-5 text-slate-700">
            {accommodationDisclaimer}
        </div>
        <p>{accommodationClosing}</p>
    </div>
);

const LifeAbroadBody = () => (
    <div className="space-y-6 text-[15px] leading-relaxed text-slate-600 md:text-base">
        <h2 className={h2Class}>Helping Students Prepare for Life Beyond the Classroom</h2>
        {lifeAbroadIntro.map((p, i) => <p key={i}>{p}</p>)}

        <div className="pt-4">
            <h2 className={h2Class}>What We Guide Students On</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {lifeAbroadGuides.map((g) => (
                    <div key={g.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
                        <h3 className="text-base font-semibold text-slate-900">{g.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{g.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ResourceArticle: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const [activeArticle, setActiveArticle] = useState<Article>(articlesData[0]);
    const articleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const queryArticle = searchParams.get('article');
        const matched = articlesData.find((a) => a.id.toLowerCase() === (queryArticle || '').toLowerCase());
        if (matched) setActiveArticle(matched);
    }, [searchParams]);

    const handleArticleChange = (article: Article) => {
        setActiveArticle(article);
        const params = new URLSearchParams(searchParams.toString());
        params.set('article', article.id);
        // scroll: false stops Next's jump-to-page-top; we then bring the
        // NEW article's start into view (offset for the sticky nav).
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
        requestAnimationFrame(() => {
            articleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    };

    return (
        <>
            <PageHeader
                title={activeArticle.title}
                subtitle={activeArticle.tagline}
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Resources', href: '/resources' },
                    { label: activeArticle.title },
                ]}
            />

            <Section bg="white">
                <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
                    {/* Sidebar — docs-style guide list */}
                    <aside className="lg:sticky lg:top-28 lg:self-start">
                        <div className="rounded-2xl border border-slate-200 bg-white p-2">
                            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Resource Guides</p>
                            <nav className="flex flex-col">
                                {articlesData.map((art) => {
                                    const isActive = activeArticle.id === art.id;
                                    return (
                                        <button
                                            key={art.id}
                                            onClick={() => handleArticleChange(art)}
                                            aria-current={isActive ? 'page' : undefined}
                                            className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                                                isActive ? 'bg-brand-50' : 'hover:bg-slate-50'
                                            }`}
                                        >
                                            <span
                                                className={`h-12 w-1 flex-shrink-0 rounded-full transition-colors ${
                                                    isActive ? 'bg-brand-600' : 'bg-transparent group-hover:bg-slate-300'
                                                }`}
                                                aria-hidden="true"
                                            />
                                            <img
                                                src={art.image}
                                                alt={art.title}
                                                className="h-12 w-12 flex-shrink-0 rounded-lg object-cover"
                                            />
                                            <span className="min-w-0">
                                                <span className={`block text-sm font-semibold ${isActive ? 'text-brand-700' : 'text-slate-900'}`}>
                                                    {art.title}
                                                </span>
                                                <span className="mt-0.5 block text-xs text-slate-500">{art.category}</span>
                                            </span>
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>

                    {/* Content */}
                    <article ref={articleRef} className="min-w-0 scroll-mt-24">
                        <div className="mb-8 overflow-hidden rounded-2xl shadow-card-md">
                            <img src={activeArticle.image} alt={activeArticle.title} className="h-[260px] w-full object-cover md:h-[360px]" />
                        </div>
                        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
                            <span className="font-medium text-brand-600">{activeArticle.category}</span>
                            <span aria-hidden="true">•</span>
                            <span>Published {activeArticle.date}</span>
                        </div>

                        {activeArticle.id === 'accommodation' ? <AccommodationBody /> : <LifeAbroadBody />}

                        <div className="mt-12">
                            <ConsultationCTA />
                        </div>
                    </article>
                </div>
            </Section>
        </>
    );
};

export default ResourceArticle;
