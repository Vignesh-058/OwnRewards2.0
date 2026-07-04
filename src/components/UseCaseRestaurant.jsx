import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';
import './UseCase.css'; // Shared CSS for all use cases
import './FeatureTabs.css'; // Reuse mock card styles

const UseCaseRestaurant = () => {
  return (
    <section id="usecase-restaurants" className="uc-section">
      <div className="container">
        <div className="uc-grid animate-on-scroll fade-up">
          
          <div 
            className="uc-content"
            
            
            
            
          >
            <div className="uc-badge">🍽️ Restaurants & Food Chains</div>
            <h2 className="uc-title">Turn every table into a loyalty moment.</h2>
            
            <div className="uc-lists">
              <div className="uc-list-block uc-list-error animate-on-scroll fade-up">
                <h4><XCircle size={16} strokeWidth={2.5} /> Pain Points</h4>
                <ul>
                  <li className="error-li"><div className="icon"><XCircle size={18} /></div> <div>Customers visit once and never return</div></li>
                  <li className="error-li"><div className="icon"><XCircle size={18} /></div> <div>Birthday promotions done manually — or forgotten</div></li>
                  <li className="error-li"><div className="icon"><XCircle size={18} /></div> <div>Petpooja bill data goes to waste</div></li>
                  <li className="error-li"><div className="icon"><XCircle size={18} /></div> <div>No insight into which customers are at churn risk</div></li>
                </ul>
              </div>
              
              <div className="uc-list-block uc-list-success animate-on-scroll fade-up">
                <h4><CheckCircle2 size={16} strokeWidth={2.5} /> OwnRewards Solution</h4>
                <ul>
                  <li className="success-li"><div className="icon"><CheckCircle2 size={18} /></div> <div><strong>Petpooja Integration</strong> — Bills auto-sync, points calculated in real time at every outlet</div></li>
                  <li className="success-li"><div className="icon"><CheckCircle2 size={18} /></div> <div><strong>Birthday Rule</strong> — <code>customer_birthday</code> → <code>+500 bonus points + BDAY20 coupon</code> → WhatsApp notification fires automatically</div></li>
                  <li className="success-li"><div className="icon"><CheckCircle2 size={18} /></div> <div><strong>Win-Back Campaign</strong> — <code>inactivity_detected</code> (30 days) → <code>grant_reward</code> (Free Dessert) → re-engagement WhatsApp</div></li>
                  <li className="success-li"><div className="icon"><CheckCircle2 size={18} /></div> <div><strong>4-Tier Loyalty</strong> — Bronze locals → Platinum VIPs with exclusive rewards and tier multipliers</div></li>
                  <li className="success-li"><div className="icon"><CheckCircle2 size={18} /></div> <div><strong>Multi-Outlet</strong> — Per-outlet loyalty configs with unified org-level analytics</div></li>
                </ul>
              </div>
            </div>
            
            <div className="uc-result-stat dark">
              <div className="uc-stat-val gold">34%</div>
              <div className="uc-stat-label">of churned restaurant customers re-activated in 90 days</div>
            </div>
          </div>

          <div 
            className="uc-mock"
            
            
            
            
          >
            <div id="usecaserestaurant-div-1" className="mock-card animate-on-scroll fade-up">
              <div className="mock-header">
                <span className="mock-title">Petpooja Integration</span>
                <span className="mock-badge green">Live Sync</span>
              </div>
              <div className="mock-rule-block animate-on-scroll fade-up" style={{ borderLeftColor: 'var(--primary)' }}>
                <div className="mock-rule-label">POS EVENT DETECTED</div>
                <div className="mock-rule-value">🧾 Bill #4829 — Table 4</div>
              </div>
              <div className="mock-rule-arrow">↓ INSTANT PROCESSING</div>
              <div className="mock-actions-list">
                <div className="mock-action-row"><span>💰</span><span>Order: ₹1,250</span></div>
                <div className="mock-action-row"><span>✨</span><span>Earned: 125 pts (1x Multiplier)</span></div>
                <div className="mock-action-row" style={{ borderColor: 'rgba(16, 185, 129, 0.3)', background: 'rgba(16, 185, 129, 0.05)' }}>
                  <span>💬</span><span style={{ color: '#10b981', fontWeight: 600 }}>WhatsApp Sent: "You earned 125 pts!"</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UseCaseRestaurant;
