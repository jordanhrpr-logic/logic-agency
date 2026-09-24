'use client';

import { useEffect, useRef, useState } from 'react';

// Adds an "in-view" class the first time the wrapper enters the viewport.
// CSS handles the actual animation; users with prefers-reduced-motion get
// the reveal state immediately, no motion applied.
export default function GuideScrollReveal({ children, className = '', once = true }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setInView(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div ref={ref} className={`${className}${inView ? ' in-view' : ''}`.trim()}>
      {children}
    </div>
  );
}
