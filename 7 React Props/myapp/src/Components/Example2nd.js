import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
}

export function Garage() {
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car brand="Ford" />
        </>
    );
}