import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const Card = ({id, image, name, title, quote, position}) => {
  return (
    <article className={position} key={id}>
      <img className="person-img" src={image} alt={name} />
      <h4>{name}</h4>
      <p className="text">{quote}</p>
      <FaQuoteRight className='icon' />
    </article>
    )
}

export default Card;
