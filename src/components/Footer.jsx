import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import './Footer.css';

const FacebookIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>);
const XIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l5.5 8m5-8l-5 8m0 0l-5.5 8m10.5-8l-5 8" /></svg>);
const LinkedinIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>);
const YoutubeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>);
const InstagramIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);

const Footer = () => {
  return (
    <footer className="footer relative overflow-hidden">
      <div className="container relative z-10">
        
        <div className="footer-top">
          <div className="footer-brand">
            <Logo size={28} />
            <div className="footer-brand-title">
              Customer Loyalty<br />
              <span className="text-primary">engineered</span>
            </div>
            <p className="footer-description">
              The all-in-one enterprise platform for points, tiered rewards, referrals, and automated retention.
            </p>
            

          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">Product</h4>
            <Link to="/features">Features</Link>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="/use-cases">Use Cases</Link>
            <Link to="/pricing">Pricing</Link>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/resources">Resources & Blog</Link>
            <Link to="/analytics">Analytics Hub</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">GET THE APP</h4>
            <a href="#" className="app-badge-btn">
              <svg viewBox="0 0 384 512" width="26" height="26" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              <div className="app-badge-text">
                <span className="app-badge-sub">Download on the</span>
                <span className="app-badge-main">App Store</span>
              </div>
            </a>
            <a href="#" className="app-badge-btn">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" width="24" height="24" />
              <div className="app-badge-text">
                <span className="app-badge-sub">GET IT ON</span>
                <span className="app-badge-main">Google Play</span>
              </div>
            </a>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Contact</h4>
            <div className="contact-item">
              <Mail size={16} className="text-primary" />
              <a href="mailto:hello@OwnRewards.com" className="hover:text-primary transition-colors">hello@OwnRewards.com</a>
            </div>
            <div className="contact-item">
              <Phone size={16} className="text-primary" />
              <a href="tel:+919999999999" className="hover:text-primary transition-colors">+91 99999 99999</a>
            </div>
            <div className="contact-item">
              <MapPin size={16} className="text-primary" />
              <a href="https://maps.app.goo.gl/52oUYhJPijge3puB7" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Thiruvarur</a>
            </div>
          </div>
        </div>
        
        <div className="footer-social-center">
          <div className="meta-partner-badge">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="meta-logo" />
            <div className="meta-partner-text">Business Partner</div>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/ieyalsolutions/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook"><FacebookIcon /></a>
            <a href="https://x.com/Ownchatofficial" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X (Twitter)"><XIcon /></a>
            <a href="https://www.linkedin.com/company/ieyalsolutions/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href="https://www.youtube.com/@ieyalsolutions" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube"><YoutubeIcon /></a>
            <a href="https://www.instagram.com/ieyalsolutions/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><InstagramIcon /></a>
          </div>
        </div>


        <div className="footer-bottom">
          <div className="footer-copyright">
            <p className="copyright-main">&copy; 2026 <span>OwnRewards</span>. All rights reserved.</p>
            <p className="copyright-sub">Powering smart customer retention worldwide.</p>
          </div>

          <div className="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Refund</a>
            <a href="#">Shipping</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary opacity-5 blur-[150px] rounded-full pointer-events-none -z-10" />
    </footer>
  );
};

export default Footer;
