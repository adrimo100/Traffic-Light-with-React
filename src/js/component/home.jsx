import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Light from "./lightbulb.jsx";
import Button from "./button.jsx";

//create your first component
const Home = () => {
	const [redOpacity, setRedOpacity] = useState("25");
	const [yellowOpacity, setYellowOpacity] = useState("25");
	const [greenOpacity, setGreenOpacity] = useState("25");

	const [status, setStatus] = useState(false);

	return (
		<div className="text-center">
			<div
				className="container bg-dark mt-5 py-3 px-5 rounded-pill"
				style={{ width: "250px", height: "500px" }}>
				<Button
					style={`danger opacity-${redOpacity}`}
					opacity={redOpacity}
					setRedOpacity={setRedOpacity}
					setYellowOpacity={setYellowOpacity}
					setGreenOpacity={setGreenOpacity}
					redValue="100"
					yellowValue="25"
					greenValue="25"
				/>
				<Button
					style={`warning opacity-${yellowOpacity}`}
					opacity={yellowOpacity}
					setRedOpacity={setRedOpacity}
					setYellowOpacity={setYellowOpacity}
					setGreenOpacity={setGreenOpacity}
					redValue="25"
					yellowValue="100"
					greenValue="25"
				/>
				<Button
					style={`success opacity-${greenOpacity}`}
					opacity={greenOpacity}
					setRedOpacity={setRedOpacity}
					setYellowOpacity={setYellowOpacity}
					setGreenOpacity={setGreenOpacity}
					redValue="25"
					yellowValue="25"
					greenValue="100"
				/>
			</div>
			<button
				className="btn btn-dark m-4"
				onClick={() => {
					setRedOpacity("100");
					setYellowOpacity("100");
					setGreenOpacity("100");
				}}>
				Turn On All Lights!!
			</button>
			<button
				className="btn btn-dark m-4"
				onClick={() => {
					setRedOpacity("25");
					setGreenOpacity("25");
				}}>
				Blink Yellow!!
			</button>
			<button
				className="btn btn-dark m-4"
				onClick={() => {
					setRedOpacity("25");
					setYellowOpacity("25");
					setGreenOpacity("25");
				}}>
				Switch Off Lights!!
			</button>
		</div>
	);
};

export default Home;
