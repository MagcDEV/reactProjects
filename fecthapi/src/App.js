import React, { useState, useEffect } from 'react';
import './index.css';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users)
    };

    const removeItem = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }

    useEffect(() => {
        getUsers();
    }, []);

    return <>
        <h3>Github Users</h3>
        <ul className='users'>
            {users.map((user) => {
                const {id, login, avatar_url, html_url} = user;
                return (
                    <li key={id}>
                        <img src={avatar_url} alt={login} />
                        <div>
                            <h4>{login}</h4>
                            <a href={html_url}>profile</a>
                            <button className='btn' onClick={() => removeItem(id)}>Remove</button>
                        </div>
                    </li>
                )
            })};
        </ul>
    </>
};

export default UseEffectFetchData;
