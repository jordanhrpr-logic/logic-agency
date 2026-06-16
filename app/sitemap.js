export default function sitemap() {
  const baseUrl = 'https://logicagencyinc.com';
  const date = new Date('2026-06-15');

  return [
    { url: baseUrl, lastModified: date },
    { url: `${baseUrl}/guides`, lastModified: date },
    // Existing guides
    { url: `${baseUrl}/guides/retail-readiness`, lastModified: date },
    { url: `${baseUrl}/guides/first-90-days-in-retail`, lastModified: date },
    { url: `${baseUrl}/guides/retail-ready-packaging`, lastModified: date },
    { url: `${baseUrl}/guides/packaging-cost-reduction`, lastModified: date },
    { url: `${baseUrl}/guides/packaging-system-that-scales`, lastModified: date },
    { url: `${baseUrl}/guides/packaging-sourcing`, lastModified: date },
    { url: `${baseUrl}/guides/ai-for-cpg-operations`, lastModified: date },
    { url: `${baseUrl}/guides/ops-team-without-hiring`, lastModified: date },
    // New guides (June 2026)
    { url: `${baseUrl}/guides/fractional-supply-chain-operations`, lastModified: date },
    { url: `${baseUrl}/guides/fractional-coo-vs-full-time-hire`, lastModified: date },
    { url: `${baseUrl}/guides/dtc-to-retail-supply-chain`, lastModified: date },
    { url: `${baseUrl}/guides/retail-chargebacks`, lastModified: date },
    { url: `${baseUrl}/guides/3pl-selection-guide`, lastModified: date },
  ];
}
