import React from 'react';
import SEO from '../components/SEO';
import AnalyticsHero from '../components/AnalyticsHero';
import AnalyticsMetrics from '../components/AnalyticsMetrics';
import AnalyticsFeatures from '../components/AnalyticsFeatures';
import AnalyticsDashboardMock from '../components/AnalyticsDashboardMock';
import FinalCTA from '../components/FinalCTA';

const AnalyticsPage = () => {
  return (
    <>
      <SEO 
        title="OwnRewards Analytics — Loyalty ROI, Cohort & Retention Insights"
        description="Track loyalty program ROI, reward conversion rates, cohort retention curves, tier distribution, and product performance — all in real time."
        path="analytics.html"
      />
      <AnalyticsHero />
      <AnalyticsMetrics />
      <AnalyticsFeatures />
      <AnalyticsDashboardMock />
      <FinalCTA />
    </>
  );
};

export default AnalyticsPage;
