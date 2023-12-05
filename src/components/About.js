import React from 'react';
import NewFeedback from './NewFeedback'; // Make sure the path is correct
import DisplayFeedback from './DisplayFeedback'; // Make sure the path is correct
import '../css/About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Left Column: Store Description and Logo */}
      <div className="about-upper-part">
        <div className="left-column">
          <h2>Our Store</h2>
          {/* Add your logo using an <img> tag */}
          <img className="store-image"
            src="/logo_Newestyle.png"
            alt="Store Logo"
            style={{ width: '180px', height: '180px' }}
          />
          <p className="about-online-store">
            Welcome to the Newestyle online store! We are dedicated to providing quality products and excellent service to our customers.
          </p>
        </div>
        {/* Right Column: Feedback Form */}
        <div className="right-column">
          <NewFeedback />
        </div>
      </div>

      {/* Lower Part: Display Submitted Feedbacks */}
      <div className="lower-part">
        <DisplayFeedback />
      </div>
    </div>
  );
};

export default About;
