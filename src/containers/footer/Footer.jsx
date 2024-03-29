import React from 'react';
import './footer.scss';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => (
  <div className='gpt3__footer section__padding'>
    <div className='gpt3__footer__heading'>
      <h1 className='gradient__text'>
        Do you want to step in to the future before others
      </h1>
    </div>
    <div className='gpt3__footer__btn'>
      <p>Request Early Access</p>
    </div>
    <div className='gpt3__footer__links'>
      <div className='gpt3__footer__links__logo'>
        <img src={gpt3Logo} alt='logo' />
        <p>
          Somewhere LMAO, <br /> All Rights Reserved
        </p>
      </div>
      <div className='gpt3__footer__links__div'>
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className='gpt3__footer__links__div'>
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className='gpt3__footer__links__div'>
        <h4>Get in touch</h4>
        <p>Somewhere LMAO</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>
    <div className='gpt3__footer__copyright'>
      <p>@2022 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default React.memo(Footer);
