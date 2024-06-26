import React from 'react';
import ReactDOM from 'react-dom/client';

export function Football() {
    const shoot = (a) => {
        alert(a);
    }

    return (
        <button onClick={() => shoot("Goal!")}>Take the shot!</button>     
    );
}