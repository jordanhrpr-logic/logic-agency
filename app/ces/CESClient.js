'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import FadeIn from '@/components/FadeIn';

const CES_START = new Date('2027-01-06T09:00:00-08:00');
const CALENDLY_URL = 'https://calendly.com/sean-logicagencyinc/30min';

const PHASES = [
  { name: 'Packaging Design', weeks: 3, color: '#FF600A' },
  { name: 'Prototyping & Sampling', weeks: 3, color: '#E55509' },
  { name: 'Tooling & Production Setup', weeks: 5, color: '#CC4A08' },
  { name: 'Mass Production', weeks: 6, color: '#B34007' },
  { name: 'Freight & Delivery', weeks: 6, color: '#993606' },
];
const TOTAL_WEEKS = PHASES.reduce((s, p) => s + p.weeks, 0);

const PAIN_POINTS = [
  { icon: '\u{1F4E6}', text: 'No packaging partner qualified for your volume' },
  { icon: '\u{1F6E0}', text: 'No supply chain beyond your prototype manufacturer' },
  { icon: '\u{1F4CB}', text: 'No retail compliance documentation for Best Buy, Amazon, or Target' },
  { icon: '\u{1F50D}', text: 'No QC process for production at scale' },
  { icon: '\u{1F69A}', text: 'No fulfillment infrastructure for DTC and retail simultaneously' },
  { icon: '\u{1F4B0}', text: 'No cost model beyond your first production run' },
];

const SERVICES = [
  { problem: 'We have a prototype but no production packaging', solution: 'First-run packaging design, structural engineering, tooling, and sampling. From concept to production-ready in 12 weeks.' },
  { problem: 'We need to be in Best Buy / Amazon / Target by Q3', solution: 'Retail compliance, barcode and labeling, master carton specs, retailer documentation, and packaging that meets every vendor manual requirement.' },
  { problem: 'Our contract manufacturer handles packaging but quality is inconsistent', solution: 'Factory audit, supplier qualification, production QC, and managed transition to a supplier that matches your growth stage.' },
  { problem: 'We\'re doing everything ourselves and it\'s not scaling', solution: 'Fractional ops leadership. The $250K senior hire you don\'t need to make yet. Supply chain, packaging, fulfillment, and vendor coordination under one team.' },
  { problem: 'We need fulfillment for DTC and retail simultaneously', solution: 'Kitting, assembly, SLC warehouse, ship to retail DCs or DTC customers. One fulfillment operation serving both channels.' },
];

const FAQS = [
  { q: 'How fast can we get retail-ready packaging after our raise?', a: '12 to 20 weeks from approved brief to delivery, depending on format complexity and manufacturing location. Simple folding cartons with stock tooling can land in 8 to 10 weeks. Fully custom rigid structures need the full timeline.' },
  { q: 'What\'s the minimum order for a first production run?', a: 'Format-dependent. Folding cartons start at 1,000 units. Rigid boxes at 500. Influencer and PR kits at 50. Per-unit cost is higher at lower volumes, but production is feasible at every tier.' },
  { q: 'Can you handle both DTC and retail fulfillment?', a: 'Yes. Our Salt Lake City warehouse ships to retail distribution centers, DTC customers, and individual recipients from the same inventory. One operation, two channels.' },
  { q: 'What does fractional ops actually mean?', a: 'You get a senior supply chain and operations lead embedded in your team on a monthly retainer. No equity, no annual contract. The same coverage as a $250K hire at a fraction of the cost, with 20 years of sourcing and production experience behind it.' },
  { q: 'We already have a manufacturer. Can you just handle packaging?', a: 'Yes. We work alongside existing co-manufacturers. Our packaging and supply chain operations complement their production without replacing what already works.' },
  { q: 'What should we have ready before our CES meeting?', a: 'Product specs or prototype, target retail channels, volume estimate for the first 12 months, and a rough timeline. If you don\'t have all of that, that\'s fine. We\'ll help you figure out what\'s missing.' },
];

function useCountdown(target) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds, passed: diff === 0 };
}

export default function CESClient() {
  const countdown = useCountdown(CES_START);
  const [shipQuarter, setShipQuarter] = useState('Q2');
  const [openFaq, setOpenFaq] = useState(null);

  const timeline = useMemo(() => {
    const qMap = { Q1: new Date('2027-03-31'), Q2: new Date('2027-06-30'), Q3: new Date('2027-09-30'), Q4: new Date('2027-12-31') };
    const shipDate = qMap[shipQuarter];
    const today = new Date();
    let cursor = new Date(shipDate);
    const result = [];
    for (let i = PHASES.length - 1; i >= 0; i--) {
      const end = new Date(cursor);
      cursor.setDate(cursor.getDate() - PHASES[i].weeks * 7);
      const start = new Date(cursor);
      const status = today > end ? 'behind' : today > start ? 'active' : 'ahead';
      result.unshift({ ...PHASES[i], start, end, status });
    }
    return result;
  }, [shipQuarter]);

  const scrollToBooking = useCallback(() => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <Nav variant="guide" />

      {/* SECTION 1 — HERO WITH COUNTDOWN */}
      <section className="ces-hero gd">
        <div className="ces-hero-inner">
          <div className="ces-badge">CES 2027 &middot; Las Vegas &middot; Jan 6&ndash;9</div>
          <h1>Packaging &amp; Supply Chain<br />for Funded <span className="o">Hardware Brands</span></h1>
          <p className="ces-lede">We help post-raise consumer electronics brands go from prototype to retail shelf without hiring a 6-person ops team. Meet us at CES.</p>

          {!countdown.passed && (
            <div className="ces-countdown">
              <div className="cd-unit"><span className="cd-num">{countdown.days}</span><span className="cd-label">Days</span></div>
              <div className="cd-unit"><span className="cd-num">{String(countdown.hours).padStart(2, '0')}</span><span className="cd-label">Hours</span></div>
              <div className="cd-unit"><span className="cd-num">{String(countdown.minutes).padStart(2, '0')}</span><span className="cd-label">Min</span></div>
              <div className="cd-unit"><span className="cd-num">{String(countdown.seconds).padStart(2, '0')}</span><span className="cd-label">Sec</span></div>
            </div>
          )}

          <div className="ces-hero-ctas">
            <button type="button" className="bt bo" onClick={scrollToBooking}>Book a CES Meeting &rarr;</button>
            <a href="#timeline" className="bt bw">See Your Timeline &darr;</a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE 6-MONTH PROBLEM */}
      <section className="ces-problem gl">
        <FadeIn>
          <div className="ces-section-inner">
            <div className="ces-ey">The post-raise reality</div>
            <h2>You raised. You have retail interest.<br />You need to <span className="o">ship in 6 months.</span></h2>
            <p className="ces-sub">Here is what you do not have yet:</p>
            <div className="ces-pain-grid">
              {PAIN_POINTS.map((p, i) => (
                <div key={i} className="ces-pain-card">
                  <span className="ces-pain-icon">{p.icon}</span>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 3 — SERVICES GRID */}
      <section className="ces-services gd">
        <FadeIn>
          <div className="ces-section-inner">
            <div className="ces-ey" style={{ color: 'var(--o)' }}>What we do for funded hardware brands</div>
            <h2 style={{ color: '#fff' }}>Your problem. <span className="o">Our solution.</span></h2>
            <div className="ces-svc-grid">
              {SERVICES.map((s, i) => (
                <div key={i} className="ces-svc-card">
                  <div className="ces-svc-problem">&ldquo;{s.problem}&rdquo;</div>
                  <div className="ces-svc-solution">{s.solution}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 4 — AUDIO ENHANCEMENT CASE STUDY */}
      <section className="ces-case gl">
        <FadeIn>
          <div className="ces-section-inner">
            <div className="ces-ey">Consumer electronics proof point</div>
            <h2>When a Supplier Can&apos;t Keep Up <span className="o">With Your Growth</span></h2>
            <div className="ces-case-layout">
              <div className="ces-case-img">
                <Image
                  src="/images/work/audio-enhancement/teacher-box-blue-bg.jpg"
                  alt="Audio Enhancement teacher microphone packaging by Logic Agency"
                  width={800}
                  height={600}
                  style={{ width: '100%', height: 'auto', borderRadius: 12 }}
                />
              </div>
              <div className="ces-case-content">
                <p>Audio Enhancement outgrew the factory behind their flagship classroom product. Logic stabilized quality, managed the transition to a manufacturing partner producing for global brands, and kept operations running throughout.</p>
                <div className="ces-stats">
                  <div className="ces-stat"><span className="ces-stat-num">100%</span><span className="ces-stat-label">Pilot run QC</span></div>
                  <div className="ces-stat"><span className="ces-stat-num">0</span><span className="ces-stat-label">Customer disruption</span></div>
                  <div className="ces-stat"><span className="ces-stat-num">2&times;</span><span className="ces-stat-label">Manufacturing capacity</span></div>
                </div>
                <a href="/work/audio-enhancement" className="ces-case-link">Read the full case study &rarr;</a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 5 — ADDITIONAL PROOF */}
      <section className="ces-proof gd">
        <FadeIn>
          <div className="ces-section-inner">
            <div className="ces-ey" style={{ color: 'var(--o)' }}>The pattern repeats</div>
            <div className="ces-proof-grid">
              <a href="/work/epicutis" className="ces-proof-card">
                <div className="ces-proof-img">
                  <Image src="/images/work/epicutis/epicutis-kits-group-grey.jpg" alt="Epicutis packaging system" width={600} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                </div>
                <div className="ces-proof-body">
                  <h3>Epicutis &mdash; Packaging at Scale</h3>
                  <p>3 SKUs to 21+. Under 100K to over 1M units annually. 15% verified cost savings. Same lean team.</p>
                </div>
              </a>
              <div className="ces-proof-card">
                <div className="ces-proof-body" style={{ padding: '32px' }}>
                  <h3>Artilect &mdash; Cost Engineering</h3>
                  <p>20% cost reduction. 95% material reduction. 3-phase transition from rigid box to engineered carton without compromising brand.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 6 — LOGO BAR */}
      <section className="ces-logos gl">
        <div className="ces-section-inner" style={{ textAlign: 'center' }}>
          <div className="ces-ey">Trusted by brands including</div>
          <div className="ces-logo-row">
            {['adidas', 'target', 'sleepme', 'epicutis', 'a24', 'vans'].map(name => (
              <img key={name} src={`/images/logos/${name}.svg`} alt={name} className="ces-logo" />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — LAUNCH TIMELINE CALCULATOR */}
      <section id="timeline" className="ces-timeline gd">
        <FadeIn>
          <div className="ces-section-inner">
            <div className="ces-ey" style={{ color: 'var(--o)' }}>Interactive</div>
            <h2 style={{ color: '#fff' }}>When do you need to <span className="o">ship?</span></h2>
            <p style={{ color: 'rgba(255,255,255,.7)', maxWidth: 560, marginBottom: 32 }}>Select your target ship quarter and see the backward timeline. Each phase shows when it needs to start.</p>

            <div className="ces-q-btns">
              {['Q1', 'Q2', 'Q3', 'Q4'].map(q => (
                <button key={q} type="button" className={`ces-q-btn${shipQuarter === q ? ' active' : ''}`} onClick={() => setShipQuarter(q)}>
                  {q} 2027
                </button>
              ))}
            </div>

            <div className="ces-tl-track">
              {timeline.map((phase, i) => (
                <div key={i} className={`ces-tl-phase ${phase.status}`}>
                  <div className="ces-tl-bar" style={{ background: phase.color, width: `${(phase.weeks / TOTAL_WEEKS) * 100}%` }} />
                  <div className="ces-tl-info">
                    <span className="ces-tl-name">{phase.name}</span>
                    <span className="ces-tl-weeks">{phase.weeks} weeks</span>
                    <span className={`ces-tl-status ${phase.status}`}>
                      {phase.status === 'behind' ? 'Behind schedule' : phase.status === 'active' ? 'Start now' : 'On track'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="ces-tl-total">
              Total: <strong>{TOTAL_WEEKS} weeks</strong> from brief to delivery
            </div>

            <button type="button" className="bt bo" style={{ marginTop: 24 }} onClick={scrollToBooking}>
              Lock in your timeline &rarr;
            </button>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 8 — CES FAQ */}
      <section className="ces-faq gl">
        <FadeIn>
          <div className="ces-section-inner">
            <div className="ces-ey">What funded brands ask us at CES</div>
            <h2>Quick <span className="o">Answers</span></h2>
            <div className="ces-faq-list">
              {FAQS.map((faq, i) => (
                <div key={i} className={`ces-faq-item${openFaq === i ? ' open' : ''}`}>
                  <button type="button" className="ces-faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                    <span>{faq.q}</span>
                    <span className="ces-faq-toggle">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && <div className="ces-faq-answer">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 9 — CALENDLY BOOKING */}
      <section id="book" className="ces-book gd">
        <div className="ces-section-inner" style={{ textAlign: 'center' }}>
          <div className="ces-ey" style={{ color: 'var(--o)' }}>Book a meeting</div>
          <h2 style={{ color: '#fff' }}>We&apos;re walking the floor <span className="o">Jan 6&ndash;9.</span></h2>
          <p style={{ color: 'rgba(255,255,255,.7)', maxWidth: 520, margin: '0 auto 40px' }}>Book 15 minutes and we&apos;ll come to you. Or schedule a post-CES call if the timing is better.</p>

          <div
            className="calendly-inline-widget"
            data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=2a2a2a&text_color=ffffff&primary_color=FF600A`}
            style={{ minWidth: 320, height: 700, margin: '0 auto', maxWidth: 680 }}
          />
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
        </div>
      </section>

      {/* SECTION 10 — POST-CES PROMISE */}
      <section className="ces-promise gl">
        <div className="ces-section-inner" style={{ textAlign: 'center', maxWidth: 600 }}>
          <h2>After our meeting, we&apos;ll send you a preliminary packaging scope and cost range <span className="o">within 48 hours.</span></h2>
          <p style={{ color: 'var(--gr)', fontSize: 17, lineHeight: 1.7, marginTop: 16 }}>No proposal required. No NDA needed. Just a straight answer on what it will take to get your product packaged and on shelf.</p>
          <button type="button" className="bt bo" style={{ marginTop: 32 }} onClick={scrollToBooking}>Book Your CES Meeting &rarr;</button>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
