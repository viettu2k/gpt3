import React from 'react';

import './cta.scss';

const CTA = () => (
  <div className='gpt3__cta'>
    <div className='gpt3__cta__content'>
      <p>Request Early Access to Get Started</p>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className='gpt3__cta__btn'>
      <button type='button'>Get Started</button>
    </div>
  </div>
);

export default React.memo(CTA);
