"use client";

import React, { useEffect } from 'react';
import CountriesSectionNavigations1 from '../../components/navigations/CountriesSectionNavigations1';
import { PageHeader } from '../../components/ui/PageHeader';
import FaqSectionFaq2 from '../../components/faq/FaqSectionFaq2';
import CountriesSectionFooters2 from '../../components/footers/CountriesSectionFooters2';
import ConsultationCTA from '../../components/custom-components/ConsultationCTA';

export default function Faq() {
  useEffect(() => {
    // Load custom component scripts after React components are mounted
    const script1 = document.createElement('script');
    script1.src = 'js/1186841.js?v=1780940682';
    script1.async = true;
    document.head.appendChild(script1);
  }, []);

  return (
    <>
      <CountriesSectionNavigations1 />
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Answers to your queries about studying abroad."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
      />
      <FaqSectionFaq2 />
      <section className="py-12 bg-white relative z-10">
        <div className="container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <ConsultationCTA />
          </div>
        </div>
      </section>
      <CountriesSectionFooters2 />
    </>
  );
}
