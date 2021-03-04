import React from 'react'
import {useState} from 'react'

const App = () => {
  const [firsName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firsName && email) {
      const person = {id: new Date().getTime().toString(),
      firsName, email};
      setPeople([...people, person])
      setFirstName('')
      setEmail('')
    } else {
      console.log('empy values')
    }
  };
  return <>
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firsName">Name:</label>
          <input type="text"
          id='firsName'
          name='firsName'
          value={firsName}
          onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input type="text" 
          id='email' 
          name='email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <button type='submit'>add person</button>
      </form>
      {
        people.map((person) => {
          const {id, firsName, email} = person;
          return (
          <div className="item" key={id}>
            <h4>{firsName}</h4>
            <p>{email}</p>
          </div>
          )
      })
      }
    </article>
    </>
}

export default App;
