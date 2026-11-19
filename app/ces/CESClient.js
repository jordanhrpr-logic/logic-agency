'use client';

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
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

const FUNDING_STAGES = [
  { key: 'seed', label: 'Seed / Series A' },
  { key: 'b', label: 'Series B' },
  { key: 'c', label: 'Series C+' },
];

const PAIN_POINTS = {
  seed: [
    { icon: '\u{1F4E6}', text: 'No packaging partner — your prototype manufacturer doesn\'t do retail packaging' },
    { icon: '\u{1F6E0}', text: 'No supply chain beyond your co-man or Alibaba supplier' },
    { icon: '\u{1F4CB}', text: 'No retail compliance documentation for Best Buy, Amazon, or Target' },
    { icon: '\u{1F50D}', text: 'No QC process for your first production run' },
    { icon: '\u{1F69A}', text: 'No fulfillment setup for DTC and retail simultaneously' },
    { icon: '\u{1F4B0}', text: 'No cost model beyond your prototype unit economics' },
  ],
  b: [
    { icon: '\u{1F4E6}', text: 'Current packaging partner can\'t scale to your next volume tier' },
    { icon: '\u{1F6E0}', text: 'Supply chain built for DTC — not ready for retail distribution' },
    { icon: '\u{1F4CB}', text: 'Each new retailer requires different compliance documentation' },
    { icon: '\u{1F50D}', text: 'Quality inconsistency across production runs as volume increases' },
    { icon: '\u{1F69A}', text: 'Fulfillment costs growing faster than revenue' },
    { icon: '\u{1F4B0}', text: 'Per-unit packaging costs haven\'t dropped despite higher volume' },
  ],
  c: [
    { icon: '\u{1F4E6}', text: 'Multi-SKU packaging program needs a system, not one-off POs' },
    { icon: '\u{1F6E0}', text: 'Supplier concentration risk — one factory disruption halts everything' },
    { icon: '\u{1F4CB}', text: 'Retail compliance across 5+ channels consuming ops bandwidth' },
    { icon: '\u{1F50D}', text: 'QC drift between production runs at multiple factories' },
    { icon: '\u{1F69A}', text: 'DTC, retail, and international fulfillment from separate systems' },
    { icon: '\u{1F4B0}', text: 'No visibility into true landed cost across your packaging portfolio' },
  ],
};

const PROBLEM_HEADLINES = {
  seed: { line1: 'You raised. You have retail interest.', line2: 'Ship in 6 months.' },
  b: { line1: 'You\'re scaling. Retail is live.', line2: 'Keep up without breaking.' },
  c: { line1: 'You\'re in 5+ retailers. 20+ SKUs.', line2: 'Make the system work.' },
};

const SERVICES = {
  seed: [
    { problem: 'We have a prototype but no production packaging', solution: 'First-run packaging design, structural engineering, tooling, and sampling. From concept to production-ready in 12 weeks.' },
    { problem: 'We need to be in Best Buy / Amazon / Target by Q3', solution: 'Retail compliance, barcode and labeling, master carton specs, retailer documentation, and packaging that meets every vendor manual.' },
    { problem: 'Our contract manufacturer handles packaging but quality is inconsistent', solution: 'Factory audit, supplier qualification, production QC, and managed transition to a supplier that matches your growth stage.' },
    { problem: 'We\'re doing everything ourselves and it\'s not scaling', solution: 'Fractional ops leadership. The $250K senior hire you don\'t need to make yet. Packaging, fulfillment, and vendor coordination under one team.' },
    { problem: 'We need fulfillment for DTC and retail simultaneously', solution: 'Kitting, assembly, SLC warehouse. Ship to retail DCs or DTC customers. One operation serving both channels.' },
    { problem: 'We don\'t have 6-9 months to hire a full in-house supply chain team', solution: 'You don\'t need one. Logic embeds into your team on a monthly retainer with 20 years of sourcing and production experience. Operational from week one, cancel anytime.' },
  ],
  b: [
    { problem: 'Our packaging costs haven\'t dropped even though volume tripled', solution: 'Cost engineering: landed-cost audit, supplier renegotiation, format optimization, and freight consolidation. Most brands save 15-25% at this stage.' },
    { problem: 'We\'re adding 3 new retailers this year and each has different requirements', solution: 'Retail compliance as a managed service. We handle the vendor manuals, packaging specs, labeling, and documentation for every channel.' },
    { problem: 'Quality is drifting between production runs', solution: 'Golden sample program, run-to-run conformity tracking, pre-shipment inspection, and supplier scorecards. Consistent output at scale.' },
    { problem: 'We need a second supplier but don\'t have time to qualify one', solution: 'Supplier qualification: factory audit, sample development, pilot run, QC benchmarking. A tested backup ready before you need it.' },
    { problem: 'Our ops team is overwhelmed — but we can\'t justify a VP hire yet', solution: 'Fractional ops: a senior supply chain lead on retainer. Full coverage, no equity, cancel anytime.' },
    { problem: 'We don\'t have 6-9 months to recruit and onboard a VP of Operations', solution: 'Logic is operational from week one. We bring 20 years of category experience, existing factory relationships, and a team already fluent in your product category.' },
  ],
  c: [
    { problem: 'Our packaging program is 20+ SKUs managed through email and spreadsheets', solution: 'Managed packaging program: shared component strategy, coordinated suppliers, spec management, and planned replenishment cycles.' },
    { problem: 'One factory disruption would halt half our retail shipments', solution: 'Dual-source qualification and geographic diversification. We build a supply chain that survives a single-point failure.' },
    { problem: 'Retail compliance is consuming 2 FTEs of ops bandwidth', solution: 'We own retail compliance end-to-end: GS1, case-pack configuration, pallet optimization, EDI, ASN, and retailer-specific packaging requirements.' },
    { problem: 'We don\'t actually know our true landed cost per SKU', solution: 'Landed-cost modeling across your full portfolio: unit cost, tooling amortization, freight, duties, inserts, defect rate, warehousing. Per-SKU and per-channel.' },
    { problem: 'We need to cut packaging costs by 20% without touching the brand', solution: 'Cost engineering playbook: material substitution, format consolidation, supplier renegotiation, freight optimization. We\'ve delivered 15-25% savings for brands at your stage.' },
    { problem: 'We can\'t afford to spend 6-9 months recruiting a Chief Supply Chain Officer', solution: 'Logic delivers CSCO-level execution on a monthly retainer. Existing supplier network, category fluency, and a proven playbook — without the 12-month recruitment cycle or equity dilution.' },
  ],
};

const FAQS = [
  { q: 'How fast can we get retail-ready packaging after our raise?', a: '12 to 20 weeks from approved brief to delivery, depending on format complexity and manufacturing location. Simple folding cartons with stock tooling can land in 8 to 10 weeks. Fully custom rigid structures need the full timeline.' },
  { q: 'What\'s the minimum order for a first production run?', a: 'Format-dependent. Folding cartons start at 1,000 units. Rigid boxes at 500. Influencer and PR kits at 50. Per-unit cost is higher at lower volumes, but production is feasible at every tier.' },
  { q: 'Can you handle both DTC and retail fulfillment?', a: 'Yes. Our Salt Lake City warehouse ships to retail distribution centers, DTC customers, and individual recipients from the same inventory. One operation, two channels.' },
  { q: 'What does fractional ops actually mean?', a: 'You get a senior supply chain and operations lead embedded in your team on a monthly retainer. No equity, no annual contract. The same coverage as a $250K hire at a fraction of the cost, with 20 years of sourcing and production experience behind it.' },
  { q: 'We already have a manufacturer. Can you just handle packaging?', a: 'Yes. We work alongside existing co-manufacturers. Our packaging and supply chain operations complement their production without replacing what already works.' },
  { q: 'What should we have ready before our CES meeting?', a: 'Product specs or prototype, target retail channels, volume estimate for the first 12 months, and a rough timeline. If you don\'t have all of that, that\'s fine. We\'ll help you figure out what\'s missing.' },
];

/* ── STAT DONUT RING ── */
const RING_SIZE = 80;
const RING_STROKE = 6;
const RING_RADIUS = (RING_SIZE - RING_STROKE) / 2;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function useCountdown(target) {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    setMounted(true);
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    passed: diff === 0,
    mounted,
  };
}

function useCountUp(end, duration = 1200) {
  const [value, setValue] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !triggered) setTriggered(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return;
    const startTime = performance.now();
    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [triggered, end, duration]);

  return { ref, value, triggered };
}

function StatRing({ num, suffix = '', label, pct }) {
  const counter = useCountUp(num);
  const fillPct = pct !== undefined ? pct : (num > 100 ? 100 : num);
  const offset = RING_CIRCUMFERENCE - (RING_CIRCUMFERENCE * (counter.triggered ? fillPct : 0)) / 100;

  return (
    <div className="ces-stat-ring" ref={counter.ref}>
      <div className="ces-ring-wrap">
        <svg width={RING_SIZE} height={RING_SIZE} viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`} className="ces-ring-svg">
          <circle
            cx={RING_SIZE / 2}
            cy={RING_SIZE / 2}
            r={RING_RADIUS}
            fill="none"
            stroke="rgba(0,0,0,.08)"
            strokeWidth={RING_STROKE}
          />
          <circle
            cx={RING_SIZE / 2}
            cy={RING_SIZE / 2}
            r={RING_RADIUS}
            fill="none"
            stroke="var(--o)"
            strokeWidth={RING_STROKE}
            strokeLinecap="round"
            strokeDasharray={RING_CIRCUMFERENCE}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${RING_SIZE / 2} ${RING_SIZE / 2})`}
            style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(.16,1,.3,1)' }}
          />
        </svg>
        <span className="ces-ring-value">{counter.value}{suffix}</span>
      </div>
      <span className="ces-stat-label">{label}</span>
    </div>
  );
}

/* ── TYPEWRITER HOOK ── */
function useTypewriter(text, speed = 80, startDelay = 600) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;
    const id = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(id);
  }, [started, displayed, text, speed]);

  return { displayed, done: displayed.length >= text.length, started };
}

/* ── STICKY CTA BAR ── */
function StickyCtaBar({ onBook }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`ces-sticky-bar${visible ? ' show' : ''}`}>
      <div className="ces-sticky-inner">
        <span className="ces-sticky-label">CES 2027 &middot; Jan 6&ndash;9 &middot; Las Vegas</span>
        <button type="button" className="ces-sticky-btn" onClick={onBook}>Book a CES Meeting &rarr;</button>
      </div>
    </div>
  );
}

const AE_CAROUSEL_IMAGES = [
  { src: '/images/audio-enhancement.jpg', alt: 'Audio Enhancement microphone system — open box with molded insert, microphone, receiver, and charging accessories' },
  { src: '/images/work/audio-enhancement/teacher-box-blue-bg.jpg', alt: 'Audio Enhancement teacher microphone retail packaging — exterior' },
  { src: '/images/work/audio-enhancement/updated-packaging-interior.jpg', alt: 'Audio Enhancement packaging — custom molded interior insert' },
];

function ImageCarousel({ images, interval = 4000 }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive(prev => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="ces-carousel">
      {images.map((img, i) => (
        <div key={img.src} className={`ces-carousel-slide${i === active ? ' active' : ''}`}>
          <Image
            src={img.src}
            alt={img.alt}
            width={800}
            height={600}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            priority={i === 0}
          />
        </div>
      ))}
      <div className="ces-carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`ces-carousel-dot${i === active ? ' active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Show image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function CESClient() {
  const countdown = useCountdown(CES_START);
  const [shipQuarter, setShipQuarter] = useState('Q2');
  const [openFaq, setOpenFaq] = useState(null);
  const [fundingStage, setFundingStage] = useState('seed');
  const typewriter = useTypewriter('Hardware Brands');

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

  const headline = PROBLEM_HEADLINES[fundingStage];
  const pains = PAIN_POINTS[fundingStage];
  const services = SERVICES[fundingStage];

  return (
    <>
      <Nav variant="guide" />
      <StickyCtaBar onBook={scrollToBooking} />

      {/* SECTION 1 — HERO WITH COUNTDOWN + TYPEWRITER */}
      <section className="ces-hero gd">
        <div className="ces-hero-inner">
          <div className="ces-badge">CES 2027 &middot; Las Vegas &middot; Jan 6&ndash;9</div>
          <h1>
            Packaging &amp; Supply Chain<br />for Funded{' '}
            <span className="o ces-typewriter">
              {typewriter.started ? typewriter.displayed : 'Hardware Brands'}
              {typewriter.started && !typewriter.done && <span className="ces-cursor" />}
            </span>
          </h1>
          <p className="ces-lede">We help post-raise consumer electronics brands go from prototype to retail shelf without hiring a 6-person ops team. Meet us at CES.</p>

          {countdown.mounted && !countdown.passed && (
            <div className="ces-countdown">
              <div className="cd-unit"><span className="cd-num" suppressHydrationWarning>{countdown.days}</span><span className="cd-label">Days</span></div>
              <div className="cd-unit"><span className="cd-num" suppressHydrationWarning>{String(countdown.hours).padStart(2, '0')}</span><span className="cd-label">Hours</span></div>
              <div className="cd-unit"><span className="cd-num" suppressHydrationWarning>{String(countdown.minutes).padStart(2, '0')}</span><span className="cd-label">Min</span></div>
              <div className="cd-unit"><span className="cd-num" suppressHydrationWarning>{String(countdown.seconds).padStart(2, '0')}</span><span className="cd-label">Sec</span></div>
            </div>
          )}
          {!countdown.mounted && (
            <div className="ces-countdown">
              <div className="cd-unit"><span className="cd-num">&mdash;</span><span className="cd-label">Days</span></div>
              <div className="cd-unit"><span className="cd-num">&mdash;</span><span className="cd-label">Hours</span></div>
              <div className="cd-unit"><span className="cd-num">&mdash;</span><span className="cd-label">Min</span></div>
              <div className="cd-unit"><span className="cd-num">&mdash;</span><span className="cd-label">Sec</span></div>
            </div>
          )}

          <div className="ces-hero-ctas">
            <button type="button" className="bt bo" onClick={scrollToBooking}>Book a CES Meeting &rarr;</button>
            <a href="#timeline" className="bt bw">See Your Timeline &darr;</a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE 6-MONTH PROBLEM + FUNDING STAGE SELECTOR */}
      <section className="ces-problem gl">
        <FadeIn>
          <div className="ces-section-inner">
            <div className="ces-ey">The post-raise reality</div>
            <h2>{headline.line1}<br /><span className="o">{headline.line2}</span></h2>
            <p className="ces-sub">Here is what you do not have yet:</p>
            <div className="ces-pain-grid">
              {pains.map((p, i) => (
                <div key={i} className="ces-pain-card">
                  <span className="ces-pain-icon">{p.icon}</span>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
            <div className="ces-stage-inline">
              <div className="ces-ey" style={{ marginTop: 48 }}>Where are you?</div>
              <div className="ces-stage-btns">
                {FUNDING_STAGES.map(fs => (
                  <button
                    key={fs.key}
                    type="button"
                    className={`ces-stage-btn${fundingStage === fs.key ? ' active' : ''}`}
                    onClick={() => setFundingStage(fs.key)}
                  >
                    {fs.label}
                  </button>
                ))}
              </div>
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
              {services.map((s, i) => (
                <div key={i} className="ces-svc-card">
                  <div className="ces-svc-problem">&ldquo;{s.problem}&rdquo;</div>
                  <div className="ces-svc-solution">{s.solution}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 4 — AUDIO ENHANCEMENT CASE STUDY WITH DONUT RINGS */}
      <section className="ces-case gl">
        <FadeIn>
          <div className="ces-section-inner">
            <div className="ces-ey">Consumer electronics proof point</div>
            <h2>When a Supplier Can&apos;t Keep Up <span className="o">With Your Growth</span></h2>
            <div className="ces-case-layout">
              <div className="ces-case-img">
                <ImageCarousel images={AE_CAROUSEL_IMAGES} interval={4000} />
              </div>
              <div className="ces-case-content">
                <p>Audio Enhancement outgrew the factory behind their flagship classroom product. Logic stabilized quality, managed the transition to a manufacturing partner producing for global brands, and kept operations running throughout.</p>
                <div className="ces-stats">
                  <StatRing num={100} suffix="%" label="Pilot run QC" pct={100} />
                  <StatRing num={0} suffix="" label="Customer disruption" pct={100} />
                  <StatRing num={2} suffix="×" label="Mfg capacity" pct={100} />
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
                <div className="ces-proof-img">
                  <Image src="/images/work/artilect-packaging.jpg" alt="Artilect packaging system — engineered carton with 95% material reduction" width={600} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                </div>
                <div className="ces-proof-body">
                  <h3>Artilect &mdash; Cost Engineering</h3>
                  <p>20% cost reduction. 95% material reduction. 3-phase transition from rigid box to engineered carton without compromising brand.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 6 — LOGO BAR (infinite scroll marquee) */}
      <section className="ces-logos gl">
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <div className="ces-ey">Trusted by brands including</div>
        </div>
        <div className="ces-marquee">
          <div className="ces-marquee-track">
            {[0, 1].map(set => (
              <div key={set} className="ces-marquee-set" aria-hidden={set === 1 ? 'true' : undefined}>
                {['adidas', 'target', 'spotify', 'sleepme', 'mophie', 'epicutis', 'a24', 'vans', 'haldirams', 'zee-dog', 'komos', 'echo-water'].map(name => (
                  <img key={`${set}-${name}`} src={`/images/logos/${name}.svg`} alt={name.replace('-', ' ')} className="ces-logo" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — LAUNCH TIMELINE CALCULATOR WITH PULSING BEHIND BARS */}
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
                  <div
                    className={`ces-tl-bar${phase.status === 'behind' ? ' ces-tl-pulse' : ''}`}
                    style={{ background: phase.status === 'behind' ? '#ef4444' : phase.color, width: `${(phase.weeks / TOTAL_WEEKS) * 100}%` }}
                  />
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
