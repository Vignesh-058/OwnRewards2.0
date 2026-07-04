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
  <div id="mock-loyalty-card" className="mock-card tab-animate-in">
    <div className="mock-header">
      <span className="mock-title">🏆 ownRewards</span>
      <span className="mock-badge badge-gold">🥇 GOLD</span>
    </div>
    <div className="mock-subtitle" style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
      Priya Sharma · +91 98765 43210
    </div>
    
    <div className="ft-points-block tab-animate-in">
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
      <div className="ft-activity-row" style={{ padding: 0, border: 'none' }}>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Last Activity: Birthday Rule →</div>
        <div style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.85rem' }}>+500 pts</div>
      </div>
    </div>

    <div className="ft-reward-pills tab-animate-in">
      <div className="ft-reward-pill">10% OFF</div>
      <div className="ft-reward-pill">Free Coffee</div>
      <div className="ft-reward-pill">₹100 Back</div>
    </div>
  </div>
);

/* ── 12.2 Rule Card Mock ── */
const RulesMock = () => (
  <div id="mock-rule-card" className="mock-card tab-animate-in">
    <div className="mock-header">
      <span className="mock-title">⚡ Birthday Bonus Rule</span>
      <span className="mock-badge" style={{ color: '#10b981', background: 'rgba(16,185,129,0.1)' }}>
        <span className="pulse-dot" style={{ display: 'inline-block', marginRight: '6px' }} /> ACTIVE
      </span>
    </div>
    <div className="mock-divider" />
    
    <div className="ft-rule-block tab-animate-in">
      <div className="ft-rule-step">
        <div className="ft-step-num">1</div>
        <div className="ft-step-content">
          <div className="mock-label">TRIGGER</div>
          <div className="mock-code-pill">customer_birthday</div>
        </div>
      </div>
      <div className="ft-rule-step">
        <div className="ft-step-num">2</div>
        <div className="ft-step-content">
          <div className="mock-label">CONDITIONS</div>
          <div className="ft-condition-box">
            tier <span style={{ color: 'var(--primary)' }}>IN</span> [Gold, Platinum]
          </div>
        </div>
      </div>
      <div className="ft-rule-step">
        <div className="ft-step-num">3</div>
        <div className="ft-step-content">
          <div className="mock-label">ACTIONS</div>
          <div className="ft-action-list">
            <div className="ft-action-item"><span className="ft-action-icon">🪙</span> add_bonus_points <strong>+500</strong></div>
            <div className="ft-action-item"><span className="ft-action-icon">🏷️</span> issue_coupon <strong>BDAY20</strong></div>
            <div className="ft-action-item"><span className="ft-action-icon">📱</span> send_notification <strong>WhatsApp</strong></div>
          </div>
        </div>
      </div>
    </div>

    <div className="ft-rule-footer">
      Priority: 10 | Max: 1/customer/year | Fired: 1,247 times this year
    </div>
  </div>
);

/* ── 12.3 Coupon Card Mock ── */
const CouponsMock = () => (
  <div id="mock-coupon-card" className="mock-card ft-coupon-card tab-animate-in">
    <div className="ft-coupon-cutout left" />
    <div className="ft-coupon-cutout right" />
    <div className="mock-header">
      <span className="mock-title" style={{ fontSize: '1.4rem', color: 'var(--primary)' }}>🏷️ SUMMER20</span>
      <span className="mock-badge" style={{ color: '#10b981', background: 'rgba(16,185,129,0.1)' }}>ACTIVE</span>
    </div>
    <div className="mock-subtitle" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
      Summer Sale — 20% Off Footwear
    </div>
    
    <div className="ft-coupon-details">
      <div className="ft-coupon-detail"><span className="ft-detail-lbl">Discount</span> <span className="ft-detail-val">Percentage 20%</span></div>
      <div className="ft-coupon-detail"><span className="ft-detail-lbl">Max</span> <span className="ft-detail-val">₹500</span></div>
      <div className="ft-coupon-detail"><span className="ft-detail-lbl">Applies</span> <span className="ft-detail-val">specific_categories → Shoes</span></div>
    </div>
    
    <div className="mock-divider" style={{ borderStyle: 'dashed' }} />
    
    <div className="mock-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '600' }}>
        <span>Usage (84% depleted)</span>
      </div>
      <div className="ft-progress-track">
        <div className="ft-progress-fill" style={{ width: '84%', background: 'linear-gradient(90deg, #f59e0b, #fbbf24)' }} />
      </div>
    </div>

    <div style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--text-tertiary)', textAlign: 'center' }}>
      Eligibility: Gold+ tier only 🔒
    </div>
  </div>
);

/* ── 12.4 Referral Summary Mock ── */
const ReferralMock = () => (
  <div id="mock-referral-card" className="mock-card tab-animate-in">
    <div className="mock-header">
      <span className="mock-title">👥 Summer Referral Program</span>
      <span className="mock-badge" style={{ color: '#10b981', background: 'rgba(16,185,129,0.1)' }}>ACTIVE</span>
    </div>
    
    <div className="ft-referral-grid tab-animate-in">
      <div className="ft-referral-box" style={{ background: 'rgba(253, 196, 0, 0.08)', borderColor: 'rgba(253, 196, 0, 0.2)' }}>
        <div className="mock-label" style={{ color: '#d4a000' }}>REFERRER REWARD</div>
        <div className="ft-ref-reward" style={{ color: '#d4a000', fontSize: '1.2rem' }}>500 points</div>
        <div className="ft-ref-desc">on first purchase</div>
      </div>
      <div className="ft-referral-box" style={{ background: 'rgba(16, 185, 129, 0.08)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
        <div className="mock-label" style={{ color: '#10b981' }}>REFEREE REWARD</div>
        <div className="ft-ref-reward" style={{ color: '#10b981', fontSize: '1.2rem' }}>₹100 flat</div>
        <div className="ft-ref-desc">on first order</div>
      </div>
    </div>
    
    <div className="mock-section" style={{ marginTop: '24px' }}>
      <div className="mock-label" style={{ marginBottom: '12px' }}>Eligibility Gate</div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <span className="mock-pill amber-pill">Silver tier</span>
        <span className="mock-pill amber-pill">30 days</span>
        <span className="mock-pill amber-pill">₹2,000 spend</span>
      </div>
    </div>
    
    <div className="mock-divider" />
    
    <div className="ft-stats-row">
      <div className="ft-stat">
        <div className="ft-stat-val">248</div>
        <div className="ft-stat-lbl">Codes</div>
      </div>
      <div className="ft-stat">
        <div className="ft-stat-val">189</div>
        <div className="ft-stat-lbl">Used (76.2%)</div>
      </div>
      <div className="ft-stat">
        <div className="ft-stat-val">₹18,900</div>
        <div className="ft-stat-lbl">Awarded</div>
      </div>
      <div className="ft-stat">
        <div className="ft-stat-val">71.4%</div>
        <div className="ft-stat-lbl">Conversion</div>
      </div>
    </div>
  </div>
);

/* ── 12.5 Analytics Metrics Mock ── */
const CohortHeatmapMock = () => (
  <div id="mock-cohort-heatmap" className="mock-card tab-animate-in">
    <div className="mock-header">
      <span className="mock-title">Cohort Retention</span>
    </div>
    <div className="mock-subtitle" style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
      Track month-by-month user retention across monthly cohorts.
    </div>
    
    <div style={{ overflowX: 'auto' }}>
      <table className="ft-cohort-table">
        <thead>
          <tr>
            <th className="ft-cohort-th">Cohort</th>
            <th className="ft-cohort-th">Month 1</th>
            <th className="ft-cohort-th">Month 2</th>
            <th className="ft-cohort-th">Month 3</th>
            <th className="ft-cohort-th">Month 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="ft-cohort-td">Jan 2026</td>
            <td className="ft-cohort-td"><span className="ft-cohort-cell bg-green">100%</span></td>
            <td className="ft-cohort-td"><span className="ft-cohort-cell bg-green">74%</span></td>
            <td className="ft-cohort-td"><span className="ft-cohort-cell bg-green">61%</span></td>
            <td className="ft-cohort-td"><span className="ft-cohort-cell bg-amber">55%</span></td>
          </tr>
          <tr>
            <td className="ft-cohort-td">Feb 2026</td>
            <td className="ft-cohort-td"><span className="ft-cohort-cell bg-green">100%</span></td>
            <td className="ft-cohort-td"><span className="ft-cohort-cell bg-green">71%</span></td>
            <td className="ft-cohort-td"><span className="ft-cohort-cell bg-amber">58%</span></td>
            <td className="ft-cohort-td"><span className="ft-cohort-empty">—</span></td>
          </tr>
          <tr>
            <td className="ft-cohort-td">Mar 2026</td>
            <td className="ft-cohort-td"><span className="ft-cohort-cell bg-green">100%</span></td>
            <td className="ft-cohort-td"><span className="ft-cohort-cell bg-green">69%</span></td>
            <td className="ft-cohort-td"><span className="ft-cohort-empty">—</span></td>
            <td className="ft-cohort-td"><span className="ft-cohort-empty">—</span></td>
          </tr>
          <tr>
            <td className="ft-cohort-td">Apr 2026</td>
            <td className="ft-cohort-td"><span className="ft-cohort-cell bg-green">100%</span></td>
            <td className="ft-cohort-td"><span className="ft-cohort-empty">—</span></td>
            <td className="ft-cohort-td"><span className="ft-cohort-empty">—</span></td>
            <td className="ft-cohort-td"><span className="ft-cohort-empty">—</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const panels = {
  loyalty: { Component: LoyaltyMock, caption: 'Customer wallet showing tier badge, point balance, progress to next tier, and recent activity.' },
  rules: { Component: RulesMock, caption: 'A birthday rule automatically awards 500 bonus points and issues a BDAY20 coupon — no manual work.' },
  coupons: { Component: CouponsMock, caption: 'Smart coupons with category-specific applicability, usage tracking, and rule-gated eligibility.' },
  referral: { Component: ReferralMock, caption: 'Both the referrer and the new customer get independent, configurable rewards.' },
  analytics: { Component: CohortHeatmapMock, caption: 'Real-time cohort retention, reward ROI, and tier distribution — all filterable by date and outlet.' },
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
            <button id={`tab-btn-${t.id}`}
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
            <div id={`tab-panel-${active}`}
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
              <p className="tab-caption animate-on-scroll fade-up" style={{ marginTop: '20px' }}>
                {panels[active].caption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;
