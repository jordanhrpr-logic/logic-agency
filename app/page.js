import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import FadeIn from '@/components/FadeIn';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata = {
  title: 'Logic Agency Inc. — Packaging, Supply Chain & Operations for Scaling Brands',
  description: 'Logic Agency is your outsourced packaging, supply chain, and operations team. Monthly retainer packages for brands in beauty, wellness, CPG, and tech wearables. From packaging design to global sourcing to retail execution.',
  keywords: 'packaging operations, retail packaging compliance, packaging sourcing, supply chain management, CPG packaging, DTC to retail packaging, fractional ops team, operations outsourcing',
};

export default function HomePage() {
  return (
    <>
      <Nav variant="home" />

      {/* HERO */}
      <section className="hero gl">
        <div className="hi">
          <div className="ht">Packaging &middot; Supply Chain &middot; Operations</div>
          <h1>Your packaging, supply chain, and operations team &mdash; <span className="o">without the payroll.</span></h1>
          <p className="hero-sub">We embed into growing brands as their operational backbone. From packaging design to global sourcing to retail execution &mdash; we don&apos;t just advise, we get our hands dirty.</p>
          <div className="hb">
            <a href="mailto:jordan@logicagencyinc.com?subject=Let's Talk — Packaging %26 Supply Chain" className="bt bo">Start a Conversation &rarr;</a>
            <a href="#pricing" className="bt bg">See Pricing</a>
          </div>
          <div className="trust">
            <span className="trust-label">Trusted by</span>
            <div className="trust-logos">
              <span>Adidas</span><span>Vans</span><span>Target</span><span>Disney</span><span>Puma</span><span>Paramount+</span><span>Spotify</span><span>Epicutis</span><span>A24</span>
            </div>
          </div>
        </div>
      </section>

      {/* SITUATIONS */}
      <section id="situations" className="sc gl">
        <div className="si">
          <div className="sl">Sound Familiar?</div>
          <div className="or"></div>
          <h2 className="sh">Brands come to us when <span className="o">something&apos;s about to break.</span></h2>
          <p className="ss">You don&apos;t need another vendor. You need someone who owns the problem end to end.</p>
          <FadeIn className="sit-grid">
            <div className="sit">
              <p className="sit-q">&ldquo;We just got a PO from Target and our packaging isn&apos;t retail-ready.&rdquo;</p>
              <p>Case packs, pallet configurations, UPC placement, retailer-specific compliance specs. You have 60 days and your current packaging won&apos;t pass. We get you retail-ready without starting from scratch.</p>
            </div>
            <div className="sit">
              <p className="sit-q">&ldquo;We&apos;re scaling fast and our supply chain is held together with spreadsheets and prayers.&rdquo;</p>
              <p>Four vendors, three freight forwarders, and a founder managing it all from a Google Sheet. Every handoff is a failure point. We consolidate the whole chain into one accountable team.</p>
            </div>
            <div className="sit">
              <p className="sit-q">&ldquo;We&apos;re entering the US market and need someone who knows retail, freight, and compliance.&rdquo;</p>
              <p>International brands underestimate US retail complexity. Retailer-specific packaging specs, freight routing, customs compliance, 3PL coordination. We&apos;ve done it across 15+ countries and know where brands get burned.</p>
            </div>
            <div className="sit">
              <p className="sit-q">&ldquo;Our founder is spending 20 hours a week on operations instead of growing the business.&rdquo;</p>
              <p>It worked at 10K units. At 100K it&apos;s unsustainable. You need ops infrastructure but building an in-house team costs $800K+ per year. We give you the same capability on a monthly retainer.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section id="pillars" className="sc wh">
        <div className="si">
          <div className="sl">What We Do</div>
          <div className="or"></div>
          <h2 className="sh">Three pillars. <span className="o">One operational team.</span></h2>
          <FadeIn className="hw-grid">
            <div className="hw">
              <div className="hw-n"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg></div>
              <h3>Packaging Design &amp; Engineering</h3>
              <p>Structural design, prototyping, retail packaging, displays, shelf strategy. Every design is built with manufacturing and retail constraints already solved.</p>
            </div>
            <div className="hw">
              <div className="hw-n"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg></div>
              <h3>Supply Chain &amp; Sourcing</h3>
              <p>Global supplier network across 15+ countries. Factory vetting, production management, freight, quality control, cost optimization. We find the right partners and manage the relationships.</p>
            </div>
            <div className="hw">
              <div className="hw-n"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg></div>
              <h3>Operations &amp; Retail Execution</h3>
              <p>Inventory planning, retail compliance, go-to-market execution, 3PL coordination, demand forecasting. The infrastructure that lets brands scale without building a 10-person ops team.</p>
            </div>
          </FadeIn>
          <p className="hw-diff">Traditional agencies advise and hand off. We embed and execute. That&apos;s the difference between a vendor and a partner.</p>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section id="pricing" className="sc dks gd">
        <div className="si">
          <div className="sl">Plans</div>
          <div className="or"></div>
          <h2 className="sh">A packaging, supply chain, and ops team at a <span className="o">fraction of the cost.</span></h2>
          <p className="ss">Month-to-month. No long-term contracts. Scope that flexes with your business.</p>
          <FadeIn className="tiers">
            {/* STARTER */}
            <div className="tier tier-s">
              <span className="tier-badge">Starter</span>
              <h3>Advisory &amp; Sourcing</h3>
              <span className="tier-price"><strong>$2.5-3K</strong> /month</span>
              <p className="tier-desc">An expert in your corner. Packaging and retail advisory on demand for brands that need guidance but aren&apos;t ready for a full operational handoff.</p>
              <ul className="tier-list">
                <li>Packaging sourcing and vendor management</li>
                <li>Material and structural recommendations</li>
                <li>Retail packaging guidance</li>
                <li>Cost analysis and optimization</li>
                <li>Dedicated Slack/email access</li>
              </ul>
              <p className="tier-for">Best for: Early-stage brands with 1-5 SKUs preparing for their first production runs or retail conversations.</p>
            </div>
            {/* GROWTH */}
            <div className="tier tier-g">
              <span className="tier-badge">Most Popular</span>
              <h3>Packaging Program Management</h3>
              <span className="tier-price"><strong>$5-7K</strong> /month</span>
              <p className="tier-desc">We actively own your packaging program. Sourcing, vendor coordination, retail packaging execution, and supply chain management so your team can focus on selling.</p>
              <ul className="tier-list">
                <li>Everything in Starter</li>
                <li>Full packaging program ownership</li>
                <li>Supplier negotiations and QC</li>
                <li>Retail compliance and shelf-readiness</li>
                <li>New SKU development and launches</li>
                <li>Weekly strategy syncs</li>
              </ul>
              <p className="tier-for">Best for: Brands doing 50K-500K+ units with active retail relationships or entering new channels.</p>
            </div>
            {/* ENTERPRISE */}
            <div className="tier tier-e">
              <span className="tier-badge">Enterprise</span>
              <h3>Embedded Operations</h3>
              <span className="tier-price"><strong>$10K+</strong> /month</span>
              <p className="tier-desc">A complete supply chain and packaging operations team. We manage packaging, inventory, logistics, retail execution, and vendor operations end to end.</p>
              <ul className="tier-list">
                <li>Everything in Growth</li>
                <li>Inventory management and demand planning</li>
                <li>3PL and fulfillment oversight</li>
                <li>Import/export coordination</li>
                <li>Retail launch strategy and sales support</li>
                <li>Dedicated ops lead</li>
              </ul>
              <p className="tier-for">Best for: Brands at scale, international market entrants, or companies replacing an in-house ops team.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* METRICS */}
      <section className="sc dks gd">
        <div className="si">
          <FadeIn className="m-grid">
            <div className="mi"><div className="mn">7x</div><div className="ml">SKU Growth</div><div className="md">Scaled Epicutis from 3 to 21+ SKUs</div></div>
            <div className="mi"><div className="mn">20%</div><div className="ml">Shipping Saved</div><div className="md">Smaller footprints, better pallet efficiency</div></div>
            <div className="mi"><div className="mn">95%</div><div className="ml">Material Reduced</div><div className="md">Engineered out excess without losing brand</div></div>
            <div className="mi"><div className="mn">$0</div><div className="ml">Cost to Upgrade</div><div className="md">Premium overseas packaging at same landed cost</div></div>
          </FadeIn>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="results" className="sc wh">
        <div className="si">
          <div className="sl">Client Work</div>
          <div className="or"></div>
          <h2 className="sh">Real brands. <span className="o">Real results.</span></h2>
          <p className="ss">From startup launches to enterprise operations, here&apos;s what embedded partnership looks like.</p>
          <FadeIn className="cg">
            <div className="cc">
              <div className="cm"><img src="/images/epicutis.jpg" alt="Epicutis premium skincare packaging by Logic Agency" /></div>
              <div className="cb">
                <div className="cn">Packaging + Operations &middot; Enterprise Tier</div>
                <h3>From 3 SKUs to 21+ With Full Packaging Operations</h3>
                <p>We own the entire packaging program for Epicutis &mdash; sourcing, engineering, vendor management, and a managed inventory system that cut time from order to cash.</p>
                <div className="cx"><div className="cz"><strong>7x</strong><span>SKU Growth</span></div><div className="cz"><strong>15%</strong><span>Cost Savings</span></div><div className="cz"><strong>90-Day</strong><span>Inventory Plan</span></div></div>
              </div>
            </div>
            <div className="cc">
              <div className="cm"><img src="/images/audio-enhancement.jpg" alt="Audio enhancement classroom microphone packaging by Logic Agency" /></div>
              <div className="cb">
                <div className="cn">Packaging + Sourcing &middot; Growth Tier</div>
                <h3>Packaging System That Serves as a Product Hub</h3>
                <p>Created a packaging system for classroom microphone equipment that functions as a daily-use hub, not just a shipping container. Premium overseas production at the same landed cost.</p>
                <div className="cx"><div className="cz"><strong>20%</strong><span>Shipping Saved</span></div><div className="cz"><strong>$0</strong><span>Upgrade Cost</span></div><div className="cz"><strong>4+</strong><span>SKUs Expanded</span></div></div>
              </div>
            </div>
            <div className="cc">
              <div className="cm"><img src="/images/gesine.jpg" alt="Gesine pre-seed brand packaging by Logic Agency" /></div>
              <div className="cb">
                <div className="cn">Packaging + Operations &middot; Growth Tier</div>
                <h3>Packaging Built for Launch and Built to Scale</h3>
                <p>Developing a complete packaging system for a pre-seed brand &mdash; engineered not just for their first run, but to scale into commercial volumes and retail distribution.</p>
                <div className="cx"><div className="cz"><strong>Launch</strong><span>Ready System</span></div><div className="cz"><strong>Retail</strong><span>Scalable</span></div><div className="cz"><strong>Full</strong><span>Program Mgmt</span></div></div>
              </div>
            </div>
            <div className="cc">
              <div className="cm"></div>
              <div className="cb">
                <div className="cn">Supply Chain + Market Entry &middot; Enterprise Tier</div>
                <h3>US Mainstream Retail Entry for Global Snack Brand</h3>
                <p>Managing US market entry for Haldiram&apos;s &mdash; packaging adaptation for American retail, supply chain buildout, Expo West launch planning, and retail compliance across major US channels.</p>
                <div className="cx"><div className="cz"><strong>US</strong><span>Market Entry</span></div><div className="cz"><strong>Expo</strong><span>West Launch</span></div><div className="cz"><strong>Retail</strong><span>Adaptation</span></div></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="sc gl">
        <div className="si">
          <div className="sl">Industries</div>
          <div className="or"></div>
          <h2 className="sh">Deep expertise in <span className="o">physical product categories.</span></h2>
          <p className="ss">We work with founder-led brands shipping physical products &mdash; from pre-launch to $20M+ in revenue.</p>
          <FadeIn className="ind-grid">
            <div className="ind">
              <h3>Beauty &amp; Wellness</h3>
              <p>Skincare, cosmetics, personal care, supplements. Packaging that protects formulations and communicates premium positioning.</p>
            </div>
            <div className="ind">
              <h3>Consumer Packaged Goods</h3>
              <p>Food, beverage, household. Retail-ready packaging that meets compliance requirements and moves on shelf.</p>
            </div>
            <div className="ind">
              <h3>Tech &amp; Wearables</h3>
              <p>Consumer electronics, wearable devices, hardware. Packaging systems that protect sensitive components and deliver brand experience.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="sc dks gd">
        <div className="si">
          <div className="sl">FAQ</div>
          <div className="or"></div>
          <h2 className="sh">Common questions from <span className="o">brands like yours.</span></h2>
          <FaqAccordion />
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="sc dks gd ctsc">
        <div className="ctb">
          <h2>Ready to stop <span className="o">managing it all yourself?</span></h2>
          <p>Tell us what&apos;s going on with your packaging, supply chain, or operations. We&apos;ll be honest about whether we can help and which tier makes sense. No pitch deck, no pressure.</p>
          <div className="cbt">
            <a href="mailto:jordan@logicagencyinc.com?subject=Let's Talk — Packaging %26 Supply Chain" className="bt bo">Start a Conversation &rarr;</a>
            <a href="tel:+13853686837" className="bt bw">Call 385.368.6837</a>
          </div>
          <span className="csb">Jordan Harper, Founder &middot; Orange County, CA &amp; Salt Lake City, UT</span>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
