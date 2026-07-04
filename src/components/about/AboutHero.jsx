import React from 'react';
import GlassCard from '../GlassCard';

const AboutHero = () => {
  return (
    <section id="abouthero-sec-1" className="about-hero relative overflow-hidden">
      <div className="container relative z-10">
        <div className="section-header text-center">
          <h1 
            className="hero-title animate-on-scroll fade-up"
            
            
            
          >
            Redefining <span className="gradient-text">Customer Loyalty</span>
          </h1>
          <p 
            className="hero-subtitle mx-auto mt-4 animate-on-scroll fade-up"
            
            
            
          >
            We are on a mission to empower brands to build meaningful, long-lasting relationships with their customers through intelligent, data-driven rewards.
          </p>
        </div>
        
        <div
          className="bento-grid mt-8 animate-on-scroll fade-up"
          
          
          
        >
          <div className="bento-span-4">
            <GlassCard className="about-stat-card text-center animate-on-scroll fade-up">
              <h3 className="about-stat-number gradient-text">200+</h3>
              <p className="text-secondary">Active Brands</p>
            </GlassCard>
          </div>
          <div className="bento-span-4">
            <GlassCard className="about-stat-card text-center animate-on-scroll fade-up">
              <h3 className="about-stat-number gradient-text">50M+</h3>
              <p className="text-secondary">Points Issued</p>
            </GlassCard>
          </div>
          <div className="bento-span-4">
            <GlassCard className="about-stat-card text-center animate-on-scroll fade-up">
              <h3 className="about-stat-number gradient-text">30+</h3>
              <p className="text-secondary">Rule Triggers</p>
            </GlassCard>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary opacity-5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default AboutHero;
