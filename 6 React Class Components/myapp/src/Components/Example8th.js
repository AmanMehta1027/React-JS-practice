import React from 'react';
import ReactDOM from 'react-dom/client';

export class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Hyundai",
            model: "i10",
            color: "white",
            year: 2013
        };
    }
    changeColor = () => {
        this.setState({color: "blue"});
    }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color}
                    {this.state.model}
                    from {this.state.year}.
                </p>
                <button
                    type="button"
                    onClick={this.changeColor}
                >Change color</button>
            </div>
        );
    }
}