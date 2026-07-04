import React from 'react';
import './AboutEcosystem.css';

const products = [
  {
    id: 'eco-ownchat',
    icon: '💬',
    title: 'ownChat',
    body: 'WhatsApp Business platform for customer conversations, automated flows, and broadcast campaigns. Powers all ownRewards notifications.',
    status: 'Connected',
    statusType: 'connected'
  },
  {
    id: 'eco-ownrewards',
    icon: '🏆',
    title: 'ownRewards',
    body: 'Intelligent loyalty and retention engine. Points, tiers, rules, rewards, coupons, referrals, and analytics.',
    status: 'You are here',
    statusType: 'here'
  },
  {
    id: 'eco-owncart',
    icon: '🛒',
    title: 'ownCart',
    body: 'E-commerce and inventory management. Product catalog, order management, and direct ownRewards integration for point-of-sale rewards.',
    status: 'Integration available',
    statusType: 'available'
  },
  {
    id: 'eco-owntask',
    icon: '✅',
    title: 'ownTask',
    body: 'Team task and project management. Enterprise-grade task boards, SLA tracking, recurring automation, and audit trails.',
    status: 'Integration available',
    statusType: 'available'
  }
];

const AboutEcosystem = () => {
  return (
    <section id="about-ecosystem" className="about-eco-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title animate-on-scroll fade-up">Part of the <span className="gradient-text">iEyal product family</span></h2>
          <p className="section-subtitle mt-4 mx-auto" style={{ maxWidth: '600px' }}>
            ownRewards works best as part of an integrated stack. Here's what we build.
          </p>
        </div>

        <div className="ae-grid animate-on-scroll fade-up">
          {products.map((p, i) => (
            <div 
              key={p.id}
              id={p.id}
              className={`ae-card ${p.statusType === 'here' ? 'ae-highlight' : ''}`}
              
              
              
              
            >
              <div id="aboutecosystem-div-1" className="ae-card-inner animate-on-scroll fade-up">
                <div className="ae-icon">{p.icon}</div>
                <h3 className="ae-title">{p.title}</h3>
                <p className="ae-body">{p.body}</p>
                <div className="ae-spacer" />
                <div className={`ae-status ae-${p.statusType}`}>{p.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutEcosystem;
