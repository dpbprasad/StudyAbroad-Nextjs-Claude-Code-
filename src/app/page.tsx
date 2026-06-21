import React from 'react';
import type { Metadata } from 'next';
import IndexSectionHeaders3 from '../components/headers/IndexSectionHeaders3';
import CountriesSectionNavigations1 from '../components/navigations/CountriesSectionNavigations1';
import IndexSectionHeaders2 from '../components/headers/IndexSectionHeaders2';
import IndexSectionFeatures6 from '../components/features/IndexSectionFeatures6';
import IndexSectionServicesTest from '../components/features/IndexSectionServicesTest';
import IndexSectionHowItWorks5Test from '../components/how-it-works/IndexSectionHowItWorks5Test';
import IndexSectionStats11 from '../components/stats/IndexSectionStats11';
import IndexSectionCustomComponents7 from '../components/custom-components/IndexSectionCustomComponents7';
import IndexSectionTestimonials16 from '../components/testimonials/IndexSectionTestimonials16';
import IndexSectionContact17 from '../components/contact/IndexSectionContact17';
import IndexSectionBlog12 from '../components/blog/IndexSectionBlog12';
import CountriesSectionFooters2 from '../components/footers/CountriesSectionFooters2';

export const metadata: Metadata = {
  title: 'Study Abroad (Pvt) Ltd | Best International Education Consultants Sri Lanka',
  description: "Study Abroad (Pvt) Ltd is Sri Lanka's leading student visa and university placement consultancy. Placements in UK, Canada, USA, Germany, Sweden. Established in 2007.",
  keywords: ["study abroad sri lanka", "student visa consultants colombo", "university placement agency", "Priyanka Ganhataregedara", "study in Canada Sri Lanka"],
  openGraph: {
    title: 'Study Abroad (Pvt) Ltd | Best International Education Consultants',
    description: 'Empowering Sri Lankan students since 2007 with university admissions and student visa guidance.',
  }
};

export default function Page() {
  return (
    <>
      <CountriesSectionNavigations1 />
      <IndexSectionHeaders3 />
      <IndexSectionHeaders2 />
      <IndexSectionFeatures6 />
      <IndexSectionHowItWorks5Test tagline="How It Works" />
      <IndexSectionStats11 />
      <IndexSectionCustomComponents7 />
      <IndexSectionServicesTest imageLeft={true} />
      <IndexSectionTestimonials16 />
      <IndexSectionContact17 />
      <IndexSectionBlog12 />
      <CountriesSectionFooters2 />
    </>
  );
}
