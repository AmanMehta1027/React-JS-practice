import React from 'react';
import ReactDOM from 'react-dom/client';

class Car extends React.Component {
    render() {
        return <h2>I am a Car!</h2>;
    }
}

export class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car />
            </div>
        );
    }
}
