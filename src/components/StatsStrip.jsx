import React from 'react';
import './StatsStrip.css';

const stats = [
  { number: '30+', label: 'Rule Triggers' },
  { number: '4', label: 'Loyalty Tiers' },
  { number: '10', label: 'Reward Actions' },
  { number: 'Dual-Sided', label: 'Referrals' },
  { number: 'Real-Time', label: 'ROI Analytics' },
];

const StatsStrip = () => (
  <section id="stats-strip" className="stats-strip">
    <div className="container stats-strip-inner">
      {stats.map((s, i) => (
        <React.Fragment key={i}>
          <div className="stat-item">
            <span className="stat-number">{s.number}</span>
            <span className="stat-label">{s.label}</span>
          </div>
          {i < stats.length - 1 && <div className="stat-divider" />}
        </React.Fragment>
      ))}
    </div>
  </section>
);

export default StatsStrip;
