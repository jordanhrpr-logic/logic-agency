import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import EmailButton from '@/components/EmailButton';

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Logic Agency Blog",
  "description": "Operational advice on supply chain, retail launch, packaging, and fractional operations for consumer product brands.",
  "url": "https://logicagencyinc.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Logic Agency Inc.",
    "url": "https://logicagencyinc.com"
  }
};

export const metadata = {
  title: 'Blog — Supply Chain & Retail Operations for CPG Brands — Logic Agency Inc.',
  description: 'Operational advice on retail launch, supply chain, packaging economics, and fractional operations for consumer product brands doing $5M–$20M in revenue.',
  alternates: { canonical: 'https://logicagencyinc.com/blog' },
};

export default function BlogIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Nav />

      {/* HERO */}
      <section className="gd" style={{ padding: '80px 60px 64px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--o)', marginBottom: '16px' }}>Logic Agency</p>
          <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', color: '#fff', margin: '0 0 20px' }}>Operations Insights</h1>
          <p style={{ fontSize: '18px', lineHeight: 1.65, color: 'rgba(255,255,255,.75)', maxWidth: '580px', margin: 0 }}>Practical advice on supply chain, retail launch, packaging economics, and fractional operations — for brands scaling from $5M to $20M+ in revenue.</p>
        </div>
      </section>

      {/* BLOG GRID */}
      <div className="blog-grid">
            <a href="/blog/retail-margin-compression-dtc-wholesale" className="blog-card">
              <img src="/images/port-launch.jpg" alt="Consumer product brand evaluating retail expansion economics" className="blog-card-img" />
              <div className="blog-card-body">
                <div className="blog-card-tag">Economics &middot; 10 min read</div>
                <h2>DTC vs Retail Margins: What Founders Discover After the First PO</h2>
                <p>A brand healthy at 65–70% DTC gross margin can land at 20–40% contribution margin in retail. Here's the full cost stack — and how to model it before you say yes to a buyer.</p>
                <span className="blog-card-link">Read Article &rarr;</span>
              </div>
            </a>
            <a href="/blog/retailer-requirements-emerging-brands" className="blog-card">
              <img src="/images/port-retail.jpg" alt="Retail buyer requirements and onboarding for emerging consumer brands" className="blog-card-img" />
              <div className="blog-card-body">
                <div className="blog-card-tag">Retail Launch &middot; 11 min read</div>
                <h2>What Retailers Actually Want from Emerging Brands</h2>
                <p>Retail buyers evaluate category fit, margin structure, velocity proof, operational readiness, and compliance documentation before placing a first PO. Most brands focus on the wrong things.</p>
                <span className="blog-card-link">Read Article &rarr;</span>
              </div>
            </a>
            <a href="/blog/inventory-management-beauty-brands" className="blog-card">
              <img src="/images/port-skincare.jpg" alt="Beauty brand inventory management across DTC and retail channels" className="blog-card-img" />
              <div className="blog-card-body">
                <div className="blog-card-tag">Operations &middot; 11 min read</div>
                <h2>Inventory Management for Beauty Brands</h2>
                <p>Beauty inventory is harder than most CPG categories — shade proliferation, expiration dates, 12–16 week lead times, and multi-channel demand. Here's the framework that actually works.</p>
                <span className="blog-card-link">Read Article &rarr;</span>
              </div>
            </a>
            <a href="/blog/what-fractional-operations-team-does" className="blog-card">
              <img src="/images/epicutis.jpg" alt="Logic Agency fractional operations team at work for Epicutis skincare brand" className="blog-card-img" />
              <div className="blog-card-body">
                <div className="blog-card-tag">Fractional Ops &middot; 10 min read</div>
                <h2>What a Fractional Operations Team Actually Does</h2>
                <p>Most founders hear "fractional ops" and ask: what do they actually do every week? Here's the practical answer — audit, system-build, vendor management, and reporting without the $600K department.</p>
                <span className="blog-card-link">Read Article &rarr;</span>
              </div>
            </a>
            <a href="/blog/when-to-hire-vp-operations-cpg" className="blog-card">
              <img src="/images/port-sourcing.jpg" alt="Supply chain operations leadership decision for consumer product brand" className="blog-card-img" />
              <div className="blog-card-body">
                <div className="blog-card-tag">Leadership &middot; 10 min read</div>
                <h2>When Should a CPG Brand Hire a VP of Operations?</h2>
                <p>A CPG brand should hire a VP of Operations when the work is permanent, cross-functional, and large enough for one senior leader to own every day. Most brands aren't ready the first time they feel operational pain.</p>
                <span className="blog-card-link">Read Article &rarr;</span>
              </div>
            </a>
            <a href="/blog/retail-readiness-checklist-cpg" className="blog-card">
              <img src="/images/haldirams.jpg" alt="Haldiram's US retail launch — Logic Agency retail readiness in practice" className="blog-card-img" />
              <div className="blog-card-body">
                <div className="blog-card-tag">Retail Launch &middot; 12 min read</div>
                <h2>Retail Readiness Checklist: Everything You Need Before the First PO</h2>
                <p>A retail readiness checklist for CPG brands covers six operational categories — packaging, EDI, inventory, logistics, documentation, and financials. Brands that skip steps absorb $50,000–$200,000 in first-year mistakes.</p>
                <span className="blog-card-link">Read Article &rarr;</span>
              </div>
            </a>
            <a href="/blog/vendor-diversification-strategy-cpg-brands" className="blog-card">
              <img src="/images/port-us-retail.jpg" alt="Supply chain vendor diversification strategy for consumer product brands" className="blog-card-img" />
              <div className="blog-card-body">
                <div className="blog-card-tag">Supply Chain &middot; 10 min read</div>
                <h2>Vendor Diversification Strategy for CPG Brands</h2>
                <p>Single-source supply chains break — and when they do, the cost isn't a line item. It's a missed retail launch or a stockout on your hero SKU. Here's the 80/20 dual-sourcing framework.</p>
                <span className="blog-card-link">Read Article &rarr;</span>
              </div>
            </a>
      </div>

      {/* CTA */}
      <section className="cta-band gd">
        <div className="cta-band-inner">
          <h2>Have an Operations<br /><em>Question?</em></h2>
          <p>Book a 30-minute call. We&apos;ll give you a straight answer &mdash; no sales pitch.</p>
          <EmailButton className="bo" label="Book a Call" />
        </div>
      </section>

      <FooterHome />
    </>
  );
}
