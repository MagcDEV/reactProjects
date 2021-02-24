import React, { useState } from 'react';
import questions from './data';
import data from './data';
import SingleQuestion from './Question';

function App() {
  return (
    <main>
      <div className='container'>
        <h3>Question And Answers About Login</h3>
        <section>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.idi} {...question}/>
            )
          }) }
        </section>
      </div>
    </main>

  );
}

export default App;
