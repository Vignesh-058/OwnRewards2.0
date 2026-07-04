import React from 'react';
import { Heart, Lightbulb, Shield, Zap } from 'lucide-react';
import GlassCard from '../GlassCard';

const CoreValues = () => {
  const values = [
    {
      icon: <Lightbulb size={28} className="text-primary" />,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible in customer retention, prioritizing smart, data-driven solutions."
    },
    {
      icon: <Shield size={28} className="text-primary" />,
      title: "Built on Trust",
      description: "Enterprise-grade security and transparency are at the core of everything we build for our partners."
    },
    {
      icon: <Heart size={28} className="text-primary" />,
      title: "Customer Obsessed",
      description: "We succeed only when our clients succeed. We are fiercely dedicated to delivering measurable ROI."
    },
    {
      icon: <Zap size={28} className="text-primary" />,
      title: "Speed to Market",
      description: "We believe complex integrations shouldn't take months. Our API-first approach ensures rapid deployment."
    }
  ];

  
  
  return (
    <section id="corevalues-sec-1" className="core-values relative">
      <div className="container relative z-10">
        <div className="section-header text-center mb-16">
          <h2 className="section-title animate-on-scroll fade-up">Our <span className="gradient-text">Core Values</span></h2>
          <p className="section-subtitle mt-4">The principles that guide our product, our culture, and our partnerships.</p>
        </div>

        <div 
          className="values-grid animate-on-scroll fade-up"
          
        >
          {values.map((value, index) => (
            <div key={index}>
              <GlassCard className="value-card hover-lift h-full animate-on-scroll fade-up">
                <div className="mv-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p className="text-secondary">{value.description}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
