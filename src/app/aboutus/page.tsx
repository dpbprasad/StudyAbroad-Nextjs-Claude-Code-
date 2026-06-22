import type { Metadata } from 'next';
import CountriesSectionNavigations1 from '../../components/navigations/CountriesSectionNavigations1';
import { PageHeader } from '../../components/ui/PageHeader';
import AboutusSectionContent4 from '../../components/content/AboutusSectionContent4';
import CountriesSectionFooters2 from '../../components/footers/CountriesSectionFooters2';
import ConsultationCTA from '../../components/custom-components/ConsultationCTA';

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
