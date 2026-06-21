"use client";

import React, { useEffect } from 'react';
import CountriesSectionNavigations1 from '../../components/navigations/CountriesSectionNavigations1';
import { PageHeader } from '../../components/ui/PageHeader';
import AboutusSectionContent4 from '../../components/content/AboutusSectionContent4';
import CountriesSectionFooters2 from '../../components/footers/CountriesSectionFooters2';
import ConsultationCTA from '../../components/custom-components/ConsultationCTA';

export default function Aboutus() {
  useEffect(() => {
    // Load custom component scripts after React components are mounted
    const script1 = document.createElement('script');
    script1.src = 'js/1186841.js?v=1780940680';
    script1.async = true;
    document.head.appendChild(script1);
  }, []);

  return (
    <>
      <CountriesSectionNavigations1 />
      <PageHeader
        title="About Us"
        subtitle="International education consultants in Sri Lanka since 2007."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />
      <AboutusSectionContent4 />
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
