import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-WWFEYSH2M3';

export const metadata = {
  title: 'Logic Agency Inc. — Retail Packaging & Supply Chain Ops for Scaling Brands',
  description: 'Your outsourced retail packaging and supply chain operations team. Monthly retainers for brands in beauty, wellness, CPG, and tech wearables.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');` }} />
          </>
        )}
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
