import React, { useState } from "react";
import PropTypes from "prop-types";

import Light from "./lightbulb.jsx";

const Button = (props) => {
	return (
		<div
			onClick={() => {
				props.setRedOpacity(props.redValue);
				props.setYellowOpacity(props.yellowValue);
				props.setGreenOpacity(props.greenValue);
				props.setStatus(props.statusValue);
			}}>
			<Light color={`${props.style} opacity-${props.opacity}`} />
		</div>
	);
};

Button.propTypes = {
	style: PropTypes.string,
	setRedOpacity: PropTypes.func,
	setYellowOpacity: PropTypes.func,
	setGreenOpacity: PropTypes.func,
	redValue: PropTypes.string,
	yellowValue: PropTypes.string,
	greenValue: PropTypes.string,
	opacity: PropTypes.string,
	setStatus: PropTypes.func,
	statusValue: PropTypes.bool,
};

export default Button;
