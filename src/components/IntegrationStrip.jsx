import React from 'react';
import './IntegrationStrip.css';

const items = [
  '🧾 Petpooja',
  '📱 Custom POS',
  '💬 ownChat (WhatsApp)',
  '🔗 REST API',
  '📡 Webhooks',
  '🛒 ownCart'
];

const IntegrationStrip = () => {
  return (
    <section id="integrations" className="integration-strip">
      <div className="container text-center">
        <h4 className="is-title">Built to connect with your stack</h4>
        <div className="is-items">
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <span className="is-badge">{item}</span>
              {i < items.length - 1 && <span className="is-dot">·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationStrip;
