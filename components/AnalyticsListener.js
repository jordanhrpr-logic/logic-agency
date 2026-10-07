'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import {
  trackScrollDepth,
  trackEmailClick,
  trackPhoneClick,
  trackCalendlyOutbound,
  trackOutboundClick,
  trackGuideClick,
  trackCaseStudyClick,
} from '@/lib/analytics'

const SCROLL_THRESHOLDS = [25, 50, 75, 90]
const SITE_HOST = 'logicagencyinc.com'

function isInternal(url) {
  return url.hostname === SITE_HOST || url.hostname === `www.${SITE_HOST}` || url.hostname === 'localhost'
}

function findAnchorAncestor(target) {
  let el = target
  while (el && el !== document.body) {
    if (el.tagName === 'A' && el.href) return el
    el = el.parentElement
  }
  return null
}

function anchorText(el) {
  const text = (el.textContent || '').trim().slice(0, 60)
  const label = (el.getAttribute('aria-label') || '').trim().slice(0, 60)
  return label || text || '(no text)'
}

function inferLocation(a) {
  let el = a
  while (el && el !== document.body) {
    const cls = typeof el.className === 'string' ? el.className : ''
    if (cls.includes('nav') || el.tagName === 'NAV') return 'nav'
    if (cls.includes('footer') || el.tagName === 'FOOTER') return 'footer'
    if (cls.includes('hero')) return 'hero'
    if (cls.includes('faq')) return 'faq'
    if (cls.includes('cta-band') || cls.includes('cta_band') || cls.includes('ctaBand')) return 'cta-band'
    if (cls.includes('pricing') || cls.includes('tier')) return 'pricing'
    if (cls.includes('related')) return 'related-guides'
    if (cls.includes('callout')) return 'callout'
    if (cls.includes('case-study') || cls.includes('case_study')) return 'case-study'
    if (el.tagName === 'ARTICLE') return 'article-body'
    el = el.parentElement
  }
  return 'body'
}

export default function AnalyticsListener() {
  const pathname = usePathname()
  const firedThresholds = useRef(new Set())

  useEffect(() => {
    firedThresholds.current = new Set()
  }, [pathname])

  useEffect(() => {
    let raf = 0
    function onScroll() {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const h = document.documentElement
        const scrolled = (h.scrollTop + window.innerHeight) / h.scrollHeight
        const pct = Math.round(scrolled * 100)
        for (const t of SCROLL_THRESHOLDS) {
          if (pct >= t && !firedThresholds.current.has(t)) {
            firedThresholds.current.add(t)
            trackScrollDepth({ percent: t })
          }
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [pathname])

  useEffect(() => {
    function onClick(e) {
      const a = findAnchorAncestor(e.target)
      if (!a) return
      const href = a.getAttribute('href') || ''
      if (!href || href.startsWith('#')) return

      if (href.startsWith('mailto:')) {
        trackEmailClick({ ctaLocation: a.dataset.ctaLocation || inferLocation(a) })
        return
      }
      if (href.startsWith('tel:')) {
        trackPhoneClick({ ctaLocation: a.dataset.ctaLocation || inferLocation(a) })
        return
      }

      let url
      try {
        url = new URL(href, window.location.origin)
      } catch (err) {
        return
      }

      if (url.hostname === 'calendly.com' || url.hostname.endsWith('.calendly.com')) {
        trackCalendlyOutbound({
          destination: `${url.hostname}${url.pathname}`,
          ctaLocation: a.dataset.ctaLocation || inferLocation(a),
        })
        return
      }

      if (!isInternal(url)) {
        trackOutboundClick({ destination: `${url.hostname}${url.pathname}`, anchorText: anchorText(a) })
        return
      }

      // Internal content clicks: /guides/{slug} and /work/{slug}
      const guideMatch = url.pathname.match(/^\/guides\/([^/?]+)/)
      if (guideMatch) {
        trackGuideClick({ guideSlug: guideMatch[1], sourcePage: window.location.pathname })
        return
      }
      const workMatch = url.pathname.match(/^\/work\/([^/?]+)/)
      if (workMatch) {
        trackCaseStudyClick({ caseSlug: workMatch[1], sourcePage: window.location.pathname })
      }
    }
    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])

  return null
}
