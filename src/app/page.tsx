import React from 'react';
import type { Metadata } from 'next';
import Hero from '../components/sections/Hero';
import TrustStrip from '../components/sections/TrustStrip';
import SiteHeader from '../components/layout/SiteHeader';
import ServiceHighlights from '../components/sections/ServiceHighlights';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ServicesSplit from '../components/sections/ServicesSplit';
import HowItWorks from '../components/sections/HowItWorks';
import StatsBand from '../components/sections/StatsBand';
import DestinationsCarousel from '../components/sections/DestinationsCarousel';
import TestimonialsCarousel from '../components/sections/TestimonialsCarousel';
import ConsultationSection from '../components/sections/ConsultationSection';
import RecentArticles from '../components/sections/RecentArticles';
import SiteFooter from '../components/layout/SiteFooter';

export const metadata: Metadata = {
  // `absolute` stops the layout template from appending the brand twice.
  title: { absolute: 'Study Abroad (Pvt) Ltd | Best International Education Consultants Sri Lanka' },
  description: "Study Abroad (Pvt) Ltd is Sri Lanka's leading student visa and university placement consultancy. Placements in UK, Canada, USA, Germany, Sweden. Established in 2007.",
  keywords: ["study abroad sri lanka", "student visa consultants colombo", "university placement agency", "study in Canada Sri Lanka", "overseas education sri lanka"],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Study Abroad (Pvt) Ltd | Best International Education Consultants',
    description: 'Empowering Sri Lankan students since 2007 with university admissions and student visa guidance.',
    url: '/',
  },
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <TrustStrip />
      <ServiceHighlights />
      <WhyChooseUs />
      <HowItWorks tagline="How It Works" />
      <StatsBand />
      <DestinationsCarousel />
      <ServicesSplit imageLeft={true} />
      <TestimonialsCarousel />
      <ConsultationSection />
      <RecentArticles />
      <SiteFooter />
    </>
  );
}
