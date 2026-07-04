import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <section id="about-hero" className="about-hero-section">
      <div className="container">
        <h1 
          className="about-title gradient-text text-center"
          
          
          
        >
          We build retention software that works the way your customers do.
        </h1>
        
        <div className="about-grid animate-on-scroll fade-up">
          <div 
            id="about-company"
            className="about-block animate-on-scroll fade-up"
            
            
            
          >
            <div className="about-label">COMPANY</div>
            <p className="about-text">
              iEyal Solutions builds focused, production-grade software for real businesses — 
              not feature-bloated enterprise suites that require a consultant to set up.
            </p>
            <p className="about-text">
              We believe loyalty is a business necessity, not a luxury. Every restaurant, 
              retail brand, and e-commerce store should have access to the same retention 
              intelligence that enterprise brands pay millions for.
            </p>
          </div>

          <div 
            id="about-origin"
            className="about-block animate-on-scroll fade-up"
            
            
            
          >
            <div className="about-label">ORIGIN STORY</div>
            <h2 className="about-subtitle">Why we built ownRewards</h2>
            <p className="about-text">
              We watched restaurant owners hand out paper stamp cards with no data, no 
              automation, and no idea which customers were about to leave. We watched retail 
              managers run seasonal campaigns with no budget controls and no way to measure 
              what actually worked.
            </p>
            <p className="about-text">
              ownRewards was built to change that. To give every business — from a 2-outlet 
              restaurant chain to a 500-SKU retail brand — a loyalty and retention engine 
              that actually drives measurable business outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
