import React, { useState, useEffect } from "react";

//include images into your bundle
import Button from "./button.jsx";

let yellowAux = "25";

//create your first component
const Home = () => {
	const [redOpacity, setRedOpacity] = useState("25");
	const [yellowOpacity, setYellowOpacity] = useState("25");
	const [greenOpacity, setGreenOpacity] = useState("25");

	const [status, setStatus] = useState(false);
	const [intervalID, setIntervalID] = useState(0);

	useEffect(() => {
		if (status) {
			setYellowOpacity("25");
			setIntervalID(
				setInterval(() => {
					yellowAux = yellowAux == "100" ? "25" : "100";

					setYellowOpacity(yellowAux);
				}, 1000)
			);
		} else {
			clearInterval(intervalID);
		}
	}, [status]);

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
					setStatus={setStatus}
					statusValue={false}
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
					setStatus={setStatus}
					statusValue={false}
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
					setStatus={setStatus}
					statusValue={false}
					redValue="25"
					yellowValue="25"
					greenValue="100"
				/>
			</div>
			<button
				className="btn btn-dark m-4"
				onClick={() => {
					setStatus(false);
					setRedOpacity("100");
					setYellowOpacity("100");
					setGreenOpacity("100");
					setStatus(false);
				}}>
				Turn On All Lights!!
			</button>
			<button
				className="btn btn-dark m-4"
				onClick={() => {
					setStatus(true);
					setRedOpacity("25");
					setGreenOpacity("25");
				}}>
				Blink Yellow!!
			</button>
			<button
				className="btn btn-dark m-4"
				onClick={() => {
					setStatus(false);
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
