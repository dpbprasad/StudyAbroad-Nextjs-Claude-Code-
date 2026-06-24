import type { Metadata } from 'next';
import { PageHeader } from '../../components/ui/PageHeader';
import FaqContent from '../../components/sections/FaqContent';
import ConsultationCTA from '../../components/sections/ConsultationCTA';

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
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Answers to your queries about studying abroad."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
      />
      <FaqContent />
      <section className="py-12 bg-white relative z-10">
        <div className="container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <ConsultationCTA />
          </div>
        </div>
      </section>
    </>
  );
}
