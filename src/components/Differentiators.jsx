import React from 'react';
import GlassCard from './GlassCard';
import './Differentiators.css';

const cards = [
  {
    icon: '🧠',
    title: 'Rules That Think',
    body: 'Not just "earn 1 point per ₹100". Set 30+ trigger events — birthday, nth visit, inactivity, feedback, referral — and automate any action: bonus points, reward grants, tier changes, coupon issuance.',
  },
  {
    icon: '🏆',
    title: 'Tiers That Mean Something',
    body: 'Bronze → Silver → Gold → Platinum with dynamic progression, tier-based multipliers, and lifecycle stage tracking (active, at-risk, churned). Customers feel the difference.',
  },
  {
    icon: '📊',
    title: 'Analytics That Drive Decisions',
    body: 'Track cohort retention curves, reward ROI, product correlations, and customer lifetime value — not just points totals.',
  },
];



const Differentiators = () => (
  <section id="differentiators" className="differentiators">
    <div className="container">
      <div className="section-header text-center">
        <h2 className="section-title animate-on-scroll fade-up">Why businesses choose <span className="gradient-text">OwnRewards</span></h2>
      </div>

      <div
        className="diff-grid animate-on-scroll fade-up"
      >
        {cards.map((c) => (
          <div key={c.title}>
            <GlassCard className="diff-card hover-lift animate-on-scroll fade-up">
              <div className="diff-icon">{c.icon}</div>
              <h3 className="diff-title">{c.title}</h3>
              <p className="diff-body">{c.body}</p>
            </GlassCard>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Differentiators;
