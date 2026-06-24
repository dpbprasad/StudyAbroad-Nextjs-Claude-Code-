/** @type {import('next').NextConfig} */

// Baseline security headers applied to every route.
// NOTE: a strict Content-Security-Policy is intentionally NOT set here yet —
// it must allowlist Zoho SalesIQ, Google Maps, YouTube and the inline JSON-LD
// script, and is best added as a nonce-based policy with full testing so it
// doesn't silently break those integrations.
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // hide the X-Powered-By: Next.js header
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

module.exports = nextConfig;
