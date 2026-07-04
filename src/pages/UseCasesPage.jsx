import React from 'react';
import SEO from '../components/SEO';
import UseCasesHero from '../components/UseCasesHero';
import UseCaseRestaurant from '../components/UseCaseRestaurant';
import UseCaseRetail from '../components/UseCaseRetail';
import UseCaseEcommerce from '../components/UseCaseEcommerce';
import FinalCTA from '../components/FinalCTA';

const UseCasesPage = () => {
  return (
    <>
      <SEO 
        title="OwnRewards Use Cases — Restaurants, Retail & E-Commerce"
        description="Discover how restaurant chains, retail brands, and online stores use OwnRewards to drive repeat purchases and grow customer lifetime value."
        path="use-cases.html"
      />
      <UseCasesHero />
      <UseCaseRestaurant />
      <UseCaseRetail />
      <UseCaseEcommerce />
      <FinalCTA />
    </>
  );
};

export default UseCasesPage;
