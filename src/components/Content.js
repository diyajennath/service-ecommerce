import React from 'react'; 
import './Content.css';

const Content = () => {
    return (
        <div className="container">
            <h2 className="section-title">WHY CHOOSE US?</h2>
            <p className="description">
            We create custom e-commerce solutions that fit your needs perfectly. Our team uses the latest technologies to build secure and high-performing online stores. We work closely with you throughout the process to ensure everything meets your expectations. With our focus on quality and customer satisfaction, we help you stand out and succeed online. </p>
            <div className="content">
                <div className="left-content">
                <div className="feature"> 
                    <h3>CUSTOM E-COMMERCE SOLUTIONS</h3>
                    <p>We create tailored e-commerce platforms that align with your unique business model and goals. Our team crafts solutions that reflect your brand identity and enhance customer engagement.</p>
                </div>
                <div className="feature">
                    <h3>USER-FRIENDLY DESIGN</h3>
                    <p>Our designs prioritize user experience, ensuring that your online store is easy to navigate, visually appealing, and optimized for conversions. We aim to turn visitors into loyal customers.</p>
                </div>
                <div className="feature">
                    <h3>SECURE PAYMENT INTEGRATION</h3>
                    <p>We implement robust and secure payment gateways, giving your customers peace of mind when shopping. Our systems support multiple payment methods, making transactions seamless.</p>
                </div>
                <div className="feature">
                    <h3>MOBILE OPTIMIZATION</h3>
                    <p>With a significant number of users shopping on mobile devices, we ensure that your e-commerce site is fully responsive and performs flawlessly across all screen sizes.</p>
                </div>
                <div className="feature">
                    <h3>SEO-OPTIMIZED PLATFORMS</h3>
                    <p>We integrate SEO best practices into your e-commerce site from the ground up, helping you rank higher on search engines and attract organic traffic to your store.</p>
                </div>
                


            </div>
                <div className="right-content">
                    <img src="/images/ecoms.jpg" alt="mobile" className="responsive-img" />
                </div>
            </div>

            {/* What We Offer Section */}
            <div className="offerings-container">
                <h2 className="section-title">WHAT WE OFFER</h2>
                    <div className="offering-box">
                        <h3>CUSTOM E-COMMERCE SOLUTIONS</h3>
                        <p>Tailored platforms to fit your business needs.</p>
                    </div>
                    <div className="offering-box">
                        <h3>SHOPPING CART INTEGRATION</h3>
                        <p>User-friendly and secure carts for smooth transactions.</p>
                    </div>
                    <div className="offering-box">
                        <h3>PAYMENT GATEWAY SETUP</h3>
                        <p>Integration with various payment methods for secure transactions.</p>
                    </div>
                    <div className="offering-box">
                        <h3>PRODUCT CATALOG MANAGEMENT</h3>
                        <p>Easy management of product listings and organization.</p>
                    </div>
                    <div className="offering-box">
                        <h3>MOBILE OPTIMIZATION</h3>
                        <p>Designs optimized for seamless mobile shopping experiences.</p>
                    </div>
                    <div className="offering-box">
                        <h3>ORDER MANAGEMENT SYSTEM</h3>
                        <p>Tools to track and manage orders and inventory.</p>
                    </div>
                    <div className="offering-box">
                        <h3>USER ACCOUNT MANAGEMENT</h3>
                        <p>Features for customers to create accounts and save preferences.</p>
                    </div>
                    <div className="offering-box">
                        <h3>SECURITY FEATURES</h3>
                        <p>SSL certificates and encryption to protect data and transactions.</p>
                    </div>
                    <div className="offering-box">
                        <h3>ONGOING SUPPORT AND MAINTENANCE</h3>
                        <p>Regular updates and support to keep your application running smoothly.</p>
                    </div>
            </div>
        </div>
    );
};

export default Content;
