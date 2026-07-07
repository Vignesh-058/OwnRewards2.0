import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Linkedin } from 'lucide-react';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import './BlogPostPage.css';

// Mock content - in a real app this would be fetched from a CMS based on the ID
const MOCK_POST_CONTENT = {
  id: 'retention-guide-2026',
  title: 'The 2026 Guide to Retail Customer Retention',
  category: 'Guide',
  date: 'July 2, 2026',
  readTime: '8 min read',
  author: {
    name: 'Sarah Chen',
    role: 'Head of Growth',
    initials: 'SC'
  },
  content: `
    <p class="lead">Stop competing on price. If your only retention strategy is dropping your prices to beat competitors, it's a race to the bottom. Here is how top retail brands are using smart loyalty tiers to increase LTV by 40%.</p>
    
    <h2>1. The Myth of the "Loyal" Customer</h2>
    <p>In 2026, customers are more distracted than ever. With thousands of brands vying for their attention on TikTok, Instagram, and X, assuming a customer will return just because they had a "good" experience is dangerous.</p>
    <p>True loyalty isn't bought; it's engineered. You need a systemic way to identify when a customer is slipping away and a frictionless path to bring them back.</p>
    
    <blockquote>
      "Brands that implement behavioral rules (like sending a points multiplier when a user hasn't purchased in 30 days) see a 3x higher win-back rate than generic newsletter blasts."
    </blockquote>
    
    <h2>2. Tiered Loyalty is the New Baseline</h2>
    <p>Flat "spend $100 get $10" programs are dead. They train customers to only buy when they have a coupon. Instead, you need status-driven tiers:</p>
    <ul>
      <li><strong>Bronze (Entry):</strong> Basic points, standard support.</li>
      <li><strong>Silver (Engaged):</strong> 1.5x points, early access to sales.</li>
      <li><strong>Gold (VIP):</strong> Free shipping, exclusive merchandise, invite-only events.</li>
    </ul>
    
    <p>When customers are 100 points away from "Gold" status, they will go out of their way (and spend more) to reach it. That's the power of gamification.</p>
    
    <h2>3. The Power of "Surprise & Delight"</h2>
    <p>Automated rules don't have to feel robotic. Use OwnRewards to set up a rule that says: <em>If a customer has been a member for exactly 1 year, drop 500 bonus points into their wallet with a personalized push notification.</em></p>
    <p>These unexpected moments of delight create a level of emotional attachment that a standard discount code simply cannot match.</p>
  `
};

const BlogPostPage = () => {
  const { slug } = useParams();
  
  // In a real app, fetch post data using slug
  // For now, we'll use our mock post for any slug
  const post = MOCK_POST_CONTENT;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title={`${post.title} — OwnRewards`}
        description="Read our latest insights on building better customer loyalty."
        path={`resources/${slug}`}
      />
      
      <article className="blog-post-page">
        {/* Back Link */}
        <div className="container">
          <Link to="/resources" className="back-link animate-on-scroll fade-right">
            <ArrowLeft size={16} /> Back to Resources
          </Link>
        </div>

        {/* Post Header */}
        <header className="bp-header">
          <div className="container bp-container">
            <div className="bp-meta animate-on-scroll fade-up">
              <span className="bp-category">{post.category}</span>
              <span className="bp-dot">•</span>
              <span className="bp-time"><Clock size={14} /> {post.readTime}</span>
              <span className="bp-dot">•</span>
              <span className="bp-date"><Calendar size={14} /> {post.date}</span>
            </div>
            
            <h1 className="bp-title animate-on-scroll fade-up delay-100">{post.title}</h1>
            
            <div className="bp-author animate-on-scroll fade-up delay-200">
              <div className="bp-author-avatar">{post.author.initials}</div>
              <div className="bp-author-info">
                <div className="bp-author-name">{post.author.name}</div>
                <div className="bp-author-role">{post.author.role}</div>
              </div>
            </div>
          </div>
        </header>

        {/* Post Content */}
        <div className="container bp-container">
          <div className="bp-body-wrapper">
            {/* Share Sidebar (Desktop) */}
            <div className="bp-sidebar hide-mobile">
              <div className="bp-share-sticky animate-on-scroll fade-up delay-300">
                <span className="share-lbl">Share</span>
                <button className="share-btn"><Twitter size={18} /></button>
                <button className="share-btn"><Linkedin size={18} /></button>
                <button className="share-btn"><Share2 size={18} /></button>
              </div>
            </div>

            {/* Main Content */}
            <div 
              className="bp-content animate-on-scroll fade-up delay-200"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
        
        {/* Newsletter Box */}
        <div className="container bp-container">
          <div className="bp-newsletter animate-on-scroll fade-up">
            <h3>Enjoyed this article?</h3>
            <p>Join 10,000+ founders and marketers receiving our weekly insights on scaling retention.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button className="btn-subscribe">Subscribe</button>
            </div>
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  );
};

export default BlogPostPage;
