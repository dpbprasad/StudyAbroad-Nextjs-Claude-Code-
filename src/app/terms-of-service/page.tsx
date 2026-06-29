import type { Metadata } from 'next';
import LegalDocument from '../../components/sections/LegalDocument';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms that govern your use of the Study Abroad (Pvt) Ltd website and our international education and student-visa consultancy services.',
  alternates: { canonical: '/terms-of-service' },
};

export default function TermsOfServicePage() {
  return <LegalDocument active="terms" />;
}
