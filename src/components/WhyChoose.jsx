import React from 'react';
import GlassCard from './GlassCard';
import './WhyChoose.css';

const WhyChoose = () => {
  const reasons = [
    {
      icon: "🧠",
      title: "Rules That Think",
      description: "Not just \"earn 1 point per ₹100\". Set 30+ trigger events — birthday, nth visit, inactivity, feedback, referral — and automate any action: bonus points, reward grants, tier changes, coupon issuance.",
      className: "bento-span-4"
    },
    {
      icon: "🏆",
      title: "Tiers That Mean Something",
      description: "Bronze → Silver → Gold → Platinum with dynamic progression, tier-based multipliers, and lifecycle stage tracking (active, at-risk, churned). Customers feel the difference.",
      className: "bento-span-4"
    },
    {
      icon: "📊",
      title: "Analytics That Drive Decisions",
      description: "Track cohort retention curves, reward ROI, product correlations, and customer lifetime value — not just points totals.",
      className: "bento-span-4"
    }
  ];

  return (
    <section id="whychoose-sec-1" className="why-choose relative overflow-hidden">
      <div className="container relative z-10">
        <div className="section-header text-center mb-8">
          <h2 className="section-title animate-on-scroll fade-up">Why choose <span className="text-primary">OwnRewards?</span></h2>
          <p className="section-subtitle">The most comprehensive loyalty platform built specifically for modern businesses.</p>
        </div>

        <div 
          className="bento-grid animate-on-scroll fade-up"
          
        >
          {reasons.map((reason, index) => (
            <div key={index} className={reason.className}>
              <GlassCard className="reason-card hover-lift animate-on-scroll fade-up">
                <div>
                  <div className="reason-icon">
                    {reason.icon}
                  </div>
                  <h3 className="reason-title">{reason.title}</h3>
                  <p className="reason-description">{reason.description}</p>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan opacity-20 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default WhyChoose;
