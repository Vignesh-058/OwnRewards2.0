import React, { useEffect, useRef, useState } from 'react';
import GlassCard from './GlassCard';
import './Metrics.css';

const AnimatedCounter = ({ target, duration = 2, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const currentRef = nodeRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(currentRef);
        }
      },
      { rootMargin: '-100px' }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // easeOutExpo
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * target));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return <span ref={nodeRef}>{prefix}{count}{suffix}</span>;
};

const Metrics = () => {
  const metrics = [
    { label: "Active Programs", value: 200, suffix: "+", desc: "Trusted by growing brands worldwide" },
    { label: "Points Issued", value: 50, suffix: "M+", desc: "Across Bronze, Silver, Gold & Platinum tiers" },
    { label: "Rule Triggers", value: 30, suffix: "+", desc: "Automated events powering the Rule Engine" },
    { label: "Average ROI", value: 320, suffix: "%", desc: "Return on loyalty investment" },
  ];

  return (
    <section id="metrics-sec-1" className="metrics-section relative overflow-hidden">
      <div className="container relative z-10">
        <div className="section-header text-center mb-16">
          <h2 className="section-title animate-on-scroll fade-up">Delivering <span className="gradient-text">measurable</span> results</h2>
          <p className="section-subtitle mt-4">OwnRewards delivers hard numbers — not just promises.</p>
        </div>

        <div className="metrics-grid animate-on-scroll fade-up">
          {metrics.map((metric, index) => (
            <div
              key={index}
            >
              <GlassCard className="metric-card hover-lift animate-on-scroll fade-up">
                <div className="metric-value">
                  <AnimatedCounter target={metric.value} suffix={metric.suffix} />
                </div>
                <div className="metric-label">{metric.label}</div>
                <div className="metric-desc">{metric.desc}</div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-accent-cyan opacity-10 blur-[150px] rounded-[100%] pointer-events-none -z-10" />
    </section>
  );
};

export default Metrics;
