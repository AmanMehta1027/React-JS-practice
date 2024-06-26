import ReactDOM from "react-dom/client";
import React, { useState } from "react";

export function FavoriteColor() {
    const [color, setColor] = useState("red");

    return (
        <>
            <h1>My favorite color is {color}!</h1>


            <button
                type="button"
                onClick={() => setColor("blue")}
            > Blue</button >

            <button 
                type="button"
                onClick={() => setColor("red")}
            > Red </button>

            <button
                type="button"
                onClick = {() => setColor("pink")}
            > Pink </button >

            <button
                type="button"
                onClick = {() => setColor("green")}
            > Green </button >
        
        </>
    );
}


