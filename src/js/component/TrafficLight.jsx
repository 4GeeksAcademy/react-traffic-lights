import React, { useState } from "react";

// Create and destructure light initial values.
const lightColors = ['red-light', 'yellow-light', 'green-light'];
const [red, yellow, green] = lightColors;

// Create and destructure glow values.
const glowColors = ['red-light-glow', 'yellow-light-glow', 'green-light-glow'];
const [redGlow, yellowGlow, greenGlow] = glowColors;

export const TrafficLight = ({ handleTraficImage }) => {
    // State of lights
    const [redLight, setRedLight] = useState(redGlow);
    const [yellowLight, setYellowLight] = useState(yellow);
    const [greenLight, setGreenLight] = useState(green);

    // Form onSubmit function.
    const handleLight = (event) => {
        // Prevent the browser from refresh.
        event.preventDefault();
        // Reset lights classes.
        setRedLight(red);
        setYellowLight(yellow);
        setGreenLight(green);

        // Find which light was clicked and add new class.
        if (event.nativeEvent.submitter.className === red) setRedLight(redGlow);

        if (event.nativeEvent.submitter.className === yellow) setYellowLight(yellowGlow);

        if (event.nativeEvent.submitter.className === green) setGreenLight(greenGlow);

        // Send information to Home component with the light is currently on.
        handleTraficImage(event.nativeEvent.submitter.className)

    };



    return (
        <>
            <div className="" style={{ width: "10rem" }}>
                <form action="" onSubmit={handleLight} className="bg-dark card d-flex flex-column  align-items-center">
                    <div className="m-2">
                        <button className={redLight} ></button>
                    </div>
                    <div className="m-2">
                        <button className={yellowLight} ></button>
                    </div>
                    <div className="m-2">
                        <button className={greenLight} ></button>
                    </div>
                </form>

            </div>

        </>
    )
};

