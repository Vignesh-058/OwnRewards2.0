import React, { useRef } from 'react';
import { PlugZap, Settings2, Megaphone, TrendingUp } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: <PlugZap size={28} />,
      title: "Connect",
      description: "Integrate with Shopify, WooCommerce, or your custom POS in minutes via our REST API or one-click plugins. All purchase events flow in automatically."
    },
    {
      icon: <Settings2 size={28} />,
      title: "Configure Rules",
      description: "Use the visual Rule Engine to define 30+ event triggers — award points on purchase, grant rewards at tier milestones, issue coupons on referrals, and more."
    },
    {
      icon: <Megaphone size={28} />,
      title: "Launch Campaigns",
      description: "Run targeted campaigns — birthday rewards, win-back offers, tier upgrade nudges — with A/B testing and omnichannel delivery via email, SMS, and WhatsApp."
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Grow with Analytics",
      description: "Track reward ROI, cohort retention, tier distribution, and LTV prediction in real-time. Use insights to fine-tune rules and watch customer lifetime value climb."
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="howitworks-sec-1" className="how-it-works relative" ref={containerRef}>
      <div className="container relative z-10">
        <div className="section-header text-center mb-16">
          <h2 className="section-title animate-on-scroll fade-up">From setup to <span className="text-primary">results</span> — in minutes</h2>
          <p className="section-subtitle">A seamless workflow designed to get your loyalty engine live and delivering ROI instantly.</p>
        </div>

        <div className="hiw-timeline">
          {/* Timeline line */}
          <div className="hiw-line-track"></div>
          <div
            className="hiw-line-fill"
            style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
          />

          <div className="hiw-steps">
            {steps.map((step, index) => (
              <div
                key={index}
                className="hiw-step"
                
                
                
                
              >
                <div className="hiw-icon-ring">
                  <div className="hiw-icon">{step.icon}</div>
                </div>
                <div id="howitworks-div-2" className="hiw-card animate-on-scroll fade-up">
                  <h3 className="hiw-title">{index + 1}. {step.title}</h3>
                  <p className="hiw-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary opacity-5 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default HowItWorks;
