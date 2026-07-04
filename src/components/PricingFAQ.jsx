import React from 'react';
import './PricingFAQ.css';

const faqs = [
  {
    id: 'faq-1',
    q: 'Can I import my existing customers?',
    a: 'Yes. ownRewards supports bulk CSV customer import with automatic loyalty enrollment. Existing point balances can be migrated too.'
  },
  {
    id: 'faq-2',
    q: 'Does it work with Petpooja POS?',
    a: 'Yes. ownRewards natively integrates with Petpooja. Bills sync in real time and trigger automatic point calculation and rule evaluation.'
  },
  {
    id: 'faq-3',
    q: 'Can I run multiple referral programs at the same time?',
    a: 'Yes. Create seasonal, standard, invite-only, or campaign programs and run them in parallel. Each has independent reward configs and limits.'
  },
  {
    id: 'faq-4',
    q: 'Is OTP required for every redemption?',
    a: 'It\'s optional and configurable per outlet. You can require a WhatsApp OTP before any points redemption to prevent fraud at the POS.'
  },
  {
    id: 'faq-5',
    q: 'Can I control how often a rule fires per customer?',
    a: 'Yes. Set maxExecutionsPerCustomer (e.g., birthday rule fires max once per year) and maxExecutionsTotal globally per rule.'
  },
  {
    id: 'faq-6',
    q: 'How does budget control work for rewards?',
    a: 'Set a maximum total discount value or maximum issuance count per reward. When the budget is exhausted, the reward auto-deactivates — no overspend is possible.'
  }
];

const PricingFAQ = () => {
  return (
    <section id="pricing-faq" className="pricing-faq-section animate-on-scroll fade-up">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title animate-on-scroll fade-up">Frequently Asked <span className="gradient-text">Questions</span></h2>
        </div>

        <div 
          className="faq-wrapper"
          
          
          
          
        >
          {faqs.map((faq) => (
            <details key={faq.id} id={faq.id} className="faq-item">
              <summary className="faq-q">
                {faq.q}
                <span className="faq-icon">+</span>
              </summary>
              <div className="faq-a">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
