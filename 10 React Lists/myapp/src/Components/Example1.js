import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
    return <li>I am a { props.brand }</li>;
}

export function Garage() {
    const cars = ['i10', 'Creta'];
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <ul>
                {cars.map((car) => <Car brand={car}/>)}
            </ul>
        </>
    );
}