import React from 'react';
import { Link } from 'react-router-dom';
import './CTABanner.css'; // Reusing CTABanner CSS for styling
const AboutCTA = () => {
  return (
    <section id="about-cta" className="cta-banner-section">
      <div className="container">
        <div className="cta-banner-wrapper">
          <div className="cta-content">
            <h2 className="cta-headline">Ready to make loyalty your growth engine?</h2>
            <a href="https://workspace.ownchat.app/" target="_blank" rel="noopener noreferrer" className="hero-btn-primary" style={{ marginTop: '24px' }}>
              Get Started Free →
            </a>
            <p style={{ marginTop: '16px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              No credit card required. Set up in minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
