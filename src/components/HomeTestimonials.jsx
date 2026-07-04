import React from 'react';
import { Quote, Star } from 'lucide-react';
import './HomeTestimonials.css';

const testimonials = [
  {
    quote: "ownRewards' birthday automation brought back 34% of churned customers in just 90 days. Nothing else we tried came close.",
    name: "Marketing Head",
    role: "QSR Chain (6 outlets)",
    rating: 5
  },
  {
    quote: "The rule engine replaced 3 different tools we were using. Our entire loyalty, campaign, and notification stack is now one system.",
    name: "Head of CX",
    role: "National Retail Brand",
    rating: 5
  },
  {
    quote: "Our referral program generated ₹4.2L in new customer revenue in the first month. Setup took one afternoon.",
    name: "Founder",
    role: "Fast-growing D2C Brand",
    rating: 5
  }
];

const HomeTestimonials = () => {
  return (
    <section id="testimonials" className="home-testimonials">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title animate-on-scroll fade-up">Trusted by businesses <span className="gradient-text">across India</span></h2>
        </div>

        <div className="ht-grid animate-on-scroll fade-up">
          {testimonials.map((t, i) => (
            <div id="hometestimonials-div-1" 
              key={i} 
              className="ht-card animate-on-scroll fade-up"
              
              
              
              
            >
              <div id="hometestimonials-div-2" className="ht-card-top animate-on-scroll fade-up">
                <Quote size={32} className="ht-quote-icon" />
                <div className="ht-stars">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>
              
              <div className="ht-quote">"{t.quote}"</div>
              
              <div className="ht-author-block animate-on-scroll fade-up">
                <div className="ht-author-name">{t.name}</div>
                <div className="ht-author-role">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
