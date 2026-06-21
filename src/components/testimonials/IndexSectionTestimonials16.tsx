"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Section } from '../ui/Section';
import { Eyebrow } from '../ui/Eyebrow';

interface Testimonial {
  name: string;
  program: string;
  year: string;
  country: string;
  text: string;
  image: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Indika Devendra",
    program: "Master of Management",
    year: "2013",
    country: "New Zealand",
    text: "Many students in our country have a dream to study in a foreign university. Even I had the same dream since my childhood and it would still be a dream, if STUDY ABROAD did not help me. We came to know about STUDY ABROAD through the internet and that Study Abroad is one of New Zealand’s specialist agents. STUDY ABROAD put in all their efforts to get us the visas as soon as possible. Special thanks go to the amazing team for the guidance they gave us to achieve our target. We would recommend STUDY ABROAD without any hesitation to anyone who aspires higher studies abroad. In fact, we say that STUDY ABROAD is the best in Sri Lanka and you could rely on them 100%.",
    image: "/images/testimonials/indika_devendra.png"
  },
  {
    name: "Ashan Goonathilake",
    program: "Bachelor's in Mechanical Engineering",
    year: "2012",
    country: "USA",
    text: "I had almost given up on going abroad to study in USA, after a couple of bitter experiences that I had to face with some other student recruiting agencies. Due to this, I had to put my dreams on hold for about one year. From the very first phone call to STUDY ABROAD, I realized that they are different from the rest. They were reliable and professional compared to the places I had visited. Unlike with other countries, USA visa are quite hard to get, unless you know exactly how to handle the process. In this aspect STUDY ABROAD is experienced and knows what to do. They even guided me on how to face the interviews. My recommendation would always be STUDY ABROAD. This is not just another testimonial from a student,- make a call and find out for yourself!",
    image: "/images/testimonials/ashan_goonathilake.png"
  },
  {
    name: "Maheshika Indiwari",
    program: "Postgraduate Diploma Business Enterprise",
    year: "2013",
    country: "New Zealand",
    text: "Pursuing Business studies at a Postgraduate Level in a developed country was a dream I nurtured. My husband and I were laden with various options and we finally reached STUDY ABROAD at an Educational exhibition. It is vital to mention that thousands of our questions were clarified by her incredibly and logically which made us take the decision to apply through Study Abroad, very easy. Currently we are in New Zealand and STUDY ABROAD is very much in our hearts. They have not only fulfilled our dreams, of studying abroad, but also have become a part of our lives as friends in need. We highly admire their knowledge in education and expertise in all related work. Their commitment and dependability are the best parts we saw in them. We whole heartedly recommend STUDY ABROAD without hesitation to any parent / student. We wish them all the success in every endeavour!",
    image: "/images/testimonials/maheshika_indiwari.png"
  },
  {
    name: "Dhanushka Abeysinghe",
    program: "Bachelor of Business Administration",
    year: "2007",
    country: "United Kingdom",
    text: "I am the very FIRST student of STUDY ABROAD. Coming to the UK and getting the right and dignified education from a highly recognized awarding body wouldn’t have been a reality without the confidence built in me by Study Abroad (Pvt) Ltd. They provided me the most efficient and reliable services beyond words. So I or my family never had the doubt of being the first applicant at STUDY ABROAD in 2007. I was very comfortable and satisfied with the services they provided me at the time I opted to pursue my higher studies in the UK.",
    image: "/images/testimonials/dhanushka_abeysinghe.png"
  },
  {
    name: "Malintha Abeysiri",
    program: "Bachelors in Cell Biology",
    year: "2009",
    country: "USA",
    text: "Studying in the USA may be the biggest challenge that you may have to face when you are going through your higher education endeavors. Applying for a visa and getting it is much harder than getting a visa from any other country. I recommend STUDY ABROAD to anyone who wants to go to the USA for higher education. They help you with your college as well as the visa application and every other aspect of the process. The best value I got from Study Abroad was the mock interview which is professional, accurate and reliable. I had so much confidence when I faced the interview for my visa because of STUDY ABROAD. They made my dream come true. If you want to study in the USA, STUDY ABROAD is the best place to go!",
    image: "/images/testimonials/malintha_abeysiri.png"
  },
  {
    name: "Chanaka & Ransala",
    program: "Postgraduate Studies",
    year: "2011",
    country: "New Zealand",
    text: "I am indeed grateful to Study Abroad (Pvt) Ltd for making our dreams come true. Pursuing higher studies in New Zealand would have been just a distant dream without the excellent service and guidance provided by STUDY ABROAD. I truly appreciate the confidence they showed us throughout the whole process and they have been right there wherever needed. The generosity they gave me and my husband is amazing. One of the most important things that we observed in their service is the remarkable dedication which is beyond words. STUDY ABROAD has become a part of our lives now and the relationship we built with them will last forever. I have no hesitation in recommending STUDY ABROAD as the most reliable foreign education consultants in Sri Lanka to anybody who intends to pursue their higher education overseas.",
    image: "/images/testimonials/chanaka_ransala.png"
  },
  {
    name: "Tirantha Dissanayake",
    program: "Master of Business Administration",
    year: "2023",
    country: "Canada",
    text: "If you want to achieve your study-abroad dream without wasting any time, I highly recommend Study Abroad (Pvt) Ltd. I obtained my student visa to Canada without meeting anyone from Study Abroad (Pvt) Ltd in person. The entire team contacted me online, which was incredibly helpful since I had a busy schedule. If you’re from out of town or have a tight schedule and can’t spare time to visit, Study Abroad (Pvt) Ltd is the one and only place to go for your student visa. Believe me, I never visited their office or met anyone in person, yet they fulfilled my Canada dream. Thank you, Team Study Abroad",
    image: "/images/testimonials/tirantha_dissanayake.png"
  },
  {
    name: "Praveen Perera",
    program: "Graphic Designing",
    year: "2024",
    country: "Canada",
    text: "At a time, 60% of Canada visas were getting capped with high refusals STUDY ABROAD still managed everything and special thanks to the Visa Department. They were in touch with us 24/7 and Documentation was clearly done.. Great effort by the whole team. And the Management was so friendly! Highly recommended !!!!",
    image: "/images/testimonials/praveen_perera.png"
  },
  {
    name: "Pubudu Wanasinghe",
    program: "Master of Kinesiology",
    year: "2022",
    country: "Canada",
    text: "So grateful for this awesome place to achieve my educational dream in the United States where i pursued Bachelors in Kinesiology at University of California - Bakersfield. I highly recommend and truly appreciate your great advice and support throughout the visa process. A great service. Thank you so much, Study Abroad (Pvt) Ltd.",
    image: "/images/testimonials/pubudu_wanasinghe.png"
  }
];

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

const IndexSectionTestimonials16: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () =>
        setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
    const handleNext = () =>
        setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));

    return (
        <Section bg="white">
            <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
                <Eyebrow className="justify-center">Success Stories</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                    What our students say
                </h2>
            </div>

            <div className="flex items-center gap-4 lg:gap-6">
                <button onClick={handlePrev} className={controlBtn} aria-label="Previous testimonial">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="w-full overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {testimonialsData.map((t, idx) => (
                            <div key={idx} className="w-full flex-shrink-0 px-1">
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
                                            “{t.text}”
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
                                            <p className="mt-0.5 text-xs text-slate-500">{t.country} • {t.year}</p>
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

export default IndexSectionTestimonials16;
