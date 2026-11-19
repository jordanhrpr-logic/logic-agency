import CESClient from './CESClient';

export const metadata = {
  title: 'Logic Agency at CES 2027 — Packaging & Supply Chain for Funded Hardware Brands',
  description: 'Meet Logic Agency at CES Jan 6-9. Fractional supply chain operations for funded hardware and consumer electronics brands. Book a 15-minute meeting.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/ces' },
  openGraph: {
    title: 'Logic Agency at CES 2027',
    description: 'Fractional supply chain operations for funded hardware brands. Book a meeting at CES Jan 6-9.',
    url: 'https://www.logicagencyinc.com/ces',
    type: 'website',
    siteName: 'Logic Agency Inc.',
    images: [{ url: 'https://www.logicagencyinc.com/images/og-homepage.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logic Agency at CES 2027',
    description: 'Fractional supply chain operations for funded hardware brands. Book a meeting at CES.',
    images: ['https://www.logicagencyinc.com/images/og-homepage.jpg'],
  },
};

export default function CESPage() {
  return <CESClient />;
}
