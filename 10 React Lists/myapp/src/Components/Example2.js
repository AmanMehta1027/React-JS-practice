import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
    return <li>I am a { props.brand }</li>
}

function Garage() {
    const cars = [
        {id: 1, brand: 'Hyundai'},
        {id: 2, brand: 'Hyundai'}
    ];
    return (
        <>
            <h1>Who livees in my garage?</h1>
            <ul>
                {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
            </ul>
        </>
    );
}