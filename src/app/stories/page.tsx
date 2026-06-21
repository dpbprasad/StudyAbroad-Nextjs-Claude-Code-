"use client";

import React, { useEffect } from 'react';
import CountriesSectionNavigations1 from '../../components/navigations/CountriesSectionNavigations1';
import { PageHeader } from '../../components/ui/PageHeader';
import StoriesSectionTestimonials2 from '../../components/testimonials/StoriesSectionTestimonials2';
import CountriesSectionFooters2 from '../../components/footers/CountriesSectionFooters2';

export default function Stories() {
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
        title="Success Stories"
        subtitle="Real student voices from across our study destinations."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Stories' }]}
      />
      <StoriesSectionTestimonials2 />
      <CountriesSectionFooters2 />
    </>
  );
}
