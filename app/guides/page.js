import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Supply Chain & Packaging Guides",
  "description": "Operational guides for scaling consumer product brands: retail readiness, packaging, supply chain, operations, and growth economics.",
  "url": "https://www.logicagencyinc.com/guides",
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": 26,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "url": "https://www.logicagencyinc.com/guides/retail-readiness", "name": "The Retail Readiness Bible" },
      { "@type": "ListItem", "position": 2, "url": "https://www.logicagencyinc.com/guides/first-90-days-in-retail", "name": "First 90 Days in Retail" },
      { "@type": "ListItem", "position": 3, "url": "https://www.logicagencyinc.com/guides/retail-ready-packaging", "name": "Getting Your Packaging Retail-Ready" },
      { "@type": "ListItem", "position": 4, "url": "https://www.logicagencyinc.com/guides/packaging-cost-reduction", "name": "Packaging Cost Reduction Without Sacrificing Brand" },
      { "@type": "ListItem", "position": 5, "url": "https://www.logicagencyinc.com/guides/packaging-system-that-scales", "name": "Building a Packaging System That Scales" },
      { "@type": "ListItem", "position": 6, "url": "https://www.logicagencyinc.com/guides/packaging-sourcing", "name": "How to Source Packaging Without Getting Burned" },
      { "@type": "ListItem", "position": 7, "url": "https://www.logicagencyinc.com/guides/ai-for-cpg-operations", "name": "The Operator's Guide to AI for CPG Operations" },
      { "@type": "ListItem", "position": 8, "url": "https://www.logicagencyinc.com/guides/fractional-supply-chain-operations", "name": "Fractional Supply Chain Operations" },
      { "@type": "ListItem", "position": 9, "url": "https://www.logicagencyinc.com/guides/fractional-coo-vs-full-time-hire", "name": "Fractional COO vs. Full-Time Hire" },
      { "@type": "ListItem", "position": 10, "url": "https://www.logicagencyinc.com/guides/dtc-to-retail-supply-chain", "name": "DTC to Retail Supply Chain" },
      { "@type": "ListItem", "position": 11, "url": "https://www.logicagencyinc.com/guides/retail-chargebacks", "name": "Retail Chargebacks for CPG Brands" },
      { "@type": "ListItem", "position": 12, "url": "https://www.logicagencyinc.com/guides/3pl-selection-guide", "name": "3PL Selection Guide" },
      { "@type": "ListItem", "position": 13, "url": "https://www.logicagencyinc.com/guides/retail-readiness-scorecard", "name": "40-Point Retail Readiness Scorecard" },
      { "@type": "ListItem", "position": 14, "url": "https://www.logicagencyinc.com/guides/cpg-working-capital-playbook", "name": "The CPG Working Capital Playbook" },
      { "@type": "ListItem", "position": 15, "url": "https://www.logicagencyinc.com/guides/landed-cost-playbook", "name": "Landed Cost Playbook" },
      { "@type": "ListItem", "position": 16, "url": "https://www.logicagencyinc.com/guides/co-manufacturer-selection", "name": "Co-Manufacturer Selection" },
      { "@type": "ListItem", "position": 17, "url": "https://www.logicagencyinc.com/guides/cpg-demand-forecasting", "name": "Demand Forecasting for CPG Brands" },
      { "@type": "ListItem", "position": 18, "url": "https://www.logicagencyinc.com/guides/cpg-gross-margin-playbook", "name": "The CPG Gross Margin Playbook" },
      { "@type": "ListItem", "position": 19, "url": "https://www.logicagencyinc.com/guides/cpg-broker-selection-playbook", "name": "CPG Broker Selection Playbook" },
      { "@type": "ListItem", "position": 20, "url": "https://www.logicagencyinc.com/guides/co-manufacturer-contracts-risk", "name": "Co-Manufacturer Contracts and Risk" },
      { "@type": "ListItem", "position": 21, "url": "https://www.logicagencyinc.com/guides/regional-to-national-retail-expansion", "name": "From Regional to National Retail" },
      { "@type": "ListItem", "position": 22, "url": "https://www.logicagencyinc.com/guides/distributor-onboarding-playbook", "name": "Distributor Onboarding Playbook" },
      { "@type": "ListItem", "position": 23, "url": "https://www.logicagencyinc.com/guides/cpg-channel-economics", "name": "Channel Economics" },
      { "@type": "ListItem", "position": 24, "url": "https://www.logicagencyinc.com/guides/sustainable-packaging-cpg", "name": "Sustainable Packaging for CPG Brands" },
      { "@type": "ListItem", "position": 25, "url": "https://www.logicagencyinc.com/guides/cpg-operations-kpis", "name": "CPG Operations KPI Dashboard" },
      { "@type": "ListItem", "position": 26, "url": "https://www.logicagencyinc.com/guides/ops-team-without-hiring", "name": "How to Build an Ops Team Without Hiring One" }
    ]
  }
};

export const metadata = {
  title: 'Supply Chain & Packaging Guides — Logic Agency Inc.',
  description: 'In-depth operational guides for scaling consumer product brands: retail readiness, packaging cost reduction, 3PL selection, retail chargebacks, DTC-to-retail transition, fractional operations, working capital, and landed cost.',
  keywords: 'supply chain guides CPG, packaging guides brand, retail readiness guide, 3PL selection guide, retail chargebacks guide, DTC to retail guide, fractional supply chain, CPG working capital, landed cost CPG',
  alternates: {
    canonical: 'https://www.logicagencyinc.com/guides',
  },
  openGraph: {
    title: 'Supply Chain & Packaging Guides — Logic Agency Inc.',
    description: 'Operational guides for scaling brands: retail readiness, packaging cost, 3PL selection, retail chargebacks, and more.',
    url: 'https://www.logicagencyinc.com/guides',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Supply Chain & Packaging Guides — Logic Agency Inc.',
    description: 'Operational guides for scaling brands: retail readiness, packaging cost, 3PL selection, retail chargebacks, and more.',
  },
};

export default function GuidesIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Nav />

      <section className="gl" style={{ padding: '80px 0 40px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 32px' }}>
          <p className="breadcrumb" style={{ marginBottom: 16 }}><a href="/">Logic Agency</a> &nbsp;/&nbsp; Guides</p>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1.5px', color: 'var(--bk)', marginBottom: 16 }}>
            Operational guides for <span className="o">scaling brands</span>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--gr)', lineHeight: 1.7, maxWidth: 640, marginBottom: 0 }}>
            Practical reference content from 20+ years of supply chain and packaging operations. No generic advice. Real numbers, real timelines, real decisions.
          </p>
        </div>
      </section>

      <section className="gl" style={{ padding: '20px 0 80px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 32px' }}>
          <div className="guides-grid">
            <a href="/guides/retail-readiness" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">15 min read</p>
                <h2>The Retail Readiness Bible</h2>
                <p>The complete operational playbook for launching and scaling in retail — compliance, packaging, logistics, inventory, and a 60-point checklist.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/first-90-days-in-retail" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">10 min read</p>
                <h2>First 90 Days in Retail</h2>
                <p>What changes once a brand moves from DTC into retailer systems — and how to survive the learning curve without losing shelf placement.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/retail-ready-packaging" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">8 min read</p>
                <h2>Getting Your Packaging Retail-Ready</h2>
                <p>Case packs, pallet specs, retailer compliance requirements, and the packaging timeline that most brands discover too late.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/packaging-cost-reduction" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">12 min read</p>
                <h2>Packaging Cost Reduction Without Sacrificing Brand</h2>
                <p>Where packaging margin silently leaks — DIM weight, over-engineering, markup stacking — and how brands typically save 15–30% without downgrading quality.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/packaging-system-that-scales" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">10 min read</p>
                <h2>Building a Packaging System That Scales</h2>
                <p>The difference between ordering packaging and building a packaging system — and why that distinction matters once SKU count grows.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/packaging-sourcing" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">10 min read</p>
                <h2>How to Source Packaging Without Getting Burned</h2>
                <p>The real sourcing process: supplier qualification, landed cost modeling, domestic vs. overseas math, and the mistakes that cost brands months and margin.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/ai-for-cpg-operations" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">12 min read</p>
                <h2>The Operator&apos;s Guide to AI for CPG Operations</h2>
                <p>Where AI is actually useful in supply chain and packaging operations, and where it creates more noise than signal.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/fractional-supply-chain-operations" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">12 min read</p>
                <h2>Fractional Supply Chain Operations: What It Is and When It Works</h2>
                <p>The embedded operations model for brands that need senior supply chain capability before the org chart is ready for a $600K+ full-time team.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/fractional-coo-vs-full-time-hire" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">10 min read</p>
                <h2>Fractional COO vs. Full-Time Hire: A Real Cost Comparison</h2>
                <p>Real cost ranges, hidden costs founders miss, and a decision framework for choosing between fractional operations and a full-time hire.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/dtc-to-retail-supply-chain" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">10 min read</p>
                <h2>DTC to Retail Supply Chain: What Most Brands Get Wrong</h2>
                <p>The 5 systems you need before signing a retail PO — and the retail margin math most DTC brands underestimate until the first chargeback.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/retail-chargebacks" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">10 min read</p>
                <h2>Retail Chargebacks Explained: The CPG Brand&apos;s Guide</h2>
                <p>Automatic penalty deductions, real cost ranges per violation, a prevention framework, and when to dispute vs. absorb.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/3pl-selection-guide" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">12 min read</p>
                <h2>3PL Selection Guide for Consumer Product Brands</h2>
                <p>How to evaluate fulfillment partners on channel fit, retail compliance, pricing structure, and red flags — before signing a long-term contract.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/cpg-working-capital-playbook" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">14 min read</p>
                <h2>The CPG Working Capital Playbook</h2>
                <p>Loss problem or timing problem? The 90&ndash;180 day cash conversion cycle, gross-to-net deduction math, and non-dilutive funding tools for CPG brands.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/landed-cost-playbook" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">12 min read</p>
                <h2>Landed Cost Playbook for CPG Brands</h2>
                <p>The 6-line cost stack between your supplier quote and your P&amp;L &mdash; freight, duties, DIM weight, tooling, warehousing &mdash; and what the July 2026 USPS DIM changes are already costing you.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/sustainable-packaging-cpg" className="guide-card"><div className="guide-card-inner"><p className="guide-meta">15 min read</p><h2>Sustainable Packaging for CPG Brands</h2><p>PCR premiums, mono-material tradeoffs, five-state EPR liability, Walmart / Target / Sephora / Whole Foods scorecards, and FTC Green Guides claims language.</p><span className="guide-link">Read the guide &rarr;</span></div></a>
            <a href="/guides/distributor-onboarding-playbook" className="guide-card"><div className="guide-card-inner"><p className="guide-meta">16 min read</p><h2>The CPG Distributor Onboarding Playbook</h2><p>KeHE and UNFI category calendars, slotting ranges, MCB, EDI setup, and the first-90-day operating rhythm that turns a &quot;yes&quot; into reorders.</p><span className="guide-link">Read the guide &rarr;</span></div></a>
            <a href="/guides/cpg-gross-margin-playbook" className="guide-card"><div className="guide-card-inner"><p className="guide-meta">17 min read</p><h2>The CPG Gross Margin Playbook</h2><p>Channel-specific ranges, worked contribution-margin math, the five places margin leaks, and the freight moves that recover 2–5 points in 60–90 days.</p><span className="guide-link">Read the guide &rarr;</span></div></a>
            <a href="/guides/co-manufacturer-selection" className="guide-card"><div className="guide-card-inner"><p className="guide-meta">16 min read</p><h2>How to Find, Vet, and Scale With the Right Co-Manufacturer</h2><p>MOQ ranges by category, the 10-dimension scorecard, worked total-cost comparison of three quotes, and the operating rhythm that scales the relationship.</p><span className="guide-link">Read the guide &rarr;</span></div></a>
            <a href="/guides/cpg-demand-forecasting" className="guide-card"><div className="guide-card-inner"><p className="guide-meta">15 min read</p><h2>Demand Forecasting for CPG Brands</h2><p>Safety-stock and reorder-point formulas, worked SKU examples, monthly S&amp;OP rhythm, and MAPE tracking targets by growth stage.</p><span className="guide-link">Read the guide &rarr;</span></div></a>
            <a href="/guides/cpg-broker-selection-playbook" className="guide-card"><div className="guide-card-inner"><p className="guide-meta">14 min read</p><h2>How to Select, Manage, and Fire a CPG Broker</h2><p>Commission ranges by channel, the 8-dimension scorecard, first-90-day milestones, and the clean-transition playbook when the relationship stops working.</p><span className="guide-link">Read the guide &rarr;</span></div></a>
            <a href="/guides/co-manufacturer-contracts-risk" className="guide-card"><div className="guide-card-inner"><p className="guide-meta">15 min read</p><h2>Co-Manufacturer Contracts and Operational Risk</h2><p>The six clauses that matter more than price: IP, tooling, capacity commitment, quality and liability, force majeure, and exit terms.</p><span className="guide-link">Read the guide &rarr;</span></div></a>
            <a href="/guides/regional-to-national-retail-expansion" className="guide-card"><div className="guide-card-inner"><p className="guide-meta">16 min read</p><h2>From Regional to National Retail</h2><p>Sequencing (Sprouts → Whole Foods → Kroger → Target), working-capital math per retailer, distribution architecture, and OTIF exposure at national scale.</p><span className="guide-link">Read the guide &rarr;</span></div></a>
            <a href="/guides/cpg-channel-economics" className="guide-card"><div className="guide-card-inner"><p className="guide-meta">15 min read</p><h2>Amazon vs. DTC vs. Retail: Channel Economics</h2><p>Worked side-by-side of DTC, Amazon FBA, and wholesale — gross margin, contribution margin, and the operating implications of channel choice.</p><span className="guide-link">Read the guide &rarr;</span></div></a>
            <a href="/guides/cpg-operations-kpis" className="guide-card"><div className="guide-card-inner"><p className="guide-meta">13 min read</p><h2>The CPG Operations KPI Dashboard</h2><p>15 metrics that matter, formulas, target ranges by growth stage, and where each number actually lives in your systems.</p><span className="guide-link">Read the guide &rarr;</span></div></a>
          </div>
        </div>
      </section>

      <section className="cta-band gd">
        <div className="cta-inner">
          <h2>Need ops support, not <span className="o">just reading material?</span></h2>
          <p>Every retainer starts with a conversation about what&apos;s actually breaking. We&apos;ll tell you in 30 minutes whether a retainer makes sense.</p>
          <div className="cta-btns">
            <a href="/#pricing" className="bt bo">See Plans &amp; Pricing &rarr;</a>
          </div>
          <span className="cta-sub">Logic Agency Inc. &middot; Packaging &amp; Supply Chain Ops on a Monthly Retainer</span>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
