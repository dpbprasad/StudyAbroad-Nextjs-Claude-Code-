import type { Metadata } from 'next';
import SiteHeader from '../../components/layout/SiteHeader';
import { PageHeader } from '../../components/ui/PageHeader';
import AboutContent from '../../components/sections/AboutContent';
import SiteFooter from '../../components/layout/SiteFooter';
import ConsultationCTA from '../../components/sections/ConsultationCTA';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Meet Study Abroad (Pvt) Ltd — Sri Lanka's trusted international education consultancy since 2007, guiding students to universities across the UK, Canada, USA, Australia and Europe.",
  keywords: ['about study abroad sri lanka', 'education consultants colombo', 'overseas education company sri lanka'],
  alternates: { canonical: '/aboutus' },
};

export default function Aboutus() {
  return (
    <>
      <SiteHeader />
      <PageHeader
        title="About Us"
        subtitle="International education consultants in Sri Lanka since 2007."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />
      <AboutContent />
      <section className="py-12 bg-white relative z-10">
        <div className="container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <ConsultationCTA />
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
