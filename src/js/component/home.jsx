import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Light from "./lightbulb.jsx";

//create your first component
const Home = () => {
	const [redOpacity, setRedOpacity] = useState("25");
	const [yellowOpacity, setYellowOpacity] = useState("25");
	const [greenOpacity, setGreenOpactity] = useState("25");

	return (
		<div className="d-flex justify-content-center align-items-center">
			<div
				className="container bg-dark mt-5 py-3 px-5"
				style={{ width: "250px", height: "500px" }}>
				<div //Red Light
					onClick={() => {
						setRedOpacity("100");
						setYellowOpacity("25");
						setGreenOpactity("25");
						console.log("red was clicked");
					}}>
					<Light color={`danger opacity-${redOpacity}`} />
				</div>
				<div //Yellow Light
					onClick={() => {
						setRedOpacity("25");
						setYellowOpacity("100");
						setGreenOpactity("25");
						console.log("red was clicked");
					}}>
					<Light color={`warning opacity-${yellowOpacity}`} />
				</div>
				<div //Gree Light
					onClick={() => {
						setRedOpacity("25");
						setYellowOpacity("25");
						setGreenOpactity("100");
						console.log("red was clicked");
					}}>
					<Light color={`success opacity-${greenOpacity}`} />
				</div>
			</div>
		</div>
	);
};

export default Home;
