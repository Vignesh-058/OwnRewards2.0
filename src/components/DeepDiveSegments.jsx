import React from 'react';
import { Link } from 'react-router-dom';
import './DeepDiveSegments.css';

const metrics = [
  {
    title: 'Health Score',
    desc: 'AI-calculated segment vitality based on engagement, spend, and visit frequency.'
  },
  {
    title: 'Churn Risk',
    desc: 'Predict which customers are about to leave — before they do.'
  },
  {
    title: 'Predicted LTV',
    desc: 'Forecast lifetime value per customer segment based on purchase patterns.'
  }
];

const DeepDiveSegments = () => {
  return (
    <section id="deep-dive-segments" className="dd-segments-section">
      <div className="container text-center">
        <h2 
          className="dd-seg-title"
          
          
          
        >
          Know exactly which customers are worth activating.
        </h2>
        
        <div id="deepdivesegments-div-1" className="dd-seg-cards animate-on-scroll fade-up">
          {metrics.map((m, i) => (
            <div id="deepdivesegments-div-2" 
              key={m.title}
              className="dd-seg-card animate-on-scroll fade-up"
              
              
              
              
            >
              <div id="deepdivesegments-div-3" className="dd-seg-card-title animate-on-scroll fade-up">{m.title}</div>
              <p className="dd-seg-card-desc animate-on-scroll fade-up">{m.desc}</p>
            </div>
          ))}
        </div>
        
        <div
          
          
          
          
        >
          <Link to="/analytics" className="dd-seg-link">
            See full analytics →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DeepDiveSegments;
