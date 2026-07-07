import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import { ArrowRight, Search, BookOpen, Video, FileText } from 'lucide-react';
import './ResourcesPage.css';

const MOCK_POSTS = [
  {
    id: 'retention-guide-2026',
    title: 'The 2026 Guide to Retail Customer Retention',
    excerpt: 'Stop competing on price. Learn how top retail brands are using smart loyalty tiers to increase LTV by 40%.',
    category: 'Guide',
    date: 'July 2, 2026',
    readTime: '8 min read',
    type: 'article'
  },
  {
    id: 'restaurant-churn',
    title: 'How QSRs Can Predict Churn Before It Happens',
    excerpt: 'A deep dive into using RFM analysis and health scores to bring back dining customers automatically.',
    category: 'Case Study',
    date: 'June 28, 2026',
    readTime: '5 min read',
    type: 'article'
  },
  {
    id: 'setting-up-referrals',
    title: 'Building a Dual-Sided Referral Engine',
    excerpt: 'Why giving $10 to get $10 works, and how to automate the reward payouts directly to digital wallets.',
    category: 'Strategy',
    date: 'June 15, 2026',
    readTime: '12 min read',
    type: 'article'
  },
  {
    id: 'ownrewards-webinar',
    title: 'Mastering the OwnRewards Rule Engine',
    excerpt: 'Watch our product team build 5 complex loyalty workflows in under 20 minutes.',
    category: 'Webinar',
    date: 'June 10, 2026',
    readTime: '45 min watch',
    type: 'video'
  },
  {
    id: 'bfcm-playbook',
    title: 'The Black Friday / Cyber Monday Loyalty Playbook',
    excerpt: "Don't just acquire cheap traffic. Use BFCM to convert shoppers into year-round VIPs.",
    category: 'Playbook',
    date: 'May 22, 2026',
    readTime: '15 min read',
    type: 'document'
  },
  {
    id: 'api-headless-loyalty',
    title: 'Headless Loyalty: Connecting OwnRewards via API',
    excerpt: 'A technical guide for developers on building custom storefronts powered by the OwnRewards API.',
    category: 'Developer',
    date: 'May 10, 2026',
    readTime: '10 min read',
    type: 'article'
  }
];

const getIconForType = (type) => {
  switch(type) {
    case 'video': return <Video size={16} />;
    case 'document': return <FileText size={16} />;
    default: return <BookOpen size={16} />;
  }
};

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = MOCK_POSTS.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEO 
        title="Resources & Blog — OwnRewards"
        description="Learn the latest strategies in customer retention, loyalty programs, and omnichannel marketing."
        path="resources"
      />
      
      {/* Hero Section */}
      <section className="resources-hero">
        <div className="container text-center">
          <div className="hero-eyebrow animate-on-scroll fade-up">📚 Knowledge Base</div>
          <h1 className="section-title animate-on-scroll fade-up delay-100">
            Insights to <span className="gradient-text">scale retention.</span>
          </h1>
          <p className="resources-sub animate-on-scroll fade-up delay-200">
            Expert guides, case studies, and strategies to help you build loyalty programs that actually drive revenue.
          </p>
          
          <div className="resources-search animate-on-scroll fade-up delay-300">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search articles, guides, or case studies..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="resources-grid-section">
        <div className="container">
          <div className="resources-grid">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <Link 
                  to={`/resources/${post.id}`} 
                  key={post.id} 
                  className={`resource-card animate-on-scroll fade-up delay-${(index % 3) * 100}`}
                >
                  <div className="rc-image-placeholder">
                    {getIconForType(post.type)}
                  </div>
                  <div className="rc-content">
                    <div className="rc-meta">
                      <span className="rc-category">{post.category}</span>
                      <span className="rc-dot">•</span>
                      <span className="rc-time">{post.readTime}</span>
                    </div>
                    <h3 className="rc-title">{post.title}</h3>
                    <p className="rc-excerpt">{post.excerpt}</p>
                    <div className="rc-footer">
                      <span className="rc-date">{post.date}</span>
                      <span className="rc-read-more">Read <ArrowRight size={14} /></span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="no-results">
                <h3>No resources found</h3>
                <p>Try adjusting your search query.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default ResourcesPage;
