import React from 'react';
import ReactDOM from 'react-dom/client';

export const myElement = (
    <div>
        <h1>I am a Header.</h1>
        <h1>I am a Header too.</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);