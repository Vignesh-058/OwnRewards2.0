import React from 'react';
import SEO from '../components/SEO';
import HiwHero from '../components/HiwHero';
import HiwFullFlow from '../components/HiwFullFlow';
import HiwCTA from '../components/HiwCTA';

const HowItWorksPage = () => {
  return (
    <>
      <SEO 
        title="How ownRewards Works — From First Visit to Loyal Customer"
        description="See exactly how ownRewards automates loyalty earning, reward issuance, coupon delivery, and referral rewards — triggered by real business events."
        path="how-it-works.html"
      />
      <HiwHero />
      <HiwFullFlow />
      <HiwCTA />
    </>
  );
};

export default HowItWorksPage;
