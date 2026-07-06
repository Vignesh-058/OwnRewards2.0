import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import Button from './Button';
import './Pricing.css';
import { AnimatePresence } from 'framer-motion';

const PricingFeatures = ({ features }) => {
  const [expanded, setExpanded] = useState(false);
  const LIMIT = 5;
  const hasMore = features.length > LIMIT;
  const visibleFeatures = expanded ? features : features.slice(0, LIMIT);

  return (
    <div className="pricing-features animate-on-scroll fade-up">
      <ul>
        {visibleFeatures.map((feature, idx) => (
          <li key={idx}>
            <Check size={18} className="check-icon" />
            {feature}
          </li>
        ))}
      </ul>
      {hasMore && (
        <button 
          className="mt-4 toggle-features-btn"
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show less ↑' : `+ ${features.length - LIMIT} more included ▾`}
        </button>
      )}
    </div>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      priceMonthly: 49,
      priceAnnual: 39,
      description: "Perfect for small businesses launching their first loyalty program.",
      features: [
        "Up to 2,000 active members",
        "Bronze & Silver loyalty tiers",
        "Basic points engine (1 rule)",
        "10 event triggers",
        "Percentage & flat rewards",
        "Email notifications",
        "Standard analytics dashboard",
      ],
      highlighted: false,
      cta: "Starter Plan"
    },
    {
      name: "Growth",
      priceMonthly: 149,
      priceAnnual: 119,
      description: "Everything you need to scale retention with the full OwnRewards platform.",
      features: [
        "Up to 10,000 active members",
        "All 4 tiers: Bronze → Platinum",
        "Full Rule Engine (30+ triggers)",
        "All 5 reward & coupon types",
        "Dual-sided referral programs",
        "7 campaign types + A/B testing",
        "Omnichannel: Email, SMS, WhatsApp",
        "Cohort retention & ROI analytics",
        "Priority support",
      ],
      highlighted: true,
      cta: "Growth Plan"
    },
    {
      name: "Enterprise",
      priceMonthly: "Custom",
      priceAnnual: "Custom",
      description: "For high-volume merchants with complex, custom loyalty needs.",
      features: [
        "Unlimited members",
        "Custom tier structures & rules",
        "LTV prediction & product intelligence",
        "4 referral program types",
        "Custom POS & ERP integrations",
        "Dedicated success manager",
        "SLA guarantee (99.9% uptime)",
        "Full API access",
      ],
      highlighted: false,
      cta: "Contact Sales"
    }
  ];

  
  
  return (
    <section id="pricing-sec-1" className="pricing relative overflow-hidden animate-on-scroll fade-up" id="pricing">
      <div className="container relative z-10">
        <div className="section-header text-center mb-12">
          <h2 className="section-title animate-on-scroll fade-up">Simple, transparent <span className="gradient-text">pricing</span></h2>
          <p className="section-subtitle mt-4">All 6 OwnRewards pillars included from day one. Scale your plan as your business grows.</p>
        </div>

        {/* Segmented Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="toggle-segmented-container">
            <div 
              className="toggle-active-bg"
              
              
            />
            
            <button id="pricing-btn-2" 
              className={`toggle-btn ${!isAnnual ? 'active' : ''}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button id="pricing-btn-3" 
              className={`toggle-btn ${isAnnual ? 'active' : ''}`}
              onClick={() => setIsAnnual(true)}
            >
              Annually <span className="toggle-badge">Save 20%</span>
            </button>
          </div>
        </div>

        <div 
          className="pricing-grid animate-on-scroll fade-up"
          
        >
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card hover-lift ${plan.highlighted ? 'highlighted' : ''}`}>
              {plan.highlighted && <div className="popular-badge">Most Popular</div>}
              
              <div className="pricing-header animate-on-scroll fade-up">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price">
                  <AnimatePresence mode="wait">
                    <span 
                      key={isAnnual ? 'annual' : 'monthly'}
                      
                      
                      
                      
                      className="price-amount" 
                      style={{ fontSize: plan.priceMonthly === 'Custom' ? '2.2rem' : '3rem' }}
                    >
                      {plan.priceMonthly === 'Custom' ? 'Custom' : `$${isAnnual ? plan.priceAnnual : plan.priceMonthly}`}
                    </span>
                  </AnimatePresence>
                  {plan.priceMonthly !== "Custom" && <span className="price-period">/mo</span>}
                </div>
              </div>
              
              <PricingFeatures features={plan.features} />
              
              <div className="pricing-footer mt-auto pt-6 border-t border-border/50 animate-on-scroll fade-up">
                {plan.cta === "Contact Sales" ? (
                  <a href="#contact" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }} style={{ textDecoration: 'none', display: 'block', width: '100%' }}>
                    <Button variant="custom" className={`w-full pricing-btn ${plan.highlighted ? 'pricing-btn-primary' : 'pricing-btn-outline'}`} rightIcon={<ArrowRight size={18} />}>
                      {plan.cta}
                    </Button>
                  </a>
                ) : (
                  <a href="https://workspace.ownchat.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', width: '100%' }}>
                    <button className="pricing-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Get Started Free <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                    </button>
                  </a>
                )}
              </div>
            </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-magenta opacity-10 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default Pricing;
