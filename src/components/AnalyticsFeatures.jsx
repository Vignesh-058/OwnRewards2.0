import React from 'react';
import GlassCard from './GlassCard';
import './FeaturesGrid.css'; // Reusing the grid styles from Features page

const features = [
  { id: 'analytic-reward-roi', icon: '📊', title: 'Reward Analytics & ROI', body: 'Per-reward: issued, redeemed, expired, conversion rate, avg redemption time, revenue impact, cost, ROI, unique customers, repeat customers. Granularity: hourly/daily/weekly/monthly/yearly.' },
  { id: 'analytic-cohort', icon: '📈', title: 'Cohort Retention Analysis', body: 'Group customers by first purchase month. Track month-by-month retention rates, revenue, churn rate, avg LTV, and avg order frequency per cohort.' },
  { id: 'analytic-tiers', icon: '🏆', title: 'Tier Distribution & Movement', body: 'Visual breakdown of Bronze/Silver/Gold/Platinum customers. Track tier upgrades and downgrades over time. See how rule changes affect tier distribution.' },
  { id: 'analytic-products', icon: '🛒', title: 'Product Intelligence', body: 'Top sellers, trending products, declining items, velocity scores. Product correlations — "frequently bought together" with association rule mining lift scores.' },
  { id: 'analytic-lifecycle', icon: '👤', title: 'Customer Lifecycle', body: 'Prospect → active → at-risk → churned distribution. Segment health scores, churn risk, predicted LTV. Know who to activate before you lose them.' },
  { id: 'analytic-campaigns', icon: '🎯', title: 'Campaign Performance', body: 'Targeted vs. actual participants, rewards granted vs. redeemed, revenue generated, ROI per campaign. A/B test variant comparison — see which offer wins.' },
];



const AnalyticsFeatures = () => {
  return (
    <section id="analytics-features" className="features-grid-section animate-on-scroll fade-up" style={{ paddingTop: '80px' }}>
      <div className="container">
        <div 
          className="fg-grid animate-on-scroll fade-up"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }} // Override for 3 columns on desktop (6 items total)
          
        >
          {features.map(f => (
            <div id="analyticsfeatures-div-1" key={f.id} id={f.id} className="fg-card-wrapper animate-on-scroll fade-up">
              <GlassCard className="fg-card hover-lift animate-on-scroll fade-up">
                <div className="fg-icon" style={{ borderColor: 'rgba(16, 185, 129, 0.2)' }}>{f.icon}</div>
                <h3 className="fg-title">{f.title}</h3>
                <p className="fg-body">{f.body}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsFeatures;
