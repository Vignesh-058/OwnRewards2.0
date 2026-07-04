import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';
import './UseCase.css';

const UseCaseEcommerce = () => {
  return (
    <section id="usecase-ecommerce" className="uc-section">
      <div className="container">
        <div className="uc-grid animate-on-scroll fade-up">
          
          <div 
            className="uc-content"
            
            
            
            
          >
            <div className="uc-badge">🛒 D2C & E-Commerce Brands</div>
            <h2 className="uc-title">Make every happy customer your best marketing channel.</h2>
            
            <div className="uc-lists">
              <div className="uc-list-block uc-list-error animate-on-scroll fade-up">
                <h4><XCircle size={16} strokeWidth={2.5} /> Pain Points</h4>
                <ul>
                  <li className="error-li"><div className="icon"><XCircle size={18} /></div> <div>Customer acquisition cost is ₹300+ per new customer</div></li>
                  <li className="error-li"><div className="icon"><XCircle size={18} /></div> <div>No viral growth mechanism in place</div></li>
                  <li className="error-li"><div className="icon"><XCircle size={18} /></div> <div>Customers buy once and disappear</div></li>
                  <li className="error-li"><div className="icon"><XCircle size={18} /></div> <div>No way to reward loyal customers differently from new ones</div></li>
                </ul>
              </div>
              
              <div className="uc-list-block uc-list-success animate-on-scroll fade-up">
                <h4><CheckCircle2 size={16} strokeWidth={2.5} /> ownRewards Solution</h4>
                <ul>
                  <li className="success-li"><div className="icon"><CheckCircle2 size={18} /></div> <div><strong>Dual-Sided Referral</strong> — Referrer gets 500 points; Referee gets ₹100 flat discount on first order</div></li>
                  <li className="success-li"><div className="icon"><CheckCircle2 size={18} /></div> <div><strong>Loyalty-Gated Referral Access</strong> — Must be Silver+, 30+ days as member, ₹2,000+ lifetime spend</div></li>
                  <li className="success-li"><div className="icon"><CheckCircle2 size={18} /></div> <div><strong>nth Purchase Rule</strong> — 2nd visit → <code>grant_reward (Free Sample)</code> → drives the repeat purchase habit</div></li>
                  <li className="success-li"><div className="icon"><CheckCircle2 size={18} /></div> <div><strong>Win-Back Automation</strong> — <code>inactivity_detected</code> (60 days) → exclusive reward → WhatsApp outreach</div></li>
                  <li className="success-li"><div className="icon"><CheckCircle2 size={18} /></div> <div><strong>WhatsApp via ownChat</strong> — All notifications, OTPs, and campaign messages via high-open-rate WhatsApp channel</div></li>
                </ul>
              </div>
            </div>
            
            <div className="uc-result-stat dark">
              <div className="uc-stat-val" style={{ color: 'var(--primary-light)' }}>₹4.2L</div>
              <div className="uc-stat-label">in new customer revenue from referrals in month 1</div>
            </div>
          </div>

          <div 
            className="uc-mock"
            
            
            
            
          >
            <div id="usecaseecommerce-div-1" className="mock-card animate-on-scroll fade-up">
              <div className="mock-header">
                <span className="mock-title">Referral Program</span>
                <span className="mock-badge green">Running</span>
              </div>
              <div className="mock-ref-flow">
                <div className="mock-ref-side">
                  <div className="mock-ref-role">Referrer</div>
                  <div className="mock-ref-reward">🎁 500 pts</div>
                  <div className="mock-ref-note">On successful order</div>
                </div>
                <div className="mock-ref-arrow">⇄</div>
                <div className="mock-ref-side">
                  <div className="mock-ref-role">Referee</div>
                  <div className="mock-ref-reward">🎉 ₹100 Off</div>
                  <div className="mock-ref-note">On first purchase</div>
                </div>
              </div>
              <div className="mock-coupon-rows" style={{ marginTop: '16px' }}>
                <div className="mock-row"><span className="mock-label">Loyalty Gate</span><span>Silver tier & above</span></div>
                <div className="mock-row"><span className="mock-label">Anti-Fraud</span><span>Max 5 per month</span></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UseCaseEcommerce;
