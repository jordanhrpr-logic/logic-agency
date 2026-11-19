import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import CaseStudyFaqAccordion from '@/components/CaseStudyFaqAccordion';
import Image from 'next/image';

const faqs = [
  { question: 'When should a brand transition away from premium packaging?', answer: 'When the packaging has done its credibility-building job and the cost premium is consuming margin without earning it back. The signal is usually a combination of established wholesale and retail positioning, stable repeat purchase rates, and per-unit packaging costs that exceed the brand equity they create.' },
  { question: 'How do you reduce packaging cost without making the brand feel cheaper?', answer: 'By engineering the replacement format to carry the same visual identity and tactile quality at lower material and assembly cost. The transition from rigid box to folding carton is not a downgrade if the carton is structurally engineered to deliver equivalent shelf presence, unboxing experience, and protection.' },
  { question: 'What is a 3-phase reduction program?', answer: 'A sequenced approach that captures low-risk savings first — removing redundant inserts, consolidating pack configurations — then progresses to structural format changes. Each phase is validated before the next begins, so brand perception is tested against actual market response at each step.' },
  { question: 'How much can packaging cost reduction save a scaling brand?', answer: '15-25% landed-cost reduction is typical for brands transitioning from launch-stage packaging to scaled formats. Artilect achieved 20% cost reduction and 95% material reduction because the rigid box was significantly over-engineered for the product it contained.' },
  { question: 'Does Logic Agency handle packaging cost reduction for beauty and CPG brands?', answer: 'Yes. The methodology is the same: audit every packaging layer by function, engineer a replacement format that preserves brand signal, phase the rollout, and validate against customer experience at each step. We work across beauty, CPG, food and beverage, consumer electronics, and apparel.' },
];

const caseStudySchema = { "@context": "https://schema.org", "@type": "Article", "headline": "How Logic Helped Artilect Cut Packaging Cost 20% and Material 95%", "description": "Artilect transitioned from premium rigid box packaging to an engineered folding carton — reducing cost 20% and material 95% without compromising brand positioning.", "author": { "@type": "Person", "name": "Jordan Harper", "jobTitle": "Founder & CEO", "url": "https://www.logicagencyinc.com" }, "publisher": { "@type": "Organization", "name": "Logic Agency Inc.", "url": "https://www.logicagencyinc.com" }, "mainEntityOfPage": "https://www.logicagencyinc.com/work/artilect", "datePublished": "2026-11-19", "dateModified": "2026-11-19", "keywords": ["packaging cost reduction", "material reduction", "rigid box to folding carton", "packaging engineering"] };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Logic Agency", "item": "https://www.logicagencyinc.com" }, { "@type": "ListItem", "position": 2, "name": "Client Work", "item": "https://www.logicagencyinc.com/#results" }, { "@type": "ListItem", "position": 3, "name": "Artilect", "item": "https://www.logicagencyinc.com/work/artilect" }] };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "When should a brand switch from premium to cost-optimized packaging?", "acceptedAnswer": { "@type": "Answer", "text": "When the premium format has established the brand's market position and the per-unit cost premium is consuming margin without generating proportional brand equity. For most brands, this transition point comes 18-36 months after launch." } }, { "@type": "Question", "name": "How much can packaging cost reduction save?", "acceptedAnswer": { "@type": "Answer", "text": "15-25% landed-cost reduction is typical for brands transitioning from launch-stage packaging to scaled formats. The largest savings come from material reduction, format simplification, and tooling amortization across higher volumes." } }, { "@type": "Question", "name": "Can you reduce packaging cost without losing brand quality?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The key is engineering the replacement format to match the original visual identity and tactile quality while reducing material, assembly, and storage costs." } }, { "@type": "Question", "name": "What is the difference between cost cutting and cost engineering?", "acceptedAnswer": { "@type": "Answer", "text": "Cost cutting removes value. Cost engineering restructures the packaging so it delivers the same brand experience with fewer materials, simpler assembly, and more efficient storage and shipping." } }] };

export const metadata = { title: 'Artilect: 20% Cost, 95% Material Reduction — Logic Agency', description: 'How Logic Agency helped Artilect cut packaging cost 20% and material 95% by engineering the transition from rigid boxes to folding cartons in 3 phases.', keywords: 'packaging cost reduction, material reduction, rigid box to folding carton, packaging engineering', alternates: { canonical: 'https://www.logicagencyinc.com/work/artilect' }, openGraph: { title: 'How Logic Helped Artilect Cut Packaging Cost 20% and Material 95%', description: 'Artilect transitioned from rigid boxes to engineered cartons — 20% cost reduction, 95% material reduction, brand signal preserved.', url: 'https://www.logicagencyinc.com/work/artilect', type: 'article', publishedTime: '2026-11-19', authors: ['Jordan Harper'], images: [{ url: 'https://www.logicagencyinc.com/images/work/artilect-packaging.jpg', width: 1200, height: 630 }] }, twitter: { card: 'summary_large_image', title: 'Artilect: 20% Cost, 95% Material Reduction', description: 'How Logic Agency engineered a 3-phase packaging transition from rigid boxes to folding cartons.', images: ['https://www.logicagencyinc.com/images/work/artilect-packaging.jpg'] } };

export default function ArtilectCaseStudy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...caseStudySchema, image: 'https://www.logicagencyinc.com/images/work/artilect-packaging.jpg', publisher: { ...caseStudySchema.publisher, logo: { '@type': 'ImageObject', url: 'https://www.logicagencyinc.com/images/og-homepage.jpg' } } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav variant="guide" />

      <section className="cs-hero">
        <div className="cs-hero-inner">
          <div className="breadcrumb"><a href="/">Logic Agency</a> &nbsp;/&nbsp; <a href="/#results">Work</a> &nbsp;/&nbsp; Artilect</div>
          <div className="cs-eyebrow">Case Study &middot; Packaging Cost Engineering</div>
          <h1>20% Less Cost. 95% Less Material. <span>Brand Signal Preserved.</span></h1>
          <p className="cs-lede">Artilect launched with premium rigid box packaging because it was the right call for a challenger performance apparel brand. Logic helped them recognize when that investment had done its job &mdash; and engineered the transition to a format that saved 20% on cost and 95% on material without making the brand feel cheaper.</p>
          <div className="cs-meta">
            <div><strong>Jordan Harper</strong>, Logic Agency Inc.</div>
            <div className="cs-meta-pill">Cost Engineering</div>
            <div className="cs-meta-pill">Packaging Reduction</div>
            <div className="cs-meta-pill">Structural Design</div>
            <div>7 min read</div>
          </div>
          <div className="cs-hero-img cs-photo">
            <Image src="/images/work/artilect-packaging.jpg" alt="Artilect performance apparel packaging engineered by Logic Agency" width={1200} height={800} sizes="100vw" priority />
            <div className="cs-hero-img-badge">Project Image</div>
          </div>
        </div>
      </section>

      <div className="stat-bar">
        <div className="stat-box"><div className="stat-num">20%</div><div className="stat-label">Cost Reduction</div><div className="stat-note">Landed cost per unit across the program</div></div>
        <div className="stat-box"><div className="stat-num">95%</div><div className="stat-label">Material Reduction</div><div className="stat-note">From rigid box to engineered carton</div></div>
        <div className="stat-box"><div className="stat-num">3</div><div className="stat-label">Phase Transition</div><div className="stat-note">Sequenced rollout, validated at each step</div></div>
      </div>

      <div className="article">
        <div className="article-inner">
          <h2 id="the-problem-launch-packaging-that-became-the-wrong-packaging">The Problem: Launch Packaging That Became the Wrong Packaging</h2>
          <p>Artilect is a challenger performance apparel brand. At launch, a rigid box made sense. It signaled quality, differentiated from the polybag norm in apparel, and gave retail and wholesale partners a tangible reason to take the brand seriously. That box was a brand-building investment, not a packaging cost.</p>
          <p>But packaging strategy has to evolve with brand maturity. Once Artilect had established its position, the rigid box was no longer earning its cost premium &mdash; it was just consuming margin. The material cost, assembly labor, storage volume, and freight weight all compounded as order volume grew.</p>
          <div className="callout"><p><strong>The pattern is common across scaling brands:</strong> what is right at launch is not right at volume. The rigid box earned its cost when Artilect needed credibility. The question was whether it still earned that cost now that Artilect needed margin.</p></div>

          <h2 id="the-approach-a-3-phase-reduction-program">The Approach: A 3-Phase Reduction Program</h2>
          <p>Logic did not propose a cost cut. A cost cut removes value. What Artilect needed was cost <em>engineering</em> &mdash; restructuring the packaging so it delivered the same brand experience with fewer materials, simpler assembly, and more efficient storage and shipping.</p>

          <h3>Phase 1: Audit every layer by function</h3>
          <p>Each packaging component was mapped to its actual job: protection, identification, presentation, or convenience. Legacy elements that existed because of habit &mdash; not a current requirement &mdash; were flagged for removal. This phase captured the straightforward wins: redundant inserts, over-specified materials, and pack configurations that had been designed for a different volume tier.</p>

          <h3>Phase 2: Engineer the replacement format</h3>
          <p>The folding carton was designed to carry the brand&apos;s visual identity and tactile quality at a fraction of the rigid box&apos;s material and cost. This was structural engineering, not a downgrade. The carton used premium board stock, clean print execution, and a closure mechanism that maintained the unboxing experience the brand had built its reputation on.</p>

          <h3>Phase 3: Phase the rollout and validate</h3>
          <p>A hard cutover from rigid to folding carton would risk brand perception and operational disruption. The 3-phase program captured straightforward wins first, then progressed to the structural transition. Each phase was reviewed against actual product handling, retail shelf presence, and unboxing experience before moving forward.</p>

          <h2 id="the-result-20-less-cost-95-less-material">The Result: 20% Less Cost. 95% Less Material.</h2>
          <p>The Artilect program delivered 20% cost reduction and 95% material reduction by engineering out the packaging the customer did not value &mdash; without removing the packaging they did.</p>
          <p>The engineered carton maintained the brand&apos;s premium positioning while eliminating the rigid box&apos;s compounding costs in material, assembly, storage, and freight. Warehousing complexity dropped. Freight costs dropped. Per-unit cost dropped. The brand still looked like Artilect.</p>
          <div className="callout win"><p><strong>This is the pattern every scaling brand should understand:</strong> what is right at launch is not necessarily right at volume. The rigid box earned its cost when Artilect needed credibility. The engineered carton earns its cost now that Artilect needs margin.</p></div>

          <h2 id="what-this-means-for-your-brand">What This Means for Your Brand</h2>
          <p>If your per-unit packaging cost has stayed flat or increased as your volume has grown, you are likely over-specified for your current stage. The transition does not have to be dramatic &mdash; a phased approach lets you validate each change against real market response before committing to the next.</p>
          <p>Logic runs this same methodology for beauty, CPG, food and beverage, consumer electronics, and apparel brands. See our <a href="/guides/packaging-cost-reduction">Packaging Cost Reduction guide</a> for the full framework, or <a href="/work/audio-enhancement">the Audio Enhancement case study</a> for how the supplier transition discipline works in consumer electronics.</p>
        </div>
      </div>

      <CaseStudyFaqAccordion items={faqs} />

      <section className="cta-band gd">
        <div className="cta-band-inner">
          <h2 id="spending-too-much-on-packaging">Spending too much on <em>packaging?</em></h2>
          <p>Tell us your format, volume, and what you are paying. We will tell you what a cost-engineered alternative looks like.</p>
          <div className="cta-btns"><a href="mailto:jordan@logicagencyinc.com?subject=Packaging%20Cost%20Reduction" className="bt bo">Start a Conversation &rarr;</a></div>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
