import React from 'react';
import './feature.scss';

const Feature = ({ title, text }) => (
  <div className="gpt3__features__container__feature">
    <div className="gpt3__features__container__feature__title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features__container__feature__text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
