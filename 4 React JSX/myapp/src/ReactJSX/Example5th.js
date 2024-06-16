import React from 'react';
import ReactDOM from 'react-dom/client';

export const myElement = (
    <>
        <p>I am a paragraph.</p>
        <p>I am a paragraph</p>
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);