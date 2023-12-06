import React from 'react';
import NewFeedback from './NewFeedback';
import DisplayFeedback from './DisplayFeedback';
import '../css/About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Left Column: Store Description and Logo */}
      <div className="about-upper-part">
        <div className="left-column">
          <h2>Newestyle Store</h2>
          <img className="store-image"
            src="/logo_Newestyle.png"
            alt="Store Logo"
            style={{ width: '180px', height: '180px' }}
          />
          <p className="about-online-store">
            Welcome to the Newestyle!
            <br /><br />
            The clothing store where quality products and great customer service meets.
          </p>
        </div>
        {/* Right: Feedback Form */}
        <div className="right-column">
          <NewFeedback />
        </div>
      </div>

      {/* Lower Part: Submitted feedbacks */}
      <div className="lower-part">
        <DisplayFeedback />
      </div>
    </div>
  );
};

export default About;
