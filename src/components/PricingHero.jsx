import React, { useState } from 'react';
import './PricingHero.css';

const PricingHero = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing-hero" className="pricing-hero animate-on-scroll fade-up">
      <div className="container text-center">
        <h1 
          className="pricing-title gradient-text animate-on-scroll fade-up"
          
          
          
        >
          Transparent pricing. No surprises.
        </h1>
        <p 
          className="pricing-subtitle animate-on-scroll fade-up"
          
          
          
        >
          Start free. Add the features you need. No lock-in.
        </p>
        
        <div 
          id="billing-toggle"
          className="billing-toggle-wrapper"
          
          
          
        >
          <div className="billing-toggle-pill">
            <button id="pricinghero-btn-1" 
              className={`bt-option ${!isAnnual ? 'active' : ''}`}
              onClick={() => setIsAnnual(false)}
              style={{ border: 'none', cursor: 'pointer' }}
            >
              Monthly
            </button>
            <button id="pricinghero-btn-2" 
              className={`bt-option ${isAnnual ? 'active' : ''}`}
              onClick={() => setIsAnnual(true)}
              style={{ border: 'none', cursor: 'pointer' }}
            >
              Annual <span className="bt-save">Save 20%</span>
            </button>
          </div>
        </div>
      </div>
      <div className="pricing-hero-glow animate-on-scroll fade-up" />
    </section>
  );
};

export default PricingHero;
