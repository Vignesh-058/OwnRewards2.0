import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./HomeHero.css";

const HomeHero = () => {
  return (
    <section id="homehero-sec-1" className="home-hero" id="hero">
      {/* Animated mesh gradient background */}
      <div className="hero-mesh">
        <div className="mesh-blob mesh-1 float-subtle" />
        <div className="mesh-blob mesh-2 float-subtle delay-200" />
        <div className="mesh-blob mesh-3 float-subtle delay-400" />
      </div>

      <div className="container home-hero-container">
        {/* LEFT — Text */}
        <div className="home-hero-left">
          <div className="hero-eyebrow animate-on-scroll fade-up">
            ✨ AI-Powered Customer Retention
          </div>

          <h1 className="home-hero-h1 animate-on-scroll fade-up delay-100">
            <span className="block">Stop losing customers.</span>
            <span className="block">Start rewarding loyalty.</span>
          </h1>

          <p className="home-hero-sub animate-on-scroll fade-up delay-200">
            OwnRewards gives your business a complete loyalty engine — points,
            tiers, smart rules, automated rewards, coupons, and referrals — all
            triggered by real customer behavior.
          </p>

          <div className="home-hero-actions animate-on-scroll fade-up delay-300">
            <a href="https://workspace.ownchat.app/" target="_blank" rel="noopener noreferrer" className="hero-btn-primary hover-glow">
              Get Started Free <ArrowRight size={16} />
            </a>
            <Link to="/how-it-works" className="hero-btn-outline hover-glow">
              See How It Works
            </Link>
          </div>

          <p className="hero-trust-note animate-on-scroll fade-up delay-400">
            No credit card required · Free 14-day trial · Setup in minutes
          </p>
        </div>

        {/* RIGHT — Floating Loyalty Card Mock */}
        <div className="home-hero-right">
          <div
            id="homehero-div-2"
            className="loyalty-card-mock float animate-on-scroll fade-up"
          >
            {/* Card Header */}
            <div className="lc-header">
              <div className="lc-brand">
                <div className="lc-brand-icon">🏆</div>
                <div>
                  <div className="lc-brand-name">OwnRewards</div>
                  <div className="lc-brand-sub">Loyalty Wallet</div>
                </div>
              </div>
              <div className="lc-tier gold">🥇 Gold</div>
            </div>

            {/* Points */}
            <div className="lc-points-block animate-on-scroll fade-up">
              <div className="lc-points-label">Available Points</div>
              <div className="lc-points-value">2,450</div>
              <div className="lc-points-equiv">≈ ₹245 reward value</div>
            </div>

            {/* Tier Progress */}
            <div className="lc-progress-block animate-on-scroll fade-up">
              <div className="lc-progress-labels">
                <span>Gold</span>
                <span>550 pts to Platinum</span>
              </div>
              <div className="lc-progress-track">
                <div className="lc-progress-fill" />
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lc-activity">
              <div className="lc-activity-title">Recent Activity</div>
              {[
                { label: "Purchase — Dine In", pts: "+120 pts", time: "Today" },
                {
                  label: "🎂 Birthday Bonus",
                  pts: "+500 pts",
                  time: "Yesterday",
                },
                {
                  label: "Referral Reward",
                  pts: "+250 pts",
                  time: "3 days ago",
                },
              ].map((item, i) => (
                <div key={i} className="lc-activity-row">
                  <div className="lc-activity-label">{item.label}</div>
                  <div className="lc-activity-right">
                    <span className="lc-pts">{item.pts}</span>
                    <span className="lc-time">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Active Coupon */}
            <div className="lc-coupon">
              <div className="lc-coupon-badge">🏷️ Active Coupon</div>
              <div className="lc-coupon-code">BDAY20</div>
              <div className="lc-coupon-desc">
                20% off next visit · Expires in 3 days
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
