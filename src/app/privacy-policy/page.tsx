import type { Metadata } from 'next';
import LegalDocument from '../../components/sections/LegalDocument';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Study Abroad (Pvt) Ltd collects, uses, shares, and protects your personal information when you use our website and services.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return <LegalDocument active="privacy" />;
}
