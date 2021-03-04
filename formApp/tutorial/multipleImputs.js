import React from 'react'
import {useState} from 'react'

const App = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({firsName:'', email:'', age:''})
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // dinamyc object properties
    setPerson({...person, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(person.firsName && person.email && person.age) {
      setPeople([...people, {...person, id: new Date().getTime().toString()}])
      setPerson({firsName:'', email:'', age:''})
    }

  }
  
  return <>
    <article>
      <form className="form">
        <div className="form-control">
          <label htmlFor="firsName">Name:</label>
          <input type="text"
          id='firsName'
          name='firsName'
          value={person.firsName}
          onChange={handleChange}/>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input type="text" 
          id='email' 
          name='email' 
          value={person.email}
          onChange={handleChange}/>
        </div>
        <div className="form-control">
          <label htmlFor="age">Age: </label>
          <input type="text" 
          id='age' 
          name='age' 
          value={person.age}
          onChange={handleChange}/>
        </div>
        <button type='submit' onClick={handleSubmit}>add person</button>
      </form>
      {
        people.map((person) => {
          const {id, firsName, email, age} = person;
          return (
          <div className="item" key={id}>
            <h4>{firsName}</h4>
            <p>{email}</p>
            <p>{age}</p>
          </div>
          )
      })
      }
    </article>
    </>
}

export default App;
