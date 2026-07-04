import React, { useRef } from 'react';
import { CheckCircle2, TrendingUp, Users, Zap } from 'lucide-react';
import GlassCard from './GlassCard';
import './ProductShowcase.css';

const ProductShowcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="productshowcase-sec-1" className="product-showcase relative" id="solutions" ref={containerRef}>
      <div className="container relative z-10">

        {/* Row 1 — Loyalty Points Engine */}
        <div className="showcase-row">
          <div className="showcase-content">
            <h2 className="showcase-title">4-Tier Loyalty Points Engine</h2>
            <p className="showcase-description">
              Customers earn points on every purchase and automatically progress through your 4-tier loyalty program — Bronze → Silver → Gold → Platinum. Each tier unlocks richer rewards, keeping your best customers engaged and spending more.
            </p>
            <ul className="showcase-list">
              <li><CheckCircle2 className="text-primary" size={20} /> Automatic tier promotion & demotion</li>
              <li><CheckCircle2 className="text-primary" size={20} /> Configurable points multipliers per tier</li>
              <li><CheckCircle2 className="text-primary" size={20} /> Real-time tier progress notifications</li>
            </ul>
          </div>

          <div className="showcase-visual perspective-1000">
            <div className="visual-background-circle"></div>
            <div style={{ y: y1 }}  className="transform-style-3d">
              <GlassCard className="main-mockup shadow-2xl" hoverEffect={false}>
                <div className="mockup-header">
                  <h3>Tier Distribution</h3>
                  <span className="badge-growth">Live</span>
                </div>
                <div style={{ padding: '12px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { tier: 'Bronze', pct: 52, color: '#cd7f32' },
                    { tier: 'Silver', pct: 28, color: '#a8a9ad' },
                    { tier: 'Gold', pct: 15, color: '#ffd700' },
                    { tier: 'Platinum', pct: 5, color: 'var(--primary)' },
                  ].map(({ tier, pct, color }) => (
                    <div key={tier} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ width: '64px', fontSize: '0.75rem', color: 'var(--text-secondary)', flexShrink: 0 }}>{tier}</span>
                      <div style={{ flex: 1, height: '8px', background: 'var(--surface)', borderRadius: '99px', overflow: 'hidden' }}>
                        <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: '99px' }} />
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', width: '32px', textAlign: 'right' }}>{pct}%</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            <div id="productshowcase-div-2" className="floating-card float-left animate-on-scroll fade-up" style={{ y: y3 }}>
              <GlassCard hoverEffect={false} className="mini-stat-card shadow-xl border-t border-white/20 animate-on-scroll fade-up">
                <div className="mini-icon"><TrendingUp size={16} /></div>
                <div>
                  <div className="mini-label">LTV Increase</div>
                  <div className="mini-value">+42%</div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>

        {/* Row 2 — Rule Engine */}
        <div className="showcase-row reverse">
          <div className="showcase-content">
            <h2 className="showcase-title">Rule Engine with 30+ Event Triggers</h2>
            <p className="showcase-description">
              Set up powerful automations with 30+ event triggers. When a customer makes a purchase, hits a milestone, or refers a friend — the Rule Engine instantly fires: award points, grant rewards, issue coupons, or send notifications — all without code.
            </p>
            <ul className="showcase-list">
              <li><CheckCircle2 className="text-primary" size={20} /> Purchase, birthday, referral, tier triggers</li>
              <li><CheckCircle2 className="text-primary" size={20} /> Multi-action rules per single event</li>
              <li><CheckCircle2 className="text-primary" size={20} /> Budget controls & eligibility conditions</li>
            </ul>
          </div>

          <div className="showcase-visual perspective-1000">
            <div className="visual-background-circle secondary"></div>
            <div style={{ y: y2 }}  className="transform-style-3d">
              <GlassCard className="main-mockup workflow-mockup shadow-2xl" hoverEffect={false}>
                <div className="workflow-step">
                  <div className="step-icon"><Zap size={14} /></div>
                  <div className="step-content">
                    <h4>Customer spends $100</h4>
                    <p>Trigger: purchase_completed</p>
                  </div>
                </div>
                <div className="workflow-connector"></div>
                <div className="workflow-step">
                  <div className="step-icon">2</div>
                  <div className="step-content">
                    <h4>Award 100 Points</h4>
                    <p>Rule: 1 point per $1 spent</p>
                  </div>
                </div>
                <div className="workflow-connector"></div>
                <div className="workflow-step highlight">
                  <div className="step-icon">3</div>
                  <div className="step-content">
                    <h4>Send WhatsApp Alert</h4>
                    <p>"You've reached Gold Tier! 🏆"</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>

        {/* Row 3 — Referral Programs */}
        <div className="showcase-row">
          <div className="showcase-content">
            <h2 className="showcase-title">Dual-Sided Referral Programs</h2>
            <p className="showcase-description">
              Turn every loyal customer into a brand ambassador. OwnRewards supports 4 referral program types with dual-sided rewards (referrer + referee), loyalty gates to qualify referrers, and anti-fraud limits to keep programs healthy.
            </p>
            <ul className="showcase-list">
              <li><CheckCircle2 className="text-primary" size={20} /> Referrer + referee both earn rewards</li>
              <li><CheckCircle2 className="text-primary" size={20} /> Loyalty gates (Gold+ tier only)</li>
              <li><CheckCircle2 className="text-primary" size={20} /> Anti-fraud daily & monthly limits</li>
            </ul>
          </div>

          <div className="showcase-visual perspective-1000">
            <div className="visual-background-circle"></div>
            <div style={{ y: y1 }}  className="transform-style-3d">
              <GlassCard className="main-mockup shadow-2xl" hoverEffect={false}>
                <div className="mockup-header">
                  <h3>Referral Flow</h3>
                  <span className="badge-growth">+4 Types</span>
                </div>
                <div style={{ padding: '12px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { label: 'Referrer earns', value: '500 pts + $10 coupon', icon: '🎁' },
                    { label: 'Referee earns', value: '$15 welcome reward', icon: '🎉' },
                    { label: 'Anti-fraud limit', value: '5 referrals / month', icon: '🛡️' },
                    { label: 'Loyalty gate', value: 'Gold tier & above', icon: '⭐' },
                  ].map(({ label, value, icon }) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', background: 'var(--surface)', borderRadius: '8px' }}>
                      <span style={{ fontSize: '1.2rem' }}>{icon}</span>
                      <div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{label}</div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            <div id="productshowcase-div-3" className="floating-card float-left animate-on-scroll fade-up" style={{ y: y3 }}>
              <GlassCard hoverEffect={false} className="mini-stat-card shadow-xl border-t border-white/20 animate-on-scroll fade-up">
                <div className="mini-icon"><Users size={16} /></div>
                <div>
                  <div className="mini-label">New via Referral</div>
                  <div className="mini-value">38%</div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;
