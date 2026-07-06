import React from 'react';
import { Check } from 'lucide-react';
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

const renderCell = (val, isGrowth) => {
  // If it's explicitly a checkmark
  if (val === '✅') {
    return <span className="text-primary"><Check size={16} /></span>;
  }
  // If it contains a checkmark with text (like ✅ + Export)
  if (val.includes('✅')) {
    const text = val.replace(/✅/g, '').trim();
    return <span className="text-primary"><Check size={16} /> {text}</span>;
  }
  // If it's a cross
  if (val === '❌') {
    return <span className="box-dash">—</span>;
  }
  
  // Highlight the Growth column values with a green check (matching the screenshot UI)
  if (isGrowth) {
    return <span className="text-primary"><Check size={16} /> {val}</span>;
  }
  
  // Default neutral text for Starter/Enterprise
  return <span className="text-grey">{val}</span>;
};

const PricingCompare = () => {
  return (
    <section id="pricing-compare" className="pricing-compare-section animate-on-scroll fade-up">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h2 className="section-title animate-on-scroll fade-up">Compare <span className="gradient-text">Plans</span></h2>
        </div>

        <div className="pc-table-wrapper">
          <table className="pc-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Starter</th>
                <th className="brand-col">Growth</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {compareData.map((row, i) => (
                <tr key={i}>
                  <td className="feat-col">{row.feature}</td>
                  <td>{renderCell(row.starter, false)}</td>
                  <td className="highlighted-cell">{renderCell(row.growth, true)}</td>
                  <td>{renderCell(row.enterprise, false)}</td>
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
