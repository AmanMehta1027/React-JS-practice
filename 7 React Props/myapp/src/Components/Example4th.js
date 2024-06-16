import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
    return <h2>I am a {props.brand.model }!</h2>;
}

export function Garage() {
    const carInfo = { name: "Hyundai", model: "i10" };
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car brand={ carInfo } />
        </>
    );
}