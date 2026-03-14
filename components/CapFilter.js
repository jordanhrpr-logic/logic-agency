'use client';
import { useCallback } from 'react';

const channels = [
  {
    id: 'retail',
    label: 'Retail',
    caps: [
      'Retail-ready packaging design & structural engineering',
      'Retailer compliance — Target, Walmart, Costco, Amazon',
      'Case pack, inner pack & pallet configuration',
      'Shelf-ready & planogram-optimized packaging',
      'UPC, labeling & regulatory requirements',
      'Shelf strategy & commercial sell-through presentation',
      'Global sourcing across 15+ countries',
      'Production management & quality control',
      'Supply chain buildout & optimization',
      'Inventory management & demand planning',
      '3PL & fulfillment coordination',
      'Cost reduction without sacrificing brand',
    ],
  },
  {
    id: 'b2b',
    label: 'B2B / Commercial',
    caps: [
      'Commercial & wholesale packaging systems',
      'Private label & co-manufacturing packaging',
      'Vendor onboarding & compliance documentation',
      'Shelf strategy & commercial sell-through presentation',
      'Global sourcing across 15+ countries',
      'Production management & quality control',
      'Supply chain buildout & optimization',
      'Inventory management & demand planning',
      '3PL & fulfillment coordination',
      'Cost reduction without sacrificing brand',
    ],
  },
  {
    id: 'dtc',
    label: 'DTC / Marketplace',
    caps: [
      'Amazon FBA prep & marketplace compliance',
      'Branded unboxing & subscription packaging',
      'DIM weight optimization & shipping cost reduction',
      'Global sourcing across 15+ countries',
      'Production management & quality control',
      'Supply chain buildout & optimization',
      'Inventory management & demand planning',
      '3PL & fulfillment coordination',
      'Cost reduction without sacrificing brand',
    ],
  },
];

const check = <svg viewBox="0 0 24 24" fill="none" stroke="#FF600A" strokeWidth="2.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>;

export default function CapFilter() {
  const handleClick = useCallback((e) => {
    e.currentTarget.classList.toggle('op');
  }, []);

  return (
    <div className="cap-acc-wrap">
      {channels.map(ch => (
        <div key={ch.id} className="cap-acc" onClick={handleClick}>
          <div className="cap-hd">
            <h3>{ch.label}</h3>
            <div className="cap-tg">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
          </div>
          <div className="cap-bd">
            <div className="cap-grid">
              {ch.caps.map((cap, i) => (
                <div key={i} className="cap-item">
                  <div className="cap-icon">{check}</div>
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
