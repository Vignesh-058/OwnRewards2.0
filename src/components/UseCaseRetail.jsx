import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';
import './UseCase.css';

const UseCaseRetail = () => {
  return (
    <section id="usecase-retail" className="uc-section" style={{ background: 'var(--surface-hover)' }}>
      <div className="container">
        <div className="uc-grid animate-on-scroll fade-up">
          
          {/* Mock on the left for alternating layout */}
          <div 
            className="uc-mock"
            
            
            
            
          >
            <div id="usecaseretail-div-1" className="mock-card animate-on-scroll fade-up">
              <div className="mock-header">
                <span className="mock-title">Cohort LTV Analytics</span>
                <span className="mock-badge purple">Live Data</span>
              </div>
              <div className="mock-points-row" style={{ gap: '20px' }}>
                <div>
                  <div className="mock-label">Predicted LTV (Gold)</div>
                  <div className="mock-big" style={{ fontSize: '1.4rem' }}>₹12,450</div>
                </div>
                <div>
                  <div className="mock-label">Predicted LTV (Bronze)</div>
                  <div className="mock-big" style={{ fontSize: '1.4rem' }}>₹2,100</div>
                </div>
              </div>
              
              <div className="mock-progress-section" style={{ marginTop: '20px' }}>
                <div className="mock-progress-labels"><span>SHOE20 Campaign Budget</span><span>₹42k / ₹50k</span></div>
                <div className="mock-track"><div className="mock-fill" style={{ width: '84%', background: 'var(--error)' }} /></div>
                <div style={{ fontSize: '0.7rem', color: 'var(--error)', marginTop: '8px', fontWeight: 600 }}>Auto-deactivating soon</div>
              </div>
            </div>
          </div>

          <div 
            className="uc-content"
            
            
            
            
          >
            <div className="uc-badge">👗 Retail & Fashion Brands</div>
            <h2 className="uc-title">Stop handing out coupons to customers who were going to buy anyway.</h2>
            
            <div className="uc-lists">
              <div className="uc-list-block uc-list-error animate-on-scroll fade-up">
                <h4><XCircle size={16} strokeWidth={2.5} /> Pain Points</h4>
                <ul>
                  <li className="error-li"><div className="icon"><XCircle size={18} /></div> <div>Coupons given to everyone regardless of behaviour</div></li>
                  <li className="error-li"><div className="icon"><XCircle size={18} /></div> <div>No tier-based exclusivity — top customers feel no difference</div></li>
                  <li className="error-li"><div className="icon"><XCircle size={18} /></div> <div>No idea which customer cohorts deliver the most LTV</div></li>
                  <li className="error-li"><div className="icon"><XCircle size={18} /></div> <div>Seasonal campaigns exceed budget with no automated stop</div></li>
                </ul>
              </div>
              
              <div className="uc-list-block uc-list-success animate-on-scroll fade-up">
                <h4><CheckCircle2 size={16} strokeWidth={2.5} /> ownRewards Solution</h4>
                <ul>
                  <li className="success-li"><div className="icon"><CheckCircle2 size={18} /></div> <div><strong>Rule-Gated Coupons</strong> — Only Gold+ tier customers can access exclusive early-access promotions</div></li>
                  <li className="success-li"><div className="icon"><CheckCircle2 size={18} /></div> <div><strong>Category-Specific Coupons</strong> — <code>SHOE20</code> applies only to footwear category, not entire cart</div></li>
                  <li className="success-li"><div className="icon"><CheckCircle2 size={18} /></div> <div><strong>Budget-Controlled Campaigns</strong> — Set ₹50,000 max discount budget → auto-deactivates when depleted</div></li>
                  <li className="success-li"><div className="icon"><CheckCircle2 size={18} /></div> <div><strong>Cohort Analytics</strong> — See which acquisition month produces the highest LTV customers</div></li>
                  <li className="success-li"><div className="icon"><CheckCircle2 size={18} /></div> <div><strong>Segment Engine</strong> — <code>predictedLTV</code>, <code>churnRisk</code>, <code>healthScore</code> per segment</div></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UseCaseRetail;
