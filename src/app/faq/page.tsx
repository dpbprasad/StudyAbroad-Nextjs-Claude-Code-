import type { Metadata } from 'next';
import CountriesSectionNavigations1 from '../../components/navigations/CountriesSectionNavigations1';
import { PageHeader } from '../../components/ui/PageHeader';
import FaqSectionFaq2 from '../../components/faq/FaqSectionFaq2';
import CountriesSectionFooters2 from '../../components/footers/CountriesSectionFooters2';
import ConsultationCTA from '../../components/custom-components/ConsultationCTA';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about studying abroad from Sri Lanka — admissions, student visas, intakes, costs and how Study Abroad (Pvt) Ltd guides you through each step.',
  keywords: ['study abroad faq', 'student visa questions sri lanka', 'study abroad intakes', 'student visa requirements'],
  alternates: { canonical: '/faq' },
};

export default function Faq() {
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
