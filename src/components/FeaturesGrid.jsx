import React from 'react';
import GlassCard from './GlassCard';
import './FeaturesGrid.css';

const featureGroups = [
  {
    label: 'LOYALTY ENGINE',
    features: [
      { id: 'feat-tiers', icon: '🏆', title: '4-Tier Customer System', body: 'Bronze → Silver → Gold → Platinum with configurable spend thresholds, tier-specific multipliers, and full tier history per customer.' },
      { id: 'feat-points', icon: '💰', title: 'Smart Points Earning', body: 'Award points on every purchase. Configure points-per-rupee ratio, tier multipliers, and track earned vs. bonus points separately.' },
      { id: 'feat-expiry', icon: '⏳', title: 'Points Expiry Control', body: 'Set expiry windows, trigger automated WhatsApp expiry alerts, and let customers see their expiring balance in real time.' },
      { id: 'feat-otp', icon: '🔑', title: 'OTP-Verified Redemption', body: 'Require WhatsApp OTP before any points redemption. Prevent fraud. Ensure the right customer is redeeming at the right outlet.' },
    ]
  },
  {
    label: 'RULE ENGINE',
    features: [
      { id: 'feat-triggers', icon: '⚡', title: '30+ Event Triggers', body: 'Birthday, anniversary, inactivity, nth visit, referral, feedback, bill creation, cart validation, segment changes — any event fires any rule.' },
      { id: 'feat-actions', icon: '🎯', title: '10 Action Types', body: 'Calculate points, add bonus, grant reward, issue coupon, change tier, send notification, add to segment, trigger workflow — all configurable per rule.' },
      { id: 'feat-rule-library', icon: '📚', title: 'Rule Library Templates', body: 'Pre-built rule blueprints by industry (restaurant, retail, ecommerce) and category (growth, retention, engagement). Install in one click.' },
      { id: 'feat-ab-testing', icon: '🧪', title: 'A/B Testing Built-In', body: 'Test two rule variations against a control group. Measure which drives more conversions. Data-driven rule optimization, built-in.' },
    ]
  },
  {
    label: 'REWARDS & COUPONS',
    features: [
      { id: 'feat-reward-modes', icon: '🎁', title: 'Dual Redemption Modes', body: 'Pre-Bill (instant cart discount) or Post-Issuance (wallet reward stored for later). Match the mode to your business workflow.' },
      { id: 'feat-coupons', icon: '🏷️', title: 'Smart Coupons', body: '5 discount types: percentage, fixed amount, free product, free shipping, buy-X-get-Y. Set applicability by product, category, or "all except".' },
      { id: 'feat-budget', icon: '💳', title: 'Budget-Controlled Rewards', body: 'Set max total value, max issuances, or spending caps. Budget exhaustion auto-deactivates the reward — no overspend, ever.' },
      { id: 'feat-eligibility', icon: '🔗', title: 'Rule-Linked Eligibility', body: 'Gate coupon access using Rule Engine conditions. Only customers who meet specific criteria — tier, spend, visits — can validate a coupon.' },
    ]
  },
  {
    label: 'REFERRAL PROGRAMS',
    features: [
      { id: 'feat-dual-referral', icon: '👥', title: 'Dual-Sided Referral Rewards', body: 'Separate reward configs for referrer (sharer) and referee (new joiner). Points, percentage, flat discount, or cash — each side independently configured.' },
      { id: 'feat-referral-trigger', icon: '🎯', title: 'Referral Trigger Control', body: 'Award on signup, first purchase, nth purchase, or custom events. Set minimum purchase to qualify. Anti-fraud daily limits per customer.' },
      { id: 'feat-referral-gates', icon: '🔒', title: 'Loyalty-Gated Referrals', body: 'Require minimum tier, minimum points, minimum lifetime spend, or minimum days-as-member before a customer can create a referral code.' },
      { id: 'feat-campaigns', icon: '📣', title: '7 Campaign Types', body: 'Seasonal, event-based, milestone, feedback-driven, win-back, birthday, anniversary — with audience targeting, A/B testing, and omnichannel delivery.' },
    ]
  }
];



const FeaturesGrid = () => {
  return (
    <section id="features-grid" className="features-grid-section animate-on-scroll fade-up">
      <div className="container">
        {featureGroups.map((group, groupIdx) => (
          <div key={group.label} className="fg-group">
            <div className="fg-group-header">
              <span className="fg-group-badge">{group.label}</span>
            </div>
            <div 
              className="fg-grid animate-on-scroll fade-up"
            >
              {group.features.map(f => (
                <div id="featuresgrid-div-1" key={f.id} className="fg-card-wrapper animate-on-scroll fade-up">
                  <GlassCard id={f.id} className="fg-card hover-lift animate-on-scroll fade-up">
                    <div className="fg-icon">{f.icon}</div>
                    <h3 className="fg-title">{f.title}</h3>
                    <p className="fg-body">{f.body}</p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
