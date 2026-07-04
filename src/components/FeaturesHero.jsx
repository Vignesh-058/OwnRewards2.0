import React from 'react';
import './FeaturesHero.css';

const FeaturesHero = () => {
  return (
    <section id="features-hero" className="features-hero animate-on-scroll fade-up">
      <div className="container text-center">
        <h1 
          className="fh-title gradient-text"
          
          
          
        >
          Every tool your business needs to keep customers coming back.
        </h1>
        <p 
          className="fh-subtitle"
          
          
          
        >
          16 production-ready features. One integrated platform. Zero bloat.
        </p>
      </div>
      {/* Decorative Glow */}
      <div className="fh-glow" />
    </section>
  );
};

export default FeaturesHero;
