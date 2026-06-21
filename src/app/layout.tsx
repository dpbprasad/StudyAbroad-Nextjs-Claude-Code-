import type { Metadata } from 'next';
import Script from 'next/script';
import { Fraunces, Inter } from 'next/font/google';
import '../styles/globals.css';
import '../styles/main.css';

// Warm serif display (headings) — see design.md §2
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  axes: ['opsz', 'SOFT'],
});

// Clean sans (body / UI)
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Study Abroad (Pvt) Ltd | Best International Education Consultants Sri Lanka',
  description: "Study Abroad (Pvt) Ltd is Sri Lanka's leading student visa and university placement consultancy. Placements in UK, Canada, USA, Germany, Sweden. Established in 2007.",
  icons: {
    icon: [
      {
        url: '/shuffle-for-bootstrap.png',
        sizes: '32x32',
        type: 'image/png',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-white text-slate-700 font-body" suppressHydrationWarning>
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
        {children}
      </body>
    </html>
  );
}
