import React from 'react';
import {useState, useEffect} from 'react';
import Tours from './Tours'
import './index.css';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])

    const deleteTour = (id) => {
        return setTours(tours.filter((tour) => tour.id !== id))
    }

    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTours();
    }, [])

    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }
    if(tours.length === 0) {
        return (
            <main>
                <div className='title'>
                    <h2>no tours left</h2>
                    <button className='btn' onClick={fetchTours}>refresh</button>
                </div>
            </main>
        )
    }
    return (
            <main>
                <Tours tours={tours} deleteTour={deleteTour}/>
            </main>
    );
}

export default App;
