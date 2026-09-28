'use client';

import { useEffect } from 'react';

function gtag() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag.apply(null, arguments);
  }
}

function trackEvent(name, params) {
  gtag('event', name, params);
}

export default function GA4Events() {
  useEffect(() => {
    function handleClick(e) {
      const link = e.target.closest('a[href]');
      if (!link) return;

      const href = link.getAttribute('href') || '';
      const text = (link.textContent || '').trim().slice(0, 80);

      if (href.includes('calendly.com')) {
        trackEvent('cta_click', {
          cta_type: 'calendly_booking',
          cta_text: text,
          link_url: href,
          page_path: window.location.pathname,
        });
        return;
      }

      if (href.startsWith('tel:')) {
        trackEvent('contact_click', {
          contact_method: 'phone',
          page_path: window.location.pathname,
        });
        return;
      }

      if (href.startsWith('mailto:')) {
        trackEvent('contact_click', {
          contact_method: 'email',
          page_path: window.location.pathname,
        });
        return;
      }

      if (href.includes('#pricing') || href.includes('#services')) {
        trackEvent('cta_click', {
          cta_type: 'pricing_view',
          cta_text: text,
          page_path: window.location.pathname,
        });
        return;
      }

      if (href.startsWith('/guides/') && !window.location.pathname.startsWith('/guides/')) {
        trackEvent('guide_click', {
          guide_slug: href.replace('/guides/', ''),
          source_page: window.location.pathname,
        });
      }
    }

    const scrollMarks = new Set();
    function handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const pct = Math.round((window.scrollY / scrollHeight) * 100);

      [25, 50, 75, 90].forEach(function (mark) {
        if (pct >= mark && !scrollMarks.has(mark)) {
          scrollMarks.add(mark);
          trackEvent('scroll_depth', {
            percent: mark,
            page_path: window.location.pathname,
          });
        }
      });
    }

    document.addEventListener('click', handleClick, true);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return function () {
      document.removeEventListener('click', handleClick, true);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
