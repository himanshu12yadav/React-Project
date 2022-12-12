import React from 'react';
import { useState } from 'react';
import Tour from './Tour/tour.components';

const Tours = ({ touristPlace }) => {

    const [tours, setTours] = useState(touristPlace);

    const removeTour = (id) => {
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
    }

    return (
        <section>
            <div className='title'>
                <h2>our Tours</h2>
                <div className='underline'></div>
                </div>
            <div>
                {
                    tours.map(place => <Tour key={place.id} place={place} removeTour={removeTour} />)
                }
            </div>
        </section>

    )
};

export default Tours;