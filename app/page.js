import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import FadeIn from '@/components/FadeIn';
import FaqAccordion from '@/components/FaqAccordion';
import EmailButton from '@/components/EmailButton';

export const metadata = {
  title: 'Logic Agency Inc. — Retail Packaging & Supply Chain Operations for Scaling Brands',
  description: 'Logic Agency is your outsourced retail packaging and supply chain operations team. From retail-ready packaging to shelf execution — monthly retainers for brands in beauty, CPG, and tech wearables.',
  keywords: 'packaging operations, retail packaging compliance, packaging sourcing, supply chain management, CPG packaging, DTC to retail packaging, fractional ops team, operations outsourcing',
  openGraph: {
    title: 'Logic Agency Inc. — Retail Packaging & Supply Chain Operations for Scaling Brands',
    description: 'Your outsourced retail packaging and supply chain operations team. Monthly retainers for brands in beauty, wellness, CPG, and tech wearables.',
    url: 'https://logicagencyinc.com',
    images: [{ url: 'https://logicagencyinc.com/images/og-homepage.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logic Agency Inc. — Retail Packaging & Supply Chain Operations for Scaling Brands',
    description: 'Your outsourced retail packaging and supply chain operations team. Monthly retainers for brands in beauty, wellness, CPG, and tech wearables.',
    images: ['https://logicagencyinc.com/images/og-homepage.jpg'],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Are you a packaging company or an operations company?", "acceptedAnswer": { "@type": "Answer", "text": "Both \u2014 with a focus on retail. We design and produce retail-ready packaging, and we manage the supply chain and operations that get it on shelf. Most clients start with one need and discover we can handle more. That\u2019s by design." } },
    { "@type": "Question", "name": "I already have a packaging supplier. Why would I need Logic?", "acceptedAnswer": { "@type": "Answer", "text": "Your supplier makes boxes. We manage the system around those boxes \u2014 sourcing strategy, vendor coordination, cost optimization, retail compliance, inventory planning, and launch execution. Most of our clients still use their existing suppliers. We just make sure the whole operation runs instead of lurching from crisis to crisis." } },
    { "@type": "Question", "name": "What does \u201cmonth to month\u201d actually mean? Can I cancel anytime?", "acceptedAnswer": { "@type": "Answer", "text": "It means exactly that. No annual contracts, no cancellation penalties. We earn your business every month. Most clients stay because the value compounds over time \u2014 the longer we work together, the more we understand your supply chain and the more leverage we create. But you are never locked in." } },
    { "@type": "Question", "name": "We\u2019re pre-launch. Is it too early to work with Logic?", "acceptedAnswer": { "@type": "Answer", "text": "No \u2014 this is actually the best time to engage. We\u2019re currently working with a pre-seed brand building their packaging system from scratch, designed to scale from first production run into commercial volumes and retail. Starting early means you avoid the expensive rework that comes from outgrowing packaging that was only built for launch." } },
    { "@type": "Question", "name": "How is this different from hiring a full-time ops person?", "acceptedAnswer": { "@type": "Answer", "text": "A senior ops hire in California costs $150-200K in salary plus benefits, software, and recruiting fees \u2014 easily $250K+ all in. And that one person probably won\u2019t have deep expertise in packaging engineering, global sourcing, retail compliance, and inventory management. Our retainers start at $2,500 per month and give you access to all of that from day one." } },
    { "@type": "Question", "name": "Do you handle international sourcing and manufacturing?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We source across 15+ countries including China, Vietnam, Thailand, India, Mexico, and Turkey. We manage supplier audits, factory vetting, freight, customs compliance, and quality control. Our supply chains carry ISO, FAMA, FSC, and FDA certifications." } },
    { "@type": "Question", "name": "What if our packaging isn\u2019t broken \u2014 we just want it to be better?", "acceptedAnswer": { "@type": "Answer", "text": "That is a great place to start. Some of our best engagements are with brands whose packaging works fine but isn\u2019t optimized. We find cost savings, improve the unboxing experience, tighten retail presentation, or redesign for sustainability \u2014 all while maintaining what already works." } },
    { "@type": "Question", "name": "What kind of company helps with both packaging and supply chain?", "acceptedAnswer": { "@type": "Answer", "text": "Logic Agency is a full-service packaging and supply chain partner. We handle packaging design, global sourcing, production management, retail compliance, and ongoing operations \u2014 all under one team. Most companies separate these functions across multiple vendors, which creates handoff problems and cost inefficiencies. We keep it integrated so nothing falls through the cracks." } },
    { "@type": "Question", "name": "Do I need a packaging agency or a supply chain consultant?", "acceptedAnswer": { "@type": "Answer", "text": "If your packaging and supply chain challenges are connected \u2014 and they almost always are \u2014 you need a partner who handles both. A packaging agency will design a great box but won\u2019t manage the sourcing, freight, or retail compliance behind it. A supply chain consultant will optimize your logistics but won\u2019t touch the packaging design. Logic Agency bridges both, which is why our clients typically consolidate multiple vendor relationships into one engagement with us." } },
    { "@type": "Question", "name": "How do I find an outsourced operations team for my product brand?", "acceptedAnswer": { "@type": "Answer", "text": "Look for a partner with hands-on experience in your product category, a global supplier network, transparent pricing, and a track record with brands at your scale. Logic Agency works on monthly retainers starting at $2,500/month, with no long-term contracts. We work with brands from pre-launch through $20M+ in revenue across beauty, CPG, and tech wearables. The best way to evaluate fit is a 15-minute call." } }
  ]
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav variant="home" />

      {/* HERO */}
      <section className="hero gl">
        <div className="hi">
          <div className="ht">Retail Packaging &amp; Supply Chain Operations</div>
          <h1>We get brands on shelf and <span className="o">keep them there.</span></h1>
          <p className="hero-sub">Retail-ready packaging, supply chain management, and commercial packaging solutions for brands selling into Target, Walmart, and every channel in between. We don&apos;t just advise &mdash; we embed into your team and run it.</p>
          <div className="hb">
            <EmailButton subject="Let's Talk — Packaging & Supply Chain" className="bt bo">Start a Conversation &rarr;</EmailButton>
            <a href="#pricing" className="bt bg">See Pricing</a>
          </div>
          <div className="trust">
            <span className="trust-label">Trusted by</span>
            <div className="trust-logos">
              <img src="/images/logos/haldirams.svg" alt="Haldiram's" className="trust-logo" />
              <img src="/images/logos/epicutis.svg" alt="Epicutis" className="trust-logo" />
              <img src="/images/logos/sleepme.svg" alt="Sleepme" className="trust-logo" />
              <img src="/images/logos/target.svg" alt="Target" className="trust-logo" />
              <img src="/images/logos/a24.svg" alt="A24" className="trust-logo" />
              <img src="/images/logos/echo-water.svg" alt="Echo Water" className="trust-logo" />
              <img src="/images/logos/zee-dog.svg" alt="zee.dog" className="trust-logo" />
              <img src="/images/logos/adidas.svg" alt="Adidas" className="trust-logo" />
              <img src="/images/logos/vans.svg" alt="Vans" className="trust-logo" />
              <img src="/images/logos/mophie.svg" alt="Mophie" className="trust-logo" />
              <img src="/images/logos/spotify.svg" alt="Spotify" className="trust-logo" />
              <img src="/images/logos/komos.svg" alt="Komos" className="trust-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO STRIP */}
      <section className="gl port-strip">
        <div className="port-head">
          <span className="port-label">Our Work</span>
        </div>
        <div className="port-grid">
          <div className="port-item port-wide port-g1">
            <div className="port-overlay">
              <span className="port-cat">Packaging Design</span>
              <span className="port-name">Premium Skincare System</span>
            </div>
          </div>
          <div className="port-item port-g2">
            <div className="port-overlay">
              <span className="port-cat">Retail Packaging</span>
              <span className="port-name">Shelf-Ready Display</span>
            </div>
          </div>
          <div className="port-item port-g3">
            <div className="port-overlay">
              <span className="port-cat">Supply Chain</span>
              <span className="port-name">Global Sourcing Program</span>
            </div>
          </div>
          <div className="port-item port-g4">
            <div className="port-overlay">
              <span className="port-cat">Brand Packaging</span>
              <span className="port-name">Product Launch Kit</span>
            </div>
          </div>
          <div className="port-item port-wide port-g5">
            <div className="port-overlay">
              <span className="port-cat">Operations</span>
              <span className="port-name">U.S. Mainstream Retail Launch</span>
            </div>
          </div>
          <div className="port-item port-g6">
            <div className="port-overlay">
              <span className="port-cat">Logistics</span>
              <span className="port-name">Warehouse Operations</span>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="sc dks gd">
        <div className="si">
          <div className="sl">Capabilities</div>
          <div className="or"></div>
          <h2 className="sh">Everything between your product and <span className="o">the customer.</span></h2>
          <p className="ss">One team. No handoffs.</p>
          <FadeIn className="hub-wrap">
            <svg viewBox="0 0 600 520" className="hub-svg" fill="none">
              <defs>
                {/* Glow filter for hub circles */}
                <filter id="hub-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur"/>
                  <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 0.4 0 0 0  0 0 0 0 0  0 0 0 0.4 0"/>
                  <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                {/* Glow for node dots */}
                <filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"/>
                  <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 0.4 0 0 0  0 0 0 0 0  0 0 0 0.6 0"/>
                  <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                {/* Gradient for spoke lines — fades from hub outward */}
                <linearGradient id="spoke-top" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#FF600A" stopOpacity="0.35"/>
                  <stop offset="100%" stopColor="#FF600A" stopOpacity="0.08"/>
                </linearGradient>
                <linearGradient id="spoke-bl" x1="0.6" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF600A" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#FF600A" stopOpacity="0.06"/>
                </linearGradient>
                <linearGradient id="spoke-br" x1="0.4" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FF600A" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#FF600A" stopOpacity="0.06"/>
                </linearGradient>
                {/* Subtle fill for intersection area */}
                <radialGradient id="intersect-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FF600A" stopOpacity="0.08"/>
                  <stop offset="100%" stopColor="#FF600A" stopOpacity="0"/>
                </radialGradient>
              </defs>

              {/* Subtle concentric pulse rings from center */}
              <circle cx="300" cy="250" r="100" stroke="rgba(255,96,10,.06)" strokeWidth="1"/>
              <circle cx="300" cy="250" r="150" stroke="rgba(255,96,10,.04)" strokeWidth="1"/>
              <circle cx="300" cy="250" r="210" stroke="rgba(255,96,10,.025)" strokeWidth="1"/>

              {/* Spoke lines — gradient, thicker */}
              <line x1="300" y1="190" x2="300" y2="88" stroke="url(#spoke-top)" strokeWidth="2"/>
              <line x1="255" y1="290" x2="130" y2="400" stroke="url(#spoke-bl)" strokeWidth="2"/>
              <line x1="345" y1="290" x2="470" y2="400" stroke="url(#spoke-br)" strokeWidth="2"/>

              {/* Hub background — clean mask over spoke lines */}
              <ellipse cx="300" cy="250" rx="88" ry="70" fill="#2A2A2A"/>

              {/* Intersection glow */}
              <ellipse cx="300" cy="250" rx="30" ry="58" fill="url(#intersect-glow)"/>

              {/* Hub circles — logo motif with glow */}
              <g filter="url(#hub-glow)">
                <circle cx="270" cy="250" r="58" stroke="#FF600A" strokeWidth="2.5"/>
                <circle cx="330" cy="250" r="58" stroke="#FF600A" strokeWidth="2.5"/>
              </g>

              {/* Hub labels */}
              <text x="248" y="254" fill="#FF600A" fontSize="14" fontWeight="800" textAnchor="middle" letterSpacing="2.5" style={{fontFamily:'Poppins,sans-serif'}}>LOGIC</text>
              <text x="352" y="244" fill="rgba(255,255,255,.75)" fontSize="12" fontWeight="700" textAnchor="middle" letterSpacing="2" style={{fontFamily:'Poppins,sans-serif'}}>YOUR</text>
              <text x="352" y="262" fill="rgba(255,255,255,.75)" fontSize="12" fontWeight="700" textAnchor="middle" letterSpacing="2" style={{fontFamily:'Poppins,sans-serif'}}>BRAND</text>

              {/* ---- RETAIL NODE (top center, dominant) ---- */}
              <g filter="url(#node-glow)">
                <circle cx="300" cy="68" r="10" fill="#FF600A"/>
              </g>
              <circle cx="300" cy="68" r="18" stroke="#FF600A" strokeWidth="1.5" strokeOpacity="0.3"/>
              <text x="300" y="36" fill="#fff" fontSize="16" fontWeight="800" textAnchor="middle" letterSpacing="3" style={{fontFamily:'Poppins,sans-serif'}}>RETAIL</text>

              {/* ---- B2B / COMMERCIAL NODE (bottom left) ---- */}
              <g filter="url(#node-glow)">
                <circle cx="115" cy="420" r="8" fill="#FF600A"/>
              </g>
              <circle cx="115" cy="420" r="15" stroke="#FF600A" strokeWidth="1.5" strokeOpacity="0.25"/>
              <text x="115" y="454" fill="rgba(255,255,255,.85)" fontSize="13" fontWeight="700" textAnchor="middle" letterSpacing="2" style={{fontFamily:'Poppins,sans-serif'}}>B2B / COMMERCIAL</text>

              {/* ---- DTC / MARKETPLACE NODE (bottom right) ---- */}
              <g filter="url(#node-glow)">
                <circle cx="485" cy="420" r="8" fill="#FF600A"/>
              </g>
              <circle cx="485" cy="420" r="15" stroke="#FF600A" strokeWidth="1.5" strokeOpacity="0.25"/>
              <text x="485" y="454" fill="rgba(255,255,255,.85)" fontSize="13" fontWeight="700" textAnchor="middle" letterSpacing="2" style={{fontFamily:'Poppins,sans-serif'}}>DTC / MARKETPLACE</text>
            </svg>
          </FadeIn>
          <FadeIn className="cap-grid">
            <div className="cap-item"><div className="cap-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#FF600A" strokeWidth="2.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg></div><span>Retail-ready packaging design &amp; engineering</span></div>
            <div className="cap-item"><div className="cap-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#FF600A" strokeWidth="2.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg></div><span>Retailer compliance (Target, Walmart, Costco, Amazon)</span></div>
            <div className="cap-item"><div className="cap-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#FF600A" strokeWidth="2.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg></div><span>Case pack &amp; pallet configuration</span></div>
            <div className="cap-item"><div className="cap-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#FF600A" strokeWidth="2.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg></div><span>Global sourcing across 15+ countries</span></div>
            <div className="cap-item"><div className="cap-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#FF600A" strokeWidth="2.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg></div><span>Production management &amp; QC</span></div>
            <div className="cap-item"><div className="cap-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#FF600A" strokeWidth="2.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg></div><span>Supply chain buildout &amp; optimization</span></div>
            <div className="cap-item"><div className="cap-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#FF600A" strokeWidth="2.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg></div><span>Inventory management &amp; demand planning</span></div>
            <div className="cap-item"><div className="cap-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#FF600A" strokeWidth="2.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg></div><span>Shelf strategy &amp; commercial presentation</span></div>
            <div className="cap-item"><div className="cap-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#FF600A" strokeWidth="2.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg></div><span>3PL &amp; fulfillment coordination</span></div>
            <div className="cap-item"><div className="cap-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#FF600A" strokeWidth="2.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg></div><span>DTC-to-retail &amp; B2B channel packaging</span></div>
          </FadeIn>
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
              <p className="sit-q">&ldquo;We&apos;ve been DTC-only and now retail wants us in &mdash; but we have no idea how to get shelf-ready.&rdquo;</p>
              <p>Going from DTC to retail means case packs, pallet configurations, retailer compliance, EDI, and a logistics setup your 3PL wasn&apos;t built for. We&apos;ve guided brands through their first PO to full retail rollout &mdash; and helped brands already on shelf tighten their operations.</p>
            </div>
            <div className="sit">
              <p className="sit-q">&ldquo;Our founder is spending 20 hours a week on operations instead of growing the business.&rdquo;</p>
              <p>It worked at 10K units. At 100K it&apos;s unsustainable. You need ops infrastructure but building an in-house team costs $800K+ per year. We give you the same capability on a monthly retainer.</p>
            </div>
            <div className="sit">
              <p className="sit-q">&ldquo;We have suppliers in 3 countries and nobody&apos;s managing the big picture.&rdquo;</p>
              <p>Five vendors, two freight forwarders, three time zones. Every handoff is a risk. Quality is inconsistent because nobody owns the end-to-end relationship. We consolidate your supplier network, manage production across regions, and give you one point of accountability for the entire chain.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section id="pillars" className="sc wh">
        <div className="si">
          <div className="sl">What We Do</div>
          <div className="or"></div>
          <h2 className="sh">Three pillars. <span className="o">One retail-ready team.</span></h2>
          <FadeIn className="hw-grid">
            <div className="hw">
              <div className="hw-n"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg></div>
              <h3>Packaging Design &amp; Engineering</h3>
              <p>Structural design, prototyping, retail-ready packaging, shelf displays, planogram strategy. Every design is built with retailer specs and manufacturing constraints already solved.</p>
            </div>
            <div className="hw">
              <div className="hw-n"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg></div>
              <h3>Sourcing &amp; Production Management</h3>
              <p>Global supplier network across 15+ countries. Factory vetting, production management, freight, quality control, cost optimization. We find the right partners and manage the relationships.</p>
            </div>
            <div className="hw">
              <div className="hw-n"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg></div>
              <h3>Operations &amp; Retail Execution</h3>
              <p>Retail compliance, inventory planning, go-to-market execution, 3PL coordination, demand forecasting. The infrastructure that gets brands on shelf and keeps them there.</p>
            </div>
          </FadeIn>
          <p className="hw-diff">Traditional agencies advise and hand off. We embed and execute. That&apos;s the difference between a vendor and a partner.</p>
          <p className="hw-exp">20 years across 15+ countries. Hands-on experience backed by AI-powered tools and custom-built operational systems. We don&apos;t just manage your operations &mdash; we build infrastructure that gets smarter and compounds in value over time.</p>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section id="pricing" className="sc dks gd">
        <div className="si">
          <div className="sl">Plans</div>
          <div className="or"></div>
          <h2 className="sh">A retail packaging and supply chain team at a <span className="o">fraction of the cost.</span></h2>
          <p className="ss">Month-to-month. No long-term contracts. Scope that flexes with your business.</p>
          <FadeIn className="tiers">
            {/* STARTER */}
            <div className="tier tier-s">
              <span className="tier-badge">Starter</span>
              <p className="tier-sub">You need expert guidance before making expensive mistakes</p>
              <h3>Advisory &amp; Sourcing</h3>
              <span className="tier-price"><strong>$2.5-3K</strong> /month</span>
              <p className="tier-desc">An expert in your corner. Retail packaging advisory and sourcing on demand for brands that need guidance but aren&apos;t ready for a full operational handoff.</p>
              <ul className="tier-list">
                <li>Packaging sourcing and vendor management</li>
                <li>Material and structural recommendations</li>
                <li>Retail compliance and packaging guidance</li>
                <li>Cost analysis and optimization</li>
                <li>Dedicated Slack/email access</li>
              </ul>
              <p className="tier-for">Best for: Early-stage brands with 1-5 SKUs preparing for first production runs or retail buyer conversations.</p>
            </div>
            {/* GROWTH */}
            <div className="tier tier-g">
              <span className="tier-badge">Most Popular</span>
              <p className="tier-sub">You need someone to own packaging and supply chain so you can focus on the business</p>
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
              <p className="tier-for">Best for: Brands doing 50K-500K+ units with active retail or commercial relationships, or entering new channels.</p>
            </div>
            {/* ENTERPRISE */}
            <div className="tier tier-e">
              <span className="tier-badge">Enterprise</span>
              <p className="tier-sub">You need a fully embedded operations team</p>
              <h3>Embedded Operations</h3>
              <span className="tier-price"><strong>$10K+</strong> /month</span>
              <p className="tier-desc">A complete supply chain and packaging operations team &mdash; plus custom-built systems that make your operations smarter over time. We manage retail packaging, inventory, logistics, shelf execution, and vendor operations end to end.</p>
              <ul className="tier-list">
                <li>Everything in Growth</li>
                <li>Inventory management and demand planning</li>
                <li>3PL and fulfillment oversight</li>
                <li>Import/export coordination</li>
                <li>Retail launch strategy and sales support</li>
                <li>Dedicated ops lead</li>
                <li>Custom operational systems &mdash; automated forecasting, inventory alerts, supplier dashboards, and AI-powered workflow tools built for your business</li>
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
          <p className="ss">From first retail PO to enterprise operations, here&apos;s what embedded partnership looks like.</p>
          <FadeIn className="cg">
            <div className="cc">
              <div className="cm"><img src="/images/epicutis.jpg" alt="Epicutis premium skincare packaging by Logic Agency" /></div>
              <div className="cb">
                <div className="cn">Retail Packaging + Operations &middot; Enterprise Tier</div>
                <h3>From 3 SKUs to 21+ With Full Packaging Operations</h3>
                <p>We own the entire packaging program for Epicutis &mdash; sourcing, engineering, vendor management, and a managed inventory system that cut time from order to cash.</p>
                <div className="cx"><div className="cz"><strong>7x</strong><span>SKU Growth</span></div><div className="cz"><strong>15%</strong><span>Cost Savings</span></div><div className="cz"><strong>90-Day</strong><span>Inventory Plan</span></div></div>
              </div>
            </div>
            <div className="cc">
              <div className="cm"><img src="/images/audio-enhancement.jpg" alt="Audio enhancement classroom microphone packaging by Logic Agency" /></div>
              <div className="cb">
                <div className="cn">B2B Commercial Packaging &middot; Growth Tier</div>
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
              <div className="cm"><img src="/images/haldirams.jpg" alt="Haldiram's US retail packaging by Logic Agency" /></div>
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
              <p>Skincare, cosmetics, personal care, supplements. Retail-ready packaging that protects formulations, meets retailer compliance, and wins shelf space.</p>
            </div>
            <div className="ind">
              <h3>Consumer Packaged Goods</h3>
              <p>Food, beverage, household. Retail-ready packaging that passes buyer review, meets compliance specs, and moves on shelf from day one.</p>
            </div>
            <div className="ind">
              <h3>Tech, Hardware &amp; B2B Products</h3>
              <p>Consumer electronics, wearable devices, commercial hardware. Packaging systems for retail shelves and B2B channels &mdash; built to protect sensitive components and deliver brand experience wherever products are sold.</p>
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
          <h2>Ready to get <span className="o">retail-ready?</span></h2>
          <p>Tell us where you are with retail &mdash; first PO, scaling channels, or rebuilding a system that isn&apos;t working. We&apos;ll be honest about whether we can help and which tier makes sense.</p>
          <div className="cbt">
            <EmailButton subject="Let's Talk — Packaging & Supply Chain" className="bt bw">Start a Conversation &rarr;</EmailButton>
            <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bo" target="_blank" rel="noopener noreferrer">Book a 15-Minute Call &rarr;</a>
            <a href="tel:+18018996836" className="bt bw">Call +1 (801) 899-6836</a>
          </div>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
