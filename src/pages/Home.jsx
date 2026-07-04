import React from 'react';
import SEO from '../components/SEO';
import HomeHero from '../components/HomeHero';
import StatsStrip from '../components/StatsStrip';
import Differentiators from '../components/Differentiators';
import FeatureTabs from '../components/FeatureTabs';
import HowItWorksPreview from '../components/HowItWorksPreview';
import HomeTestimonials from '../components/HomeTestimonials';
import IntegrationStrip from '../components/IntegrationStrip';
import CTABanner from '../components/CTABanner';

const Home = () => {
  return (
    <>
      <SEO 
        title="OwnRewards — Smart Loyalty & Retention Platform for Growing Businesses"
        description="Build a loyalty program that actually drives repeat business. Points, rewards, coupons, referrals, and automated rules — all in one intelligent platform."
        path="index.html"
      />
      <HomeHero />
      <StatsStrip />
      <Differentiators />
      <FeatureTabs />
      <HowItWorksPreview />
      <HomeTestimonials />
      <IntegrationStrip />
      <CTABanner />
    </>
  );
};

export default Home;
