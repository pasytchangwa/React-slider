import React, { useEffect, useState } from "react";
import data from './data';
import Review from "./Review";

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
        <Review reviews={reviews} index={index} handleClickLeft={handleClickLeft} handleClickRight={handleClickRight}/>
      </section> 
  );
}

export default App;
