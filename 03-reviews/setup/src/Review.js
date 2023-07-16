import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaMapPin, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);
  const {name , job , image , text} = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1 ){
      return 0;
    }
    if (number < 0 ){
      return people.length - 1;
    }
    return number;
  };
  const nextPerson= () => {
    setIndex( (index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson= () => {
    setIndex( (index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length);
    if(randomNum === index){
      randomNum = index + 1;
    }
    setIndex(checkNumber(randomNum));
  };

  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson} >
          <FaChevronLeft/>
        </button>
        <button className="next-btn" onClick={nextPerson} >
          <FaChevronRight/>
        </button>
      </div>
      <button className="btn" onClick={randomPerson} >
        <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
        </svg>

        <span class="text">Suprise Me</span>
      </button>
    </article>
  );
};

export default Review;
