import React from 'react';
import './TrustedClients.css';

// Dynamically import all images from the Trusted Pic folder using Vite's glob feature
const imageModules = import.meta.glob('../assets/Trusted Pic/*.{png,jpg,jpeg,svg,webp}', { eager: true, import: 'default' });

const CLIENTS = Object.entries(imageModules).map(([path, url]) => {
  // Extract just the filename without extension for the alt text
  const name = path.split('/').pop().split('.')[0];
  return { name, src: url };
});

const TrustedClients = () => {
  return (
    <section id="trusted-clients-sec" className="trusted-clients pt-20 pb-20">
      <div className="container relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll fade-up">
          Trusted by <span className="text-primary">Growing Businesses</span>
        </h2>
        
        <p className="trusted-subtitle max-w-3xl mx-auto mb-12 animate-on-scroll fade-up delay-100">
          Helping Businesses Improve Customer Engagement. See how teams use WhatsApp and Instagram automation to improve response times, engagement, and conversions.
        </p>

        <div className="clients-grid animate-on-scroll fade-up delay-200">
          {CLIENTS.map((client, index) => (
            <div key={index} className="client-card">
              <img 
                src={client.src} 
                alt={client.name} 
                loading="lazy" 
                decoding="async" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
