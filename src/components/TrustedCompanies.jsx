import React from 'react';
import './TrustedCompanies.css';

const TrustedCompanies = () => {
  const companies = [
    "PetPooja", "Shopify", "WooCommerce", "OwnChat", "Webhooks"
  ];

  // Duplicate array for infinite scroll effect
  const marqueeContent = [...companies, ...companies, ...companies];

  return (
    <section id="trustedcompanies-sec-1" className="trusted-companies">
      <div className="container">
        <p className="trusted-title">Trusted by restaurant chains, retail brands, D2C stores & IT teams</p>
        
        <div className="marquee-container">
          <div className="marquee-content">
            {marqueeContent.map((company, index) => (
              <div key={index} className="company-logo">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
