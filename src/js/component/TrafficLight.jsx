import React, { useState } from "react";




export const TrafficLight = () => {

    const [redLight, setRedLight] = useState('red-light');
    const [yellowLight, setYellowLight] = useState('yellow-light');
    const [greenLight, setGreenLight] = useState('green-light');

    const handleRedLight = () => {
        if (redLight === "red-light") {
            setRedLight("red-light-glow")
            setYellowLight("yellow-light")
            setGreenLight("green-light")
        } else {
            setRedLight("red-light")
        }

    }
    const handleYellowLight = () => {
        if (yellowLight === "yellow-light") {
            setYellowLight("yellow-light-glow")
            setRedLight("red-light")
            setGreenLight("green-light")
        } else {
            setYellowLight("yellow-light")
        }
    }
    const handleGreenLight = () => {

        if (greenLight === "green-light") {
            setGreenLight("green-light-glow")
            setRedLight("red-light")
            setYellowLight("yellow-light")
        } else {
            setGreenLight("green-light")
        }
    }

    return (
        <>
            <div className="card d-flex flex-column  align-items-center bg-dark" style={{ width: "10rem" }}>
                <div className={redLight} onClick={handleRedLight}></div>
                <div className={yellowLight} onClick={handleYellowLight}></div>
                <div className={greenLight} onClick={handleGreenLight}></div>
            </div>

        </>
    )
}

