import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import './AnalyticsMetrics.css';

const AnimatedCounter = ({ target, duration = 2, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(currentRef);
        }
      },
      { rootMargin: '-50px' }
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

  // Format large numbers with commas
  const formattedCount = count.toLocaleString();

  return (
    <span ref={ref}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
};

const metrics = [
  { id: 'metric-roi', label: 'Loyalty Program ROI', target: 284, suffix: '%', sub: 'Revenue generated vs. discount cost' },
  { id: 'metric-retention', label: 'Avg Retention Rate', target: 67, suffix: '.4%', sub: 'Month-3 cohort retention' },
  { id: 'metric-members', label: 'Active Members', target: 12450, sub: 'Across all outlets' },
  { id: 'metric-ltv', label: 'Avg Customer LTV', target: 4800, prefix: '₹', sub: '12-month average' },
];

const AnalyticsMetrics = () => {
  return (
    <section id="analytics-metrics" className="am-section">
      <div className="container">
        <div className="am-grid animate-on-scroll fade-up">
          {metrics.map((m, i) => (
            <div id="analyticsmetrics-div-1" 
              key={m.id} 
              id={m.id}
              className="am-card animate-on-scroll fade-up"
              
              
              
              
            >
              <div className="am-label">{m.label}</div>
              <div className="am-val">
                <AnimatedCounter target={m.target} prefix={m.prefix} suffix={m.suffix} />
              </div>
              <div className="am-sub">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsMetrics;
