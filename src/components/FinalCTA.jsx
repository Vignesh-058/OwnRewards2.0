import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './FinalCTA.css';

const FinalCTA = () => {
  return (
    <section id="finalcta-sec-1" className="final-cta">
      <div className="container">
        <div className="cta-wrapper">
          <div className="cta-content">
            <h2>Ready to turn one-time buyers into lifelong regulars?</h2>
            <p>Join growing businesses using OwnRewards to drive revenue and increase customer retention — no credit card required.</p>
            <div className="cta-actions">
              <a href="https://workspace.ownchat.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button id="finalcta-btn-2" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#fff', color: 'var(--primary)',
                  border: 'none', borderRadius: '999px',
                  padding: '14px 32px', fontSize: '1rem', fontWeight: 800,
                  cursor: 'pointer', letterSpacing: '-0.01em',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.18)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)'; }}
                >
                  Get Started Free →
                </button>
              </a>
              <a href="#contact" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }} style={{ textDecoration: 'none' }}>
                <Button variant="glass" className="btn-large">Talk to Sales</Button>
              </a>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="cta-decoration dec-1"></div>
          <div className="cta-decoration dec-2"></div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
