import React from 'react';
// npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt, faRecycle, faUsers } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="container about-container">
      <h1>Welcome to Newestyle - Your Fashion Destination in New Westminster!</h1>
      <p>
        <FontAwesomeIcon icon={faTshirt} className="icon" />
        At Newestyle, we believe that fashion is not just about clothing; it's a statement, an expression of
        individuality, and a way to showcase your personality. Our mission is to provide you with the latest trends,
        high-quality clothing, and a shopping experience that goes beyond the ordinary.
      </p>
      <p>
        <FontAwesomeIcon icon={faRecycle} className="icon" />
        Explore our carefully curated collection of men's, women's, and kids' fashion, handpicked to reflect the
        diversity and vibrancy of New Westminster. From casual wear to elegant ensembles, we have something for every
        style and occasion.
      </p>
      <p>
        <FontAwesomeIcon icon={faUsers} className="icon" />
        What sets us apart is our commitment to sustainability. We source eco-friendly fabrics and prioritize ethical
        manufacturing practices. Join us in embracing fashion that not only looks good but also does good for the
        environment and our community.
      </p>
      <p>
        Whether you're a trendsetter or someone who values timeless classics, Newestyle is your go-to destination for
        all things fashion. We invite you to experience the joy of self-expression through our carefully curated
        collections.
      </p>
      <p>
        Thank you for choosing Newestyle - where fashion meets conscience!
      </p>
    </div>
  );
};

export default About;
