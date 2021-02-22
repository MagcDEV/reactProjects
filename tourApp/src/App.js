import React from 'react';
import {useState, useEffect} from 'react';
import Tours from './Tours'
import './index.css';
import Loading from './Loading';

const url = 'http://course-api.netlify.app/api/react-tours-projects';

const App = () => {
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])
    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }
    return (
            <main>
                <Tours />
            </main>
    );
}

export default App;
