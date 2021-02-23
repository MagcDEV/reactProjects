import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index];

  const checkNumbers = (number) => {
    if (number > 3 || number < 0) {
      return 0
    } else {
      return number
    }
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumbers(newIndex)
    })
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumbers(newIndex)
    })
  }

  const randomPersonal = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if ( randomNumber == index ) {
      randomNumber = index + 1
    }
    setIndex(checkNumbers(randomNumber))
  }


  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPersonal}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
