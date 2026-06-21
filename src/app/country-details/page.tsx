"use client";

import React, { useEffect, Suspense } from 'react';
import CountriesSectionNavigations1 from '../../components/navigations/CountriesSectionNavigations1';
import CountryDetailsSectionCustomComponents3 from '../../components/custom-components/CountryDetailsSectionCustomComponents3';
import CountriesSectionFooters2 from '../../components/footers/CountriesSectionFooters2';

export default function CountryDetails() {
  useEffect(() => {
    // Load custom component scripts after React components are mounted
    const script1 = document.createElement('script');
    script1.src = '/js/1186841.js?v=1780940684';
    script1.async = true;
    document.head.appendChild(script1);
  }, []);

  return (
    <>
      <CountriesSectionNavigations1 />
      {/* TEMP dark backdrop until this detail page is migrated to the light theme */}
      <div className="bg-brand-950">
        <Suspense fallback={<div className="min-h-screen animate-pulse bg-brand-950" />}>
          <CountryDetailsSectionCustomComponents3 />
        </Suspense>
      </div>
      <CountriesSectionFooters2 />
    </>
  );
}
