import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title, info}) => {
  const [expan, setExpan] = useState(true)
  return (
    <div className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setExpan(!expan)}>
          {expan ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {expan ? <p></p> : <p>{info}</p>}
    </div>
  );
};

export default Question;
