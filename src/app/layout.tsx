import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '../lib/site';
import { OrganizationJsonLd } from '../components/seo/OrganizationJsonLd';
import SiteHeader from '../components/layout/SiteHeader';
import SiteFooter from '../components/layout/SiteFooter';

// Clean geometric sans — used for all headings + body (see design.md §2)
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // Pages set their own title; this template appends the brand.
    default: `${SITE_NAME} | Best International Education Consultants Sri Lanka`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} | Best International Education Consultants Sri Lanka`,
    description: SITE_DESCRIPTION,
    locale: 'en_US',
    // TODO(imagery pass): replace with a dedicated 1200x630 /images/og-image.jpg
    images: [{ url: '/images/hero-bg.jpg', width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Best International Education Consultants Sri Lanka`,
    description: SITE_DESCRIPTION,
    images: ['/images/hero-bg.jpg'],
  },
  // Favicon is provided by the app/icon.svg file convention (temporary
  // branded "SA" monogram — replace with the full favicon set per IMAGE-SPEC §4.9).
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased bg-white text-slate-700 font-body" suppressHydrationWarning>
        <OrganizationJsonLd />

        {/* Initialize Zoho SalesIQ object */}
        <Script id="zoho-salesiq-init" strategy="beforeInteractive">
          {`window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`}
        </Script>
        
        {/* Load Zoho SalesIQ widget script */}
        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siq174f78e9bbdc7a369582d2b56f29d0011d877dfa15b1bfae5334a66e91a7db68"
          strategy="lazyOnload"
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
