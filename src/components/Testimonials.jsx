import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import GlassCard from './GlassCard';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Marketing Director",
      company: "Brew & Co.",
      content: "OwnRewards completely transformed our customer retention. The automated WhatsApp campaigns have a 45% conversion rate. It's almost like magic.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    {
      name: "David Chen",
      role: "Founder",
      company: "Peak Athletics",
      content: "The API-first approach allowed us to integrate the loyalty program seamlessly into our custom headless Shopify build in just a few days.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager",
      company: "Urban Greens",
      content: "We've seen a 30% increase in repeat purchases since launching our VIP tiers. The dashboard makes it incredibly easy to track our ROI.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=5"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials-sec-1" className="testimonials relative overflow-hidden">
      <div className="container relative z-10">
        <h2 className="section-title text-center mb-8 animate-on-scroll fade-up">Loved by <span className="gradient-text">thousands</span></h2>
        
        <div className="carousel-container max-w-4xl mx-auto relative mt-12">
          <div className="carousel-content">
            <div
              key={currentIndex}
              className="testimonial-fade-wrapper"
            >
              <GlassCard className="testimonial-card animate-on-scroll fade-up">
                <div className="rating">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} fill="var(--primary)" color="var(--primary)" />
                  ))}
                </div>
                <p className="testimonial-content">"{testimonials[currentIndex].content}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar-css" style={{ 
                    width: '48px', height: '48px', borderRadius: '50%', 
                    background: 'var(--primary)', color: 'white', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 'bold', fontSize: '1.2rem'
                  }}>
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <div className="author-name">{testimonials[currentIndex].name}</div>
                    <div className="author-role">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
          
          <div className="carousel-controls mt-8 flex justify-center gap-4">
            <button id="testimonials-btn-2" onClick={prev} className="btn-icon carousel-btn hover-lift"><ChevronLeft size={24} /></button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <div key={i} className={`dot-indicator ${i === currentIndex ? 'active' : ''}`} />
              ))}
            </div>
            <button id="testimonials-btn-3" onClick={next} className="btn-icon carousel-btn hover-lift"><ChevronRight size={24} /></button>
          </div>
        </div>
      </div>
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[500px] bg-primary opacity-10 blur-[150px] rounded-[100%] pointer-events-none -z-10" />
    </section>
  );
};

export default Testimonials;
