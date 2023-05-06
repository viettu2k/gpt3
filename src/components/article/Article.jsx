import React from 'react';

import './article.scss';

const Article = ({ imgUrl, date, text }) => (
  <div className='gpt3__blog__container__article'>
    <div className='gpt3__blog__container__article__image'>
      <img src={imgUrl} alt='blog' />
    </div>
    <div className='gpt3__blog__container__article__content'>
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default React.memo(Article);
