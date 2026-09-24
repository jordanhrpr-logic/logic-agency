import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import GuideFaqAccordion from '@/components/GuideFaqAccordion';
import EmailButton from '@/components/EmailButton';

const SITE = 'https://www.logicagencyinc.com';

function schemaFor(guide) {
  const url = `${SITE}/guides/${guide.slug}`;
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: guide.title,
      description: guide.description,
      image: guide.ogImage ? `${SITE}${guide.ogImage}` : `${SITE}/images/og-homepage.jpg`,
      author: { '@type': 'Organization', name: 'Logic Agency Inc.', url: SITE },
      publisher: {
        '@type': 'Organization',
        name: 'Logic Agency Inc.',
        logo: { '@type': 'ImageObject', url: `${SITE}/images/logos/logic-agency.svg` },
      },
      mainEntityOfPage: url,
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
      keywords: guide.keywords,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: guide.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Logic Agency', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE}/guides` },
        { '@type': 'ListItem', position: 3, name: guide.title, item: url },
      ],
    },
  ];

  // Auto-generate HowTo schema when a section contains a steps block
  for (const section of guide.sections || []) {
    const stepsBlock = section.blocks?.find((b) => b.type === 'steps');
    if (stepsBlock?.items?.length) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: section.heading,
        description: section.lead || guide.description,
        step: stepsBlock.items.map((step, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: step.title,
          text: (step.body || '').replace(/<[^>]+>/g, ''),
        })),
      });
      break; // one HowTo per guide is enough for Google's rich-results
    }
  }
  return schemas;
}

function Paragraph({ html }) {
  return <p dangerouslySetInnerHTML={{ __html: html }} />;
}

function Block({ block }) {
  switch (block.type) {
    case 'p':
      return <Paragraph html={block.html} />;

    case 'h3':
      return <h3 id={block.id}>{block.text}</h3>;

    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul';
      return (
        <Tag>
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </Tag>
      );
    }

    case 'callout':
      return (
        <div className={`callout${block.tone ? ` ${block.tone}` : ''}`}>
          {block.body.map((line, i) => (
            <p key={i}>
              {i === 0 && block.label && <strong>{block.label} </strong>}
              <span dangerouslySetInnerHTML={{ __html: line }} />
            </p>
          ))}
        </div>
      );

    case 'cards':
      return (
        <div className="cd-grid">
          {block.items.map((card, i) => (
            <div className="cd-card" key={i}>
              <div className="cd-num">{i + 1}</div>
              <h3>{card.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: card.body }} />
            </div>
          ))}
        </div>
      );

    case 'steps':
      return (
        <div className="audit-steps">
          {block.items.map((step, i) => (
            <div className="audit-step" key={i}>
              <div className="audit-n">{i + 1}</div>
              <div>
                <h4>{step.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: step.body }} />
              </div>
            </div>
          ))}
        </div>
      );

    case 'table':
      return (
        <div className="ba-table" style={{ overflowX: 'auto', margin: '32px 0' }}>
          <table>
            <thead>
              <tr>{block.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} dangerouslySetInnerHTML={{ __html: cell }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'econ': {
      // Financial waterfall / P&L comparison table
      const cols = block.columns; // ['DTC', 'Retail'] etc
      const gridTemplate = `1fr ${cols.map(() => '1fr').join(' ')}`;
      return (
        <div className="econ">
          <div className="econ-header" style={{ gridTemplateColumns: gridTemplate }}>
            <div>Line Item</div>
            {cols.map((c, i) => <div key={i}>{c}</div>)}
          </div>
          {block.rows.map((row, i) => (
            <div className="econ-row" key={i} style={{ gridTemplateColumns: gridTemplate }}>
              <div>{row.label}</div>
              {row.values.map((v, j) => (
                <div key={j} className={v.tone || ''} dangerouslySetInnerHTML={{ __html: v.text }} />
              ))}
            </div>
          ))}
        </div>
      );
    }

    case 'math':
      // Dark-background math box with rows of label + value
      return (
        <div className="math-box">
          {block.heading && <h3>{block.heading}</h3>}
          {block.rows.map((r, i) => (
            <div className="math-row" key={i}>
              <div className="math-label" dangerouslySetInnerHTML={{ __html: r.label }} />
              <div className="math-val" dangerouslySetInnerHTML={{ __html: r.value }} />
            </div>
          ))}
          {block.note && <p className="math-note" dangerouslySetInnerHTML={{ __html: block.note }} />}
        </div>
      );

    case 'formula':
      return (
        <div className="fc-box">
          {block.heading && <h4>{block.heading}</h4>}
          <div className="fc-formula">{block.formula}</div>
          {block.notes?.map((n, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: n }} />
          ))}
        </div>
      );

    case 'checklist':
      return (
        <div className="check-grid">
          {block.items.map((item, i) => (
            <div className="check-item" key={i}>
              <h4>{item.title}</h4>
              <p dangerouslySetInnerHTML={{ __html: item.body }} />
            </div>
          ))}
        </div>
      );

    case 'redFlags':
      return (
        <div className="surp-grid">
          {block.items.map((item, i) => (
            <div className="surp" key={i}>
              <h4>{item.title}</h4>
              <p dangerouslySetInnerHTML={{ __html: item.body }} />
            </div>
          ))}
        </div>
      );

    case 'caseStudy':
      return (
        <div className="case-inline">
          {block.tag && <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#FF600A', marginBottom: 14 }}>{block.tag}</div>}
          <h3>{block.heading}</h3>
          {block.body.map((line, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: line }} />
          ))}
        </div>
      );

    case 'wired':
      return (
        <div className="wired">
          {block.tag && <div className="wired-title">{block.tag}</div>}
          <h3>{block.heading}</h3>
          {block.body?.map((line, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: line }} />
          ))}
          {block.items && (
            <ul>
              {block.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}
        </div>
      );

    case 'stages':
      return (
        <div className="stages" style={{ margin: '40px 0' }}>
          {block.items.map((stage, i) => (
            <div className={`stage-card stage-${i + 1}`} key={i} style={{ background: '#fff', borderRadius: 16, padding: '32px 36px', margin: '16px 0', borderLeft: `4px solid ${i === 0 ? '#DFDFDF' : i === 1 ? '#FF600A' : '#212121'}` }}>
              <div className="stage-header">
                <span className="stage-tag">Stage {i + 1}</span>
                {stage.range && <span className="stage-vol">{stage.range}</span>}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 10 }}>{stage.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: '#3E3E3E', margin: 0 }} dangerouslySetInnerHTML={{ __html: stage.body }} />
            </div>
          ))}
        </div>
      );

    case 'timeline':
      return (
        <div style={{ margin: '32px 0' }}>
          {block.items.map((item, i) => (
            <div className="tl-item" key={i}>
              <div className="tl-dur">{item.duration}</div>
              <div className="tl-detail">
                <h4>{item.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            </div>
          ))}
        </div>
      );

    case 'cta':
      return (
        <div className="callout" style={{ background: 'var(--dk)', borderLeft: '4px solid #FF600A', color: '#fff' }}>
          <p style={{ color: 'rgba(255,255,255,.9)', marginBottom: 16 }}>
            <strong style={{ color: '#fff' }}>{block.label || 'Talk it through with Logic.'}</strong>
            {' '}
            <span dangerouslySetInnerHTML={{ __html: block.body }} />
          </p>
          <p style={{ marginBottom: 0 }}>
            <a href={block.href || '/#pricing'} style={{ color: '#FF600A', fontWeight: 700, textDecoration: 'none' }}>
              {block.linkText || 'See how Logic works →'}
            </a>
          </p>
        </div>
      );

    case 'diagram':
      return (
        <figure style={{ margin: '40px 0' }}>
          <div
            className="guide-diagram"
            style={{
              background: block.background || 'var(--dk)',
              borderRadius: 16,
              padding: '32px 24px',
              overflowX: 'auto',
            }}
            dangerouslySetInnerHTML={{ __html: block.svg }}
          />
          {block.caption && (
            <figcaption style={{ fontSize: 13, color: 'var(--gr)', textAlign: 'center', marginTop: 12, fontStyle: 'italic' }}>
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
}

function GuideSection({ section }) {
  return (
    <section id={section.id}>
      <h2>{section.heading}</h2>
      {section.lead && <p className="section-lead" dangerouslySetInnerHTML={{ __html: section.lead }} />}
      {section.blocks?.map((block, i) => <Block block={block} key={i} />)}
    </section>
  );
}

export default function EvergreenGuidePage({ guide }) {
  const schemas = schemaFor(guide);
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Nav variant="guide" />

      <section className="a-hero gl">
        <div className="a-hero-inner">
          <div className="breadcrumb"><a href="/">Logic Agency</a>&nbsp;/&nbsp;<a href="/guides">Guides</a></div>
          <h1>{guide.titleBefore} <span className="o">{guide.titleAccent}</span></h1>
          <p className="a-lede">{guide.lede}</p>
          <div className="a-meta">
            <span><strong>Jordan Harper, Logic Agency Inc.</strong></span>
            <span>{guide.updated}</span>
            <span>{guide.readTime}</span>
            <span>Guides</span>
          </div>
        </div>
      </section>

      <div className="article gl">
        <div className="article-inner">
          {guide.tldr && (
            <div className="wired" style={{ marginTop: 0, marginBottom: 48 }}>
              <div className="wired-title">TL;DR</div>
              <h3 style={{ marginBottom: 20 }}>What you&apos;ll take away</h3>
              <ul>
                {guide.tldr.map((point, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </ul>
            </div>
          )}

          {guide.audience && (
            <div className="callout" style={{ marginTop: 0, marginBottom: 40 }}>
              <p><strong>Who this is for:</strong> {guide.audience}</p>
            </div>
          )}

          <div className="toc">
            <h3>What&apos;s Inside</h3>
            <ul className="toc-list">
              {guide.sections.map((s) => (
                <li key={s.id}><a href={`#${s.id}`}>{s.heading}</a></li>
              ))}
            </ul>
          </div>

          {guide.sections.map((section) => <GuideSection section={section} key={section.id} />)}

          {guide.keyTakeaways && (
            <div className="wired" style={{ marginTop: 56 }}>
              <div className="wired-title">Key Takeaways</div>
              <h3 style={{ marginBottom: 20 }}>The operator&apos;s summary</h3>
              <ul>
                {guide.keyTakeaways.map((point, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <section className="guide-faq-section">
        <div className="guide-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <GuideFaqAccordion items={guide.faq} />
        </div>
      </section>

      <section className="cta-band gd">
        <div className="cta-inner">
          <h2>{guide.ctaHeading || (<>Need to turn the framework into <span className="o">operating rhythm?</span></>)}</h2>
          <p>{guide.ctaCopy || 'Logic Agency gives scaling consumer brands senior supply chain and packaging operations without forcing an early full-time hire.'}</p>
          <div className="cta-btns">
            <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bo" target="_blank" rel="noopener noreferrer">Start a Conversation →</a>
            <a href="/#pricing" className="bt bw">See Plans &amp; Pricing</a>
          </div>
          <span className="cta-sub">Logic Agency Inc. · Packaging &amp; Supply Chain Ops on a Monthly Retainer</span>
        </div>
      </section>

      <section className="related gl">
        <div className="related-inner">
          <h3>Keep Reading</h3>
          <div className="related-links">
            {guide.related.map((item) => (
              <a className="related-link" href={item.href} key={item.href}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
