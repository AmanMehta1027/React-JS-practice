import React from 'react';
import ReactDOM from 'react-dom/client';

export class Car extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h2>I am a {this.props.model}!</h2>;
    }
}