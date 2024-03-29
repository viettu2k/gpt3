import React from 'react';

import './possibility.scss';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => (
  <div className='gpt3__possibility section__padding'>
    <div className='gpt3__possibility__image'>
      <img src={possibilityImage} alt='possibility' />
    </div>
    <div className='gpt3__possibility__content'>
      <h4>Request Early Access to Get Started</h4>
      <h1 className='gradient__text'>
        The possibilities are <br /> beyond your imagination
      </h1>
      <p>
        Yet bed any for traveling assistance indulgence unpleasing. Not thoughts
        all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default React.memo(Possibility);
