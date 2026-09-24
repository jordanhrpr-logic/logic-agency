'use client';

import { useState, useRef, useCallback, useId } from 'react';

// Accessible tab switcher for guide comparison sections.
// All panels render in DOM (SEO/crawler-safe); inactive panels hidden via `hidden` attribute.
export default function GuideTabs({ label, tabs }) {
  const [active, setActive] = useState(0);
  const groupId = useId().replace(/:/g, '');
  const tabRefs = useRef([]);

  const onKeyDown = useCallback((e, i) => {
    const total = tabs.length;
    let next = null;
    if (e.key === 'ArrowRight') next = (i + 1) % total;
    else if (e.key === 'ArrowLeft') next = (i - 1 + total) % total;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = total - 1;
    if (next != null) {
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  }, [tabs.length]);

  return (
    <div className="guide-tabs" role="region" aria-label={label || 'Comparison tabs'}>
      <div className="gt-list" role="tablist" aria-label={label || 'Options'}>
        {tabs.map((tab, i) => {
          const isActive = i === active;
          const tabId = `gt-tab-${groupId}-${i}`;
          const panelId = `gt-panel-${groupId}-${i}`;
          return (
            <button
              key={i}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              ref={(el) => (tabRefs.current[i] = el)}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`gt-tab${isActive ? ' gt-tab-active' : ''}`}
            >
              {tab.label}
              {tab.badge && <span className="gt-badge">{tab.badge}</span>}
            </button>
          );
        })}
      </div>
      {tabs.map((tab, i) => {
        const tabId = `gt-tab-${groupId}-${i}`;
        const panelId = `gt-panel-${groupId}-${i}`;
        return (
          <div
            key={i}
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId}
            hidden={i !== active}
            className="gt-panel"
          >
            {tab.heading && <h4 className="gt-panel-heading">{tab.heading}</h4>}
            {tab.body && (
              <div className="gt-panel-body" dangerouslySetInnerHTML={{ __html: tab.body }} />
            )}
            {tab.metrics && (
              <div className="gt-metrics">
                {tab.metrics.map((m, j) => (
                  <div className="gt-metric" key={j}>
                    <div className="gt-metric-label">{m.label}</div>
                    <div className="gt-metric-value" dangerouslySetInnerHTML={{ __html: m.value }} />
                    {m.note && <div className="gt-metric-note">{m.note}</div>}
                  </div>
                ))}
              </div>
            )}
            {tab.list && (
              <ul className="gt-list-detail">
                {tab.list.map((li, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: li }} />
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
