import React, { useState, useRef } from 'react';
import './FeatureTabs.css';

const tabs = [
  { id: 'loyalty', label: 'Loyalty Dashboard' },
  { id: 'rules', label: 'Rule Engine' },
  { id: 'coupons', label: 'Smart Coupons' },
  { id: 'referral', label: 'Referral Program' },
  { id: 'analytics', label: 'Analytics' },
];

/* ── 12.1 Loyalty Dashboard Card ── */
const LoyaltyMock = () => (
  <div id="mock-loyalty-card" className="mock-card animate-on-scroll fade-up">
    <div className="mock-header">
      <span className="mock-title">🏆 ownRewards</span>
      <span className="mock-badge badge-gold">🥇 GOLD</span>
    </div>
    <div className="mock-subtitle" style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
      Priya Sharma · +91 98765 43210
    </div>
    
    <div className="ft-points-block animate-on-scroll fade-up">
      <div className="ft-points-label">Available Points</div>
      <div className="ft-points-value">2,450</div>
      <div className="ft-points-equiv">≈ ₹245 reward value</div>
    </div>
    
    <div className="mock-section" style={{ marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '600' }}>
        <span>Gold</span>
        <span style={{ color: 'var(--text-tertiary)' }}>550 pts to Platinum</span>
      </div>
      <div className="ft-progress-track">
        <div className="ft-progress-fill" style={{ width: '80%' }} />
      </div>
    </div>
    
    <div className="mock-divider" />
    
    <div className="mock-section">
      <div className="mock-label">Recent Activity</div>
      <div className="ft-activity-row">
        <div>🎂 Birthday Rule</div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>+500 pts</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>5m ago</div>
        </div>
      </div>
      <div className="ft-activity-row">
        <div>Purchase — Dine In</div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>+120 pts</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Yesterday</div>
        </div>
      </div>
    </div>
  </div>
);

/* ── 12.2 Rule Card Mock ── */
const RulesMock = () => (
  <div id="mock-rule-card" className="mock-card animate-on-scroll fade-up">
    <div className="mock-header">
      <span className="mock-title">⚡ Birthday Bonus</span>
      <span className="mock-badge" style={{ color: '#10b981', background: 'rgba(16,185,129,0.1)' }}>
        <span className="pulse-dot" style={{ display: 'inline-block', marginRight: '6px' }} /> ACTIVE
      </span>
    </div>
    <div className="mock-divider" />
    
    <div className="ft-rule-block animate-on-scroll fade-up">
      <div className="ft-rule-step">
        <div className="ft-step-num">1</div>
        <div className="ft-step-content">
          <div className="mock-label">WHEN THIS HAPPENS</div>
          <div className="mock-code-pill">customer_birthday</div>
        </div>
      </div>
      <div className="ft-rule-step">
        <div className="ft-step-num">2</div>
        <div className="ft-step-content">
          <div className="mock-label">AND CONDITION IS MET</div>
          <div className="ft-condition-box">
            tier <span style={{ color: 'var(--primary)' }}>IN</span> [Gold, Platinum]
          </div>
        </div>
      </div>
      <div className="ft-rule-step">
        <div className="ft-step-num">3</div>
        <div className="ft-step-content">
          <div className="mock-label">THEN DO THIS</div>
          <div className="ft-action-list">
            <div className="ft-action-item"><span className="ft-action-icon">🪙</span> add_bonus_points <strong>+500</strong></div>
            <div className="ft-action-item"><span className="ft-action-icon">🏷️</span> issue_coupon <strong>BDAY20</strong></div>
            <div className="ft-action-item"><span className="ft-action-icon">📱</span> send_notification <strong>WhatsApp</strong></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ── 12.3 Coupon Card Mock ── */
const CouponsMock = () => (
  <div id="mock-coupon-card" className="mock-card ft-coupon-card animate-on-scroll fade-up">
    <div className="ft-coupon-cutout left" />
    <div className="ft-coupon-cutout right" />
    <div className="mock-header">
      <span className="mock-title" style={{ fontSize: '1.4rem', color: 'var(--primary)' }}>SUMMER20</span>
      <span className="mock-badge" style={{ color: '#10b981', background: 'rgba(16,185,129,0.1)' }}>ACTIVE</span>
    </div>
    <div className="mock-subtitle" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
      Summer Sale — 20% Off Footwear
    </div>
    
    <div className="ft-coupon-details">
      <div className="ft-coupon-detail"><span className="ft-detail-lbl">Type</span> <span className="ft-detail-val">20% Discount</span></div>
      <div className="ft-coupon-detail"><span className="ft-detail-lbl">Max Disc</span> <span className="ft-detail-val">₹500</span></div>
      <div className="ft-coupon-detail"><span className="ft-detail-lbl">Applies to</span> <span className="ft-detail-val">Shoes</span></div>
    </div>
    
    <div className="mock-divider" style={{ borderStyle: 'dashed' }} />
    
    <div className="mock-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '600' }}>
        <span>Usage (84%)</span>
        <span style={{ color: 'var(--text-tertiary)' }}>153 remaining</span>
      </div>
      <div className="ft-progress-track">
        <div className="ft-progress-fill" style={{ width: '84%', background: 'linear-gradient(90deg, #f59e0b, #fbbf24)' }} />
      </div>
    </div>
  </div>
);

/* ── 12.4 Referral Summary Mock ── */
const ReferralMock = () => (
  <div id="mock-referral-card" className="mock-card animate-on-scroll fade-up">
    <div className="mock-header">
      <span className="mock-title">👥 Summer Referral Program</span>
      <span className="mock-badge" style={{ color: '#10b981', background: 'rgba(16,185,129,0.1)' }}>ACTIVE</span>
    </div>
    
    <div className="ft-referral-grid animate-on-scroll fade-up">
      <div className="ft-referral-box" style={{ background: 'rgba(245, 158, 11, 0.08)', borderColor: 'rgba(245, 158, 11, 0.2)' }}>
        <div className="mock-label">REFERRER GETS</div>
        <div className="ft-ref-reward" style={{ color: '#d4a000' }}>500 pts</div>
        <div className="ft-ref-desc">on friend's first purchase</div>
      </div>
      <div className="ft-referral-box" style={{ background: 'rgba(16, 185, 129, 0.08)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
        <div className="mock-label">FRIEND GETS</div>
        <div className="ft-ref-reward" style={{ color: '#10b981' }}>₹100 OFF</div>
        <div className="ft-ref-desc">on their first order</div>
      </div>
    </div>
    
    <div className="mock-section" style={{ marginTop: '24px' }}>
      <div className="mock-label" style={{ marginBottom: '12px' }}>Eligibility Gate</div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <span className="mock-pill amber-pill">Silver tier</span>
        <span className="mock-pill amber-pill">30 days old</span>
      </div>
    </div>
    
    <div className="mock-divider" />
    
    <div className="ft-stats-row">
      <div className="ft-stat">
        <div className="ft-stat-val">248</div>
        <div className="ft-stat-lbl">Codes Gen</div>
      </div>
      <div className="ft-stat">
        <div className="ft-stat-val">76%</div>
        <div className="ft-stat-lbl">Conv Rate</div>
      </div>
      <div className="ft-stat">
        <div className="ft-stat-val">₹18.9k</div>
        <div className="ft-stat-lbl">Revenue</div>
      </div>
    </div>
  </div>
);

/* ── 12.5 Analytics Metrics Mock ── */
const AnalyticsMock = () => (
  <div id="mock-analytics-card" className="mock-card animate-on-scroll fade-up" style={{ padding: '0', overflow: 'hidden' }}>
    <div className="ft-analytics-grid animate-on-scroll fade-up">
      <div className="ft-metric-box">
        <div className="mock-label">Reward ROI</div>
        <div className="ft-metric-val">284%</div>
        <div className="ft-metric-trend positive">↑ 12% vs LM</div>
      </div>
      <div className="ft-metric-box">
        <div className="mock-label">Retention (M3)</div>
        <div className="ft-metric-val">67.4%</div>
        <div className="ft-metric-trend positive">↑ 3.2% vs LM</div>
      </div>
      <div className="ft-metric-box">
        <div className="mock-label">Active Members</div>
        <div className="ft-metric-val">12.4k</div>
        <div className="ft-metric-trend positive">↑ 840 new</div>
      </div>
      <div className="ft-metric-box">
        <div className="mock-label">Avg LTV</div>
        <div className="ft-metric-val">₹4.8k</div>
        <div className="ft-metric-trend positive">↑ ₹320 vs LM</div>
      </div>
    </div>
    
    <div style={{ padding: '24px' }}>
      <div className="mock-label" style={{ marginBottom: '16px' }}>Tier Distribution</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {[{ name: 'Bronze', pct: '45%', col: '#CD7F32' }, { name: 'Silver', pct: '30%', col: '#94A3B8' }, { name: 'Gold', pct: '18%', col: '#F59E0B' }, { name: 'Platinum', pct: '7%', col: 'var(--primary)' }].map(t => (
          <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '60px', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '500' }}>{t.name}</div>
            <div className="ft-progress-track" style={{ height: '6px' }}>
              <div className="ft-progress-fill" style={{ width: t.pct, background: t.col }} />
            </div>
            <div style={{ width: '40px', textAlign: 'right', fontSize: '0.85rem', fontWeight: 'bold' }}>{t.pct}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const panels = {
  loyalty: { Component: LoyaltyMock, caption: 'Customer wallet showing tier badge, point balance, progress to next tier, and recent activity.' },
  rules: { Component: RulesMock, caption: 'A birthday rule automatically awards 500 bonus points and issues a BDAY20 coupon — no manual work.' },
  coupons: { Component: CouponsMock, caption: 'Smart coupons with category-specific applicability, usage tracking, and rule-gated eligibility.' },
  referral: { Component: ReferralMock, caption: 'Both the referrer and the new customer get independent, configurable rewards.' },
  analytics: { Component: AnalyticsMock, caption: 'Real-time cohort retention, reward ROI, and tier distribution — all filterable by date and outlet.' },
};

const FeatureTabs = () => {
  const [active, setActive] = useState('loyalty');
  const { Component } = panels[active];

  // 3D Tilt Logic
  const ref = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate rotation between -12 and 12 degrees
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    setRotate({
      x: -(yPct * 24), // rotateX is based on mouseY
      y: (xPct * 24)   // rotateY is based on mouseX
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section id="feature-tabs" className="feature-tabs animate-on-scroll fade-up">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title animate-on-scroll fade-up">See ownRewards <span className="gradient-text">in action</span></h2>
        </div>

        {/* Tab Buttons */}
        <div id="featuretabs-div-2" className="tab-btn-row" role="tablist">
          {tabs.map((t) => (
            <button id="featuretabs-btn-1"
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              aria-controls={`tab-panel-${t.id}`}
              className={`tab-btn ${active === t.id ? 'active' : ''}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Panel */}
        <div id="featuretabs-div-3" className="tab-panel-wrapper" style={{ perspective: '1200px' }}>
          <div className="carousel-content">
            <div id="featuretabs-div-4"
              key={active}
              role="tabpanel"
              className="tab-panel active testimonial-fade-wrapper"
            >
              <div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                  transition: 'transform 0.1s ease-out',
                  transformStyle: 'preserve-3d',
                  width: '100%',
                  cursor: 'pointer'
                }}
              >
                <Component />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;
