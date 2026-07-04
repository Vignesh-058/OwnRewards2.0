import React, { useEffect } from 'react';

const SEO = ({ title, description, path }) => {
  useEffect(() => {
    // 1. Title
    document.title = title;
    
    // Helper to set meta tags safely
    const setMeta = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`) || 
                    document.querySelector(`meta[property="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (name.startsWith('og:')) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Primary SEO
    setMeta('description', description);
    
    // Canonical link
    const url = `https://ownrewards.app/${path}`;
    let link = document.querySelector(`link[rel="canonical"]`);
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);

    // 3. Open Graph
    setMeta('og:title', title);
    setMeta('og:description', description);
    setMeta('og:type', 'website');
    setMeta('og:url', url);
    setMeta('og:site_name', 'ownRewards');

    // 4. Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

  }, [title, description, path]);

  return null; // This component doesn't render anything in the DOM
};

export default SEO;
