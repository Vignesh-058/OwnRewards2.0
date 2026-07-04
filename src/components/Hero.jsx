import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, TrendingUp, Activity } from 'lucide-react';
import './Hero.css';
import Button from './Button';
import GlassCard from './GlassCard';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero-sec-1" className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div
            
            
            
          >
            <div className="hero-badge">
              <span className="badge-new">New</span>
              <span>Rule Engine with 30+ triggers is now live</span>
            </div>
            <h1 className="hero-title animate-on-scroll fade-up">
              Supercharge Customer Retention with <span className="gradient-text">Intelligent Rewards</span>
            </h1>
            <p className="hero-subtitle animate-on-scroll fade-up">
              OwnRewards is the intelligent loyalty and retention platform for growing businesses — combining points, rewards, coupons, referrals, and AI-driven rules in one engine.
            </p>
            <div className="hero-actions">
              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <Button icon={<ArrowRight size={18} />}>Start Free Trial</Button>
              </Link>
              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <Button variant="outline" icon={<Play size={18} />}>View Demo</Button>
              </Link>
            </div>
            <p className="hero-guarantee">No credit card required. 14-day free trial.</p>
          </div>
        </div>

        <div className="hero-illustration">
          <div 
            className="illustration-wrapper"
            style={{ 
              x: mousePosition.x * -1, 
              y: mousePosition.y * -1 
            }}
          >
            {/* Main Dashboard Card */}
            <GlassCard className="dashboard-main" hoverEffect={false}>
              <div className="dashboard-header">
                <div className="dashboard-nav">
                  <div className="nav-dot"></div>
                  <div className="nav-dot"></div>
                  <div className="nav-dot"></div>
                </div>
                <div id="hero-div-2" className="dashboard-tabs">
                  <div id="hero-div-3" className="tab active">Overview</div>
                  <div id="hero-div-4" className="tab">Tiers</div>
                  <div id="hero-div-5" className="tab">Referrals</div>
                </div>
              </div>
              <div className="dashboard-body">
                <div className="stat-row">
                   <div className="stat-box">
                     <span className="stat-label">Points Issued</span>
                     <span className="stat-value">50M+</span>
                     <span className="stat-trend positive">+18.4%</span>
                   </div>
                   <div className="stat-box">
                     <span className="stat-label">Active Members</span>
                     <span className="stat-value">8,240</span>
                     <span className="stat-trend positive">+5.8%</span>
                   </div>
                 </div>
                <div className="chart-placeholder">
                  <div className="chart-bar" style={{height: '40%'}}></div>
                  <div className="chart-bar" style={{height: '60%'}}></div>
                  <div className="chart-bar" style={{height: '50%'}}></div>
                  <div className="chart-bar" style={{height: '80%'}}></div>
                  <div className="chart-bar" style={{height: '70%'}}></div>
                  <div className="chart-bar" style={{height: '90%', background: 'var(--primary)'}}></div>
                  <div className="chart-bar" style={{height: '100%'}}></div>
                </div>
              </div>
            </GlassCard>

            {/* Floating Widgets */}
            <div 
              className="floating-widget widget-1"
              style={{ y: y1 }}
            >
              <GlassCard hoverEffect={false}>
                <div className="widget-header">
                  <TrendingUp className="text-primary" size={24} />
                  <span>Reward ROI</span>
                </div>
                <div className="widget-value">3.2x</div>
                <div className="widget-chart-mini">
                   <svg viewBox="0 0 100 30" className="sparkline">
                     <path d="M0 25 Q 10 15, 20 20 T 40 10 T 60 15 T 80 5 T 100 10" fill="none" stroke="var(--primary)" strokeWidth="3" />
                   </svg>
                </div>
              </GlassCard>
            </div>

            <div 
              className="floating-widget widget-2"
              style={{ y: y2 }}
            >
              <GlassCard hoverEffect={false}>
                <div className="widget-header">
                  <Activity className="text-primary" size={24} />
                  <span>Gold Tier Members</span>
                </div>
                <div className="widget-value">1,492</div>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{width: '68%'}}></div>
                </div>
              </GlassCard>
            </div>

          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div 
           
          
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
