import React from 'react';
import { Target, Eye } from 'lucide-react';
import GlassCard from '../GlassCard';

const MissionVision = () => {
  return (
    <section id="missionvision-sec-1" className="mission-vision relative">
      <div className="container relative z-10">
        <div className="mv-grid animate-on-scroll fade-up">
          <div
            
            
            
            
          >
            <GlassCard className="mv-card hover-lift animate-on-scroll fade-up">
              <div className="mv-icon">
                <Target size={24} />
              </div>
              <h3>Our Mission</h3>
              <p className="text-secondary">
                To be the intelligent loyalty and retention platform for growing businesses — combining points, rewards, coupons, referrals, and AI-driven rules in one engine, so every brand can retain customers profitably.
              </p>
            </GlassCard>
          </div>

          <div
            
            
            
            
          >
            <GlassCard className="mv-card hover-lift animate-on-scroll fade-up">
              <div className="mv-icon">
                <Eye size={24} />
              </div>
              <h3>Our Vision</h3>
              <p className="text-secondary">
                A world where restaurant chains, retail brands, D2C stores, and multi-outlet businesses never lose a customer to a competitor — because their loyalty experience is simply unbeatable.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
