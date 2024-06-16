import React from 'react';
import ReactDOM from 'react-dom/client';

export class Car extends React.Component {
    render() {
        return <h2>I am a {this.props.color} Car!</h2>;
    }
}

