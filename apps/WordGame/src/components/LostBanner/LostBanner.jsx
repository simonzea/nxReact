import React from 'react';
import Banner from '../Banner/Banner';
import './LostBanner.css';

function LostBanner({ answer }) {
  return (
    <Banner className="sad">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </Banner>
  );
}

export default LostBanner; 