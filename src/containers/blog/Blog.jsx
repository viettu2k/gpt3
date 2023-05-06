import React from 'react';

import './blog.scss';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import { Article } from '../../components';

const Blog = () => (
  <div className='gpt3__blog section__padding' id='blog'>
    <div className='gpt3__blog__heading'>
      <h1 className='gradient__text'>
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className='gpt3__blog__container'>
      <div className='gpt3__blog__container__groupA'>
        <Article
          imgUrl={blog01}
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us explore how it is?'
        />
      </div>
      <div className='gpt3__blog__container__groupB'>
        <Article
          imgUrl={blog02}
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us explore how it is?'
        />{' '}
        <Article
          imgUrl={blog03}
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us explore how it is?'
        />{' '}
        <Article
          imgUrl={blog04}
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us explore how it is?'
        />{' '}
        <Article
          imgUrl={blog05}
          date='Sep 26, 2021'
          text='GPT-3 and Open  AI is the future. Let us explore how it is?'
        />
      </div>
    </div>
  </div>
);

export default Blog;
