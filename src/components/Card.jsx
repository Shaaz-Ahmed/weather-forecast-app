// card component
import React from 'react';
import { useWeather } from '../context/Weather';

const Card = ()=>{
    const weather = useWeather();
    return(
        <>
            <div className='card'>
                <img src='img.png'/>
                <h2>{weather.data?.current?.temp_c}</h2>
                <h5>Londoan, City of London, Greater London</h5>
            </div>
        </>
    );
};

export default Card;