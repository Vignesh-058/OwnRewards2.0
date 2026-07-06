import React from 'react';
import { Link } from 'react-router-dom';
import './CTABanner.css'; // Reuse existing styles

const HiwCTA = () => {
  return (
    <section id="hiw-cta" className="cta-banner-section">
      <div className="container">
        <div className="cta-banner-wrapper">
          <div className="cta-content">
            <h2 className="cta-headline">Ready to automate your loyalty program?</h2>
            <a href="https://workspace.ownchat.app/" target="_blank" rel="noopener noreferrer" className="cta-btn-white" style={{ marginTop: '24px' }}>
              Get Started Free →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiwCTA;
