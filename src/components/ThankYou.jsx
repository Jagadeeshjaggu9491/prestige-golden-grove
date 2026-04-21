import React from 'react';
import './ThankYou.css';

const ThankYou = () => {
  const handleBackHome = () => {
    window.location.hash = '/';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="thank-you-page">
      <div className="thank-you-card glass-card">
        <p className="thank-you-tag gold-text">ENQUIRY RECEIVED</p>
        <h1 className="serif">Thank You For Your Interest</h1>
        <p className="thank-you-text">
          Our team has received your details and will get back to you soon with complete project information.
        </p>
        <button type="button" className="btn-luxury" onClick={handleBackHome}>
          Back To Homepage
        </button>
      </div>
    </section>
  );
};

export default ThankYou;
