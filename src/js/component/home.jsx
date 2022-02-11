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
		<div className="text-center">
			<div
				className="container bg-dark mt-5 py-3 px-5 rounded-pill"
				style={{ width: "250px", height: "500px" }}>
				<div //Red Light
					onClick={() => {
						setRedOpacity("100");
						setYellowOpacity("25");
						setGreenOpactity("25");
					}}>
					<Light color={`danger opacity-${redOpacity}`} />
				</div>
				<div //Yellow Light
					onClick={() => {
						setRedOpacity("25");
						setYellowOpacity("100");
						setGreenOpactity("25");
					}}>
					<Light color={`warning opacity-${yellowOpacity}`} />
				</div>
				<div //Green Light
					onClick={() => {
						setRedOpacity("25");
						setYellowOpacity("25");
						setGreenOpactity("100");
					}}>
					<Light color={`success opacity-${greenOpacity}`} />
				</div>
			</div>
			<button
				className="btn btn-dark m-4"
				onClick={() => {
					setRedOpacity("100");
					setYellowOpacity("100");
					setGreenOpactity("100");
				}}>
				Turn On All Lights!!
			</button>
			<button
				className="btn btn-dark m-4"
				onClick={() => {
					setRedOpacity("25");
					setYellowOpacity("25");
					setGreenOpactity("25");
				}}>
				Switch Off Lights!!
			</button>
		</div>
	);
};

export default Home;
