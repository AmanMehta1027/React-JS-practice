import React from 'react';
import ReactDOM from 'react-dom/client';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    componentsDidMount() {
        setTimeout(() => {
            this.setState({fovoritecolor: "yellow"})
        }, 1000)
    }
    render() {
        return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
    }
}