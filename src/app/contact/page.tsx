import type { Metadata } from 'next';
import SiteHeader from '../../components/layout/SiteHeader';
import { PageHeader } from '../../components/ui/PageHeader';
import ContactContent from '../../components/sections/ContactContent';
import SiteFooter from '../../components/layout/SiteFooter';

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
      <SiteHeader />
      <PageHeader
        title="Contact Us"
        subtitle="Begin your journey — book a free consultation with our team."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />
      <ContactContent />
      <SiteFooter />
    </>
  );
}
