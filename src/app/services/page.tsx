import React from 'react';
import type { Metadata } from 'next';
import CountriesSectionNavigations1 from '../../components/navigations/CountriesSectionNavigations1';
import { PageHeader } from '../../components/ui/PageHeader';
import ServicesSectionCustomComponents from '../../components/custom-components/ServicesSectionCustomComponents';
import CountriesSectionFooters2 from '../../components/footers/CountriesSectionFooters2';

export const metadata: Metadata = {
  title: 'Our Study Abroad & Visa Counseling Services | Study Abroad (Pvt) Ltd',
  description: 'Comprehensive student visa and university placement services in Sri Lanka. Since 2007, we offer academic counseling, matching, visa simulation, and arrival integration under direct MD supervision.',
  keywords: ['study abroad services', 'student visa consultants sri lanka', 'university admission matching', 'visa interview mock simulation', 'SOP help colombo'],
};

export default function ServicesPage() {
  return (
    <>
      <CountriesSectionNavigations1 />
      <PageHeader
        title="Our Services"
        subtitle="Your gateway to global education."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />
      <ServicesSectionCustomComponents />
      <CountriesSectionFooters2 />
    </>
  );
}
