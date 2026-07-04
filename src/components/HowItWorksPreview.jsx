import React from 'react';
import { Link } from 'react-router-dom';
import './HowItWorksPreview.css';

const steps = [
  {
    num: '01',
    icon: '🏗️',
    title: 'Configure Your Loyalty Rules',
    body: 'Set up point earning rules, tier thresholds, and reward templates in minutes. Use our Rule Library to import pre-built blueprints for your industry — restaurant, retail, or e-commerce.',
  },
  {
    num: '02',
    icon: '⚡',
    title: 'Rules Fire on Real Events',
    body: 'Every bill, birthday, referral, feedback, or inactivity — ownRewards listens and acts automatically. No manual work, no missed opportunities.',
  },
  {
    num: '03',
    icon: '📈',
    title: 'Watch Retention Grow',
    body: 'Track cohort retention, reward ROI, customer lifecycle health, and tier movement — then adjust your rules based on real data.',
  },
];

const HowItWorksPreview = () => {
  return (
    <section id="how-it-works-preview" className="hiw-preview">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title animate-on-scroll fade-up">Up and running in <span className="gradient-text">3 simple steps</span></h2>
        </div>

        <div className="hiw-steps-container">
          {/* Animated Connecting Line */}
          <div className="hiw-line">
            <div 
              className="hiw-line-fill"
              
              
              
              
            />
          </div>

          <div className="hiw-steps">
            {steps.map((step, i) => (
              <div 
                key={step.num} 
                className="hiw-step"
                
                
                
                
              >
                <div className="hiw-step-marker">
                  <div className="hiw-step-num">{step.num}</div>
                </div>
                <div className="hiw-step-content">
                  <div className="hiw-step-icon">{step.icon}</div>
                  <h3 className="hiw-step-title">{step.title}</h3>
                  <p className="hiw-step-body">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center" style={{ marginTop: '48px' }}>
          <Link to="/how-it-works" className="hiw-link">
            See the full flow →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPreview;
