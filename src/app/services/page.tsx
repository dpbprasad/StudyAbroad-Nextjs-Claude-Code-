import React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '../../components/ui/PageHeader';
import ServicesContent from '../../components/sections/ServicesContent';

export const metadata: Metadata = {
  title: 'Our Study Abroad & Visa Counselling Services',
  description: 'Comprehensive student visa and university placement services in Sri Lanka. Since 2007, we offer academic counselling, matching, visa simulation, and arrival integration under direct MD supervision.',
  keywords: ['study abroad services', 'student visa consultants sri lanka', 'university admission matching', 'visa interview mock simulation', 'SOP help colombo'],
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Your gateway to global education."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />
      <ServicesContent />
    </>
  );
}
