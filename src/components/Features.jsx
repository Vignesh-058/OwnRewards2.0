import React from 'react';
import { Gift, Zap, Users, PieChart, Tag, Megaphone } from 'lucide-react';
import GlassCard from './GlassCard';
import './Features.css';

const Features = () => {
  const featureList = [
    {
      icon: <Gift size={32} className="feature-icon-svg animate-on-scroll fade-up" />,
      title: "Loyalty Points Engine",
      description: "Customers earn points on every purchase across a 4-tier system: Bronze → Silver → Gold → Platinum. Reward your best customers automatically and drive repeat purchases.",
      className: "bento-span-8",
      badge: "4-Tier System"
    },
    {
      icon: <Zap size={32} className="feature-icon-svg animate-on-scroll fade-up" />,
      title: "Rule Engine",
      description: "30+ event triggers fire automatic actions — award points, grant rewards, issue coupons, and send notifications — all without writing a single line of code.",
      className: "bento-span-4",
      badge: "30+ Triggers"
    },
    {
      icon: <Tag size={32} className="feature-icon-svg animate-on-scroll fade-up" />,
      title: "Smart Rewards & Coupons",
      description: "Percentage discounts, flat amounts, free products, free shipping, buy-X-get-Y offers — all with budget controls, eligibility rules, and expiry settings.",
      className: "bento-span-4",
      badge: "5 Reward Types"
    },
    {
      icon: <Users size={32} className="feature-icon-svg animate-on-scroll fade-up" />,
      title: "Referral Programs",
      description: "Dual-sided rewards for referrer and referee. Loyalty gates, anti-fraud limits, and 4 flexible program types to turn customers into high-LTV brand advocates.",
      className: "bento-span-8",
      badge: "4 Program Types"
    },
    {
      icon: <Megaphone size={32} className="feature-icon-svg animate-on-scroll fade-up" />,
      title: "Campaigns",
      description: "7 campaign types with A/B testing, audience targeting by segment or tier, and omnichannel delivery via email, SMS, and WhatsApp.",
      className: "bento-span-6",
      badge: "7 Campaign Types"
    },
    {
      icon: <PieChart size={32} className="feature-icon-svg animate-on-scroll fade-up" />,
      title: "Analytics",
      description: "Reward ROI, cohort retention, product intelligence, tier distribution, and LTV prediction — everything you need to make data-driven loyalty decisions.",
      className: "bento-span-6",
      badge: "LTV Prediction"
    }
  ];

  
  
  return (
    <section id="features-sec-1" className="features animate-on-scroll fade-up" id="features">
      <div className="container">
        <div className="section-header text-center mb-8">
          <h2 className="section-title animate-on-scroll fade-up">Six pillars of <span className="gradient-text">intelligent loyalty</span></h2>
          <p className="section-subtitle">Everything you need to acquire, engage, and retain customers — in one unified platform.</p>
        </div>

        <div
          className="bento-grid animate-on-scroll fade-up"
          
        >
          {featureList.map((feature, index) => (
            <div key={index} className={feature.className}>
              <GlassCard className="feature-card hover-lift animate-on-scroll fade-up">
                <div>
                  <div className="feature-icon-wrapper animate-on-scroll fade-up">
                    {feature.icon}
                  </div>
                  {feature.badge && (
                    <div className="feature-badge animate-on-scroll fade-up">{feature.badge}</div>
                  )}
                  <h3 className="feature-title animate-on-scroll fade-up">{feature.title}</h3>
                  <p className="feature-description animate-on-scroll fade-up">{feature.description}</p>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
