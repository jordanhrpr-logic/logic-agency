import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import FadeIn from '@/components/FadeIn';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata = {
  title: 'Logic Agency Inc. — Packaging & Supply Chain Ops for Scaling Brands',
  description: 'Logic Agency is your outsourced packaging and supply chain operations team. Monthly retainer packages for brands in beauty, wellness, CPG, and tech wearables. From packaging sourcing to retail execution.',
  keywords: 'packaging operations, retail packaging compliance, packaging sourcing, supply chain management, CPG packaging, DTC to retail packaging, fractional ops team',
};

export default function HomePage() {
  return (
    <>
      <Nav variant="home" />

      {/* HERO */}
      <section className="hero gl">
        <div className="hi">
          <div className="ht">Packaging &middot; Supply Chain &middot; Retail Execution</div>
          <h1>Your packaging and supply chain ops team. <span className="o">Without the payroll.</span></h1>
          <p className="hero-sub">Logic embeds as your operations team on a monthly retainer. We handle packaging sourcing, supply chain management, and retail execution so you can focus on growing your brand.</p>
          <div className="hb">
            <a href="#pricing" className="bt bo">See Plans &amp; Pricing &rarr;</a>
            <a href="#results" className="bt bg">See Client Results</a>
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
              <p className="sit-q">&ldquo;We just got a PO from a major retailer and our packaging isn&apos;t ready.&rdquo;</p>
              <p>Case packs, pallet configurations, UPC placement, retailer-specific compliance specs. You have 60 days and your current packaging won&apos;t pass. We get you retail-ready without starting from scratch.</p>
            </div>
            <div className="sit">
              <p className="sit-q">&ldquo;Our packaging costs keep climbing and we don&apos;t know why.&rdquo;</p>
              <p>DIM weight overages, material waste, emergency freight, rework charges. The margin leaks are real but invisible until someone maps the full landed cost. That&apos;s the first thing we do.</p>
            </div>
            <div className="sit">
              <p className="sit-q">&ldquo;We&apos;re managing four vendors and nothing is coordinated.&rdquo;</p>
              <p>Your designer hands off to a structural engineer who hands off to a manufacturer who ships to a 3PL nobody&apos;s managing. Every handoff is a failure point. We consolidate the whole chain into one accountable team.</p>
            </div>
            <div className="sit">
              <p className="sit-q">&ldquo;We&apos;re scaling fast and our founder is still managing packaging.&rdquo;</p>
              <p>It worked at 10K units. At 100K it&apos;s unsustainable. You need ops infrastructure but building an in-house team costs $800K+ per year. We give you the same capability on a monthly retainer.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="sc wh">
        <div className="si">
          <div className="sl">How It Works</div>
          <div className="or"></div>
          <h2 className="sh">Operational support that <span className="o">starts in days, not months.</span></h2>
          <FadeIn className="hw-grid">
            <div className="hw">
              <div className="hw-n">1</div>
              <h3>Discovery Call</h3>
              <p>We learn your brand, your packaging situation, and where the gaps are. No pitch deck, just a real conversation about what&apos;s broken or about to break.</p>
            </div>
            <div className="hw">
              <div className="hw-n">2</div>
              <h3>Pick Your Plan</h3>
              <p>Choose the tier that matches your needs. Starter for advisory, Growth for active management, Enterprise for full operational ownership. Month to month, cancel anytime.</p>
            </div>
            <div className="hw">
              <div className="hw-n">3</div>
              <h3>We&apos;re Your Team</h3>
              <p>We embed into your workflow. Slack, email, weekly syncs. You get a supply chain ops team that&apos;s fluent in packaging systems and retail execution from day one.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section id="pricing" className="sc dks gd">
        <div className="si">
          <div className="sl">Plans</div>
          <div className="or"></div>
          <h2 className="sh">A packaging and ops team at a <span className="o">fraction of the cost.</span></h2>
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
          <p className="ss">From startup launches to enterprise packaging programs, here&apos;s what operational partnership looks like.</p>
          <FadeIn className="cg">
            <div className="cc">
              <div className="cm"><img src="/images/epicutis.jpg" alt="Epicutis premium skincare packaging by Logic Agency" /></div>
              <div className="cb">
                <div className="cn">Premium Skincare &middot; Enterprise Tier</div>
                <h3>From 3 SKUs to 21+ With Full Packaging Operations</h3>
                <p>We own the entire packaging program for Epicutis &mdash; sourcing, engineering, vendor management, and a managed inventory system that cut time from order to cash.</p>
                <div className="cx"><div className="cz"><strong>7x</strong><span>SKU Growth</span></div><div className="cz"><strong>15%</strong><span>Cost Savings</span></div><div className="cz"><strong>90-Day</strong><span>Inventory Plan</span></div></div>
              </div>
            </div>
            <div className="cc">
              <div className="cm"><img src="/images/audio-enhancement.jpg" alt="Audio enhancement classroom microphone packaging by Logic Agency" /></div>
              <div className="cb">
                <div className="cn">B2B Hardware &middot; Growth Tier</div>
                <h3>Packaging System That Serves as a Product Hub</h3>
                <p>Created a packaging system for classroom microphone equipment that functions as a daily-use hub, not just a shipping container. Premium overseas production at the same landed cost.</p>
                <div className="cx"><div className="cz"><strong>20%</strong><span>Shipping Saved</span></div><div className="cz"><strong>$0</strong><span>Upgrade Cost</span></div><div className="cz"><strong>4+</strong><span>SKUs Expanded</span></div></div>
              </div>
            </div>
            <div className="cc">
              <div className="cm"><img src="/images/gesine.jpg" alt="Gesine pre-seed brand packaging by Logic Agency" /></div>
              <div className="cb">
                <div className="cn">Pre-Seed Startup &middot; Growth Tier</div>
                <h3>Packaging Built for Launch and Built to Scale</h3>
                <p>Developing a complete packaging system for a pre-seed brand &mdash; engineered not just for their first run, but to scale into commercial volumes and retail distribution.</p>
                <div className="cx"><div className="cz"><strong>Launch</strong><span>Ready System</span></div><div className="cz"><strong>Retail</strong><span>Scalable</span></div><div className="cz"><strong>Full</strong><span>Program Mgmt</span></div></div>
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
          <p className="ss">We work across beauty, wellness, CPG, and tech wearables &mdash; categories where packaging is a brand experience, not just a shipping container.</p>
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
          <p>Tell us what&apos;s going on with your packaging and supply chain. We&apos;ll be honest about whether we can help and which tier makes sense. No pitch deck, no pressure.</p>
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
