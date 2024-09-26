import React from 'react';
import './HowWeWork.css';

const HowWeWork = () => {
  return (
    <div className="how-we-work-container">
      <h2 className="sections-title">How We Work</h2>      
      <div className="steps-container">
      <div className="step-box"> 
          <h3>01</h3>
          <p>DISCOVERY AND PLANNING</p>
          <span>We begin by understanding your business requirements and goals. We then create a detailed plan outlining the project scope, timeline, and key features.</span>
      </div>
      <div className="step-box">
          <h3>02</h3>
          <p>DESIGN</p>
          <span>Our team designs user-friendly and visually appealing e-commerce interfaces. We create wireframes and prototypes to illustrate the layout and functionality.</span>
      </div>
      <div className="step-box">
          <h3>03</h3>
          <p>DEVELOPMENT</p>
          <span>We build the e-commerce application, integrating essential features like shopping carts, payment gateways, and product management systems.</span>
      </div>
      <div className="step-box">
          <h3>04</h3>
          <p>TESTING</p>
          <span>We rigorously test the application to ensure it is functional, secure, and provides a seamless user experience. We identify and fix any issues before launch.</span>
      </div>
      <div className="step-box">
          <h3>05</h3>
          <p>LAUNCH</p>
          <span>We assist with the launch of your e-commerce application, ensuring it is live and fully operational. We provide support to handle any immediate post-launch concerns.</span>
      </div>
      <div className="step-box">
          <h3>06</h3>
          <p>ONGOING SUPPORT</p>
          <span>After launch, we offer continued support and maintenance to keep your application running smoothly. We make updates, fix issues, and implement improvements based on user feedback.</span>
      </div>
      </div>
    </div>
  );
};

export default HowWeWork;
