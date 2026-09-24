// Shared metadata builder for evergreen guides.
// Ensures every guide has canonical URL, per-guide OG image, Article OpenGraph type,
// Twitter summary_large_image card, and consistent title suffix.

const SITE = 'https://www.logicagencyinc.com';
const DEFAULT_OG = '/images/og-homepage.jpg';

export function buildGuideMetadata(guide) {
  const url = `${SITE}/guides/${guide.slug}`;
  const image = `${SITE}${guide.ogImage || DEFAULT_OG}`;
  const title = `${guide.title} — Logic Agency Inc.`;

  return {
    title,
    description: guide.description,
    keywords: guide.keywords,
    authors: [{ name: 'Jordan Harper' }],
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: guide.title,
      description: guide.description,
      url,
      siteName: 'Logic Agency Inc.',
      images: [{ url: image, width: 1200, height: 630, alt: guide.title }],
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
      authors: ['Jordan Harper'],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.description,
      images: [image],
    },
  };
}
