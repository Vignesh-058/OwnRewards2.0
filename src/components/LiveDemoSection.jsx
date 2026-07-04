import React from 'react';
import { Video, CircleCheck, Calendar } from 'lucide-react';
import './LiveDemoSection.css';

const LiveDemoSection = () => {
  return (
    <section className="live-demo-section">
      <div className="container">
        <div className="live-demo-grid">
          <div className="live-demo-content">
            <div className="live-demo-badge">
              <Video size={16} /> Live Demo
            </div>
            
            <h2 className="live-demo-title">
              See ownRewards <span>In Action</span>
            </h2>
            
            <p className="live-demo-subtitle">
              Book a quick demo to see WhatsApp and Instagram automation in action.
            </p>
            
            <ul className="live-demo-features">
              <li>
                <div className="feature-icon">
                  <CircleCheck size={22} strokeWidth={2.5} />
                </div>
                <div className="feature-text">
                  <h3>15-Minute Demo</h3>
                  <p>Key features and automation use cases</p>
                </div>
              </li>
              <li>
                <div className="feature-icon">
                  <CircleCheck size={22} strokeWidth={2.5} />
                </div>
                <div className="feature-text">
                  <h3>Tailored for Your Business</h3>
                  <p>Industry-specific workflows</p>
                </div>
              </li>
              <li>
                <div className="feature-icon">
                  <CircleCheck size={22} strokeWidth={2.5} />
                </div>
                <div className="feature-text">
                  <h3>Live Expert Q&A</h3>
                  <p>Get answers from automation experts</p>
                </div>
              </li>
            </ul>
            
            <div className="live-demo-actions">
              <button className="demo-btn">
                <Calendar size={18} /> Book a Demo
              </button>
              <button className="sales-btn">
                Contact Sales
              </button>
            </div>
          </div>

          <div className="live-demo-visual">
            <div className="demo-video-placeholder">
              <div className="play-button">
                <Video size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoSection;
