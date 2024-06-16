import React from 'react';
import ReactDOM from 'react-dom/client';

export function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

const myElement = <Car brand="Ford" />;

