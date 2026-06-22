import type { Metadata } from 'next';
import CountriesSectionNavigations1 from '../../components/navigations/CountriesSectionNavigations1';
import { PageHeader } from '../../components/ui/PageHeader';
import ContactSectionContact4 from '../../components/contact/ContactSectionContact4';
import CountriesSectionFooters2 from '../../components/footers/CountriesSectionFooters2';

export const metadata: Metadata = {
  title: 'Contact Us — Book a Free Consultation',
  description:
    'Get in touch with Study Abroad (Pvt) Ltd in Colombo. Book a free consultation for university admissions and student visa guidance. Call +94 77 496 3373 or visit us.',
  keywords: ['contact study abroad sri lanka', 'free study abroad consultation colombo', 'student visa consultation'],
  alternates: { canonical: '/contact' },
};

export default function Contact() {
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
