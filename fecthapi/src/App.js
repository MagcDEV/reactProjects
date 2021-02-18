import React, { useState, useEffect } from 'react';
import './index.css';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
    const [users, setUsers] = useState([])


    getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users)


    }
  return <>
      <h3>Github Users</h3>
         </>;
};

export default UseEffectFetchData;
