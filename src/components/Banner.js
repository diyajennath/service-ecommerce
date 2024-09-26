import React from 'react';
import './Banner.css'; 

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title"> E-Commerce Applications</h1>
        <div className="banner-details">
          <span>Welcome to Our E-commerce Solutions !<br /> Transform Your Ideas Into Reality </span>
        </div>
        <p className="banner-description">
        At NPNG Tech, We create custom e-commerce applications that help your business succeed online. Our solutions are designed to be user-friendly and effective, with features like secure payment options and intuitive shopping experiences. We use the latest technology to build online stores that look great and work seamlessly, ensuring your customers have a positive shopping experience.
        </p>
        <a href="#contact" className="banner-button">LET'S GET IN TOUCH</a>
      </div>
      <div className="banner-image">
        <img src="/images/ecom.jpg" alt="Technology background" />
      </div>
    </div>
  );
};

export default Banner;
