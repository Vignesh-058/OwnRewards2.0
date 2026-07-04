import React from 'react';
import './AboutValues.css';

const values = [
  { id: 'value-intelligence', icon: '🧠', title: 'Intelligence', body: 'Every feature is built around data — triggers, cohorts, LTV predictions, A/B tests. Intelligence, not guesswork.' },
  { id: 'value-simplicity', icon: '✨', title: 'Simplicity', body: 'Powerful tools shouldn\'t require a PhD to configure. Every feature is designed to be set up in minutes, not months.' },
  { id: 'value-trust', icon: '🔒', title: 'Trust', body: 'Multi-tenant architecture with zero cross-organization data access. Your customer data is yours, always.' },
  { id: 'value-growth', icon: '📈', title: 'Growth', body: 'We measure our success by your retention metrics, not your subscription. If it doesn\'t drive repeat business, it doesn\'t ship.' }
];

const AboutValues = () => {
  return (
    <section id="about-values" className="about-values-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title animate-on-scroll fade-up">What we <span className="gradient-text">stand for</span></h2>
        </div>

        <div className="av-grid animate-on-scroll fade-up">
          {values.map((v, i) => (
            <div id="aboutvalues-div-1" 
              key={v.id}
              id={v.id}
              className="av-card hover-lift animate-on-scroll fade-up"
              
              
              
              
            >
              <div className="av-icon">{v.icon}</div>
              <h3 className="av-title">{v.title}</h3>
              <p className="av-body">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
