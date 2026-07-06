import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react';
import './PricingCards.css';

const PricingCardFeatures = ({ features }) => {
  const [expanded, setExpanded] = useState(false);
  const LIMIT = 6;
  const hasMore = features.length > LIMIT;
  const visibleFeatures = expanded ? features : features.slice(0, LIMIT);

  return (
    <div className="pc-features-container animate-on-scroll fade-up">
      <ul className="pc-features">
        {visibleFeatures.map((f, idx) => (
          <li key={idx} className={f.included ? 'pc-included' : 'pc-excluded'}>
            <span className={`pc-icon ${f.included ? 'icon-included' : 'icon-excluded'}`}>
              {f.included ? <Check size={18} strokeWidth={2.5} /> : <X size={18} strokeWidth={2} />}
            </span>
            <span>{f.text}</span>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button 
          className="toggle-features-btn"
          style={{ 
            background: 'transparent', 
            border: 'none', 
            cursor: 'pointer', 
            padding: '12px 0 0 0', 
            fontSize: '0.85rem', 
            fontWeight: 700, 
            color: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>Show less <ChevronUp size={14} style={{ marginLeft: '2px', opacity: 0.7 }} /></>
          ) : (
            <>+ {features.length - LIMIT} more included <ChevronDown size={14} style={{ marginLeft: '2px', opacity: 0.7 }} /></>
          )}
        </button>
      )}
    </div>
  );
};

const plans = [
  {
    id: 'plan-starter',
    title: 'Starter',
    price: 'Free',
    sub: 'Perfect for single-outlet businesses getting started',
    btnText: 'Get Started Free →',
    btnClass: 'pc-btn-outline',
    features: [
      { text: 'Up to 500 loyalty members', included: true },
      { text: '4-tier loyalty system (Bronze → Platinum)', included: true },
      { text: 'Points earning & redemption', included: true },
      { text: '5 active rules', included: true },
      { text: 'Basic reward templates', included: true },
      { text: 'Petpooja POS integration', included: true },
      { text: '1 outlet', included: true },
      { text: 'Email support', included: true },
      { text: 'Rule Library', included: false },
      { text: 'Referral programs', included: false },
      { text: 'Campaign A/B testing', included: false },
      { text: 'Cohort analytics', included: false },
      { text: 'Multi-outlet', included: false },
    ]
  },
  {
    id: 'plan-growth',
    badge: '⭐ Most Popular',
    title: 'Growth',
    price: 'Contact Us',
    sub: 'For growing brands with multiple locations and advanced loyalty needs',
    btnText: 'Get Started →',
    btnClass: 'pc-btn-primary',
    highlight: true,
    features: [
      { text: 'Up to 5,000 loyalty members', included: true },
      { text: 'Full 4-tier system + custom multipliers', included: true },
      { text: '30+ event triggers (all)', included: true },
      { text: 'All 10 action types', included: true },
      { text: 'Rule Library templates', included: true },
      { text: 'Smart coupons (all 5 discount types)', included: true },
      { text: 'Dual-sided referral programs', included: true },
      { text: 'Campaign A/B testing', included: true },
      { text: 'Cohort analytics', included: true },
      { text: 'Up to 10 outlets', included: true },
      { text: 'All POS integrations', included: true },
      { text: 'WhatsApp via ownChat', included: true },
      { text: 'Email support', included: true },
    ]
  },
  {
    id: 'plan-enterprise',
    title: 'Enterprise',
    price: 'Contact Us',
    sub: 'For large chains and enterprise brands with custom requirements',
    btnText: 'Talk to Sales →',
    btnClass: 'pc-btn-outline',
    features: [
      { text: 'Unlimited loyalty members', included: true },
      { text: 'Custom tier names & logic', included: true },
      { text: 'All 30+ triggers + custom events', included: true },
      { text: 'All 10 action types', included: true },
      { text: 'Advanced segmentation & LTV prediction', included: true },
      { text: 'Unlimited referral programs', included: true },
      { text: 'Full cohort + product analytics + export', included: true },
      { text: 'Unlimited outlets', included: true },
      { text: 'Custom POS integration', included: true },
      { text: 'Dedicated CSM', included: true },
      { text: 'SLA-backed uptime', included: true },
      { text: 'API access + webhooks', included: true },
    ]
  }
];

const PricingCards = () => {
  return (
    <section id="pricing-cards" className="pricing-cards-section animate-on-scroll fade-up">
      <div className="container">
        <div className="pc-grid animate-on-scroll fade-up">
          {plans.map((plan, i) => (
            <div 
              key={plan.id}
              id={plan.id}
              className={`pc-card ${plan.highlight ? 'pc-highlight' : ''}`}
              
              
              
              
            >
              {plan.badge && <div className="pc-badge">{plan.badge}</div>}
              <div id="pricingcards-div-1" className="pc-card-inner animate-on-scroll fade-up">
                <div className="pc-header">
                  <h3 className="pc-title">{plan.title}</h3>
                  <div className="pc-price">{plan.price}</div>
                  <p className="pc-sub">{plan.sub}</p>
                </div>
                
                <a href="https://workspace.ownchat.app/" target="_blank" rel="noopener noreferrer" className={plan.btnClass}>
                  {plan.btnText}
                </a>
                
                <div className="pc-divider" />
                
                <PricingCardFeatures features={plan.features} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
