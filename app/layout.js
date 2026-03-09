import './globals.css';

export const metadata = {
  title: 'Logic Agency Inc. — Packaging & Supply Chain Ops for Scaling Brands',
  description: 'Logic Agency is your outsourced packaging and supply chain operations team. Monthly retainer packages for brands in beauty, wellness, CPG, and tech wearables.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
