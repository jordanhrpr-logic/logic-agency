export default function sitemap() {
  const baseUrl = 'https://logicagencyinc.com';

  return [
    { url: baseUrl, lastModified: new Date('2025-02-01') },
    { url: `${baseUrl}/guides/retail-ready-packaging`, lastModified: new Date('2025-02-01') },
    { url: `${baseUrl}/guides/packaging-cost-reduction`, lastModified: new Date('2025-02-01') },
    { url: `${baseUrl}/guides/packaging-system-that-scales`, lastModified: new Date('2025-02-01') },
    { url: `${baseUrl}/guides/packaging-sourcing`, lastModified: new Date('2025-02-01') },
    { url: `${baseUrl}/guides/retail-readiness`, lastModified: new Date('2025-02-01') },
  ];
}
