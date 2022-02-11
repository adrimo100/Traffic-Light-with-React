import React, { useState } from "react";
import propTypes from "prop-types";

const Light = (props) => {
	return (
		<button
			className={`btn rounded-circle bg-${props.color} my-1 mx-0`}
			style={{ width: "150px", height: "150px" }}></button>
	);
};

Light.propTypes = {
	color: propTypes.string,
};

export default Light;
