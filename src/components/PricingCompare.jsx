import React from 'react';
import './PricingCompare.css';

const compareData = [
  { feature: 'Loyalty Members', starter: '500', growth: '5,000', enterprise: 'Unlimited' },
  { feature: 'Loyalty Tiers', starter: '4', growth: '4', enterprise: 'Custom' },
  { feature: 'Rule Triggers', starter: '5', growth: '30+', enterprise: '30+' },
  { feature: 'Rule Actions', starter: 'Basic', growth: 'All 10', enterprise: 'All 10' },
  { feature: 'Rule Library', starter: '❌', growth: '✅', enterprise: '✅' },
  { feature: 'Smart Coupons', starter: 'Basic', growth: 'Full', enterprise: 'Full' },
  { feature: 'Referral Programs', starter: '❌', growth: '✅', enterprise: '✅' },
  { feature: 'Campaign A/B Testing', starter: '❌', growth: '✅', enterprise: '✅' },
  { feature: 'Cohort Analytics', starter: '❌', growth: '✅', enterprise: '✅ + Export' },
  { feature: 'Product Intelligence', starter: '❌', growth: '✅', enterprise: '✅' },
  { feature: 'POS Integration', starter: 'Petpooja', growth: 'All', enterprise: 'All + Custom' },
  { feature: 'WhatsApp (ownChat)', starter: '❌', growth: '✅', enterprise: '✅' },
  { feature: 'Outlets', starter: '1', growth: '10', enterprise: 'Unlimited' },
  { feature: 'API Access', starter: '❌', growth: '✅', enterprise: '✅' },
  { feature: 'Support', starter: 'Email', growth: 'Email', enterprise: 'Dedicated CSM' },
];

const PricingCompare = () => {
  return (
    <section id="pricing-compare" className="pricing-compare-section animate-on-scroll fade-up">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title animate-on-scroll fade-up">Compare <span className="gradient-text">Plans</span></h2>
        </div>

        <div id="pricingcompare-div-1" 
          className="pc-table-wrapper"
          
          
          
          
        >
          <table className="pc-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Starter</th>
                <th className="highlight-col">Growth</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {compareData.map((row, i) => (
                <tr key={i}>
                  <td className="feat-col">{row.feature}</td>
                  <td>{row.starter}</td>
                  <td className="highlight-col">{row.growth}</td>
                  <td>{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingCompare;
