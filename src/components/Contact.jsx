import React from 'react';
import { Mail, MapPin, Phone, Clock, MessageCircle, Briefcase, Globe } from 'lucide-react';
import Button from './Button';
import GlassCard from './GlassCard';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact-sec-1" className="contact pt-32 pb-16" id="contact">
      <div className="container relative z-10">
        <div className="section-header text-center mb-16">
          <h1 
            className="text-4xl md:text-5xl font-bold"
            
            
            
          >
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p 
            className="section-subtitle mt-4 mx-auto"
            
            
            
          >
            Have questions about our enterprise plans, API integrations, or custom development? Our team is here to help.
          </p>
        </div>

        <div className="contact-grid animate-on-scroll fade-up">
          <div 
            className="contact-info-wrapper"
            
            
            
          >
            <div className="contact-methods">
              <GlassCard className="contact-method">
                <div className="method-icon"><Mail size={24} /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>hello@OwnRewards.io</p>
                  <p className="text-sm text-primary mt-1">We aim to reply within 2 hours</p>
                </div>
              </GlassCard>

              <GlassCard className="contact-method">
                <div className="method-icon"><Phone size={24} /></div>
                <div>
                  <h4>Call Us</h4>
                  <p><a href="tel:+919999999999" className="hover:text-primary transition-colors">+91 99999 99999</a></p>
                  <p className="text-sm text-primary mt-1">Available during business hours</p>
                </div>
              </GlassCard>

              <GlassCard className="contact-method">
                <div className="method-icon"><Clock size={24} /></div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Saturday: 9:00 AM - 6:30 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </GlassCard>

              <GlassCard className="contact-method">
                <div className="method-icon"><MapPin size={24} /></div>
                <div>
                  <h4>Headquarters</h4>
                  <p>Thiruvarur</p>
                  
                  {/* Google Map Iframe */}
                  <div className="mt-4" style={{ borderRadius: '12px', overflow: 'hidden', height: '160px', border: '1px solid var(--border)' }}>
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125433.87677465063!2d79.5598687784013!3d10.746098050868843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5546e4c7ba9d19%3A0x6b4fb712953258c7!2sThiruvarur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1720367351000!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Headquarters Location"
                    ></iframe>
                  </div>
                </div>
              </GlassCard>
            </div>

            <div className="contact-social mt-8 text-center">
              <h4 className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-4">Connect With Us</h4>
              <div className="social-icons-row">
                <a href="#" className="social-icon-btn"><MessageCircle size={20} /></a>
                <a href="#" className="social-icon-btn"><Briefcase size={20} /></a>
                <a href="#" className="social-icon-btn"><Globe size={20} /></a>
              </div>
            </div>
          </div>
          
          <div 
            className="contact-form-wrapper"
            
            
            
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Doe" required />
                </div>
              </div>
              <div className="form-group">
                <label>Work Email</label>
                <input type="email" placeholder="john@company.com" required />
              </div>
              <div className="form-group">
                <label>Company Size</label>
                <select className="contact-select" required defaultValue="">
                  <option value="" disabled>Select company size</option>
                  <option value="1-50">1-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="How can we help you?" rows="4" required></textarea>
              </div>
              <Button type="submit" variant="primary" className="w-full mt-4">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary opacity-10 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default Contact;
