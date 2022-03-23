import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(0);


  const handleClickRight = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      if (index > reviews.length - 1) {
        index = 0
      }
      return index
    });
  }
  const handleClickLeft = () => {
      setIndex((oldIndex) => {
        let index = oldIndex - 1;
        if (index < 0) {
          index = reviews.length - 1;
        }
        return index;
      });
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > reviews.length - 1) {
          index = 0;
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index, reviews.length])

  return (
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span> Reviews
          </h2>
        </div>
        <div className="section-center">
          {reviews.map((review, reviewIndex) => {
            const { id, image, name, quote, title } = review

            let position = 'nextSlide'
            if (reviewIndex === index) {
              position = 'activeSlide'
            }
            if (reviewIndex === index - 1 || (index === 0 && reviewIndex === reviews.length - 1)) {
              position = 'lastSlide'
            }

            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className='person-img' />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon"/>
              </article>
            )
          })}
          <button type="button" className="prev" onClick={handleClickLeft}>
          <FiChevronLeft />
          </button>
          <button type="button" className="next" onClick={handleClickRight}>
          <FiChevronRight />
          </button>
        </div>
      </section> 
  );
}

export default App;
