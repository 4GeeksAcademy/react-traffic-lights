import React, { useState } from "react";
import redLight from '../../img/light-pics/taxi-red.png';
import yellowLight from '../../img/light-pics/taxi-yellow.gif';
import greenLight from '../../img/light-pics/taxi-green.gif';

import { TrafficLight } from "./TrafficLight";

const Home = () => {
	const [lightColor, setLightColor] = useState(redLight);

	const handleTraficImage = (color) => {
		// 
		if (color == 'red-light') setLightColor(redLight);
		if (color == 'yellow-light') setLightColor(yellowLight);
		if (color == 'green-light') setLightColor(greenLight);
		console.log(color)
	}
	return (
		<>
			<div className="street-image" style={{ background: `url(${lightColor})` }}>
				<div className="d-flex flex-column align-items-center w-100 h-100">
					<header className="mt-3">
						<div className="p-5 text-center bg-light rounded back-opacity">
							<h1 className="mb-3">SIMPLE REACT TRAFFIC LIGHTS</h1>
							<h4 className="mb-3">Safety brings first aid to the uninjured!</h4>
						</div>
					</header>
					<main className="mt-5">
						<TrafficLight handleTraficImage={handleTraficImage} />
					</main>

					<article className="bg-light p-3 mt-5 rounded back-opacity">Made with <span><i class="bi bi-peace-fill"></i></span> and <span><i class="bi bi-heart-fill"></i></span> by <a href="https://github.com/arroyostackhttps://github.com/arroyostack" className="text-warning" target="blank">arroyostack</a></article>

				</div>
			</div>


		</>

	);
};

export default Home;
