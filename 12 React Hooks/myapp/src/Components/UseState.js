import {useState} from "react";


export function Car1(){
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");

    return(
        <>
            <h1> My {brand}</h1>
            <p>
                it is a {color} {model} from {year}.
            </p>
        </>
    )
}