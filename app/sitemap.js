export default function sitemap() {
  const baseUrl = 'https://logicagencyinc.com';
  const d15 = new Date('2026-06-15');
  const d16 = new Date('2026-06-16');
  const d17 = new Date('2026-06-17');
  const d20 = new Date('2026-06-20');
  const d22 = new Date('2026-06-22');

  return [
    { url: baseUrl, lastModified: d15 },
    { url: `${baseUrl}/work/audio-enhancement`, lastModified: d20 },
    { url: `${baseUrl}/work/epicutis`, lastModified: d20 },
    { url: `${baseUrl}/blog`, lastModified: d17 },
    // Blog — Transcript-backed operational lessons
    { url: `${baseUrl}/blog/retail-operations-audit`, lastModified: d22 },
    { url: `${baseUrl}/blog/retail-fill-rate-scorecard`, lastModified: d22 },
    { url: `${baseUrl}/blog/sps-commerce-integration-checklist`, lastModified: d22 },
    { url: `${baseUrl}/blog/packaging-cost-reduction-case-study`, lastModified: d22 },
    { url: `${baseUrl}/blog/us-market-entry-retail-operations`, lastModified: d22 },
    // Blog — Case-study-derived operational lessons
    { url: `${baseUrl}/blog/supplier-transition-strategy-scaling-brands`, lastModified: d22 },
    { url: `${baseUrl}/blog/outgrowing-first-manufacturer`, lastModified: d22 },
    { url: `${baseUrl}/blog/managed-packaging-inventory-program`, lastModified: d22 },
    { url: `${baseUrl}/blog/packaging-operations-sku-growth`, lastModified: d22 },
    { url: `${baseUrl}/blog/quality-containment-supplier-transition`, lastModified: d22 },
    // Blog — Batch 1 (original 7)
    { url: `${baseUrl}/blog/retail-margin-compression-dtc-wholesale`, lastModified: d15 },
    { url: `${baseUrl}/blog/retailer-requirements-emerging-brands`, lastModified: d15 },
    { url: `${baseUrl}/blog/inventory-management-beauty-brands`, lastModified: d15 },
    { url: `${baseUrl}/blog/what-fractional-operations-team-does`, lastModified: d15 },
    { url: `${baseUrl}/blog/when-to-hire-vp-operations-cpg`, lastModified: d15 },
    { url: `${baseUrl}/blog/retail-readiness-checklist-cpg`, lastModified: d15 },
    { url: `${baseUrl}/blog/vendor-diversification-strategy-cpg-brands`, lastModified: d15 },
    // Blog — Batch 2 (5 posts)
    { url: `${baseUrl}/blog/edi-setup-small-brands`, lastModified: d16 },
    { url: `${baseUrl}/blog/how-to-get-products-into-retail-stores`, lastModified: d16 },
    { url: `${baseUrl}/blog/operations-packaging-scaling-brands`, lastModified: d16 },
    { url: `${baseUrl}/blog/packaging-partner-vs-vendor`, lastModified: d16 },
    { url: `${baseUrl}/blog/first-90-days-retail-operations-playbook`, lastModified: d16 },
    // Blog — Batch A (5 posts)
    { url: `${baseUrl}/blog/routing-guide-compliance-retail`, lastModified: d17 },
    { url: `${baseUrl}/blog/retail-inventory-planning-90-day`, lastModified: d17 },
    { url: `${baseUrl}/blog/how-to-switch-3pl-without-losing-retail`, lastModified: d17 },
    { url: `${baseUrl}/blog/supply-chain-audit-what-it-finds`, lastModified: d17 },
    { url: `${baseUrl}/blog/dtc-to-retail-transition-checklist`, lastModified: d17 },
    // Blog — Batch B (5 posts)
    { url: `${baseUrl}/blog/edi-compliance-consumer-brands`, lastModified: d17 },
    { url: `${baseUrl}/blog/retail-chargebacks-prevention-guide`, lastModified: d17 },
    { url: `${baseUrl}/blog/reduce-packaging-costs-without-sacrificing-quality`, lastModified: d17 },
    { url: `${baseUrl}/blog/global-packaging-sourcing`, lastModified: d17 },
    { url: `${baseUrl}/blog/supply-chain-technology-stack`, lastModified: d17 },
    // Blog — Batch C (5 posts)
    { url: `${baseUrl}/blog/retail-chargebacks-cpg-brands`, lastModified: d17 },
    { url: `${baseUrl}/blog/fractional-supply-chain-operations`, lastModified: d17 },
    { url: `${baseUrl}/blog/fractional-coo-vs-full-time-hire`, lastModified: d17 },
    { url: `${baseUrl}/blog/dtc-to-retail-supply-chain`, lastModified: d17 },
    { url: `${baseUrl}/blog/packaging-cost-per-unit-benchmarks`, lastModified: d17 },
    { url: `${baseUrl}/guides`, lastModified: new Date('2026-06-15') },
    { url: `${baseUrl}/guides/retail-ready-packaging`, lastModified: new Date('2026-06-15') },
    { url: `${baseUrl}/guides/packaging-cost-reduction`, lastModified: new Date('2026-06-15') },
    { url: `${baseUrl}/guides/packaging-system-that-scales`, lastModified: new Date('2026-06-15') },
    { url: `${baseUrl}/guides/packaging-sourcing`, lastModified: new Date('2026-06-15') },
    { url: `${baseUrl}/guides/retail-readiness`, lastModified: new Date('2026-06-15') },
    { url: `${baseUrl}/guides/first-90-days-in-retail`, lastModified: new Date('2026-06-15') },
    { url: `${baseUrl}/guides/ai-for-cpg-operations`, lastModified: new Date('2026-06-15') },
    { url: `${baseUrl}/guides/fractional-supply-chain-operations`, lastModified: new Date('2026-06-15') },
    { url: `${baseUrl}/guides/fractional-coo-vs-full-time-hire`, lastModified: new Date('2026-06-15') },
    { url: `${baseUrl}/guides/dtc-to-retail-supply-chain`, lastModified: new Date('2026-06-15') },
    { url: `${baseUrl}/guides/retail-chargebacks`, lastModified: new Date('2026-06-15') },
    { url: `${baseUrl}/guides/3pl-selection-guide`, lastModified: new Date('2026-06-15') },
  ];
}
