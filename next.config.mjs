/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/guides/ops-team-without-hiring',
        destination: '/guides/ai-for-cpg-operations',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'logicagencyinc.com' }],
        destination: 'https://www.logicagencyinc.com/:path*',
        permanent: true,
      },
      {
        source: '/blog/what-fractional-operations-team-does',
        destination: '/blog/fractional-supply-chain-operations',
        permanent: true,
      },
      {
        source: '/blog/when-to-hire-vp-operations-cpg',
        destination: '/blog/fractional-coo-vs-full-time-hire',
        permanent: true,
      },
      {
        source: '/blog/retail-readiness-checklist-cpg',
        destination: '/blog/dtc-to-retail-transition-checklist',
        permanent: true,
      },
      {
        source: '/blog/retail-chargebacks-cpg-brands',
        destination: '/blog/retail-chargebacks-prevention-guide',
        permanent: true,
      },
      {
        source: '/blog/outgrowing-first-manufacturer',
        destination: '/blog/supplier-transition-strategy-scaling-brands',
        permanent: true,
      },
      // Legacy Wix case study URLs
      { source: '/kiki-world', destination: '/work/epicutis', permanent: true },
      { source: '/vans-case-study', destination: '/#results', permanent: true },
      { source: '/amabrush-case-study', destination: '/#results', permanent: true },
      { source: '/musee-case-study', destination: '/#results', permanent: true },
      { source: '/client-work-signum-biosciences', destination: '/#results', permanent: true },
      { source: '/client-work-iuno', destination: '/#results', permanent: true },
      { source: '/adidas-case-study', destination: '/#results', permanent: true },
      // Legacy Wix page URLs
      { source: '/services', destination: '/#services', permanent: true },
      { source: '/contact', destination: 'https://calendly.com/jordan-harper-packaging/logic-agency-readiness', permanent: false },
      { source: '/about', destination: '/', permanent: true },
      { source: '/about-us', destination: '/', permanent: true },
      { source: '/about-1-1', destination: '/', permanent: true },
      { source: '/projects', destination: '/#results', permanent: true },
      { source: '/collaboration', destination: '/', permanent: true },
      { source: '/home-1', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      // Legacy Wix blog post URLs
      { source: '/post/:slug*', destination: '/blog', permanent: true },
      // Legacy category/tag pages
      { source: '/blog/categories/:slug*', destination: '/blog', permanent: true },
      { source: '/blog/tags/:slug*', destination: '/blog', permanent: true },
      // Other legacy pages
      { source: '/life-fuels', destination: '/#results', permanent: true },
      { source: '/overseas-packaging-manufacturing', destination: '/guides/packaging-sourcing', permanent: true },
      { source: '/beauty-cosmetic-skincare-packaging', destination: '/guides', permanent: true },
      { source: '/beauty-cosmetic-skincare-packaging-examples', destination: '/guides', permanent: true },
      { source: '/free-sustainable-packaging-audit', destination: '/guides/sustainable-packaging-cpg', permanent: true },
      { source: '/certifications', destination: '/', permanent: true },
      // French-language legacy pages
      { source: '/a-propos', destination: '/', permanent: true },
      { source: '/activites', destination: '/', permanent: true },
      { source: '/nous-contacter', destination: '/', permanent: true },
      { source: '/mentions-legales', destination: '/', permanent: true },
      { source: '/qualite', destination: '/', permanent: true },
      { source: '/quality', destination: '/', permanent: true },
      { source: '/qui-sommes-nous', destination: '/', permanent: true },
      { source: '/expertise', destination: '/#services', permanent: true },
      { source: '/technology-packaging', destination: '/guides', permanent: true },
      { source: '/portfolio', destination: '/#results', permanent: true },
    ];
  },
};

export default nextConfig;
