import React from 'react';
import './HiwFullFlow.css';

const steps = [
  {
    id: 'step-1',
    icon: '🧾',
    title: 'Customer Makes a Purchase',
    body: 'A bill is created in the POS (Petpooja or custom). ownRewards receives the bill event via webhook — including order amount, items, and customer phone number.',
    pill: 'Event: bill_created'
  },
  {
    id: 'step-2',
    icon: '💰',
    title: 'Points Calculated Instantly',
    body: 'The system calculates points based on order total × points-per-rupee ratio, then applies the customer\'s tier multiplier. Bronze gets 1×, Gold gets 2×, Platinum gets 3×.',
    pill: 'Rule Type: loyalty_earning'
  },
  {
    id: 'step-3',
    icon: '⚡',
    title: 'Rule Engine Evaluates',
    body: 'All active rules for the bill_created event are evaluated in priority order. Each rule checks its conditions — customer tier, order amount, day of week, visit count, and more.',
    pill: 'Condition Logic: AND / OR'
  },
  {
    id: 'step-4',
    icon: '🎯',
    title: 'Actions Fire Automatically',
    body: 'Matching rules execute their actions: bonus points added, rewards granted, coupons issued, tier upgraded, WhatsApp notification sent — all without any manual intervention.',
    pill: '10 Action Types Available'
  },
  {
    id: 'step-5',
    icon: '👜',
    title: 'Customer Wallet Updated',
    body: 'The customer\'s wallet shows the new balance, any newly issued rewards, and active coupons. Expiry dates are set. A WhatsApp message confirms the points earned.',
    pill: 'Channel: WhatsApp via ownChat'
  },
  {
    id: 'step-6',
    icon: '🔄',
    title: 'Customer Returns to Redeem',
    body: 'On next visit, the customer requests redemption. ownRewards checks minimum order value, point maturation days, cooldown hours, and blocked days. If OTP is required, a WhatsApp OTP is sent.',
    pill: 'Redemption Rules: 8 Controls'
  },
  {
    id: 'step-7',
    icon: '👥',
    title: 'Referral Code Shared',
    body: 'The customer shares their referral code with a friend. When the friend signs up and makes their first purchase, both the referrer and referee receive their configured rewards automatically.',
    pill: 'Program Type: Dual-Sided'
  },
  {
    id: 'step-8',
    icon: '📊',
    title: 'Analytics Updated in Real Time',
    body: 'Every transaction updates cohort data, reward ROI calculations, segment health scores, and tier distribution. Your dashboard always reflects live business performance.',
    pill: 'Granularity: Hourly / Daily / Monthly'
  }
];

const HiwFullFlow = () => {
  return (
    <section id="hiw-steps" className="hiw-fullflow-section">
      <div className="container">
        <div className="hff-timeline-container">
          
          <div className="hff-timeline-line">
            <div 
              className="hff-timeline-fill"
              
              
              
              
            />
          </div>

          <div className="hff-steps">
            {steps.map((step, i) => (
              <div key={step.id} id={step.id} className={`hff-step-row ${i % 2 === 0 ? 'hff-left' : 'hff-right'}`}>
                
                <div className="hff-empty-space" />
                
                <div 
                  className="hff-marker"
                  
                  
                  
                  
                >
                  <div className="hff-marker-num">{i + 1}</div>
                </div>
                
                <div 
                  className="hff-content-box hover-lift"
                  
                  
                  
                  
                >
                  <div className="hff-icon">{step.icon}</div>
                  <h3 className="hff-title">{step.title}</h3>
                  <p className="hff-body">{step.body}</p>
                  <div className="hff-pill">{step.pill}</div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HiwFullFlow;
