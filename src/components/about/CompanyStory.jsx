import React from 'react';
import GlassCard from '../GlassCard';

const CompanyStory = () => {
  return (
    <section id="companystory-sec-1" className="company-story relative overflow-hidden">
      <div className="container relative z-10">
        <div className="story-grid animate-on-scroll fade-up">
          <div 
            className="story-content"
            
            
            
            
          >
            <h2>Our Story</h2>
            <div>
              <p>
                OwnRewards was built because growing businesses deserve the same loyalty infrastructure that enterprise giants use — without the enterprise price tag. We set out to build an API-first loyalty engine that connects six powerful pillars: a Points Engine, Rule Engine, Smart Rewards, Referral Programs, Campaigns, and Analytics.
              </p>
              <p style={{ marginTop: '12px' }}>
                Today, 200+ brands use OwnRewards to shift from expensive acquisition cycles to sustainable, profitable retention — issuing over 50 million points and powering 30+ automated rule triggers that keep customers engaged at every touchpoint.
              </p>
            </div>
          </div>
          
          <div 
            
            
            
            
            className="story-image-wrapper"
          >
            <div className="story-image-bg">
              <GlassCard className="text-center w-full h-full flex flex-col justify-center p-8">
                <h3 className="text-2xl font-bold mb-4">The 6-Pillar Approach</h3>
                <p className="text-secondary mt-2">Loyalty Points · Rule Engine · Smart Rewards · Referral Programs · Campaigns · Analytics — everything a brand needs to retain customers and grow profitably.</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
