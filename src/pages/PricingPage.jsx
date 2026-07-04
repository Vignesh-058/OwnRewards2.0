import React from 'react';
import SEO from '../components/SEO';
import PricingHero from '../components/PricingHero';
import PricingCards from '../components/PricingCards';
import PricingCompare from '../components/PricingCompare';
import PricingFAQ from '../components/PricingFAQ';
import FinalCTA from '../components/FinalCTA';

const PricingPage = () => {
  return (
    <>
      <SEO 
        title="OwnRewards Pricing — Loyalty Plans That Scale With Your Business"
        description="Start free with core loyalty features. Scale to advanced rules, referrals, and analytics as your customer base grows."
        path="pricing.html"
      />
      <PricingHero />
      <PricingCards />
      <PricingCompare />
      <PricingFAQ />
      <FinalCTA />
    </>
  );
};

export default PricingPage;
