import React from 'react';
import './DeepDiveRules.css';
import './FeatureTabs.css'; // to reuse the .mock-card styles

const DeepDiveRules = () => {
  return (
    <section id="deep-dive-rules" className="dd-rules-section">
      <div className="container">
        <div className="dd-rules-grid animate-on-scroll fade-up">
          
          {/* Left Column */}
          <div className="dd-rules-left">
            <h2 
              className="dd-title"
              
              
              
            >
              The brain of your loyalty program.
            </h2>
            
            <div 
              className="dd-trigger-groups"
              
              
              
              
            >
              <div className="dd-trigger-group">
                <h4><span className="dd-group-icon">💳</span> Transactional</h4>
                <div className="dd-pill-container">
                  <span className="dd-pill">Purchase Completed</span>
                  <span className="dd-pill">Order Refunded</span>
                  <span className="dd-pill">Cart Validated</span>
                </div>
              </div>
              
              <div className="dd-trigger-group">
                <h4><span className="dd-group-icon">🎯</span> Behavioral</h4>
                <div className="dd-pill-container">
                  <span className="dd-pill">First Visit</span>
                  <span className="dd-pill">10th Purchase</span>
                  <span className="dd-pill">Tier Upgrade</span>
                </div>
              </div>
              
              <div className="dd-trigger-group">
                <h4><span className="dd-group-icon">⏳</span> Temporal</h4>
                <div className="dd-pill-container">
                  <span className="dd-pill">Customer Birthday</span>
                  <span className="dd-pill">Anniversary</span>
                  <span className="dd-pill">Inactivity Detected</span>
                </div>
              </div>
              
              <div className="dd-trigger-group">
                <h4><span className="dd-group-icon">💬</span> Engagement</h4>
                <div className="dd-pill-container">
                  <span className="dd-pill">Left a Review</span>
                  <span className="dd-pill">Referred a Friend</span>
                  <span className="dd-pill">Feedback Submitted</span>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Column: Rule Card Mock */}
          <div 
            className="dd-rules-right"
            
            
            
            
          >
            <div id="mock-rule-card" className="mock-card animate-on-scroll fade-up">
              <div className="mock-header">
                <span className="mock-title">⚡ Birthday Bonus</span>
                <span className="mock-badge" style={{ color: '#10b981', background: 'rgba(16,185,129,0.1)' }}>
                  <span className="pulse-dot" style={{ display: 'inline-block', marginRight: '6px' }} /> ACTIVE
                </span>
              </div>
              <div className="mock-divider" />
              
              <div className="ft-rule-block animate-on-scroll fade-up">
                <div className="ft-rule-step">
                  <div className="ft-step-num">1</div>
                  <div className="ft-step-content">
                    <div className="mock-label">WHEN THIS HAPPENS</div>
                    <div className="mock-code-pill">customer_birthday</div>
                  </div>
                </div>
                <div className="ft-rule-step">
                  <div className="ft-step-num">2</div>
                  <div className="ft-step-content">
                    <div className="mock-label">AND CONDITION IS MET</div>
                    <div className="ft-condition-box">
                      tier <span style={{ color: 'var(--primary)' }}>IN</span> [Gold, Platinum]
                    </div>
                  </div>
                </div>
                <div className="ft-rule-step">
                  <div className="ft-step-num">3</div>
                  <div className="ft-step-content">
                    <div className="mock-label">THEN DO THIS</div>
                    <div className="ft-action-list">
                      <div className="ft-action-item"><span className="ft-action-icon">🪙</span> add_bonus_points <strong>+500</strong></div>
                      <div className="ft-action-item"><span className="ft-action-icon">🏷️</span> issue_coupon <strong>BDAY20</strong></div>
                      <div className="ft-action-item"><span className="ft-action-icon">📱</span> send_notification <strong>WhatsApp</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DeepDiveRules;
