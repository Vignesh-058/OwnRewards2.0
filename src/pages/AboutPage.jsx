import React from 'react';
import SEO from '../components/SEO';
import AboutHero from '../components/AboutHero';
import AboutValues from '../components/AboutValues';
import AboutCTA from '../components/AboutCTA';
const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About OwnRewards — Built by iEyal Solutions"
        description="Learn how OwnRewards was built from real restaurant and retail frustrations — and why it's the only loyalty platform growing businesses need."
        path="about.html"
      />
      <AboutHero />
      <AboutValues />
      <AboutCTA />
    </>
  );
};

export default AboutPage;
