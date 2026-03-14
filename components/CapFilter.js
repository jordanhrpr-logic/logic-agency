'use client';
import { useState, useCallback } from 'react';

const caps = [
  { text: 'Retail-ready packaging design & structural engineering', ch: ['retail'] },
  { text: 'Retailer compliance — Target, Walmart, Costco, Amazon', ch: ['retail'] },
  { text: 'Case pack, inner pack & pallet configuration', ch: ['retail'] },
  { text: 'Shelf-ready & planogram-optimized packaging', ch: ['retail'] },
  { text: 'UPC, labeling & regulatory requirements', ch: ['retail'] },
  { text: 'Shelf strategy & commercial sell-through presentation', ch: ['retail', 'b2b'] },
  { text: 'Commercial & wholesale packaging systems', ch: ['b2b'] },
  { text: 'Private label & co-manufacturing packaging', ch: ['b2b'] },
  { text: 'Vendor onboarding & compliance documentation', ch: ['b2b'] },
  { text: 'Amazon FBA prep & marketplace compliance', ch: ['dtc'] },
  { text: 'Branded unboxing & subscription packaging', ch: ['dtc'] },
  { text: 'DIM weight optimization & shipping cost reduction', ch: ['dtc'] },
  { text: 'Global sourcing across 15+ countries', ch: ['retail', 'b2b', 'dtc'] },
  { text: 'Production management & quality control', ch: ['retail', 'b2b', 'dtc'] },
  { text: 'Supply chain buildout & optimization', ch: ['retail', 'b2b', 'dtc'] },
  { text: 'Inventory management & demand planning', ch: ['retail', 'b2b', 'dtc'] },
  { text: '3PL & fulfillment coordination', ch: ['retail', 'b2b', 'dtc'] },
  { text: 'Cost reduction without sacrificing brand', ch: ['retail', 'b2b', 'dtc'] },
];

const channels = [
  { id: 'retail', label: 'Retail' },
  { id: 'b2b', label: 'B2B / Commercial' },
  { id: 'dtc', label: 'DTC / Marketplace' },
];

const check = <svg viewBox="0 0 24 24" fill="none" stroke="#FF600A" strokeWidth="2.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>;

export default function CapFilter() {
  const [active, setActive] = useState(null);

  const toggle = useCallback((id) => {
    setActive(prev => prev === id ? null : id);
  }, []);

  return (
    <>
      <div className="ch-badges">
        {channels.map(c => (
          <button
            key={c.id}
            className={`ch-badge${active === c.id ? ' ch-active' : ''}`}
            onClick={() => toggle(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="cap-grid">
        {caps.map((cap, i) => (
          <div
            key={i}
            className={`cap-item${active && !cap.ch.includes(active) ? ' cap-dim' : ''}`}
          >
            <div className="cap-icon">{check}</div>
            <span>{cap.text}</span>
          </div>
        ))}
      </div>
    </>
  );
}
