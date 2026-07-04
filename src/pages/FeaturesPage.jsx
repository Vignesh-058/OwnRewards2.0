import React from 'react';
import SEO from '../components/SEO';
import FeaturesHero from '../components/FeaturesHero';
import FeaturesGrid from '../components/FeaturesGrid';
import DeepDiveRules from '../components/DeepDiveRules';
import DeepDiveSegments from '../components/DeepDiveSegments';
import FinalCTA from '../components/FinalCTA';

const FeaturesPage = () => {
  return (
    <>
      <SEO 
        title="ownRewards Features — Loyalty, Rules, Coupons, Referrals & Analytics"
        description="Explore ownRewards' full feature set: rule engine with 30+ triggers, 4-tier loyalty, smart coupons, dual-sided referrals, cohort analytics and more."
        path="features.html"
      />
      <FeaturesHero />
      <FeaturesGrid />
      <DeepDiveRules />
      <DeepDiveSegments />
      <FinalCTA />
    </>
  );
};

export default FeaturesPage;
