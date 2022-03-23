import React from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';


const Review = ({reviews, index, handleClickLeft, handleClickRight}) => {
  return (
    <div className='section-center'>
      {reviews.map((review, reviewIndex) => {
        const { id, image, name, quote, title } = review;

        let position = 'nextSlide';
        if (reviewIndex === index) {
          position = 'activeSlide';
        }
        if (
          reviewIndex === index - 1 ||
          (index === 0 && reviewIndex === reviews.length - 1)
        ) {
          position = 'lastSlide';
        }

        return (
          <article className={position} key={id}>
            <img src={image} alt={name} className='person-img' />
            <h4>{name}</h4>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}
      <button type='button' className='prev' onClick={handleClickLeft}>
        <FiChevronLeft />
      </button>
      <button type='button' className='next' onClick={handleClickRight}>
        <FiChevronRight />
      </button>
    </div>
  );
}

export default Review