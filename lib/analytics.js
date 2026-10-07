// Logic Agency analytics helpers — JS mirror of the Pac TS module.
// Fires GA4 events via gtag('event', name, params) on property 408381674.
// All custom params map to custom dimensions registered on the property.
// PII (email_address, phone_number) is intentionally never passed as a param.

function send(name, params) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return
  const payload = { page_path: window.location.pathname, ...(params || {}) }
  for (const k of Object.keys(payload)) {
    if (payload[k] === undefined || payload[k] === null) delete payload[k]
  }
  window.gtag('event', name, payload)
}

// Tier 1 — Conversion intent (candidate Key Events)

export function trackConsultationClick(opts) {
  const o = opts || {}
  send('consultation_click', {
    project_type: o.projectType || 'General',
    cta_location: o.ctaLocation || 'unknown',
  })
}

export function trackEmailClick(opts) {
  const o = opts || {}
  send('email_click', { cta_location: o.ctaLocation || 'unknown' })
}

export function trackPhoneClick(opts) {
  const o = opts || {}
  send('phone_click', { cta_location: o.ctaLocation || 'unknown' })
}

export function trackCalendlyOutbound(opts) {
  const o = opts || {}
  send('calendly_outbound', {
    destination: o.destination,
    cta_location: o.ctaLocation || 'unknown',
  })
}

// Tier 2 — Engagement depth

export function trackScrollDepth(opts) {
  send('scroll_depth', {
    percent: opts.percent,
    content_type: opts.contentType || inferContentType(),
  })
}

export function trackGuideClick(opts) {
  const o = opts || {}
  send('guide_click', {
    guide_slug: o.guideSlug,
    source_page: o.sourcePage || (typeof window !== 'undefined' ? window.location.pathname : undefined),
  })
}

export function trackCaseStudyClick(opts) {
  const o = opts || {}
  send('case_study_click', {
    case_slug: o.caseSlug,
    source_page: o.sourcePage || (typeof window !== 'undefined' ? window.location.pathname : undefined),
  })
}

export function trackCtaClick(opts) {
  const o = opts || {}
  send('cta_click', {
    cta_label: o.ctaLabel,
    cta_location: o.ctaLocation,
    destination: o.destination,
  })
}

export function trackOutboundClick(opts) {
  const o = opts || {}
  send('outbound_click', {
    destination: o.destination,
    anchor_text: o.anchorText,
  })
}

export function trackFaqExpand(opts) {
  const o = opts || {}
  send('faq_expand', {
    question: (o.question || '').slice(0, 100),
    cta_location: o.ctaLocation || 'inline',
  })
}

function inferContentType() {
  if (typeof window === 'undefined') return 'unknown'
  const p = window.location.pathname
  if (p.startsWith('/guides/')) return 'guide'
  if (p.startsWith('/blog/')) return 'blog'
  if (p.startsWith('/work/')) return 'case'
  if (p === '/' || p === '/blog' || p === '/guides' || p === '/work') return 'commercial'
  return 'other'
}

export const trackCustomEvent = send
