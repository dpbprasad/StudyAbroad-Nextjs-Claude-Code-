"use client";

import React, { useEffect } from 'react';
import CountriesSectionNavigations1 from '../../components/navigations/CountriesSectionNavigations1';
import { PageHeader } from '../../components/ui/PageHeader';
import ResourcesSectionBlog3 from '../../components/blog/ResourcesSectionBlog3';
import CountriesSectionFooters2 from '../../components/footers/CountriesSectionFooters2';

export default function Resources() {
  useEffect(() => {
    // Load custom component scripts after React components are mounted
    const script1 = document.createElement('script');
    script1.src = 'js/1186841.js?v=1780940683';
    script1.async = true;
    document.head.appendChild(script1);
  }, []);

  return (
    <>
      <CountriesSectionNavigations1 />
      <PageHeader
        title="Resources"
        subtitle="Useful tips and guides for your study-abroad journey."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Resources' }]}
      />
      <ResourcesSectionBlog3 />
      <CountriesSectionFooters2 />
    </>
  );
}
