"use client";

import React, { useEffect } from 'react';
import CountriesSectionNavigations1 from '../../components/navigations/CountriesSectionNavigations1';
import { PageHeader } from '../../components/ui/PageHeader';
import ContactSectionContact4 from '../../components/contact/ContactSectionContact4';
import CountriesSectionFooters2 from '../../components/footers/CountriesSectionFooters2';

export default function Contact() {
  useEffect(() => {
    // Load custom component scripts after React components are mounted
    const script1 = document.createElement('script');
    script1.src = 'js/1186841.js?v=1780940681';
    script1.async = true;
    document.head.appendChild(script1);
  }, []);

  return (
    <>
      <CountriesSectionNavigations1 />
      <PageHeader
        title="Contact Us"
        subtitle="Begin your journey — book a free consultation with our team."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />
      <ContactSectionContact4 />
      <CountriesSectionFooters2 />
    </>
  );
}
