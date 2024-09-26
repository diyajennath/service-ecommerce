import React from 'react';
import './Technology.css';

const Technology = () => {
  const technologies = [
    { heading: 'Shopify, Magento, WooCommerce, and BigCommerce'},
    { heading: 'Stripe and PayPal'},
    { heading: 'Google Analytics'},
    { heading: 'AWS'},
    { heading: 'React'},
    { heading: 'Node.js'}
  ];

  return (
    <div>
      <h2 className="main-heading">TECHNOLOGIES WE USE</h2> 
      <div className="circle-container">
        {technologies.map((tech, index) => (
          <div className="circle" key={index}>
            <h3>{tech.heading}</h3>           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
