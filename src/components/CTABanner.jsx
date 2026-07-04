import React from 'react';
import { Link } from 'react-router-dom';
import './CTABanner.css';

const CTABanner = () => {
  return (
    <section id="cta-banner" className="cta-banner-section">
      <div className="container">
        <div className="cta-banner-wrapper">
          <div className="cta-content">
            <h2 className="cta-headline">Your best customers deserve better than a paper stamp card.</h2>
            <p className="cta-sub">Set up OwnRewards in minutes. No dev team needed. No complex migrations.</p>
            <Link to="/register" className="cta-btn-white" style={{ marginTop: '24px' }}>
              Start Free — No Credit Card Required
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
