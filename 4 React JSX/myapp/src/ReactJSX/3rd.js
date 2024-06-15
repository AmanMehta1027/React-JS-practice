import React from 'react';
import ReactDOM from 'react-dom/client';

export const myElement = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);